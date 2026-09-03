import { Bell, Search, ChevronDown, User } from 'lucide-react';

export function Header() {
  return (
    <header className="flex items-center justify-between py-6 px-8 bg-background sticky top-0 z-10">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">パフォーマンス・ダッシュボード</h1>
      </div>

      <div className="flex items-center gap-6">
        {/* Date Filter */}
        <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
          今月
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
          <div className="text-right hidden md:block">
            <p className="text-sm text-slate-500">ようこそ、Alexさん！</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center text-slate-500">
            <User className="w-6 h-6" />
          </div>
        </div>
      </div>
    </header>
  );
}
