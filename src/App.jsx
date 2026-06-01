import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

import metallkutting1 from "./assets/metalkutting1.jpeg";
import metallkutting2 from "./assets/metallkuting2.jpeg";
import metallkutting3 from "./assets/metallkuting3.jpeg";
import metallkutting4 from "./assets/metalkutting4.jpeg";
import metallkutting5 from "./assets/metalkutting5.jpeg";
import metallkutting7 from "./assets/metallkuting7.jpeg";
import metallkutting8 from "./assets/metalkutting8.jpeg";

import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpg";
import img8 from "./assets/8.jpg";

const services = [
  {
    title: "Gasskjæring",
    text: "Skjæring av store stålkonstruksjoner og grove dimensjoner – klargjort for transport og videre håndtering.",
    list: ["Store dimensjoner", "Effektiv kapping", "Klargjøring på plass"],
  },
  {
    title: "Produksjon og sortering",
    text: "Optimal kapping og klargjøring slik at materialet blir enklere å håndtere, laste og resirkulere.",
    list: ["Effektiv kappeplan", "Stabil leveranse", "Bedre logistikk"],
  },
  {
    title: "Industriell demontering",
    text: "Sikker demontering av maskiner, konstruksjoner og installasjoner i krevende miljøer.",
    list: ["Kontrollert demontering", "Tunge elementer", "Miljøvennlig sortering"],
  },
  {
    title: "Forberedelse for resirkulering",
    text: "Klargjøring av metall og materialer for effektiv viderebehandling og gjenvinning.",
    list: ["Kapping", "Sortering", "Redusert volum"],
  },
  {
    title: "Prosjektstøtte",
    text: "Fleksibel bemanning og støtte i pågående operasjoner på industrielle anlegg.",
    list: ["Erfarne operatører", "HMS-fokus", "Tilpasning til drift"],
  },
];

const galleryCategories = {
  industridemontering: {
    title: "Industridemontering",
    text: "Cisterner, tanker, industrielle objekter, større prosjekter og krevende demonteringsarbeid.",
    items: [
      { title: "Cisterner og tanker", image: img1 },
      { title: "Industrielle objekter", image: img2 },
      { title: "Større prosjekter", image: img3 },
      { title: "Arbeidsprosess", image: img4 },
      { title: "Teknikk", image: img5 },
      { title: "Industridemontering", image: img6 },
      { title: "Prosjekt 07", image: img7 },
      { title: "Prosjekt 08", image: img8 },
    ],
  },

  metallkutting: {
    title: "Metallkutting på gjenvinningsanlegg",
    text: "Metallkutting, klargjøring av konstruksjoner, arbeidsprosesser og maskiner på gjenvinningsanlegg.",
    items: [
      { title: "Metallkutting 01", image: metallkutting1 },
      { title: "Metallkutting 02", image: metallkutting2 },
      { title: "Metallkutting 03", image: metallkutting3 },
      { title: "Metallkutting 04", image: metallkutting4 },
      { title: "Metallkutting 05", image: metallkutting5 },
      { title: "Metallkutting 07", image: metallkutting7 },
      { title: "Metallkutting 08", image: metallkutting8 },
    ],
  },
};

function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        <span className="logo-mark"></span>
        <span className="logo-text">JK Cutting Services AS</span>
      </NavLink>

      <button
        className={`menu-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${open ? "show" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Hjem</NavLink>
        <NavLink to="/om-oss" onClick={closeMenu}>Om oss</NavLink>
        <NavLink to="/tjenester" onClick={closeMenu}>Tjenester</NavLink>
        <NavLink to="/galleri" onClick={closeMenu}>Galleri</NavLink>
        <NavLink to="/kontakt" onClick={closeMenu}>Kontakt</NavLink>
        <NavLink to="/kontakt" className="nav-cta" onClick={closeMenu}>
          Kontakt oss
        </NavLink>
      </nav>

      <NavLink to="/kontakt" className="desktop-cta">
        Kontakt oss
      </NavLink>
    </header>
  );
}

function PageHero({ label, title, text }) {
  return (
    <section className="page-hero">
      <div className="page-hero-content">
        <p className="label">{label}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

function ImagePlaceholder({ text = "Bildeplass" }) {
  return (
    <div className="image-slot">
      <span>{text}</span>
    </div>
  );
}

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="label">Metallkutting • Gasskjæring • Demontering</p>
          <h1>Profesjonelle metallkuttetjenester i Norge</h1>
          <p>
            Effektiv gasskjæring på gjenvinningsanlegg og industrielle
            rivningsområder.
          </p>

          <div className="hero-actions">
            <NavLink to="/tjenester" className="btn primary">
              Våre tjenester
            </NavLink>
            <NavLink to="/galleri" className="btn ghost">
              Se galleri
            </NavLink>
          </div>
        </div>

        <div className="hero-visual">
          <ImagePlaceholder text="Hero bilde" />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="label">Våre tjenester</p>
          <h2>Effektiv og trygg metallkutting for krevende oppdrag</h2>
          <p>
            Profesjonelle metallkuttingstjenester tilpasset krevende
            industrielle miljøer.
          </p>
        </div>

        <div className="cards three">
          {services.slice(0, 3).map((service, index) => (
            <article className="card" key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section soft-section">
        <div className="section-heading">
          <p className="label">Hvorfor velge oss?</p>
          <h2>Hvorfor velge JK Cutting Services AS?</h2>
        </div>

        <div className="benefit-grid">
          <div>
            <strong>Pålitelig</strong>
            <p>Sikre løsninger og høy kvalitet.</p>
          </div>
          <div>
            <strong>Effektiv</strong>
            <p>Rask og strukturert drift.</p>
          </div>
          <div>
            <strong>Erfaring</strong>
            <p>Solid industri- og anleggserfaring.</p>
          </div>
          <div>
            <strong>Hele Norge</strong>
            <p>Tjenester over hele landet.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <main>
      <PageHero
        label="Om oss"
        title="Om JK Cutting Services AS"
        text="Et norskbasert selskap med fokus på sikkerhet, effektivitet og profesjonell gjennomføring."
      />

      <section className="section about-grid">
        <article className="feature-card">
          <p className="label">Profesjonelt arbeid</p>
          <h2>Industrikompetanse, sikkerhet og effektiv drift.</h2>
          <p>
            JK Cutting Services AS leverer profesjonelle tjenester innen
            gasskjæring av metall, demontering av stålkonstruksjoner og
            metallbearbeiding for gjenvinningsanlegg og industrielle områder.
          </p>
        </article>

        <div className="step-list">
          <article>
            <span>01</span>
            <p>
              Vi arbeider med sterkt fokus på sikkerhet, effektivitet og godt
              samarbeid med kundens personell.
            </p>
          </article>

          <article>
            <span>02</span>
            <p>
              Våre operatører har solid erfaring fra krevende industrielle
              arbeidsmiljøer med strenge HMS-rutiner.
            </p>
          </article>

          <article>
            <span>03</span>
            <p>
              Hovedfokuset er skjæring av metall på gjenvinningsplasser og
              klargjøring av store konstruksjoner for transport.
            </p>
          </article>

          <article>
            <span>04</span>
            <p>
              Vi verdsetter langsiktige samarbeid og ønsker å være en pålitelig
              partner for effektive arbeidsprosesser.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

function Services() {
  return (
    <main>
      <PageHero
        label="Våre tjenester"
        title="Metallkutting og demontering for industri og gjenvinning"
        text="Vi leverer profesjonelle tjenester for gjenvinningsanlegg og industrielle miljøer i Norge."
      />

      <section className="section">
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>
                {service.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function Gallery() {
  const [active, setActive] = useState("industridemontering");
  const category = galleryCategories[active];

  return (
    <main>
      <PageHero
        label="Galleri"
        title="Prosjekter og arbeidsbilder"
        text="Velg kategori for å se bilder fra industridemontering eller metallkutting på gjenvinningsanlegg."
      />

      <section className="section">
        <div className="gallery-tabs">
          <button
            className={active === "industridemontering" ? "active" : ""}
            onClick={() => setActive("industridemontering")}
          >
            Industridemontering
          </button>

          <button
            className={active === "metallkutting" ? "active" : ""}
            onClick={() => setActive("metallkutting")}
          >
            Metallkutting på gjenvinningsanlegg
          </button>
        </div>

        <div className="gallery-info">
          <p className="label">Valgt kategori</p>
          <h2>{category.title}</h2>
          <p>{category.text}</p>
        </div>

        <div className="gallery-grid">
          {category.items.map((item) => (
            <div className="gallery-item" key={item.title}>
              {item.image ? (
                <img src={item.image} alt={item.title} />
              ) : (
                <span>{item.title}</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Contact() {
  return (
    <main>
      <PageHero
        label="Kontakt oss"
        title="La oss snakke om prosjektet ditt"
        text="Ta kontakt med oss for tilbud eller spørsmål om våre tjenester innen metallkutting og industriell demontering."
      />

      <section className="section contact-grid">
        <article className="contact-main">
          <p className="label">Direkte kontakt</p>
          <h2>JK Cutting Services AS</h2>
          <p>
            Vi svarer normalt innen 24 timer og hjelper gjerne med spørsmål,
            tilbud eller vurdering av prosjekt.
          </p>

          <div className="contact-methods">
            <a href="tel:+4792200277">
              <small>Telefon</small>
              <strong>+47 922 00 277</strong>
            </a>

            <a href="mailto:info@jkcuttingservices.no">
              <small>E-post</small>
              <strong>info@jkcuttingservices.no</strong>
            </a>
          </div>
        </article>

        <div className="contact-details">
          <article>
            <span>Firma</span>
            <p>
              <strong>JK Cutting Services AS</strong>
            </p>
            <p>
              <strong>Org.nr:</strong> 931 010 689
            </p>
            <p>
              <strong>Adresse:</strong> Kilgata 16, 3217 Sandefjord
            </p>
          </article>

          <article>
            <span>Åpningstid</span>
            <p>
              <strong>Mandag–fredag:</strong> 07:00–18:00
            </p>
            <p>
              <strong>Helg:</strong> Etter avtale
            </p>
            <p>
              <strong>Område:</strong> Hele Norge
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <div className="site">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om-oss" element={<About />} />
        <Route path="/tjenester" element={<Services />} />
        <Route path="/galleri" element={<Gallery />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;