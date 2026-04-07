import * as React from 'react';
import AdminLayout from '@/src/layouts/AdminLayout';
import { Card } from '@/src/components/ui/Card';
import { Icons } from '@/src/components/ui/Icons';
import { Badge } from '@/src/components/ui/Badge';

const StatCard = ({ title, value, trend, icon: IconName, color }: { 
  title: string; 
  value: string; 
  trend: string; 
  icon: keyof typeof Icons;
  color: string;
}) => {
  const Icon = Icons[IconName];
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className={cn("p-2 rounded-lg", color)}>
          <Icon className="h-5 w-5" />
        </div>
        <Badge variant={trend.startsWith('+') ? 'success' : 'error'}>
          {trend}
        </Badge>
      </div>
      <div>
        <p className="text-sm font-medium text-text-muted">{title}</p>
        <h3 className="text-2xl font-bold text-text-primary">{value}</h3>
      </div>
    </Card>
  );
};

import { cn } from '@/src/lib/utils';

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Dashboard Executivo</h1>
          <p className="text-text-secondary">Visão geral da performance da sua clínica hoje.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Faturamento Mensal" 
            value="R$ 124.500" 
            trend="+12%" 
            icon="Finance" 
            color="bg-primary-50 text-primary-600"
          />
          <StatCard 
            title="Novos Pacientes" 
            value="48" 
            trend="+5%" 
            icon="Patients" 
            color="bg-success-50 text-success-600"
          />
          <StatCard 
            title="Taxa de Ocupação" 
            value="82%" 
            trend="+3%" 
            icon="Dashboard" 
            color="bg-info-50 text-info-600"
          />
          <StatCard 
            title="No-Show" 
            value="4.2%" 
            trend="-2%" 
            icon="Pending" 
            color="bg-warning-50 text-warning-600"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Agenda do Dia */}
          <Card className="lg:col-span-2" padding="none">
            <div className="flex items-center justify-between border-b border-border-default p-6">
              <h3 className="text-lg font-bold text-text-primary">Agenda de Hoje</h3>
              <button className="text-sm font-medium text-primary-600 hover:underline">Ver agenda completa</button>
            </div>
            <div className="divide-y divide-border-default">
              {[
                { time: '09:00', patient: 'Ana Silva', procedure: 'Limpeza', professional: 'Dr. Carlos', status: 'confirmed' },
                { time: '10:30', patient: 'Bruno Costa', procedure: 'Implante', professional: 'Dra. Julia', status: 'checked_in' },
                { time: '13:00', patient: 'Carla Dias', procedure: 'Avaliação', professional: 'Dr. Carlos', status: 'pending' },
                { time: '14:30', patient: 'Diego Lima', procedure: 'Canal', professional: 'Dra. Julia', status: 'confirmed' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="text-sm font-bold text-primary-600">{item.time}</div>
                    <div>
                      <p className="text-sm font-bold text-text-primary">{item.patient}</p>
                      <p className="text-xs text-text-muted">{item.procedure} • {item.professional}</p>
                    </div>
                  </div>
                  <Badge variant={item.status === 'checked_in' ? 'success' : item.status === 'confirmed' ? 'info' : 'neutral'}>
                    {item.status === 'checked_in' ? 'Na Clínica' : item.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Alertas e Insights */}
          <div className="space-y-6">
            <Card>
              <h3 className="mb-4 text-lg font-bold text-text-primary">Alertas de Risco</h3>
              <div className="space-y-4">
                <div className="flex gap-3 rounded-lg bg-error-50 p-3 text-error-700">
                  <Icons.Error className="h-5 w-5 shrink-0" />
                  <p className="text-sm">5 pacientes inadimplentes há mais de 30 dias.</p>
                </div>
                <div className="flex gap-3 rounded-lg bg-warning-50 p-3 text-warning-700">
                  <Icons.Pending className="h-5 w-5 shrink-0" />
                  <p className="text-sm">Estoque de resina composta está abaixo do mínimo.</p>
                </div>
              </div>
            </Card>

            <Card className="bg-primary-900 text-white border-none">
              <div className="flex items-center gap-2 mb-4">
                <Icons.Growth className="h-5 w-5 text-primary-300" />
                <h3 className="text-lg font-bold">IA Insights</h3>
              </div>
              <p className="text-sm text-primary-100 leading-relaxed">
                "Sua ociosidade às terças-feiras é de 32%. Sugerimos criar uma campanha de retorno para limpezas focada neste dia."
              </p>
              <button className="mt-4 w-full rounded-md bg-white/10 py-2 text-sm font-medium hover:bg-white/20 transition-colors">
                Ver sugestões
              </button>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
