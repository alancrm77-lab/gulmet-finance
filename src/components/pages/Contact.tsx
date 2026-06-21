import { useState, type FormEvent } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import {
  CONTACT,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "../../data/site";
import { CheckIcon } from "../icons";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!WEB3FORMS_KEY) {
      console.error(
        "[contact] VITE_WEB3FORMS_KEY is not set — copy .env.example to .env and add your Web3Forms access key.",
      );
      setStatus("error");
      return;
    }

    data.append("access_key", WEB3FORMS_KEY);
    data.append("from_name", "Gulmet Kulmedov Website");
    data.append(
      "subject",
      `New consultation request (${String(data.get("name") || "")})`,
    );
    data.append("language", lang);

    setStatus("submitting");
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        form.reset();
        setStatus("success");
      } else {
        console.error("[contact] Web3Forms error:", json);
        setStatus("error");
      }
    } catch (err) {
      console.error("[contact] submission failed:", err);
      setStatus("error");
    }
  }

  return (
    <div className="gk-fade">
      <section className="gk-contact">
        {/* Details column */}
        <div>
          <div className="gk-eyebrow gk-contact__eyebrow">
            {t.contact.eyebrow}
          </div>
          <h1 className="gk-contact__title">{t.contact.title}</h1>
          <p className="gk-contact__subtitle">{t.contact.subtitle}</p>

          <div className="gk-contact__details">
            <div className="gk-contact__details-title">
              {t.contact.detailsTitle}
            </div>

            <a className="gk-detail" href={`mailto:${CONTACT.email}`}>
              <span className="gk-detail__label">{t.contact.emailLabel}</span>
              <span className="gk-detail__value">{CONTACT.email}</span>
            </a>
            <a className="gk-detail" href={`tel:${CONTACT.phoneRaw}`}>
              <span className="gk-detail__label">{t.contact.phoneLabel}</span>
              <span className="gk-detail__value">{CONTACT.phone}</span>
            </a>
            <div className="gk-detail gk-detail--top">
              <span className="gk-detail__label">{t.contact.officeLabel}</span>
              <span className="gk-detail__value">{CONTACT.office}</span>
            </div>
            <div className="gk-detail gk-detail--top">
              <span className="gk-detail__label">{t.contact.hoursLabel}</span>
              <span className="gk-detail__value gk-detail__value--hours">
                {t.contact.hoursValue}
              </span>
            </div>
            <a
              className="gk-detail gk-detail--last"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="gk-detail__label">{t.contact.followLabel}</span>
              <span className="gk-detail__value">{INSTAGRAM_HANDLE} ↗</span>
            </a>
          </div>
        </div>

        {/* Form column */}
        <div className="gk-formcard">
          {status === "success" ? (
            <div className="gk-form__success">
              <div className="gk-form__success-icon">
                <CheckIcon />
              </div>
              <p className="gk-form__success-text">{t.contact.form.success}</p>
              <button
                type="button"
                className="gk-form__reset"
                onClick={() => setStatus("idle")}
              >
                ↺
              </button>
            </div>
          ) : (
            <form className="gk-form" onSubmit={handleSubmit}>
              <label className="gk-field">
                <span className="gk-field__label">{t.contact.form.name}</span>
                <input className="gk-input" type="text" name="name" required />
              </label>
              <label className="gk-field">
                <span className="gk-field__label">{t.contact.form.email}</span>
                <input className="gk-input" type="email" name="email" required />
              </label>
              <label className="gk-field">
                <span className="gk-field__label">{t.contact.form.phone}</span>
                <input className="gk-input" type="tel" name="phone" />
              </label>
              <label className="gk-field">
                <span className="gk-field__label">{t.contact.form.topic}</span>
                <select className="gk-input" name="topic">
                  {t.contact.form.topicOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
              <label className="gk-field">
                <span className="gk-field__label">{t.contact.form.message}</span>
                <textarea className="gk-input" name="message" rows={4} />
              </label>

              {status === "error" && (
                <p className="gk-form__error">{t.contact.form.error}</p>
              )}

              <button
                type="submit"
                className="gk-form__submit"
                disabled={status === "submitting"}
              >
                {status === "submitting"
                  ? t.contact.form.sending
                  : t.contact.form.submit}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
