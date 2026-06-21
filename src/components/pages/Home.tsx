import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import { LANGUAGES, PORTRAIT } from "../../data/site";
import { SERVICE_ICONS } from "../icons";

export function Home() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO */}
      <section className="gk-hero">
        <div className="gk-hero__copy">
          <div className="gk-eyebrow gk-eyebrow--line gk-hero__eyebrow">
            <span className="gk-eyebrow__rule" />
            {t.hero.eyebrow}
          </div>
          <h1 className="gk-hero__title">{t.hero.title}</h1>
          <p className="gk-hero__subtitle">{t.hero.subtitle}</p>
          <div className="gk-hero__actions">
            <button
              type="button"
              className="gk-btn gk-btn--primary gk-btn--hero"
              onClick={() => navigate("/contact")}
            >
              {t.hero.ctaPrimary}
            </button>
            <button
              type="button"
              className="gk-btn gk-btn--secondary gk-btn--hero-secondary"
              onClick={() => navigate("/services")}
            >
              {t.hero.ctaSecondary}
            </button>
          </div>
          <div>
            <div className="gk-hero__langs-label">{t.hero.langsLabel}</div>
            <div className="gk-langchips">
              {LANGUAGES.map((l) => (
                <div className="gk-langchip" key={l.code}>
                  <span className="gk-langchip__flag">{l.flag}</span>
                  {l.native}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gk-portrait">
          <div className="gk-portrait__frame" />
          <div className="gk-portrait__img-wrap">
            <img
              className="gk-portrait__img"
              src={PORTRAIT}
              alt="Gulmet Kulmedov"
            />
          </div>
          <div className="gk-portrait__badge">
            <span className="gk-portrait__dot" />
            <span className="gk-portrait__location">{t.hero.location}</span>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="gk-band">
        <div className="gk-band__inner">
          <div className="gk-intro">
            <div className="gk-eyebrow gk-intro__eyebrow">
              {t.servicesIntro.eyebrow}
            </div>
            <h2 className="gk-intro__title">{t.servicesIntro.title}</h2>
            <p className="gk-intro__subtitle">{t.servicesIntro.subtitle}</p>
          </div>
          <div className="gk-cards">
            {t.services.map((s, i) => (
              <Link className="gk-card" key={s.name} to="/services">
                <span className="gk-card__bar" />
                <span className="gk-card__arrow">→</span>
                <span className="gk-card__icon">{SERVICE_ICONS[i]}</span>
                <h3 className="gk-card__title">{s.name}</h3>
                <p className="gk-card__desc">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="gk-why">
        <div className="gk-why__intro">
          <div className="gk-eyebrow gk-why__eyebrow">{t.why.eyebrow}</div>
          <h2 className="gk-why__title">{t.why.title}</h2>
          <p className="gk-why__subtitle">{t.why.subtitle}</p>
        </div>
        <div className="gk-why__list">
          {t.why.points.map((p, i) => (
            <div className="gk-whyrow" key={p.title}>
              <div className="gk-whyrow__num">{"0" + (i + 1)}</div>
              <div>
                <h3 className="gk-whyrow__title">{p.title}</h3>
                <p className="gk-whyrow__desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
