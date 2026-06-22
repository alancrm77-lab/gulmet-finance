import type { LanguageMeta } from "../i18n/types";

export const LANGUAGES: LanguageMeta[] = [
  { code: "en", flag: "🇺🇸", native: "English" },
  { code: "ru", flag: "🇷🇺", native: "Русский" },
  { code: "tr", flag: "🇹🇷", native: "Türkçe" },
  { code: "tk", flag: "🇹🇲", native: "Türkmençe" },
];

// Placeholder contact details — swap in real values when available.
export const CONTACT = {
  email: "gulmet.kulmedov@example.com",
  phone: "+1 (206) 555-0142",
  phoneRaw: "+12065550142",
  office: "1201 Third Avenue, Seattle, WA 98101",
};

export const INSTAGRAM_URL = "https://www.instagram.com/gulmetfinance/";
export const INSTAGRAM_HANDLE = "@gulmetfinance";

// Web3Forms access key. This is a PUBLIC, client-side key — it ships in the JS
// bundle by design, so committing it is fine. Submissions go to the inbox you
// configured in the Web3Forms dashboard. Lock it to your domain there to stop
// others using your quota. Override per-environment with VITE_WEB3FORMS_KEY.
export const WEB3FORMS_KEY =
  (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) ||
  "f90e4029-ba23-42cc-9422-df2c9faacfd7";

// Public assets must be prefixed with Vite's base so they resolve under the
// GitHub Pages subpath as well as at the domain root in dev.
export const PORTRAIT = `${import.meta.env.BASE_URL}assets/gulmet.png`;
