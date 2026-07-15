const teachings = [
  {
    number: "01",
    title: "Stillness",
    body: "Return to the quiet beneath thought — the place from which clear action begins.",
    glyph: "◌",
  },
  {
    number: "02",
    title: "The Way",
    body: "Move with life, not against it. Practice the art of effort without force.",
    glyph: "∿",
  },
  {
    number: "03",
    title: "Awakening",
    body: "See beyond the familiar self and meet the vast intelligence already within.",
    glyph: "✦",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="heroImage" aria-hidden="true" />
        <div className="heroShade" aria-hidden="true" />

        <header className="nav shell">
          <a className="brand" href="#home" aria-label="Mind Heaven Dao, home">
            <span className="brandMark">天</span>
            <span>Mind Heaven Dao</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#path">The Path</a>
            <a href="#teachings">Teachings</a>
            <a href="#about">About</a>
          </nav>
          <a className="navCta" href="#enter">Enter the Dao <span>↗</span></a>
        </header>

        <div className="heroContent shell">
          <p className="eyebrow"><span /> A sanctuary beyond the noise</p>
          <h1>Find the heaven<br />within your mind.</h1>
          <p className="heroCopy">
            Ancient wisdom for the modern spirit. A path of stillness,
            clarity, and return to what has always been whole.
          </p>
          <a className="primaryButton" href="#path">
            Begin the journey <span className="buttonCircle">↓</span>
          </a>
        </div>

        <div className="heroFooter shell">
          <span>Scroll to awaken</span>
          <span className="verticalLine" />
          <span>00 — 01</span>
        </div>
      </section>

      <section className="manifesto" id="path">
        <div className="orb orbOne" />
        <div className="shell manifestoGrid">
          <p className="sectionLabel">01 / The invitation</p>
          <div>
            <p className="quoteMark">“</p>
            <h2>The way is not in the sky.<br />The way is in the heart.</h2>
            <p className="manifestoCopy">
              Mind Heaven Dao is a living practice for those seeking more than
              answers. It is an invitation to slow down, look within, and
              remember the quiet truth beneath the surface of things.
            </p>
          </div>
        </div>
      </section>

      <section className="teachings shell" id="teachings">
        <div className="sectionTop">
          <p className="sectionLabel">02 / Three gates</p>
          <p>Each gate is a practice.<br />Each practice, a return.</p>
        </div>
        <div className="cards">
          {teachings.map((item) => (
            <article className="card" key={item.number}>
              <div className="cardTop">
                <span>{item.number}</span>
                <span className="glyph">{item.glyph}</span>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <a href="#enter" aria-label={`Explore ${item.title}`}>Explore <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="aboutVisual" aria-hidden="true">
          <div className="enso" />
          <span className="aboutGlyph">道</span>
        </div>
        <div className="aboutCopy">
          <p className="sectionLabel">03 / The philosophy</p>
          <h2>Nothing to chase.<br />Nothing to become.</h2>
          <p>
            The Dao does not ask you to improve the self. It asks you to see
            through it — and discover the boundless awareness that was never missing.
          </p>
          <a href="#enter">Discover our story <span>→</span></a>
        </div>
      </section>

      <section className="enter" id="enter">
        <div className="enterGlow" />
        <div className="shell enterInner">
          <p className="eyebrow"><span /> Your first step</p>
          <h2>The gate is open.</h2>
          <p>Receive a seven-day introduction to stillness, delivered one practice at a time.</p>
          <form className="emailForm">
            <label className="srOnly" htmlFor="email">Email address</label>
            <input id="email" type="email" placeholder="Your email address" required />
            <button type="submit">Enter the Dao <span>↗</span></button>
          </form>
          <small>No noise. No doctrine. Only practice.</small>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#home"><span className="brandMark">天</span><span>Mind Heaven Dao</span></a>
        <p>Ancient wisdom.<br />A living way.</p>
        <div className="footerLinks"><a href="#path">The Path</a><a href="#teachings">Teachings</a><a href="#about">About</a></div>
        <p className="copyright">© 2026 Mind Heaven Dao</p>
      </footer>
    </main>
  );
}
