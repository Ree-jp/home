import { posts, getPostBySlug } from '$lib/content';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => posts.map((p) => ({ slug: p.slug }));

export const load: PageLoad = ({ params }) => {
  const post = getPostBySlug(params.slug);

  if (!post) throw error(404, '記事が見つかりません');

  const related = posts.filter((p) => p.slug !== params.slug).slice(0, 3);

  return { post, related };
};
