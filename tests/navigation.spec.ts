import { test, expect } from "@playwright/test";

test("desktop dropdowns open on hover and stay usable across pointer movement", async ({ page }) => {
  // Hybrid devices can report no primary hover capability while a mouse is present.
  await page.addInitScript(() => {
    const original = window.matchMedia.bind(window);
    window.matchMedia = (query) => query === "(hover: hover)"
      ? Object.assign(original(query), { matches: false })
      : original(query);
  });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/guala-closures");
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  for (const name of ["Resources", "Knowledge Hub", "People"]) {
    const trigger = nav.getByRole("button", { name, exact: true });
    await trigger.hover();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    const dropdown = page.locator(".nav-dropdown");
    await expect(dropdown).toBeVisible();
    await expect(dropdown).toHaveCSS("opacity", "1");
    await dropdown.getByRole("link").last().hover();
    await expect(dropdown).toBeVisible();
  }
  await nav.getByRole("button", { name: "Knowledge Hub", exact: true }).hover();
  await page.locator(".nav-dropdown").getByRole("link", { name: "Guala Closures" }).click();
  await expect(page).toHaveURL(/\/guala-closures\/?$/);
  const trigger = nav.getByRole("button", { name: "Resources", exact: true });
  await trigger.focus();
  await trigger.press("ArrowDown");
  await expect(page.locator(".nav-dropdown a").first()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await expect(page.locator(".nav-dropdown")).toHaveCount(0);
});

test("touch navigation dropdowns open and close by tapping", async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const page = await context.newPage();
  await page.goto("/guala-closures");
  await page.getByRole("button", { name: "Open menu", exact: true }).tap();
  const trigger = page.getByRole("button", { name: "Resources", exact: true });
  await trigger.tap();
  await expect(page.locator(".nav-dropdown")).toBeVisible();
  await trigger.tap();
  await expect(page.locator(".nav-dropdown")).toHaveCount(0);
  await context.close();
});
