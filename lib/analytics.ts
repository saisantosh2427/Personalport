export type AnalyticsEvent = 'linkedin_click' | 'github_click' | 'email_click' | 'resume_download';

/**
 * Fires a named event to gtag/dataLayer if present. No-ops otherwise, so this
 * is safe to wire up now and connect to a real analytics tool later.
 */
export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === 'undefined') return;
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
  if (typeof w.gtag === 'function') { w.gtag('event', event); return; }
  if (Array.isArray(w.dataLayer)) { w.dataLayer.push({ event }); }
}
