import { posts, unlockPost } from '$lib/content.server';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

export const prerender = 'auto';

export const entries: EntryGenerator = () =>
  posts.filter((p) => !p.isPasswordProtected).map((p) => ({ slug: p.slug }));

export const load: PageServerLoad = ({ params, url, setHeaders }) => {
  const meta = posts.find((p) => p.slug === params.slug);
  if (!meta) throw error(404, '記事が見つかりません');

  if (meta.isPasswordProtected) {
    setHeaders({ 'cache-control': 'private, no-store' });
  }

  const related = posts
    .filter((p) => p.slug !== params.slug && !p.isPasswordProtected)
    .slice(0, 3);

  const inputPassword = meta.isPasswordProtected ? (url.searchParams.get('password') ?? '') : '';
  const post = unlockPost(params.slug, inputPassword);

  return {
    post: post ?? { ...meta, content: '' },
    related,
    unlocked: !!post,
    wrongPassword: !post && inputPassword !== '',
  };
};
