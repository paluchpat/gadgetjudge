# GadgetJudge: guides and search visibility

Prepared October 14, 2026. Scope: Simplest Reminder and Simplest Shopping List, with three proposed posts per app. No Pulse Pilot articles in this content series.

## Decisions and current status

- Use **Guides** as the navigation label, with `/guides/` as the index. Introduce it as practical Android guides written by the developer of the apps.
- Give each article its own URL on gadgetjudge.com. Keep articles on the main domain, linked from the homepage and relevant app pages.
- Retain GitHub Pages, local hot reload, and the existing design. A CMS or a hosting change is unnecessary.
- Create a focused landing page for each of the two utility apps so articles have somewhere useful to link before the Play Store.
- Prefer specific questions and demonstrated workflows over an unsupported "best Android apps" roundup. The proposed topics are editorial hypotheses, not measured keyword-volume or competition findings.
- The crawler files are implemented locally in `public/robots.txt`, `public/sitemap.xml`, and `public/llms.txt`. They will be copied to the site root during the normal build. They have not been deployed or submitted to search engines as part of this work.
- The sitemap contains only the existing homepage. The proposed pages below are not implemented or published yet.

## Site structure

Proposed pages:

```text
/
/apps/simplest-reminder/
/apps/simplest-shopping-list/
/guides/
/guides/recurring-reminders-android/
/guides/android-reminders-not-showing/
/guides/snooze-vs-repeat-reminders/
/guides/grocery-list-android-no-account/
/guides/reuse-weekly-grocery-list/
/guides/share-grocery-list-android/
```

Keep **Apps** in the navigation and add **Guides**. Add a short recent-guides section after the homepage's app cards. The guides index can group posts under Shopping List and Reminder without needing separate tag/category pages for only six posts.

Each app landing page should explain who the app is for, show current screenshots, give concrete use cases, link to its guides, and provide a clear Google Play link. Each guide should link back to its app page, one or two genuinely related guides, and the store when useful. Show author attribution and publication/update dates. Add a short developer bio using only details approved for public use.

## Writing voice

Voice evidence: Pat's own interview introduction supplied in **Write ad tech LinkedIn PVP**, the original draft and feedback in **PVP Feedback Rewrite**, and this site's copy discussions. This is a specific sample of accessible conversations, not a claim of access to all prior interview preparation.

Working rules:

- Write in the first person when explaining an actual choice or experience. Use "you" for instructions. Avoid a corporate "we" for a solo hobby project.
- Be straightforward, concrete, and conversational. Explain the problem, the choice, and what happens in practice. Short paragraphs and ordinary vocabulary are a better fit than marketing language.
- Preserve the distinction Pat made: the apps are easy to use, but the engineering is not trivial. Do not describe the work as basic or unambitious.
- Use a few real examples rather than a long feature inventory. Explain constraints honestly.
- Avoid generic productivity introductions, inflated claims, fake objectivity, repetitive keywords, and obligatory "In conclusion" endings.
- Be clear that the author develops the featured app. A first-party guide should not masquerade as an independent review.
- Do not invent origin stories, user feedback, experiments, daily habits, measured results, or quotes. Ask Pat for the actual example when a personal story would improve a draft.
- Edit for clarity without copying typos or intentionally roughening the writing to simulate authenticity.

Proposed tone sample, not a finished article or a quotation from Pat:

> A grocery list needs to be easy to use while you're actually shopping. Adding an item should be quick, but there are details that matter too: how many you need, which size, and what the other person should buy if you're sending them the list. In this guide, I'll show how quantities and notes work in Simplest Shopping List, and how those details carry over when you share it.

Before full drafting, gather one concrete design decision or lesson for each app and current screenshots. Review the first draft together to calibrate the voice, then apply that feedback to the remaining five.

## Six proposed guides

### Shopping List 1 — How to make a grocery list on Android without creating an account

- Reader's question: how can I start a grocery list quickly without signing up?
- Outline: direct answer; a short first-list walkthrough; quantities and notes; checking off items; what no account does and does not imply about backup and moving phones.
- Original contribution: screenshots of the current app, one realistic example list, and a brief explanation of the setup choices.
- Checks before publishing: reproduce the exact steps in the released version. Do not equate no account with no ads, no analytics, or no data sharing.
- Proposed URL: `/guides/grocery-list-android-no-account/`.

### Shopping List 2 — Stop retyping your weekly groceries: use frequently purchased items

- Reader's question: can I build next week's list from things I buy regularly?
- Outline: repeating the same shopping work; how Frequently Purchased helps; selecting only this week's items; adding useful quantities and notes; ordering the list for a shopping trip.
- Original contribution: a before/after example list and a real explanation of why Pat chose this workflow.
- Checks before publishing: verify how frequent-item history and any retained quantities/notes actually behave. Do not imply automatic meal planning or subscription ordering.
- Proposed URL: `/guides/reuse-weekly-grocery-list/`.

### Shopping List 3 — How to share a grocery list from Android, including quantities and notes

- Reader's question: how do I send someone the list with enough detail to buy the right things?
- Outline: prepare the list; add useful details; share through Android's sharing options; show what the recipient receives; explain what happens if the original list changes afterward.
- Original contribution: a real shared-message example with harmless sample groceries.
- Checks before publishing: sharing sends a copy; it is not a live synchronized family list. Verify which items are included and how the released app formats them.
- Proposed URL: `/guides/share-grocery-list-android/`.

### Reminder 1 — How to set recurring reminders on Android

- Reader's question: how do I schedule something that repeats without entering it every time?
- Outline: one-time versus recurring; walk through a weekly task; show another supported repeat pattern; explain editing and stopping a schedule; briefly link to troubleshooting.
- Original contribution: annotated current screenshots and concrete examples such as putting out recycling or handling a monthly household task.
- Checks before publishing: exact repeat controls, supported patterns, and date behavior in the current release. Avoid promises that every notification is guaranteed.
- Proposed URL: `/guides/recurring-reminders-android/`.

### Reminder 2 — Android reminders not showing? Here's what to check

- Reader's question: why did the alert not appear or make a sound?
- Outline: first check the reminder and time; notification permissions and notification-channel settings; Do Not Disturb; relevant alarm permissions and battery/background restrictions; a short test reminder; support details if it still fails.
- Original contribution: a small troubleshooting decision path with current screenshots and the app developer's verified explanation of the limits.
- Checks before publishing: use current Android documentation, check which permissions this app actually needs, and label Android/device versions. Avoid blanket advice to disable all battery optimization or claims that one setting fixes every device.
- Proposed URL: `/guides/android-reminders-not-showing/`.

### Reminder 3 — Snooze or repeat? Choosing the right reminder for the job

- Reader's question: should I postpone this reminder or make it recur?
- Outline: explain the distinction with examples; snooze a current task; repeat a scheduled task; distinguish repeated one-time alerts from recurring schedules; describe what the current app actually does afterward.
- Original contribution: an easy-to-follow comparison based on behavior demonstrated in the app.
- Checks before publishing: verify interactions among snoozing, dismissing, editing, and recurrence. Do not infer schedule semantics from labels alone.
- Proposed URL: `/guides/snooze-vs-repeat-reminders/`.

The public Play listings support these broad topics. Their presence in a listing does not replace testing the exact steps. Keep post length proportional to the question; there is no SEO word-count target.

## Implementation sequence

### 1. Deliver complete HTML to readers and crawlers

The current `index.html` contains an empty React root, with the portfolio rendered by JavaScript. Google can render JavaScript, but some crawlers cannot, and rendering adds a dependency for discovering the content.

Keep Vite and the existing GitHub Pages workflow. Add a small build-time content step with a Markdown parser and a shared HTML layout; prerender the current homepage using the existing React components. Generate ordinary pages such as `dist/guides/recurring-reminders-android/index.html`. This gives each guide a working URL without a server or client-side routing fallback.

Store posts in `content/guides/*.md`, with metadata such as title, slug, description, author, published date, updated date, associated app, and draft status. Keep drafts out of the public output and every discovery file. Generate the guide index, sitemap, and guide links in `llms.txt` from the same published-content list so they cannot drift apart.

Include content rendering in local development with file watching and hot reload. Update internal navigation and asset URLs to work from nested pages. Preserve the homepage layout and existing app links. Do not introduce a hash router or serve the homepage as a successful response for missing article URLs.

### 2. Page metadata and usability

- Give every page a descriptive, distinct title, description, self-referencing HTTPS canonical URL, and Open Graph/Twitter metadata in its HTML.
- Update the homepage description, which still calls the apps "simple," to reflect Pat's preferred "thoughtfully crafted" wording and identify the two utility apps.
- Use one meaningful H1 per page and a logical heading hierarchy. Fix the existing apps section's `aria-labelledby="apps-title"`, whose target heading is currently absent.
- Add accurate Article/BlogPosting structured data for posts and breadcrumbs that reflect visible navigation. Consider SoftwareApplication markup on app pages only where the stated details are visible and verified; do not invent reviews, ratings, prices, or rich-result eligibility.
- Provide image dimensions, useful alternative text, appropriately sized/compressed screenshots, and lazy loading for below-the-fold images. Check contrast, keyboard navigation, and phone layouts.
- Ensure articles and meaningful links are readable without JavaScript. Keep stylesheet, image, and JavaScript assets crawlable.

### 3. Write and release the content

Suggested first pair: **grocery list without an account** and **recurring reminders**. They introduce the main workflows and establish the voice.

Next pair: **frequently purchased items** and **reminders not showing**. Final pair: **sharing a grocery list** and **snooze versus repeat**. Three review batches are a manageable editorial cadence, not a ranking tactic. Publish each post when its facts, screenshots, and voice are ready.

Every draft should answer the question near the beginning, show the steps, include meaningful limitations, and link naturally to the app. Add a compact developer note where a real design decision adds value. Personal product stories can become a later series after the practical guides are established.

### 4. Deploy, submit, and measure

1. Build and inspect all generated pages. Check direct visits and refreshes to nested URLs, relative assets, canonicals, sitemap entries, and real 404 behavior.
2. Publish through the existing GitHub Pages workflow. Confirm `/robots.txt`, `/sitemap.xml`, and `/llms.txt` return their intended files on the live HTTPS domain.
3. Verify `gadgetjudge.com` in Google Search Console. If DNS verification is needed, use Google's current TXT value; Google Analytics or GitHub Pages verification is not the same verification.
4. Submit `https://gadgetjudge.com/sitemap.xml` in Search Console and inspect the homepage plus the first two article URLs.
5. Add/verify the site in Bing Webmaster Tools (or import it from Search Console) and submit the same sitemap. These are account-side actions, not something creating the files completes.
6. Use Search Console and Bing to monitor indexing, queries, impressions, and clicks. Use GA4 to measure guide readership and outbound Play Store clicks. Verify enhanced measurement before adding custom click tracking, and label outbound clicks as store visits rather than installs.
7. Revisit the content after several weeks of actual data. Improve titles, explanations, or screenshots when the queries and reader behavior justify it. Genuine links from relevant profiles and helpful community contributions can support discovery; avoid manufactured endorsements.

## What the crawler files do

- `robots.txt`: allows crawling and advertises the sitemap. It does not force indexing and is not an access-control mechanism. The current file leaves the existing open site crawlable by all user agents.
- `sitemap.xml`: lists canonical pages to help search engines discover them. Until additional pages exist, it lists the homepage only. Do not add invented modification dates, future articles, external store URLs, or fragment URLs.
- `llms.txt`: the lowercase plural filename used by the proposal. It is a concise Markdown guide to the site for tools that choose to use it. It neither grants crawler permission nor guarantees AI citations, indexing, or rankings. Google explicitly says it does not use this file to improve search visibility.

No private career or interview material belongs in `public/` or in `llms.txt`. Use those conversations to guide tone only. Preserve `app-ads.txt` exactly.

## Acceptance checklist for the article implementation

- [ ] Homepage, two app pages, guide index, and six unique guide URLs have complete HTML content.
- [ ] Guide pages open directly on GitHub Pages and work without JavaScript.
- [ ] Each post has checked app behavior, current screenshots, clear author attribution, and Pat's voice review.
- [ ] Discovery files include only live, canonical, published pages.
- [ ] Build-time content validation catches duplicate slugs, missing metadata, broken internal links, and accidental draft publication.
- [ ] Mobile layouts, accessibility, image sizing, and page metadata are checked.
- [ ] Search Console and Bing verification/submission are confirmed separately from deployment.
- [ ] Measurement distinguishes visits to the Play Store from actual installs.
- [ ] Both copies of `app-ads.txt` retain their original content.

## References

- [Google: JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google: AI optimization guidance, including llms.txt](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Bing: add and verify a site](https://www2.bing.com/webmasters/help/add-and-verify-site-12184f8b)
- [Bing: sitemaps](https://www2.bing.com/webmasters/help/sitemaps-3b5cf6ed)
- [The llms.txt proposal](https://llmstxt.org/)
- [Simplest Shopping List: current Play listing](https://play.google.com/store/apps/details?id=com.gadgetjudge.simplestshoppinglist)
- [Simplest Reminder: current Play listing](https://play.google.com/store/apps/details?id=com.gadgetjudge.simplestreminder)
