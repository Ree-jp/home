export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  period: string;
  achievement?: string;
  category: string;
};

export const projects: Project[] = [
  {
    title: 'すごすぎる時間割',
    description:
      'HackU名城で開発したアプリを新しく立ち上げたサークルで継続開発・リリース。学務システム連携など多機能な学生向けアプリ。',
    tags: ['Flutter', 'スクレイピング'],
    link: 'https://www.jogiken.com/sugosugiru',
    period: '2025年3月〜現在',
    achievement: '2,000 DL',
    category: 'チーム開発'
  },
  {
    title: 'ReefServer',
    description:
      'Minecraftのカスタムサーバーを4年以上個人で開発・運営。ユニークユーザー1000人超え、Discord Partner Program認定。',
    tags: ['PHP', 'Kotlin', 'MariaDB', 'Docker', 'React'],
    link: 'https://reef.ree-jp.net',
    period: '2019年10月〜2024年1月',
    achievement: '累計1万ユーザー',
    category: '個人開発'
  },
  {
    title: 'HackU 名城大学 2025',
    description: '名城大学学長賞を受賞したハッカソン作品。リーダーとして開発をリード。',
    tags: ['Next.js'],
    period: '2025年11月〜12月',
    achievement: '名城大学学長賞',
    category: 'ハッカソン'
  },
  {
    title: 'HackAichi',
    description:
      '社内副業マッチングアプリを開発。リーダー兼フロント・バックエンド開発担当。スワイプUI＋ChatGPTによる業務提案機能が特徴。',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'ChatGPT'],
    period: '2024年9月（約2週間）',
    achievement: 'CKD賞・名古屋テレビ放送賞',
    category: 'ハッカソン'
  },
  {
    title: 'HackU 名城大学 2024',
    description:
      '名城大学の学生生活を支援する多機能アプリ。時間割・課題・空き教室検索など。大学システムをリバースエンジニアリングしてデータ取得を自動化。',
    tags: ['Flutter', 'スレイピング'],
    period: '2024年11月〜12月',
    achievement: '名城大学賞',
    category: 'ハッカソン'
  },
  {
    title: 'メモアプリ',
    description: 'Notionライクな簡易メモWebアプリ。',
    tags: ['PHP', 'FuelPHP', 'knockoutjs', 'React'],
    link: 'https://memo.reesuke.com',
    period: '2025年1月（約2週間）',
    category: '個人開発'
  }
];
