# Sai Santosh Portfolio

A recruiter-focused personal portfolio for Sai Santosh, built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and deploy

```bash
npm run build
npm start
```

Import the repository into Vercel. Vercel detects Next.js automatically; the default build command is `npm run build`.

## Personalize before launch

Update the editable values in `lib/content.ts`:

- Replace `#linkedin-url` and `#github-url` with profile URLs.
- Replace `#resume-file` with a hosted PDF path, such as `/Sai-Santosh-Resume.pdf`, and add the PDF to `public/`.
- Replace `[ADD EMAIL ADDRESS]` and `[ADD LOCATION]`.
- Replace project `#live-project-url` and `#case-study-url` placeholders.
- Replace `[ADD-DOMAIN]` in `app/sitemap.ts` and `app/robots.ts` with the production domain.

The contact form performs browser-side required-field and email validation. Connect the submit handler in `components/Portfolio.tsx` to a form service or API route before launch.
