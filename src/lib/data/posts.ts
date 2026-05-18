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
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80',
    featured: true
  },
  {
    title: '[サンプル記事 01] タイトルのダミーテキスト',
    excerpt:
      'これはサンプル記事です。あとで実際の内容に置き換えてください。レイアウト確認用のダミーテキストが入っています。',
    date: 'YYYY-MM-DD',
    category: 'Sample',
    readTime: '0 min',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80'
  },
  {
    title: '[サンプル記事 02] タイトルのダミーテキスト',
    excerpt:
      'これはサンプル記事です。あとで実際の内容に置き換えてください。Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'YYYY-MM-DD',
    category: 'Sample',
    readTime: '0 min',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80'
  },
  {
    title: '[サンプル記事 03] タイトルのダミーテキスト',
    excerpt:
      'これはサンプル記事です。あとで実際の内容に置き換えてください。レイアウト確認用のダミーテキストが入っています。',
    date: 'YYYY-MM-DD',
    category: 'Sample',
    readTime: '0 min',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80'
  },
  {
    title: '[サンプル記事 04] タイトルのダミーテキスト',
    excerpt:
      'これはサンプル記事です。あとで実際の内容に置き換えてください。Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'YYYY-MM-DD',
    category: 'Sample',
    readTime: '0 min',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80'
  },
  {
    title: '[サンプル記事 05] タイトルのダミーテキスト',
    excerpt:
      'これはサンプル記事です。あとで実際の内容に置き換えてください。レイアウト確認用のダミーテキストが入っています。',
    date: 'YYYY-MM-DD',
    category: 'Sample',
    readTime: '0 min',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80'
  },
  {
    title: '[サンプル記事 06] タイトルのダミーテキスト',
    excerpt:
      'これはサンプル記事です。あとで実際の内容に置き換えてください。Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'YYYY-MM-DD',
    category: 'Sample',
    readTime: '0 min',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1200&q=80'
  }
];
