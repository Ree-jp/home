import { PUBLIC_WP_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { WPPost, WPCategory } from '$lib/types/wordpress';

export const load: PageServerLoad = async ({ fetch, url }) => {
  const page = Number(url.searchParams.get('page') ?? '1');
  const categorySlugs = url.searchParams.getAll('category');
  const perPage = 12;

  const [categoryIds, categoriesRes] = await Promise.all([
    resolveSlugsToIds(fetch, categorySlugs),
    fetch(`${PUBLIC_WP_URL}/wp-json/wp/v2/categories?per_page=100&orderby=count&order=desc`)
  ]);

  const postsUrl = new URL(`${PUBLIC_WP_URL}/wp-json/wp/v2/posts`);
  postsUrl.searchParams.set('_embed', '');
  postsUrl.searchParams.set('per_page', String(perPage));
  postsUrl.searchParams.set('page', String(page));
  if (categoryIds.length > 0) postsUrl.searchParams.set('categories', categoryIds.join(','));

  const postsRes = await fetch(postsUrl.toString());
  if (!postsRes.ok) throw error(postsRes.status, 'WordPress API からの取得に失敗しました');

  const posts: WPPost[] = await postsRes.json();
  const categories: WPCategory[] = categoriesRes.ok ? await categoriesRes.json() : [];
  const totalPages = Number(postsRes.headers.get('X-WP-TotalPages') ?? '1');
  const total = Number(postsRes.headers.get('X-WP-Total') ?? '0');

  return { posts, page, totalPages, total, categories, categorySlugs };
};

async function resolveSlugsToIds(
  fetch: typeof globalThis.fetch,
  slugs: string[]
): Promise<number[]> {
  if (slugs.length === 0) return [];
  const res = await fetch(
    `${PUBLIC_WP_URL}/wp-json/wp/v2/categories?slug=${slugs.map(encodeURIComponent).join(',')}&per_page=${slugs.length}`
  );
  if (!res.ok) return [];
  const categories: WPCategory[] = await res.json();
  return categories.map((c) => c.id);
}
