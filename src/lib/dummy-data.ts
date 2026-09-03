export const salesData = [
  { name: '1月', revenue: 12000, expected: 10000 },
  { name: '2月', revenue: 15000, expected: 13000 },
  { name: '3月', revenue: 10000, expected: 12000 },
  { name: '4月', revenue: 18000, expected: 15000 },
  { name: '5月', revenue: 14000, expected: 16000 },
  { name: '6月', revenue: 22000, expected: 18000 },
];

export const kpiData = {
  revenue: {
    value: '¥14,250,000',
    change: '+8.2%',
    trend: 'up',
    chartData: [4, 6, 5, 8, 7, 10, 9],
  },
  customers: {
    value: '1,845',
    change: '+12%',
    trend: 'up',
    chartData: [3, 4, 3, 5, 4, 6, 8],
  },
  activeUsers: {
    value: '3,670',
    change: '+5%',
    trend: 'up',
    chartData: [7, 6, 8, 7, 9, 8, 10], 
    progress: 75,
  }
};

export const recentActivity = [
  {
    id: 1,
    user: '佐藤 健太',
    action: '新しいユーザーを追加しました',
    time: '午後 3:00',
    status: 'completed',
    type: 'user',
  },
  {
    id: 2,
    user: 'プロジェクト完了',
    action: '「ウェブサイトリニューアル」を完了しました',
    time: '午後 3:30',
    status: 'completed',
    type: 'project',
  },
  {
    id: 3,
    user: '田中 美咲',
    action: 'プロジェクトメンバーに参加しました',
    time: '午後 3:50',
    status: 'completed',
    type: 'user',
  },
];
