# UjangDev Portfolio

A polished, responsive one-page portfolio built with Astro and Tailwind CSS, prepared for static deployment to Vercel. The visual direction is dark editorial with electric-blue and mint accents. The Hero uses a large headline, concise service positioning, clear calls to action, and a profile panel that does not pretend to be a real portrait.

## Important source-content note

The existing site at `https://portfolio-ujang.vercel.app/` exposed only the page title (`UjangDev — Front-End Developer`) through the available retrieval path. Its body text, personal portrait, project screenshots, and profile links could not be retrieved. This package therefore uses the verified brand/title plus honest, clearly labeled concept-project examples. It does **not** claim those concepts are client work, and it does not fabricate testimonials, client names, metrics, awards, or a personal photo.

Before using the site to pitch clients, replace `[ISI DI SINI]` fields in `src/data/site.ts` with verified contact/profile details and replace concept projects with actual work when you have the correct project details and screenshots. The layout and interactions are implemented; personal-content verification is still required.

## Requirements

- Node.js 20.3+ (Node 22 LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

## Edit content

Most content is in `src/data/site.ts`. Update the profile details, email, links, bio, stack, services, and projects there. Keep project labels accurate: use `Personal project` for self-initiated work and `Concept project` for speculative explorations. Do not publish unverified results.

## Add the real portrait and project screenshots

1. Create `public/images/`.
2. Add optimized WebP or AVIF images with explicit dimensions.
3. Set `photo: "/images/ujang.webp"` in `src/data/site.ts`.
4. Set each project's `image` to a local path such as `"/images/dashboard.webp"`.

The hero portrait loads with high priority; project images load lazily. Until the actual portrait is available, the hero shows a designed profile panel rather than a stock/fabricated headshot.

## Contact form

The form validates name, email, and message. It reports success only when the configured endpoint returns a successful HTTP response.

1. Configure a serverless endpoint or form provider that accepts JSON `POST` requests.
2. Set `PUBLIC_CONTACT_ENDPOINT` in `.env` and in Vercel Project Settings → Environment Variables.
3. Make sure the endpoint validates input, handles spam/rate limiting, and returns a 2xx response only after accepting the message.
4. Test valid, invalid, failed, and successful submissions after deployment.

Without an endpoint, the form will offer a mailto fallback only if a valid email address has been configured. It will not claim a message was sent when it was not. `PUBLIC_` variables are exposed in client output, so never place a secret API key there.

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Import the repository in Vercel.
3. Select Astro as the framework preset.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Add `PUBLIC_CONTACT_ENDPOINT` if using a form endpoint.
7. Deploy and test the production site.

The canonical domain is currently `https://portfolio-ujang.vercel.app` in `astro.config.mjs` and `src/data/site.ts`. Update both if deploying to another domain.

## Included

- Static-rendered Astro page and Tailwind CSS v4
- Responsive single-page sections: Hero, selected work, services/process, about, contact
- No testimonial section unless real testimonials are supplied
- Title/description, canonical URL, Open Graph, Twitter card, Person JSON-LD, sitemap, favicon
- Semantic landmarks, skip link, keyboard focus styles, labeled form fields, live form status, reduced-motion support
- No analytics, tracking scripts, or cookie banner

## Quality checks

Run:

```bash
npm run check
npm run build
```

A production build and Lighthouse audit were **not verified in this environment** because package installation could not complete. After `npm install`, run the checks above and test at 390px and 1366px, then manually test contact delivery. Do not publish Lighthouse scores unless you have actually run the audit.
