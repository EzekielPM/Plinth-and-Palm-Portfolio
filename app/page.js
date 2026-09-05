"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./plinth-update.css";


const gallery = [
  ["/assets/staircase-feature.png", "Feature wall", "Angle 01"],
  ["/assets/staircase-descent.png", "Stair descent", "Angle 02"],
  ["/assets/staircase-landing.png", "Window landing", "Angle 03"],
  ["/assets/vi-bedroom-curtain.jpg", "Bedroom curtain finish", "Angle 04"],
];

const featureFilms = [
  {
    src: "/media/full-apartment-walkthrough.mp4",
    poster: "/media/full-apartment-walkthrough.jpg",
    label: "Full apartment walkthrough",
    note: "A complete view of the Victoria Island property and its connected spaces.",
  },
  {
    src: "/media/finished-interior-tour.mp4",
    poster: "/media/finished-interior-tour.jpg",
    label: "Finished interior tour",
    note: "A closer look at the completed finishes, circulation and spatial character.",
  },
];

const processFilms = [
  [
    "/media/kitchen-installation.mp4",
    "/media/kitchen-installation.jpg",
    "Kitchen installation",
    "Cabinetry and worktop installation in progress.",
  ],
  [
    "/media/kitchen-finishing.mp4",
    "/media/kitchen-finishing.jpg",
    "Kitchen finishing",
    "Final alignment, detailing and preparation of the kitchen joinery.",
  ],
  [
    "/media/wardrobe-installation.mp4",
    "/media/wardrobe-installation.jpg",
    "Wardrobe installation",
    "Tall storage units assembled and finished on site.",
  ],
  [
    "/media/bathroom-kitchen-detail.mp4",
    "/media/bathroom-kitchen-detail.jpg",
    "Bathroom & kitchen detail",
    "A quick transition through the completed functional areas.",
  ],
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [comparePosition, setComparePosition] = useState(50);
  const [lightbox, setLightbox] = useState(null);
  const [formResponse, setFormResponse] = useState("");
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("plinth-palm-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(stored ? stored === "dark" : prefersDark);

    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    window.localStorage.setItem("plinth-palm-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    document.body.classList.toggle("lightbox-open", Boolean(lightbox));
    const onKey = (event) => {
      if (event.key === "Escape") {
        setLightbox(null);
        setMenuOpen(false);
        setContactOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const closeMenu = () => setMenuOpen(false);

  const handleEnquiry = (event) => {
    event.preventDefault();
    setFormResponse(
      "Thank you. Your enquiry has been noted. You can also reach PLINTH & PALM directly by WhatsApp, call or email."
    );
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
        <a className="wordmark" href="#home" aria-label="PLINTH & PALM home" onClick={closeMenu}>
          <span className="wordmark-mark">
            P<span>&amp;</span>P
          </span>
          <span className="wordmark-name">
            PLINTH <i>&amp;</i> PALM
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#project">Project</a>
          <a href="#studio">Studio</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" type="button" aria-label="Switch colour theme" onClick={() => setDark((value) => !value)}>
            <span className="theme-icon" />
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>

        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#project" onClick={closeMenu}>Project</a>
          <a href="#studio" onClick={closeMenu}>Studio</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-copy reveal-now">
            <p className="eyebrow">Lagos lifestyle &amp; property brand</p>
            <h1>
              Beautiful spaces.<br />
              <em>Experiences that feel like home.</em>
            </h1>
            <p className="hero-intro">
              PLINTH &amp; PALM offers Airbnb services, interior design and trusted artisan sourcing for spaces that are beautiful, functional, comfortable and memorable.
            </p>
            <div className="hero-actions">
              <a className="button button-solid" href="#project">View featured project</a>
              <a className="text-link" href="#studio">Our design approach <span>↗</span></a>
            </div>
          </div>

          <div className="hero-media reveal-now hero-media-vi">
            <Image
              src="/assets/vi-curtain-main.jpg"
              alt="Finished curtain installation at The Plinth Apartment in Victoria Island"
              width={720}
              height={1280}
              priority
              sizes="(max-width: 760px) 100vw, 55vw"
            />
            <div className="hero-caption">
              <span>01</span>
              <p>
                The Plinth Apartment<br />
                <small>Victoria Island · Lagos</small>
              </p>
            </div>
          </div>
          <div className="hero-side-label" aria-hidden="true">DESIGN · DETAIL · EXPERIENCE</div>
        </section>

        <section className="statement section-pad" id="studio">
          <p className="eyebrow">Our point of view</p>
          <div className="statement-grid">
            <h2 className="display-title">Intentional details.<br />Memorable living.</h2>
            <div className="statement-copy">
              <p>
                From transforming empty apartments into inviting homes to connecting clients with trusted artisans, we bring design, detail and quality execution together under one roof.
              </p>
              <a className="text-link" href="#founder">Meet the founder <span>↗</span></a>
            </div>
          </div>
        </section>

        <section className="featured section-pad section-olive" id="project">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-light">Featured case study</p>
              <h2>The Plinth<br />Apartment</h2>
            </div>
            <p>
              Our first project: a Victoria Island shortlet transformed into a warm, stylish and guest-ready apartment with comfort, function and modern elegance at its centre.
            </p>
          </div>

          <div className="featured-image">
            <Image
              src="/assets/staircase-feature.png"
              alt="Detailed staircase feature wall with classic moulding and illuminated artwork"
              width={1086}
              height={1448}
              sizes="100vw"
            />
            <span className="image-action">Victoria Island <b>↗</b></span>
          </div>

          <div className="project-meta">
            <div><span>Project</span><strong>Shortlet apartment transformation</strong></div>
            <div><span>Location</span><strong>Victoria Island, Lagos</strong></div>
            <div><span>Founder &amp; designer</span><strong>Mercy Agbonghae Oluwaranti</strong></div>
            <div><span>Visuals</span><strong>Before · After · Multi-angle</strong></div>
          </div>
        </section>

        <section className="case-intro section-pad">
          <div className="case-number">01</div>
          <div className="case-copy">
            <p className="eyebrow">The brief</p>
            <h2>Create a shortlet<br />guests would love.</h2>
            <p>
              The client asked Mercy to transform the apartment into a beautiful and inviting space. With creative freedom and close attention to detail, the design direction balances comfort, functionality and modern elegance.
            </p>
          </div>
        </section>

        <section className="gallery-grid section-pad" aria-label="Project gallery">
          {gallery.map(([src, label, angle], index) => (
            <button
              className={`gallery-item ${index === 0 ? "tall" : ""}`}
              type="button"
              onClick={() => setLightbox({ src, alt: `${label} ${angle}` })}
              key={src}
            >
              <Image src={src} alt={`${label} ${angle}`} width={1086} height={1448} sizes="(max-width: 760px) 100vw, 50vw" />
              <span>{label} · {angle}</span>
            </button>
          ))}

          <article className="gallery-item gallery-video" aria-label="Victoria Island project video">
            <video controls playsInline preload="metadata" poster="/media/vi-curtain-detail.jpg">
              <source src="/media/vi-curtain-detail.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
            <span>Curtain detail · VI project clip</span>
          </article>
        </section>

        <section className="project-films section-pad" id="project-films">
          <div className="media-heading">
            <div>
              <p className="eyebrow">Project films</p>
              <h2>The property,<br />room by room.</h2>
            </div>
            <p>Walk through the apartment, then explore selected moments from the installation and finishing process.</p>
          </div>

          <div className="film-feature-grid">
            {featureFilms.map((film, index) => (
              <article className="film-card film-card-feature" key={film.src}>
                <div className="film-frame">
                  <video controls playsInline preload="metadata" poster={film.poster}>
                    <source src={film.src} type="video/mp4" />
                    Your browser does not support embedded video.
                  </video>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{film.label}</h3>
                <p>{film.note}</p>
              </article>
            ))}
          </div>

          <div className="process-film-intro">
            <p className="eyebrow">Behind the finish</p>
            <p>Selected site moments showing the craftsmanship and practical work behind the completed interior.</p>
          </div>

          <div className="film-process-grid">
            {processFilms.map(([src, poster, label, note], index) => (
              <article className="film-card" key={src}>
                <div className="film-frame">
                  <video controls playsInline preload="metadata" poster={poster}>
                    <source src={src} type="video/mp4" />
                    Your browser does not support embedded video.
                  </video>
                  <span>{String(index + 3).padStart(2, "0")}</span>
                </div>
                <h3>{label}</h3>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="transformation section-pad section-soft">
          <div className="section-heading dark">
            <div>
              <p className="eyebrow">Before &amp; after</p>
              <h2>See the design<br />take shape.</h2>
            </div>
            <p>Move the control to compare the original site with the proposed 3D design.</p>
          </div>

          <div className="compare" style={{ "--position": `${comparePosition}%` }}>
            <Image className="compare-before" src="/assets/staircase-before.jpg" alt="Original staircase before redesign" width={960} height={1280} sizes="100vw" />
            <div className="compare-after">
              <Image src="/assets/staircase-hero.png" alt="Proposed staircase redesign" width={1086} height={1448} sizes="100vw" />
            </div>
            <span className="compare-label label-before">Before</span>
            <span className="compare-label label-after">After</span>
            <input
              type="range"
              min="0"
              max="100"
              value={comparePosition}
              aria-label="Compare before and after staircase design"
              onChange={(event) => setComparePosition(Number(event.target.value))}
            />
            <span className="compare-handle" aria-hidden="true"><i>↔</i></span>
          </div>

          <div className="compare-foot">
            <p>The existing stairs, glazing and safety elements remain. Moulding, textured plaster, art and warm brass lighting create the transformation.</p>
            <span className="button button-outline">Concept visualisation</span>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="services-intro">
            <p className="eyebrow">What we offer</p>
            <h2>Property, design and craft<br />under one roof.</h2>
          </div>
          <div className="service-list">
            <article className="service"><span>01</span><h3>Airbnb Services</h3><p>Thoughtful setup and presentation of shortlet properties to create comfortable, memorable guest experiences.</p></article>
            <article className="service"><span>02</span><h3>Interior Design</h3><p>Warm, functional spaces shaped through considered layouts, timeless materials and intentional detail.</p></article>
            <article className="service"><span>03</span><h3>Artisan Sourcing</h3><p>Connections to trusted artisans and craftsmen who can translate the design vision into quality execution.</p></article>
            <article className="service"><span>04</span><h3>3D Visualisation</h3><p>Realistic before-and-after views that make the proposed transformation clear before work begins.</p></article>
          </div>
        </section>

        <section className="study-case section-pad section-olive">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-light">Purpose in every corner</p>
              <h2>An unused alcove<br />becomes purposeful.</h2>
            </div>
            <p>A slim walnut desk, compact chair, warm task lighting and shallow shelves create a functional mini study without blocking circulation.</p>
          </div>

          <div className="study-compare">
            <figure>
              <Image src="/assets/study-before.jpg" alt="Original empty study alcove" width={720} height={1280} sizes="(max-width: 760px) 100vw, 50vw" />
              <figcaption>Before · Original site</figcaption>
            </figure>
            <figure>
              <button type="button" onClick={() => setLightbox({ src: "/assets/study-after.png", alt: "Proposed walnut mini study" })}>
                <Image src="/assets/study-after.png" alt="Proposed walnut mini study" width={941} height={1672} sizes="(max-width: 760px) 100vw, 50vw" />
              </button>
              <figcaption>After · Proposed 3D</figcaption>
            </figure>
          </div>

          <div className="study-note">
            <strong>Important detail</strong>
            <p>The electrical distribution board remains reachable behind a flush, hinged access panel. Final joinery dimensions and clearances require a site measure.</p>
          </div>
        </section>

        <section className="founder-site section-pad" id="founder">
          <div className="founder-site-image">
            <Image src="/images/mercy-founder.jpg" alt="Agbonghae Mercy Oluwaranti, founder of PLINTH & PALM" width={720} height={1280} sizes="(max-width: 1060px) 100vw, 42vw" />
          </div>
          <div className="founder-site-copy">
            <p className="eyebrow">About the founder</p>
            <h2>AGBONGHAE MERCY<br />OLUWARANTI</h2>
            <p>Mercy Agbonghae Oluwaranti is the creative mind behind PLINTH &amp; PALM. With a natural eye for aesthetics and a passion for beautiful, functional spaces, she approaches every project with the belief that good design should tell a story.</p>
            <p>Her style blends minimalism, warmth, elegance and functionality—creating spaces that feel refined without losing their character.</p>
            <p>What started as an interest in beautiful spaces has grown into a brand dedicated to transforming properties and helping clients bring their vision to life.</p>
          </div>
        </section>

        <section className="project-outcome section-pad">
          <p className="eyebrow">The outcome</p>
          <div className="outcome-grid">
            <h2>A warm, stylish shortlet—and the beginning of the PLINTH &amp; PALM journey.</h2>
            <p>The finished apartment reflected the client’s vision, and the client loved the result. The project reinforced a central belief: the right design can completely change how a space feels and how people experience it.</p>
          </div>
        </section>

        <section className="contact-page section-pad" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Contact PLINTH &amp; PALM</p>
            <h1>Let’s create a space<br /><em>that feels like home.</em></h1>
            <p>Tell us about your property, Airbnb, interior idea or artisan requirement. We will use the information to understand the scope and prepare the right next conversation.</p>

            <div className="contact-note">
              <span>Based in</span>
              <strong>Lagos, Nigeria</strong>
              <small>Available for property and interior projects</small>
            </div>

            <div className="contact-direct" aria-label="Direct contact details">
              <a href="https://wa.me/2347081340236" target="_blank" rel="noreferrer">
                <span>WhatsApp</span><strong>07081340236</strong>
              </a>
              <a href="tel:+2349065914788">
                <span>Call</span><strong>09065914788</strong>
              </a>
              <a href="mailto:Plinthandpalm@gmail.com">
                <span>Email</span><strong>Plinthandpalm@gmail.com</strong>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleEnquiry}>
            <p className="form-notice">Project enquiry</p>
            <label>
              <span>Your name</span>
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <div className="form-row">
              <label>
                <span>Email address</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label>
                <span>Phone number</span>
                <input type="tel" name="phone" autoComplete="tel" />
              </label>
            </div>
            <label>
              <span>Project type</span>
              <select name="project" defaultValue="Airbnb / shortlet service">
                <option>Airbnb / shortlet service</option>
                <option>Residential interior design</option>
                <option>Single-room redesign</option>
                <option>Artisan sourcing</option>
                <option>3D visualisation</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              <span>Tell us about the space</span>
              <textarea name="message" rows={6} required />
            </label>
            <button className="button button-solid" type="submit">Send project enquiry</button>
            <p className="form-response" role="status">{formResponse}</p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-mark">P<span>&amp;</span>P</span>
          <span className="wordmark-name">PLINTH <i>&amp;</i> PALM</span>
        </a>
        <p>Beautiful spaces · Intentional details</p>
        <div>
          <span>Designer: Mercy</span>
          <span>© {new Date().getFullYear()} PLINTH &amp; PALM</span>
        </div>
        <div className="footer-contact-links" aria-label="Footer contact links">
          <a href="https://wa.me/2347081340236" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="tel:+2349065914788">Call</a>
          <a href="mailto:Plinthandpalm@gmail.com">Email</a>
        </div>
      </footer>

      <aside className={`contact-floater ${contactOpen ? "is-open" : ""}`} aria-label="Quick contact">
        <div className="contact-floater-links" aria-hidden={!contactOpen}>
          <a href="https://wa.me/2347081340236" target="_blank" rel="noreferrer" aria-label="WhatsApp PLINTH & PALM">WA</a>
          <a href="tel:+2349065914788" aria-label="Call PLINTH & PALM">☎</a>
          <a href="mailto:Plinthandpalm@gmail.com" aria-label="Email PLINTH & PALM">@</a>
        </div>
        <button
          className="contact-floater-toggle"
          type="button"
          aria-expanded={contactOpen}
          aria-label={contactOpen ? "Collapse quick contact" : "Open quick contact"}
          onClick={() => setContactOpen((value) => !value)}
        >
          {contactOpen ? "×" : "+"}
        </button>
      </aside>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={() => setLightbox(null)}>
          <button type="button" aria-label="Close image viewer" onClick={() => setLightbox(null)}>×</button>
          <Image src={lightbox.src} alt={lightbox.alt} width={1200} height={1600} sizes="92vw" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </>
  );
}
