export type LangCode = "en" | "ru" | "tr" | "tk";

export interface Service {
  name: string;
  short: string;
  long: string;
  points: string[];
}

export interface WhyPoint {
  title: string;
  desc: string;
}

export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
    cta: string;
    role: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    langsLabel: string;
    location: string;
  };
  servicesIntro: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  services: Service[];
  why: {
    eyebrow: string;
    title: string;
    subtitle: string;
    points: WhyPoint[];
  };
  about: {
    eyebrow: string;
    title: string;
    role: string;
    lead: string;
    body1: string;
    body2: string;
    focusTitle: string;
    langTitle: string;
    valuesTitle: string;
    values: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    detailsTitle: string;
    emailLabel: string;
    phoneLabel: string;
    officeLabel: string;
    hoursLabel: string;
    hoursValue: string;
    followLabel: string;
    form: {
      name: string;
      email: string;
      phone: string;
      topic: string;
      topicOptions: string[];
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  ctaBand: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    tagline: string;
    contactTitle: string;
    followTitle: string;
    rights: string;
    disclaimer: string;
  };
}

export interface LanguageMeta {
  code: LangCode;
  flag: string;
  native: string;
}
