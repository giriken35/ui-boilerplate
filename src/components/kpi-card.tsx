'use client';

import { MoreHorizontal } from 'lucide-react';
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer } from 'recharts';

interface KpiCardProps {
  title: string;
  value: string | number;
  change: string;
  chartType: 'area' | 'bar' | 'gauge';
  data: number[];
  progress?: number;
}

export function KpiCard({ title, value, change, chartType, data, progress }: KpiCardProps) {
  const chartData = data.map((val, i) => ({ name: i, value: val }));

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between h-40">
      <div className="flex justify-between items-start">
        <h3 className="text-slate-500 font-medium text-sm">{title}</h3>
        <button className="text-slate-400 hover:text-slate-600 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-end justify-between mt-2">
        <div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-2xl font-bold text-slate-800">{value}</h2>
            <span className="text-xs font-medium text-primary bg-primary-light px-2 py-0.5 rounded-full">
              {change}
            </span>
          </div>
        </div>

        <div className="w-24 h-12">
          {chartType === 'area' && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#22c55e"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          )}

          {chartType === 'bar' && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <Bar dataKey="value" fill="#22c55e" radius={[2, 2, 0, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          )}

          {chartType === 'gauge' && (
            <div className="relative w-full h-full flex items-end justify-center overflow-hidden pb-1">
              {/* Semi-circle gauge using SVG */}
              <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                <path
                  d="M 10 50 A 40 40 0 0 1 90 50"
                  fill="none"
                  stroke="#e8f5e9"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                <path
                  d="M 10 50 A 40 40 0 0 1 90 50"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${(progress || 0) * 1.25} 125`}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              {/* Needle/indicator could be added here, but gauge is simple enough */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
