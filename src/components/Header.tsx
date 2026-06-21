import { NavLink, useNavigate } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { LANGUAGES } from "../data/site";

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const navigate = useNavigate();

  const navClass = ({ isActive }: { isActive: boolean }) =>
    "gk-navlink" + (isActive ? " gk-navlink--active" : "");

  return (
    <header className="gk-header">
      <div className="gk-header__inner">
        <a
          className="gk-brand"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <div className="gk-logo">GK</div>
          <div>
            <div className="gk-brand__name">Gulmet Kulmedov</div>
            <div className="gk-brand__role">{t.nav.role}</div>
          </div>
        </a>

        <nav className="gk-nav">
          <NavLink to="/" end className={navClass}>
            {t.nav.home}
          </NavLink>
          <NavLink to="/about" className={navClass}>
            {t.nav.about}
          </NavLink>
          <NavLink to="/services" className={navClass}>
            {t.nav.services}
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            {t.nav.contact}
          </NavLink>

          <div className="gk-langgroup">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                type="button"
                title={l.native}
                onClick={() => setLang(l.code)}
                className={
                  "gk-langbtn" + (l.code === lang ? " gk-langbtn--active" : "")
                }
              >
                <span className="gk-langbtn__flag">{l.flag}</span>
                {l.code.toUpperCase()}
              </button>
            ))}
          </div>

          <NavLink to="/contact" className="gk-btn gk-btn--primary gk-btn--header">
            {t.nav.cta}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
