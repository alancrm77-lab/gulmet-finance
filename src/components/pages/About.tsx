import { useLanguage } from "../../hooks/useLanguage";
import { LANGUAGES, PORTRAIT } from "../../data/site";

export function About() {
  const { t } = useLanguage();

  return (
    <div className="gk-fade">
      <section className="gk-about">
        <div className="gk-about__portrait">
          <div className="gk-portrait__frame" />
          <div className="gk-about__img-wrap">
            <img
              className="gk-about__img"
              src={PORTRAIT}
              alt="Gulmet Kulmedov"
            />
          </div>
        </div>

        <div>
          <div className="gk-eyebrow gk-about__eyebrow">{t.about.eyebrow}</div>
          <h1 className="gk-about__title">{t.about.title}</h1>
          <div className="gk-about__role">{t.about.role}</div>
          <p className="gk-about__lead">{t.about.lead}</p>
          <p className="gk-about__body">{t.about.body1}</p>
          <p className="gk-about__body">{t.about.body2}</p>

          <div className="gk-about__cols">
            <div>
              <div className="gk-about__coltitle">{t.about.focusTitle}</div>
              <div className="gk-about__collist">
                {t.services.map((s) => (
                  <div className="gk-about__focus" key={s.name}>
                    <span className="gk-diamond" />
                    {s.name}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="gk-about__coltitle">{t.about.langTitle}</div>
              <div className="gk-about__collist">
                {LANGUAGES.map((l) => (
                  <div className="gk-about__lang" key={l.code}>
                    <span className="gk-about__lang-flag">{l.flag}</span>
                    {l.native}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES BAND */}
      <section className="gk-values">
        <div className="gk-values__inner">
          <div className="gk-values__title">{t.about.valuesTitle}</div>
          <div className="gk-values__grid">
            {t.about.values.map((v, i) => (
              <div key={v}>
                <div className="gk-values__num">{"0" + (i + 1)}</div>
                <div className="gk-values__text">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
