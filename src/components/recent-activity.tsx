import { MoreHorizontal, User, Folder } from 'lucide-react';
import { recentActivity } from '@/lib/dummy-data';
import { cn } from '@/lib/utils';

export function RecentActivity() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-lg font-bold text-slate-800">最近のアクティビティ</h2>
        <button className="text-slate-400 hover:text-slate-600 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="relative pl-3 space-y-6">
        {/* Timeline line */}
        <div className="absolute left-7 top-2 bottom-2 w-[2px] bg-slate-100 z-0"></div>

        {recentActivity.map((activity) => (
          <div key={activity.id} className="relative z-10 flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-white p-0.5 shadow-sm border border-slate-100 shrink-0">
               <div className={cn(
                 "w-full h-full rounded-full flex items-center justify-center relative overflow-hidden",
                 activity.type === 'user' ? 'bg-purple-100 text-purple-600' : 'bg-green-100 text-green-600'
               )}>
                 {activity.type === 'user' ? (
                   <User className="w-4 h-4" />
                 ) : (
                   <Folder className="w-4 h-4" />
                 )}
               </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800 truncate">{activity.user}</p>
              <p className="text-xs text-slate-500 truncate">{activity.action}</p>
            </div>
            
            <div className="shrink-0 text-xs text-slate-400 font-medium whitespace-nowrap">
              {activity.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
