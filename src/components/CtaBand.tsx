import { useNavigate } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

export function CtaBand() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="gk-cta">
      <div className="gk-cta__inner">
        <div className="gk-cta__copy">
          <h2 className="gk-cta__title">{t.ctaBand.title}</h2>
          <p className="gk-cta__subtitle">{t.ctaBand.subtitle}</p>
        </div>
        <button
          type="button"
          className="gk-btn gk-btn--gold gk-cta__btn"
          onClick={() => navigate("/contact")}
        >
          {t.ctaBand.button}
        </button>
      </div>
    </section>
  );
}
