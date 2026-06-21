import { useLanguage } from "../../hooks/useLanguage";

export function Services() {
  const { t } = useLanguage();

  return (
    <div className="gk-fade">
      <section className="gk-services-head">
        <div className="gk-services-head__inner">
          <div className="gk-eyebrow gk-services-head__eyebrow">
            {t.servicesIntro.eyebrow}
          </div>
          <h1 className="gk-services-head__title">{t.servicesIntro.title}</h1>
          <p className="gk-services-head__subtitle">
            {t.servicesIntro.subtitle}
          </p>
        </div>
      </section>

      <section className="gk-services-list">
        {t.services.map((s, i) => (
          <div className="gk-servicerow" key={s.name}>
            <div>
              <div className="gk-servicerow__numline">
                <div className="gk-servicerow__num">{"0" + (i + 1)}</div>
                <div className="gk-servicerow__rule" />
              </div>
              <h2 className="gk-servicerow__title">{s.name}</h2>
            </div>
            <div>
              <p className="gk-servicerow__long">{s.long}</p>
              <div className="gk-servicerow__points">
                {s.points.map((pt) => (
                  <div className="gk-servicerow__point" key={pt}>
                    <span className="gk-diamond" />
                    {pt}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
