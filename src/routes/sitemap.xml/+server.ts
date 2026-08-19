import { posts } from '$lib/content.server';
import type { RequestHandler } from './$types';

const SITE_URL = 'https://about.reesuke.com';

const staticRoutes = [
  { url: '/', priority: '1.0', changefreq: 'monthly' },
  { url: '/blog', priority: '0.9', changefreq: 'daily' },
  { url: '/credits', priority: '0.3', changefreq: 'yearly' },
];

export const GET: RequestHandler = async () => {
  const localBlogPosts = posts.filter((p) => !p.isPasswordProtected);

  const urls = [
    ...staticRoutes.map(
      ({ url, priority, changefreq }) => `
  <url>
    <loc>${SITE_URL}${url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    ),
    ...localBlogPosts.map(
      (p) => `
  <url>
    <loc>${SITE_URL}/blog/${p.slug}</loc>
    <lastmod>${p.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    ),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600',
    },
  });
};
