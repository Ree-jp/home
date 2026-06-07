import { marked } from 'marked';

const xUrlPattern = /^https?:\/\/(twitter\.com|x\.com)\/\w+\/status\/(\d+)[^\s]*$/;

function createRenderer(slug: string) {
  const renderer = new marked.Renderer();

  const originalParagraph = renderer.paragraph.bind(renderer);
  renderer.paragraph = (token) => {
    const { tokens } = token;
    if (tokens.length === 1 && tokens[0].type === 'link') {
      const href = tokens[0].href.trim();
      if (xUrlPattern.test(href)) {
        return `<blockquote class="twitter-tweet"><a href="${href}"></a></blockquote>`;
      }
    }
    return originalParagraph(token);
  };

  renderer.image = (token) => {
    let href = token.href;
    if (href.startsWith('./')) {
      href = `/blog/${slug}/${href.slice(2)}`;
    }
    const title = token.title ? ` title="${token.title}"` : '';
    return `<img src="${href}" alt="${token.text}"${title}>`;
  };

  return renderer;
}

const files = import.meta.glob('/content/posts/*/article.md', { query: '?raw', import: 'default', eager: true });

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  featured: boolean;
  readTime: string;
  content: string;
};

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, unknown> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const val = line.slice(colon + 1).trim();
    if (val === 'true') data[key] = true;
    else if (val === 'false') data[key] = false;
    else data[key] = val.replace(/^['"]|['"]$/g, '');
  }

  return { data, content: match[2] };
}

function calcReadTime(markdown: string): string {
  const minutes = Math.max(1, Math.ceil(markdown.trim().length / 600));
  return `${minutes} min`;
}

function fallbackImage(slug: string): string {
  const n = (slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 8) + 1;
  return `/images/blog/blog-0${n}.webp`;
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.match(/\/content\/posts\/(.+?)\/article\.md/)![1];
    const { data, content } = parseFrontmatter(raw as string);
    return {
      slug,
      title: String(data.title ?? ''),
      date: String(data.date ?? ''),
      category: String(data.category ?? ''),
      excerpt: String(data.excerpt ?? ''),
      image: data.image ? `/blog/${slug}/${data.image}` : fallbackImage(slug),
      featured: data.featured === true,
      readTime: calcReadTime(content),
      content: marked(content, { renderer: createRenderer(slug) }) as string,
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
