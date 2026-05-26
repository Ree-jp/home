import { PUBLIC_WP_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { WPPost } from '$lib/types/wordpress';

export const load: PageServerLoad = async ({ fetch, params, url }) => {
  const categoryParam = url.searchParams.get('category') ?? '';
  const res = await fetch(
    `${PUBLIC_WP_URL}/wp-json/wp/v2/posts?slug=${encodeURIComponent(params.slug)}&_embed`
  );

  if (!res.ok) throw error(res.status, '記事の取得に失敗しました');

  const posts: WPPost[] = await res.json();
  if (posts.length === 0) throw error(404, '記事が見つかりませんでした');

  const archiveHref = categoryParam
    ? `/blog/archive?category=${categoryParam}`
    : '/blog/archive';

  return { post: posts[0], archiveHref };
};
