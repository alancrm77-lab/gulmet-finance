import type { ReactNode } from "react";

/** The four service glyphs, in the same order as the services array. */
export const SERVICE_ICONS: ReactNode[] = [
  // Life Insurance — concentric target
  <svg width="30" height="30" viewBox="0 0 28 28" fill="none" stroke="#0e2238" strokeWidth="1.5" key="life">
    <circle cx="14" cy="14" r="11" />
    <circle cx="14" cy="14" r="5" stroke="#b18f54" />
    <circle cx="14" cy="14" r="1.6" fill="#b18f54" stroke="none" />
  </svg>,
  // Long-Term Wealth Planning — rising bars
  <svg width="30" height="30" viewBox="0 0 28 28" fill="none" stroke="#0e2238" strokeWidth="1.5" key="wealth">
    <rect x="3" y="17" width="5" height="8" />
    <rect x="11.5" y="11" width="5" height="14" />
    <rect x="20" y="4" width="5" height="21" stroke="#b18f54" />
  </svg>,
  // Retirement & Annuities — clock
  <svg width="30" height="30" viewBox="0 0 28 28" fill="none" stroke="#0e2238" strokeWidth="1.5" key="retire">
    <circle cx="14" cy="14" r="11" />
    <path d="M14 7 L14 14 L19 17" stroke="#b18f54" />
  </svg>,
  // Investments & Wealth Management — diamond
  <svg width="30" height="30" viewBox="0 0 28 28" fill="none" stroke="#0e2238" strokeWidth="1.5" key="invest">
    <path d="M14 3 L25 14 L14 25 L3 14 Z" />
    <path d="M14 10 L18 14 L14 18 L10 14 Z" stroke="#b18f54" />
  </svg>,
];

export function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b18f54" strokeWidth="1.8">
      <path d="M5 12.5 L10 17.5 L19 6.5" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
