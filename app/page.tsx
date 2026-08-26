const apps = [
  {
    name: "Simplest Shopping List",
    eyebrow: "Shopping, simplified",
    description:
      "Create grocery lists fast with smart item suggestions, drag-to-reorder sorting, easy checkoffs, sharing, and backup—all without an account.",
    image: "/images/simplest-shopping-list.png",
    url: "https://play.google.com/store/apps/details?id=com.gadgetjudge.simplestshoppinglist&hl=en_US",
    accent: "green",
  },
  {
    name: "Simplest Reminder",
    eyebrow: "Remember, effortlessly",
    description:
      "Set one-time or flexible recurring reminders in seconds, then search, snooze, edit, or dismiss them from a clean, focused interface.",
    image: "/images/simplest-reminder.png",
    url: "https://play.google.com/store/apps/details?id=com.gadgetjudge.simplestreminder&hl=en_US",
    accent: "blue",
  },
] as const;

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="GadgetJudge home">
          <span className="brand-mark" aria-hidden="true">GJ</span>
          <span>GadgetJudge</span>
        </a>
        <a className="nav-link" href="#apps">Apps</a>
      </nav>

      <section className="hero" id="top">
        <p className="kicker">Small apps. Thoughtfully made.</p>
        <h1>Useful things,<br />without the clutter.</h1>
        <p className="hero-copy">
          GadgetJudge is my collection of simple Android apps—made as a hobby,
          polished with care, and designed to do one job well.
        </p>
        <a className="hero-link" href="#apps">
          Explore the apps <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="apps-section" id="apps" aria-labelledby="apps-title">
        <header className="section-heading">
          <div>
            <p className="section-number">01 — The collection</p>
            <h2 id="apps-title">Available now</h2>
          </div>
          <p>Two apps today. Another one is already on the way.</p>
        </header>

        <div className="app-list">
          {apps.map((app, index) => (
            <article className={`app-card ${app.accent}`} key={app.name}>
              <a
                className="image-link"
                href={app.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${app.name} on Google Play`}
              >
                <img src={app.image} alt={`${app.name} feature graphic`} />
                <span className="open-icon" aria-hidden="true">↗</span>
              </a>
              <div className="app-details">
                <span className="app-number">0{index + 1}</span>
                <div className="app-copy">
                  <p className="app-eyebrow">{app.eyebrow}</p>
                  <h3>{app.name}</h3>
                  <p>{app.description}</p>
                  <a href={app.url} target="_blank" rel="noreferrer">
                    Get it on Google Play <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">GJ</span>
          <span>GadgetJudge</span>
        </a>
        <p>Independent Android apps, made with curiosity.</p>
        <p>© {new Date().getFullYear()} GadgetJudge</p>
      </footer>
    </main>
  );
}
