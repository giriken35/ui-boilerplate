import { Header } from '@/components/header';
import { KpiCard } from '@/components/kpi-card';
import { ProjectProgress } from '@/components/project-progress';
import { RecentActivity } from '@/components/recent-activity';
import { SalesOverview } from '@/components/sales-overview';
import { Sidebar } from '@/components/sidebar';
import { kpiData } from '@/lib/dummy-data';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <div className="flex-1 p-8 overflow-y-auto">
          {/* Top KPI Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <KpiCard 
              title="総収益" 
              value={kpiData.revenue.value} 
              change={kpiData.revenue.change} 
              chartType="area"
              data={kpiData.revenue.chartData}
            />
            <KpiCard 
              title="新規顧客" 
              value={kpiData.customers.value} 
              change={kpiData.customers.change} 
              chartType="bar"
              data={kpiData.customers.chartData}
            />
            <KpiCard 
              title="アクティブユーザー" 
              value={kpiData.activeUsers.value} 
              change={kpiData.activeUsers.change} 
              chartType="gauge"
              data={kpiData.activeUsers.chartData}
              progress={kpiData.activeUsers.progress}
            />
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <SalesOverview />
            
            <div className="col-span-1 flex flex-col gap-6">
              <div className="flex-1">
                <ProjectProgress />
              </div>
              <div className="flex-1">
                <RecentActivity />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
