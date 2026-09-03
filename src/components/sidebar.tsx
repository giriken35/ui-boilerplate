'use client';

import {
  LayoutDashboard,
  LineChart,
  Users,
  FolderKanban,
  Settings,
  LifeBuoy,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navItems = [
  { icon: LayoutDashboard, label: 'ダッシュボード', href: '#', active: true },
  { icon: LineChart, label: 'アナリティクス', href: '#' },
  { icon: Users, label: 'チームメンバー', href: '#' },
  { icon: FolderKanban, label: 'プロジェクト', href: '#' },
  { icon: Settings, label: '設定', href: '#' },
  { icon: LifeBuoy, label: 'サポート', href: '#' },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('ダッシュボード');

  return (
    <aside className="w-64 bg-sidebar-bg flex flex-col h-screen rounded-r-3xl text-sidebar-text shadow-xl z-20 sticky top-0">
      {/* Logo Area */}
      <div className="p-8 flex items-center gap-3">
        <div className="w-8 h-8 bg-sidebar-logo rounded-lg flex items-center justify-center text-sidebar-bg font-bold text-xl relative overflow-hidden">
           <div className="absolute w-full h-full bg-gradient-to-br from-white/40 to-transparent z-10" />
           <span className="relative z-20">S</span>
        </div>
        <span className="text-white font-semibold tracking-wide text-xl">SYNAPSE</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-2 space-y-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.label === activeItem;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveItem(item.label);
              }}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group',
                isActive
                  ? 'bg-sidebar-active text-sidebar-textActive'
                  : 'hover:bg-sidebar-active/50 hover:text-white'
              )}
            >
              <Icon
                className={cn(
                  'w-5 h-5 transition-colors',
                  isActive ? 'text-primary' : 'text-sidebar-text group-hover:text-primary/70'
                )}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
