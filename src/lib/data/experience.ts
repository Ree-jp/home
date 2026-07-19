export type ExperienceCategory = 'イベントスタッフ・登壇' | 'イベント参加' | 'その他の活動';

export const experienceCategories: ExperienceCategory[] = [
  'イベントスタッフ・登壇',
  'イベント参加',
  'その他の活動'
];

export type Experience = {
  title: string;
  period: string;
  category: ExperienceCategory;
  role?: string;
  link?: string;
};

export const experience: Experience[] = [
  {
    title: 'InternetWeek2025 NOC',
    period: '2025年9月〜11月（会期: 11月25日〜27日）',
    category: 'イベントスタッフ・登壇',
    role: 'Serverチーム',
    link: 'https://internetweek.jp/2025/'
  },
  {
    title: 'JANOG58 NOC',
    period: '2026年4月〜7月（会期: 7月15日〜17日）',
    category: 'イベントスタッフ・登壇',
    role: 'CABLEチーム / BoF登壇'
  },
  {
    title: 'ChuNOG 7 NOC',
    period: '2026年1月〜2月（会期: 2月26日）',
    category: 'イベントスタッフ・登壇',
    role: 'APチーム / BoF登壇'
  },
  {
    title: 'TSKaigi 2026',
    period: '2026年5月22日〜23日（2Days）',
    category: 'イベント参加',
    role: '学生支援スカラシップ',
    link: 'https://2026.tskaigi.org/'
  },
  {
    title: 'Vue Fes Japan 2026',
    period: '2026年10月24日（1Day）',
    category: 'イベント参加',
    role: '学生支援',
    link: 'https://vuefes.jp/2026/'
  },
  {
    title: 'TechTrain Mentor Kaigi 2025',
    period: '2025年',
    category: 'その他の活動',
    role: '学生スタッフ',
    link: 'https://techtrain.connpass.com/event/355363/'
  },
  {
    title: 'NagoyaBoost10000 人材BOOSTプログラム',
    period: '2024年9月〜2025年2月',
    category: 'その他の活動',
    link: 'https://nagoyaboost.jp/2024/program.html'
  },
  {
    title: 'Google AI 学生アンバサダー',
    period: '2025年8月〜',
    category: 'その他の活動',
    link: 'https://sites.google.com/qutori.jp/gemini-student-ambassador/'
  }
];
