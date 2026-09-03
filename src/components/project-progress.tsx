import { MoreHorizontal } from 'lucide-react';

export function ProjectProgress() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-lg font-bold text-slate-800">プロジェクト進捗</h2>
        <button className="text-slate-400 hover:text-slate-600 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div>
           <p className="text-sm text-slate-500 mb-1">タスク</p>
           <p className="font-semibold text-slate-800">25件</p>
        </div>
        <div>
           <p className="text-sm text-slate-500 mb-1">期限</p>
           <p className="font-semibold text-slate-800">完了</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center relative min-h-[160px]">
        {/* Simple CSS-based circular progress for demonstration, or use svg */}
        <div className="relative w-36 h-36">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              className="text-slate-100 stroke-current"
              strokeWidth="10"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <circle
              className="text-primary stroke-current"
              strokeWidth="10"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDasharray="251.2"
              strokeDashoffset="62.8" /* 75% progress */
            ></circle>
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-3xl font-bold text-slate-800 block">75%</span>
            <span className="text-xs text-slate-500 block -mt-1">完了</span>
          </div>
        </div>
      </div>
    </div>
  );
}
