# MCL Connect

A responsive Metal Crowns Limited intranet built with Next.js, TypeScript and Tailwind CSS. It uses MCL blue (#1c4587) and public/logo.png. Company context and mission were informed by https://www.metalcrowns.co.ke/.

## Run locally

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000.

```sh
pnpm typecheck
pnpm build
pnpm start
```

The production build exports a static website to `out/`. It can be served on any static host. There is no backend, server-side authentication, API, or email delivery.

## Demo access

The workspace opens directly without an email, password or sign-in prompt. Old `/sign-in` links redirect into the workspace. Requests and RSVPs remain in localStorage.

Run the browser interaction checks with `pnpm test:e2e`. The test configuration uses installed Google Chrome on Windows; set `CHROME_PATH` to your Chrome executable on another system.

## Structure

```text
app/
  page.tsx                   Home route
  resources/[slug]/          Eight resource libraries
  knowledge-hub/[slug]/      Six knowledge categories
  people/[group]/            Five people sections
  events/, help/, learning/, news/, requests/
  sign-in/                   Legacy redirect into the workspace
  data/                      Directory, navigation, articles and library content
  styles/                    Shared styles and responsive portal design
components/
  auth/                      Workspace shell
  layout/                    Header, dropdown navigation, headings and footer
  home/                      Homepage and search centre
  directory/                 Contact cards, filters and team views
  resources/                 Resource catalogues, previews and downloads
  events/, help/, learning/, news/, requests/
  ui/                        Accessible shared dialog
hooks/                       Browser-local records and storage feedback
lib/                         Download utilities
tests/                       Browser interaction and responsive checks
public/                      Logo and illustrative photography
```

Edit source under these folders. `out/` and `.next/` are generated build output and should not be edited.

## Features

- MCL navigation with working Resources, Knowledge Hub and People dropdowns; Events is a direct link.
- Expanded homepage with leadership messaging, culture, illustrated content and Help Centre links.
- Comfortable body text, clear borders, hover effects and responsive layouts.
- Search centre with category tabs, live filtering, resource previews and pagination.
- Knowledge Hub and Learning Centre with readable working guides and training briefs.
- MCL directory with the supplied account register: staff, shared mailboxes and distribution lists, using only supplied Guala email addresses.
- News, employee directory, document categories, brand assets and business-card contact sheets.
- Department and contact-type filtering, article dialogs and downloadable text guides.
- Leave and IT requests, colleague appreciation, request history and event RSVPs.
- Browser-local persistence using localStorage; clear browser site data to reset.
- Mobile navigation, form validation, help FAQs and feedback messages.
- Hover effects, entrance animations and support for reduced motion preferences.

Directory names, departments and emails were transcribed from the supplied screenshots in `app/data/directory.ts`. The register contains 36 account rows and four distribution lists; Alice is retained from the earlier staff list without an inferred email. Shared entries identify their listed contacts. Blank departments and missing emails are explicitly marked as not provided. The newer register supplies Justin Nyukuri and Arnold Kipsang as the full names; earlier spellings remain searchable in notes. Only supplied Guala email addresses are retained; legacy email addresses have been removed. License types and mailbox usage are not included in the staff directory.

Directory order follows the requested priority: Gurdip Singh, John Karari, Siddharth Naik, Chike Asoh and Brian Okech, then the remaining team, shared mailboxes and distribution lists. This is a display order, not an inferred corporate reporting hierarchy. Executive and department-head appointments are not inferred. The proposed CEO message is explicitly awaiting leadership approval; no CEO identity is assigned.

Dates, news, events and training content are illustrative. Resource documents are working guides and preparation worksheets, not approved company policies. Regulatory pages contain review checklists rather than unverified legal claims, and no industry figures are fabricated. Photos are illustrative images from Unsplash and generated product scenes, not MCL facility photography. Product asset paths and generation prompts are documented in `docs/image-assets.md`.
