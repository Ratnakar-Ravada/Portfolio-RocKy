# Ratnakar's personal corner of the internet

A personal website and documented project archive built with React 18, TypeScript, and Vite. The visual system uses midnight navy, ice white, cobalt, and small lime markers, with locally hosted Space Grotesk and IBM Plex Mono.

## Run locally

```sh
npm ci
npm run dev
```

Open the URL Vite prints, normally http://localhost:8080. For a production build and preview:

```sh
npm run build
npm run preview
```

## What is here

- A clean two-column hero: Ravada Ratnakar, a short introduction and Hyderabad pin on the left, with eight matching portraits on the right in a slightly larger frame, with the RocKy banner over the image. The photo and RocKy subtitle change together every four seconds, with pause/resume and manual advance for reduced motion. The order is Software Engineer, Badminton Player, Movie geek, Foodie, Wanderer, Tech Enthusiast, Gamer, and Cook.
- Eight documented projects, filterable by personal or professional work. The Evernorth entries include clearly labeled product maps. Expensia is documented as a full expense-management application, with a problem-and-solution overview highlighting RAG and Image RAG.
- Project reading views with original screenshots, accessible image galleries, implementation details, features, and existing public source/live links.
- Who I Am follows the hero. Its rotating wheel sits on the left, with synchronized details for the selected interest on the right, followed by the project archive.
- A work journal in three chapters: Evernorth, Pivony, and Circle Security. Each story connects to its projects, with the full original contributions in expandable engineering notes.
- A visible skills overview in three layers: AI systems, application engineering, and cloud delivery. All nine domains and their complete tool lists are readable without tabs, filters, or disclosures.
- Three visible certification records for Anthropic, AWS, and Edureka, each with its provider verification link. The AWS entry opens its direct verification page.
- IIIT Bhubaneswar education (July 2019 to July 2023) with a link to the supplied degree certificate.
- Site search with `Ctrl+K` or `Cmd+K`; search by project, tool, or section.
- Contact by email, GitHub, LinkedIn, or a note form.
- Responsive navigation, native modal focus management, keyboard controls, and reduced-motion support.

## Update the content

Edit `src/components/personal/siteContent.ts` for projects, work history, personal facts, contact links, and tools. Put screenshots in `public/` and reference their root-relative paths in the project data. New projects appear in the archive and search automatically. Each project supports `overview`, `implementation`, `features`, `tags`, `images`, optional `imageLabel` for the gallery heading, and optional `liveUrl` and `sourceUrl`.

The page lives in `Workbench.tsx` and its colocated stylesheet. `PortfolioHero`, `HeroPortrait`, and `PortraitBanner`, `InterestOrbit` and `InterestScenes`, `SkillsSection`, `ExperienceSection`, `EducationSection`, and `PersonalSection` own the page sections; `ProjectReader` owns the project reading view. Existing source components and original assets remain in the repository for reference. Portrait filenames and subtitle order live in `portraitSlides.ts`; the next photo is preloaded and decoded before each transition. Skills domain anchors keep their `#skill-*` URLs. The narrative introductions live in `experienceStories.ts`; company, role, dates, and complete technical notes stay in `siteContent.ts`. Work history includes the supplied dates: Pivony through April 2025 and Evernorth from May 2025 to present.

## Contact form

The Send message action sends directly through EmailJS. Add these existing settings to a local `.env` file or your deployment environment:

```dotenv
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_public_key
```

Configure the EmailJS template with `name`, `email`, `subject`, and `message`. These Vite variables are public client configuration. Keep private credentials out of frontend environment variables. The form shows success only after EmailJS confirms sending. Failed or unavailable sending keeps the message in the form and shows a retry message.

## Checks

```sh
npm run build
npx tsc --noEmit -p tsconfig.app.json
npm run lint
```

Fonts and their Open Font Licenses are in `public/fonts/`. The Who I Am interest wheel rotates automatically while visible, can be paused, and switches to manual selection when reduced motion is requested. Scene animations use layered 2D SVG illustrations; other motion uses short transitions. The standard browser cursor is retained. No new runtime dependencies are required for this redesign.

The original site was hosted at https://ratnakar-portfolio.vercel.app/. This local redesign does not change that deployment. Vite outputs static files to `dist/`; retain your host's SPA fallback to `index.html` for client-side routes.
