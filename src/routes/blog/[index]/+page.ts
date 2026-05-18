import { posts, type BlogPost } from '$lib/data/posts';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const index = parseInt(params.index, 10);
  const post: BlogPost | undefined = posts[index];

  if (!post) {
    throw error(404, '記事が見つかりません');
  }

  const related = posts
    .map((p: BlogPost, i: number) => ({ post: p, index: i }))
    .filter(({ index: i }: { post: BlogPost; index: number }) => i !== index)
    .slice(0, 3);

  return { post, index, related };
};
