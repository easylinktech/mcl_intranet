import { test, expect } from "@playwright/test";

test("Guala information is reachable through search and fits mobile screens", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("textbox", { name: "Search centre", exact: true }).fill("Guala Closures");
  await page.locator(".search-results").getByRole("link", { name: /Guala Closures/ }).click();
  await expect(page).toHaveURL(/\/guala-closures\/?$/);
  await expect(page.getByRole("heading", { name: "Guala Closures", exact: true })).toBeVisible();
  await expect(page.locator(".guala-products article")).toHaveCount(5);
  expect(await page.locator(".guala-logo-panel img").evaluate((node) => {
    const image = node as HTMLImageElement;
    return image.complete && image.naturalWidth > 0;
  })).toBe(true);
  await expect(page.getByRole("link", { name: "Explore the Crown Division's beverage solutions" })).toHaveAttribute("href", "https://www.gualaclosures.com/products/above-beverages");
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  await page.goto("/knowledge-hub");
  await page.locator(".guala-hub-link").click();
  await expect(page).toHaveURL(/\/guala-closures\/?$/);
});
