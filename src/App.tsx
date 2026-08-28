const apps = [
  {
    name: "Simplest Shopping List",
    eyebrow: "Shopping, simplified",
    description:
      "Create grocery lists fast with smart item suggestions, drag-to-reorder sorting, easy checkoffs, sharing, and backup—all without an account.",
    image: "images/simplest-shopping-list.png",
    url: "https://play.google.com/store/apps/details?id=com.gadgetjudge.simplestshoppinglist&hl=en_US",
    accent: "green",
  },
  {
    name: "Simplest Reminder",
    eyebrow: "Remember, effortlessly",
    description:
      "Set one-time or flexible recurring reminders in seconds, then search, snooze, edit, or dismiss them from a clean, focused interface.",
    image: "images/simplest-reminder.png",
    url: "https://play.google.com/store/apps/details?id=com.gadgetjudge.simplestreminder&hl=en_US",
    accent: "blue",
  },
  {
    name: "Pulse Pilot",
    eyebrow: "Tap. Pulse. Fly.",
    description:
      "A fast one-touch arcade game where carefully placed energy pulses steer your pilot through moving gates, power-ups, and perfect-chain challenges.",
    image: "images/pulse-pilot.png",
    url: "https://play.google.com/store/apps/details?id=com.gadgetjudge.pulsepilot&hl=en_US",
    accent: "purple",
  },
] as const;

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function App() {
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
          GadgetJudge is my collection of thoughtfully crafted Android apps—made
          as a hobby, polished with care, and designed to do one job exceptionally
          well.
        </p>
        <a className="hero-link" href="#apps">
          Explore the apps <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="apps-section" id="apps" aria-labelledby="apps-title">
        <div className="app-list">
          {apps.map((app) => (
            <article className={`app-card ${app.accent}`} key={app.name}>
              <a
                className="image-link"
                href={app.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${app.name} on Google Play`}
              >
                <img src={app.image} alt={`${app.name} feature graphic`} />
                <span className="open-icon" aria-hidden="true">
                  <ExternalLinkIcon />
                </span>
              </a>
              <div className="app-details">
                <div className="app-copy">
                  <p className="app-eyebrow">{app.eyebrow}</p>
                  <h3>{app.name}</h3>
                  <p>{app.description}</p>
                  <a href={app.url} target="_blank" rel="noreferrer">
                    Get it on Google Play <ExternalLinkIcon className="inline-icon" />
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
