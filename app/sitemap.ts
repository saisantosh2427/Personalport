import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://[ADD-DOMAIN]', lastModified: new Date() }];
}
