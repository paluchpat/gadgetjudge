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

## Search discovery and guides

The files `public/robots.txt`, `public/sitemap.xml`, and `public/llms.txt` are copied to the site root during the build. The sitemap currently lists only the homepage. Add canonical page URLs as pages are published; do not list drafts, fragment links, or external Google Play URLs. Keep `llms.txt` synchronized with the public site.

After deployment, submit `https://gadgetjudge.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools. Deployment alone does not submit it. `llms.txt` is an optional guide for supporting AI tools, not a requirement for crawling or a Google ranking factor.

See [the SEO and content plan](docs/seo-content-plan.md) for the proposed Guides section, six article briefs, writing voice, and static-page implementation steps.
