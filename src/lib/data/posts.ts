export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  link?: string;
  featured?: boolean;
};

export const posts: BlogPost[] = [
  {
    title: '[サンプル記事] ここに記事タイトルが入ります（Featured）',
    excerpt:
      'これはダミーのリード文です。実際の記事に差し替えてください。Lorem ipsum dolor sit amet, consectetur adipiscing elit. — このカードはFeatured記事のレイアウト確認用サンプルです。',
    date: 'YYYY-MM-DD',
    category: 'Sample',
    readTime: '0 min',
    image: '/images/blog/blog-01.webp',
    featured: true
  },
  {
    title: '[サンプル記事 01] タイトルのダミーテキスト',
    excerpt:
      'これはサンプル記事です。あとで実際の内容に置き換えてください。レイアウト確認用のダミーテキストが入っています。',
    date: 'YYYY-MM-DD',
    category: 'Sample',
    readTime: '0 min',
    image: '/images/blog/blog-02.webp'
  },
  {
    title: '[サンプル記事 02] タイトルのダミーテキスト',
    excerpt:
      'これはサンプル記事です。あとで実際の内容に置き換えてください。Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'YYYY-MM-DD',
    category: 'Sample',
    readTime: '0 min',
    image: '/images/blog/blog-03.webp'
  },
  {
    title: '[サンプル記事 03] タイトルのダミーテキスト',
    excerpt:
      'これはサンプル記事です。あとで実際の内容に置き換えてください。レイアウト確認用のダミーテキストが入っています。',
    date: 'YYYY-MM-DD',
    category: 'Sample',
    readTime: '0 min',
    image: '/images/blog/blog-04.webp'
  },
  {
    title: '[サンプル記事 04] タイトルのダミーテキスト',
    excerpt:
      'これはサンプル記事です。あとで実際の内容に置き換えてください。Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'YYYY-MM-DD',
    category: 'Sample',
    readTime: '0 min',
    image: '/images/blog/blog-05.webp'
  },
  {
    title: '[サンプル記事 05] タイトルのダミーテキスト',
    excerpt:
      'これはサンプル記事です。あとで実際の内容に置き換えてください。レイアウト確認用のダミーテキストが入っています。',
    date: 'YYYY-MM-DD',
    category: 'Sample',
    readTime: '0 min',
    image: '/images/blog/blog-06.webp'
  },
  {
    title: '[サンプル記事 06] タイトルのダミーテキスト',
    excerpt:
      'これはサンプル記事です。あとで実際の内容に置き換えてください。Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'YYYY-MM-DD',
    category: 'Sample',
    readTime: '0 min',
    image: '/images/blog/blog-07.webp'
  }
];
