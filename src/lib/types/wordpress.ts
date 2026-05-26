export type WPPost = {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
};

export type WPTag = {
  id: number;
  name: string;
  slug: string;
  count: number;
};

export type WPCategory = {
  id: number;
  name: string;
  slug: string;
  count: number;
};
