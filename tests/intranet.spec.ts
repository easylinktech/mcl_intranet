import { test, expect } from "@playwright/test";

test('scroll reveals artwork fills the right column and respects reduced motion',async({page})=>{
 await page.setViewportSize({width:1600,height:1000});
 await page.goto('/');
 const art=page.locator('.closure-artwork');
 await art.scrollIntoViewIfNeeded();
 await expect(art).toHaveClass(/is-in-view/);
 await expect(art).toHaveAttribute('aria-hidden','true');
 await expect(art).toHaveText('');
 await expect(art.locator('.closure-orbit')).toHaveCSS('animation-play-state','running');
 const column=await page.locator('.home-updates>.resource-column').boundingBox();
 const graphic=await art.boundingBox();
 expect(graphic!.x).toBeGreaterThanOrEqual(column!.x);
 expect(graphic!.width).toBeLessThanOrEqual(column!.width+1);
 await page.emulateMedia({reducedMotion:'reduce'});
 await expect(art.locator('.closure-orbit')).toHaveCSS('animation-name','none');
 await page.locator('.home-updates').screenshot({path:'test-results/closure-artwork.png',animations:'disabled'});
});

test("home layout has centred navigation, no gutters and alternating sections", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1600, height: 1000 });
  await page.goto("/");
  await expect(
    page.getByText("Good morning, IT user", { exact: true }),
  ).toBeVisible();
  const nav = await page
    .getByRole("navigation", { name: "Main navigation" })
    .boundingBox();
  expect(Math.abs(nav!.x + nav!.width / 2 - 800)).toBeLessThan(2);
  for (const selector of [
    ".portal-header",
    ".workspace-toolbar",
    ".home-main",
    ".portal-footer",
  ]) {
    const box = await page.locator(selector).boundingBox();
    expect(box!.x, selector).toBe(0);
    expect(box!.width, selector).toBe(1600);
  }
  for (const selector of [".product-story", ".culture-section"])
    expect(
      await page
        .locator(selector)
        .evaluate((el) => getComputedStyle(el).backgroundColor),
    ).toBe("rgb(255, 255, 255)");
  await expect(page.locator(".header-account")).toHaveText("IT");
  const welcome = await page.locator(".reference-welcome").boundingBox();
  expect(welcome!.x).toBeLessThan(160);
  expect(welcome!.width).toBeGreaterThan(500);
  expect(
    await page
      .locator(".hero-opening")
      .evaluate((el) => getComputedStyle(el, "::before").backgroundImage),
  ).toContain("plastic-closures.png");
  const hero = await page.locator(".hero-opening").boundingBox();
  const updates = await page.locator(".home-updates").boundingBox();
  expect(hero!.y + hero!.height).toBeGreaterThanOrEqual(1000);
  expect(updates!.y).toBeGreaterThanOrEqual(hero!.y + hero!.height);
  expect(
    await page
      .locator(
        ".hero-opening .home-news,.hero-opening .important-links,.hero-opening .home-events",
      )
      .count(),
  ).toBe(0);
  await page.screenshot({
    path: "test-results/hero-background.png",
    animations: "disabled",
  });
});

test.beforeEach(async ({ context, page }, info) => {
  if (!info.title.startsWith("scroll reveals"))
    await page.emulateMedia({ reducedMotion: "reduce" });
  if (!info.title.startsWith("sign-in flow"))
    await context.addInitScript(() =>
      sessionStorage.setItem(
        "mcl-session",
        JSON.stringify({ email: "it@metalcrowns.com" }),
      ),
    );
});

test("scroll reveals animate once and respect reduced motion", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".scroll-motion")).toHaveAttribute(
    "data-motion",
    "ready",
  );
  await expect(
    page.getByText("Hello, Debra. Welcome to your MCL.", { exact: true }),
  ).toHaveCount(0);
  await expect(
    page.getByText("PRECISION IN EVERY CLOSURE. PEOPLE AT THE HEART.", {
      exact: true,
    }),
  ).toHaveCount(0);
  const section = page.locator(".ceo-section");
  await expect(section).not.toHaveClass(/is-revealed/);
  await section.scrollIntoViewIfNeeded();
  await expect(section).toHaveClass(/is-revealed/);
  await expect(section).toHaveCSS("opacity", "1");
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(section).toHaveClass(/is-revealed/);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".scroll-motion")).not.toHaveAttribute(
    "data-motion",
    "ready",
  );
  await expect(page.locator(".home-help-section")).toHaveCSS("opacity", "1");
  expect(
    await page.locator(".home-product-tile img").getAttribute("src"),
  ).not.toBe(await page.locator(".product-story>img").getAttribute("src"));
  await expect(page.locator(".ceo-image img")).toHaveAttribute(
    "src",
    "/images/crown-production.png",
  );
});

test("sign-in flow: email-only access, session and sign out", async ({
  page,
}) => {
  await page.goto("/people/staff-directory");
  await expect(page).toHaveURL(/sign-in\?next=/);
  await expect(page.locator('input[type="password"]')).toHaveCount(0);
  await expect(page.getByRole("button", { name: /password/i })).toHaveCount(0);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page).toHaveURL(/sign-in\?next=/);
  await page.getByLabel("Email address", { exact: true }).fill("visitor@example.com");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page).toHaveURL(/people\/staff-directory/);
  await expect(
    page.getByRole("heading", { name: "All People", exact: true }),
  ).toBeVisible();
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "All People", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Sign out", exact: true }).click();
  await expect(page).toHaveURL(/\/sign-in/);
  await page.goto("/");
  await expect(page).toHaveURL(/\/sign-in/);
  await page.screenshot({
    path: "test-results/sign-in-desktop.png",
    fullPage: true,
    animations: "disabled",
  });
  await page.setViewportSize({ width: 390, height: 844 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: "test-results/sign-in-mobile.png",
    fullPage: true,
    animations: "disabled",
  });
});

test("hover dropdowns open without clicking and priority people appear first", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1600, height: 1000 });
  await page.goto("/");
  await page.getByRole("button", { name: "Resources", exact: true }).hover();
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  await expect(
    nav.getByRole("link", { name: "Policies", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "People", exact: true }).hover();
  await expect(nav.locator(".nav-dropdown a").first()).toHaveText("All People");
  await nav.getByRole("link", { name: "All People", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "All People", exact: true }),
  ).toBeVisible();
  const names = [
    "Gurdip Singh",
    "John Karari",
    "Siddharth Naik",
    "Chike Asoh",
    "Brian Okech",
  ];
  for (let i = 0; i < names.length; i++)
    await expect(
      page.locator(".person-card").nth(i).getByRole("heading"),
    ).toHaveText(names[i]);
  await page.screenshot({
    path: "test-results/people-desktop.png",
    fullPage: true,
    animations: "disabled",
  });
  await page.goto("/");
  await expect(page.locator(".ceo-image img")).toBeVisible();
  expect(
    await page
      .locator(".ceo-image img")
      .evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0),
  ).toBe(true);
  await page.screenshot({
    path: "test-results/home-desktop.png",
    fullPage: true,
    animations: "disabled",
  });
});

test("homepage sections, branding and navigation without platform chrome", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByText("Good morning, IT user", { exact: true }),
  ).toBeVisible();
  expect(
    await page
      .locator(".portal-header")
      .evaluate((el) => getComputedStyle(el).backgroundColor),
  ).toBe("rgb(28, 69, 135)");
  expect(
    await page
      .locator(".workspace-toolbar")
      .evaluate((el) => getComputedStyle(el).backgroundColor),
  ).toBe("rgb(255, 255, 255)");
  await expect(
    page.getByRole("img", { name: "Metal Crowns Limited logo" }),
  ).toBeVisible();
  await expect(
    page.getByText("MESSAGE FROM THE CEO", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Our culture. Our everyday choices." }),
  ).toBeVisible();
  await expect(
    page.getByText("MCL HELP CENTRE", { exact: true }),
  ).toBeVisible();
  await expect(page.locator(".suite-bar,.utility-rail")).toHaveCount(0);
  expect(await page.locator("body").innerText()).not.toMatch(/\bdemo\b/i);
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
    "href",
    "/logo.png",
  );
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  await expect(
    nav.getByRole("link", { name: "Events", exact: true }),
  ).toBeVisible();
  await expect(
    nav.getByRole("button", { name: "Events", exact: true }),
  ).toHaveCount(0);
  await page.getByRole("button", { name: "Resources", exact: true }).click();
  for (const name of [
    "Policies",
    "HR Forms",
    "Finance Forms",
    "Marketing",
    "Operations",
    "Templates",
    "Brand Assets",
    "Business Cards",
  ])
    await expect(nav.getByRole("link", { name, exact: true })).toBeVisible();
  await nav.getByRole("link", { name: "Finance Forms", exact: true }).click();
  await expect(page).toHaveURL(/\/resources\/finance-forms/);
  await expect(
    page.getByRole("heading", { name: "Expense claim worksheet" }),
  ).toBeVisible();
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "Payment request checklist" }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Knowledge Hub", exact: true })
    .click();
  for (const name of [
    "Client Onboarding",
    "Product Knowledge",
    "Corporate Documents",
    "Industry Statistics",
    "Regulatory Guidelines",
    "Staff Resources",
  ])
    await expect(nav.getByRole("link", { name, exact: true })).toBeVisible();
  await nav
    .getByRole("link", { name: "Product Knowledge", exact: true })
    .click();
  await expect(page).toHaveURL(/\/knowledge-hub\/product-knowledge/, {
    timeout: 30000,
  });
  await expect(
    page.getByRole("heading", { name: "Metal crown caps", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "People", exact: true }).click();
  for (const name of [
    "Board of Directors",
    "Executive Management",
    "Department Heads",
    "Functional Teams",
    "All People",
  ])
    await expect(nav.getByRole("link", { name, exact: true })).toBeVisible();
});

test("directory seniority, email copy, contact types and direct search", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/people/staff-directory");
  await expect(page.getByText("41 contacts", { exact: true })).toBeVisible();
  await expect(
    page.locator(".person-card").first().getByRole("heading"),
  ).toHaveText("Gurdip Singh");
  await expect(
    page.locator(".person-card").nth(1).getByRole("heading"),
  ).toHaveText("John Karari");
  const search = page.getByRole("textbox", { name: "Search people directory" });
  await search.fill("dAbwao@gualaclosures.com");
  await expect(
    page.getByRole("heading", { name: "Debra Abwao" }),
  ).toBeVisible();
  await page
    .getByRole("button", {
      name: "Copy guala email for Debra Abwao",
      exact: true,
    })
    .click();
  await expect
    .poll(() => page.evaluate(() => navigator.clipboard.readText()))
    .toBe("dAbwao@gualaclosures.com");
  await search.fill("");
  await page
    .getByRole("combobox", { name: "Filter by department" })
    .selectOption("Maintenance");
  await expect(page.getByText("2 contacts", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Nathan Githinji" }),
  ).toBeVisible();
  await page
    .getByRole("combobox", { name: "Filter by department" })
    .selectOption("All departments");
  await page
    .getByRole("button", { name: "Distribution lists", exact: true })
    .click();
  await expect(page.getByText("4 contacts", { exact: true })).toBeVisible();
  await page.goto("/people/staff-directory?q=Kipsang%20Arnold");
  await expect(
    page.getByRole("heading", { name: "Arnold Kipsang" }),
  ).toBeVisible();
  await page.goto("/people/board-of-directors");
  await expect(
    page.getByRole("heading", { name: "Gurdip Singh" }),
  ).toBeVisible();
  await page.goto("/people/department-heads");
  await expect(
    page.getByRole("heading", { name: "Department appointments" }),
  ).toBeVisible();
});

test("search centre, policy downloads, brand assets and business cards", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("tab", { name: "MCL Team", exact: true }).click();
  await page.getByRole("textbox", { name: "Search centre" }).fill("Myra");
  await page
    .locator(".resource-card")
    .filter({ hasText: "Myra Minayo" })
    .click();
  await expect(page).toHaveURL(/people\/staff-directory\?q=Myra/);
  await expect(
    page.getByRole("heading", { name: "Myra Minayo" }),
  ).toBeVisible();
  await page.goto("/resources/policies");
  await page.getByRole("button", { name: "Open", exact: true }).first().click();
  await expect(page.getByRole("dialog")).toBeVisible();
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download guide" }).click();
  expect((await download).suggestedFilename()).toBe(
    "workplace-safety-guidelines.txt",
  );
  await page.keyboard.press("Escape");
  await page.goto("/resources/brand-assets");
  await page.getByRole("button", { name: "Open", exact: true }).first().click();
  await expect(
    page.getByRole("link", { name: "Download logo" }),
  ).toHaveAttribute("href", "/logo.png");
  await page.keyboard.press("Escape");
  await page.goto("/resources/business-cards");
  await page.getByRole("button", { name: "Open", exact: true }).click();
  await page
    .getByRole("combobox", { name: "Colleague" })
    .selectOption("Brian Okech");
  await expect(
    page.getByRole("heading", { name: "Brian Okech" }),
  ).toBeVisible();
});

test("request history and RSVP persist across routes and reloads", async ({
  page,
}) => {
  await page.goto("/requests?type=leave");
  await page.getByLabel("Start date").fill("2026-11-02");
  await page.getByLabel("End date").fill("2026-11-04");
  await page.getByLabel("Details").fill("Family holiday");
  await page.getByRole("button", { name: "Save request", exact: true }).click();
  await expect(
    page.getByText(/Annual leave: 2026-11-02 to 2026-11-04/),
  ).toBeVisible();
  await page.goto("/events");
  await page.getByRole("button", { name: "Count me in" }).first().click();
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Attending · Cancel" }),
  ).toBeVisible();
  await page.goto("/requests");
  await expect(page.getByText(/Family holiday/)).toBeVisible();
  await page.goto("/learning");
  await page.getByRole("button", { name: /Safety induction/ }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await page.goto("/help");
  await page
    .getByRole("button", {
      name: "Who can help with a computer or access issue?",
    })
    .click();
  await expect(
    page.getByText(/Contact ICT through the staff directory/),
  ).toBeVisible();
  await page.goto("/news");
  await page
    .getByRole("button", { name: /Building a stronger tomorrow/ })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("mobile navigation, readable text and layouts have no horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const url of [
    "/",
    "/resources",
    "/resources/finance-forms",
    "/knowledge-hub/product-knowledge",
    "/people/staff-directory",
    "/help",
    "/events",
    "/news",
  ]) {
    await page.goto(url);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      url,
    ).toBe(true);
    expect(await page.locator("body").innerText()).not.toMatch(/\bdemo\b/i);
  }
  await page.goto("/");
  expect(
    await page
      .locator(".product-story p")
      .evaluate((el) => parseFloat(getComputedStyle(el).fontSize)),
  ).toBeGreaterThanOrEqual(15);
  await page.screenshot({
    path: "test-results/home-mobile.png",
    fullPage: true,
    animations: "disabled",
  });
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("button", { name: "Resources", exact: true }).click();
  await page.getByRole("link", { name: "HR Forms", exact: true }).click();
  await expect(page).toHaveURL(/resources\/hr-forms/);
  await page.setViewportSize({ width: 1600, height: 1000 });
  await page.goto("/");
  await page.screenshot({
    path: "test-results/home-desktop.png",
    fullPage: true,
    animations: "disabled",
  });
});
