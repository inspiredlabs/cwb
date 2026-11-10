# Clowns Without Borders UK website

This is a SvelteKit site built with `@sveltejs/adapter-vercel`. Site-owned images live in `static/images` and are referenced from the site root, for example `/images/girl-looking-up-into-the-sky-smiling.webp`.

## Local development

Use Node.js 26 and pnpm 10.18.0:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

The development server listens on `http://localhost:3000`. Check a production build with:

```sh
pnpm build
pnpm preview
```

## Deploy to Vercel

Import the repository as a SvelteKit project. The `package.json` Node engine pins Vercel builds and functions to Node.js 26.x. Use the repository root, the pnpm lockfile, and the standard `pnpm build` command. Leave the Output Directory at the SvelteKit framework default; the Vercel adapter generates `.vercel/output` during the build.

After deployment, confirm that `/images/girl-looking-up-into-the-sky-smiling.webp` loads from the new Vercel domain. Images in `static/images` are copied to that URL path by SvelteKit.

## Formspree forms

Contact, Newsfeed, and Funding Partnership all submit to `https://formspree.io/f/xvkapzrj`. Each form sends a distinct `subject` field so the messages can be distinguished in Formspree. The forms submit with JavaScript when available and retain their standard HTML `action` and `method="POST"` fallback.

The endpoint is a public form ID. Formspree account usernames, passwords, and API keys are not needed for submissions. If the endpoint changes, update `src/lib/formspree.js`.
