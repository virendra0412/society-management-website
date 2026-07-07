// lib/i18n/content/types.ts
// Shared shape for all 7 standard feature pages (rendered via FeaturePageTemplate).
// Icons and hrefs are language-independent so they live alongside translated text.

export interface ContentProblem { icon: string; title: string; desc: string; }
export interface ContentFlow { icon: string; label: string; detail: string; }
export interface ContentFeature { icon: string; title: string; desc: string; }
export interface ContentFaq { q: string; a: string; }
export interface ContentRelated { icon: string; title: string; href: string; desc: string; }
export interface ContentRoleView { title: string; points: string[]; }

export interface FeaturePageContent {
  badge: string;
  emoji: string;
  headline: string;
  headlineAccent: string;
  subline: string;
  problems: ContentProblem[];
  flows: ContentFlow[];
  adminView: ContentRoleView;
  residentView: ContentRoleView;
  features: ContentFeature[];
  faqs: ContentFaq[];
  related: ContentRelated[];
  ctaHeadline: string;
  ctaSub: string;
}

export type FeaturePageSlug =
  | "maintenance"
  | "amenities"
  | "community-help"
  | "events"
  | "issues"
  | "notices"
  | "parking";
