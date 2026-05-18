export type Work = {
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  tags: string[];
};

export const works: Work[] = [
  {
    title: '採用管理WEBアプリ開発',
    company: 'HRクラウド株式会社',
    period: '2025年3月〜2026年3月',
    type: '長期インターン',
    description: '採用管理WEBアプリケーションの機能開発およびAWSインフラの構築・運用を担当。',
    tags: ['PHP', 'React', 'Python', 'AWS']
  },
  {
    title: 'Eラーニングアプリ開発',
    company: 'TRUNK株式会社',
    period: '2025年12月〜現在',
    type: '長期インターン',
    description: '資格試験対応のWEB学習アプリケーションの開発を担当。',
    tags: ['Next.js', 'TypeScript', 'Zod', 'Prisma']
  },
  {
    title: 'Pixiv Spring Boot Camp 2026',
    company: 'ピクシブ株式会社',
    period: '2026年3月4日〜13日（8日間）',
    type: '就業型インターン',
    description: 'Webサービス「Pixiv リクエスト」の就業型インターン。実際のプロダクト開発に参加。',
    tags: ['PHP', 'Next.js']
  },
  {
    title: '物理サーバー構築＆ネットワーク構築体験',
    company: '株式会社サイバーエージェント',
    period: '2025年7月5日（1day）',
    type: '1dayインターン',
    description:
      'データセンター見学、物理サーバーを触りながらのハードウェア説明、グループワーク、ネットワーク構築を体験。',
    tags: ['物理サーバー', 'ネットワーク', 'インフラ']
  },
  {
    title: 'はてなサマーインターン',
    company: '株式会社はてな',
    period: '2025年8月18日〜22日（1week）',
    type: '短期インターン',
    description: 'はてなの技術力を活かした実践的なインターンプログラムに参加。',
    tags: ['はてな']
  }
];
