# GadgetJudge

The static portfolio site for GadgetJudge's independently made Android apps.

## Local development

Install dependencies once with `npm install`, then start the hot-reloading local site:

```sh
npm run dev
```

## Build and test

```sh
npm test
```

The production site is written to `dist/`. The build is fully static and can be hosted by GitHub Pages.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` publishes `dist/` whenever `main` is updated. In the repository's **Settings → Pages**, select **GitHub Actions** as the source and set the custom domain to `gadgetjudge.com`.

To add another app, add its feature image to `public/images` and add one entry to the `apps` list in `src/App.tsx`.
