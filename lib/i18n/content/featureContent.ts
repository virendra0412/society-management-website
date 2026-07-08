// lib/i18n/content/featureContent.ts
// Aggregates the 7 standard feature pages from lib/i18n/content/features/*.ts.
// Each slug's content lives in its own file to keep individual files
// manageable — edit lib/i18n/content/features/<slug>.ts to add/update a
// locale for that page, not this file.
//
// Status (see lib/i18n/content/features/<slug>.ts for exact per-locale detail):
//   en / hi / gu / ta — complete for all 7 slugs
//   mr / pa           — not yet added; getFeatureContent() falls back to en

import type { FeaturePageContent, FeaturePageSlug } from './types';
import type { Locale } from '../translations';

import maintenance from './features/maintenance';
import amenities from './features/amenities';
import communityHelp from './features/community-help';
import events from './features/events';
import issues from './features/issues';
import notices from './features/notices';
import parking from './features/parking';

const content: Record<FeaturePageSlug, Partial<Record<Locale, FeaturePageContent>>> = {
  "maintenance": maintenance,
  "amenities": amenities,
  "community-help": communityHelp,
  "events": events,
  "issues": issues,
  "notices": notices,
  "parking": parking,
};

// ─── Accessor with EN fallback ──────────────────────────────────────────────

export function getFeatureContent(
  slug: FeaturePageSlug,
  locale: Locale
): FeaturePageContent {
  const page = content[slug];
  // MR / PA fall back to EN until translations are added
  return (page[locale] ?? page['en']) as FeaturePageContent;
}
