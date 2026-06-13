import { posts } from '$lib/content.server';
import { PUBLIC_WP_URL } from '$env/static/public';
import type { RequestHandler } from './$types';
import type { WPPost } from '$lib/types/wordpress';

const SITE_URL = 'https://about.reesuke.com';

const staticRoutes = [
  { url: '/', priority: '1.0', changefreq: 'monthly' },
  { url: '/blog', priority: '0.9', changefreq: 'daily' },
  { url: '/blog/archive', priority: '0.7', changefreq: 'weekly' },
];

async function fetchAllWpSlugs(fetchFn: typeof fetch): Promise<{ slug: string; date: string }[]> {
  const perPage = 100;
  const firstRes = await fetchFn(
    `${PUBLIC_WP_URL}/wp-json/wp/v2/posts?per_page=${perPage}&page=1&_fields=slug,date`
  );
  if (!firstRes.ok) return [];

  const totalPages = Number(firstRes.headers.get('X-WP-TotalPages') ?? '1');
  const firstPage: WPPost[] = await firstRes.json();

  if (totalPages <= 1) return firstPage.map((p) => ({ slug: p.slug, date: p.date }));

  const rest = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, i) =>
      fetchFn(
        `${PUBLIC_WP_URL}/wp-json/wp/v2/posts?per_page=${perPage}&page=${i + 2}&_fields=slug,date`
      ).then((r) => (r.ok ? (r.json() as Promise<WPPost[]>) : Promise.resolve([])))
    )
  );

  return [...firstPage, ...rest.flat()].map((p) => ({ slug: p.slug, date: p.date }));
}

export const GET: RequestHandler = async ({ fetch }) => {
  const localBlogPosts = posts.filter((p) => !p.isPasswordProtected);
  const wpPosts = await fetchAllWpSlugs(fetch).catch(() => []);

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
    ...wpPosts.map(
      ({ slug, date }) => `
  <url>
    <loc>${SITE_URL}/blog/archive/${slug}</loc>
    <lastmod>${date.split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
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
