import { useLanguage } from "../hooks/useLanguage";
import { CONTACT, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../data/site";
import { InstagramIcon } from "./icons";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="gk-footer">
      <div className="gk-footer__inner">
        <div className="gk-footer__top">
          <div>
            <div className="gk-footer__brand">
              <div className="gk-logo">GK</div>
              <div className="gk-footer__brand-name">Gulmet Kulmedov</div>
            </div>
            <p className="gk-footer__tagline">{t.footer.tagline}</p>
          </div>

          <div>
            <div className="gk-footer__coltitle">{t.footer.contactTitle}</div>
            <div className="gk-footer__links">
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <a href={`tel:${CONTACT.phoneRaw}`}>{CONTACT.phone}</a>
              <span>{CONTACT.office}</span>
            </div>
          </div>

          <div>
            <div className="gk-footer__coltitle">{t.footer.followTitle}</div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gk-footer__insta"
            >
              <InstagramIcon />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="gk-footer__bottom">
          <p className="gk-footer__disclaimer">{t.footer.disclaimer}</p>
          <div className="gk-footer__rights">{t.footer.rights}</div>
        </div>
      </div>
    </footer>
  );
}
