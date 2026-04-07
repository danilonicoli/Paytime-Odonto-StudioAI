import * as React from 'react';
import AdminLayout from '@/src/layouts/AdminLayout';
import { Card } from '@/src/components/ui/Card';
import { Icons } from '@/src/components/ui/Icons';
import { Button } from '@/src/components/ui/Button';
import { Badge } from '@/src/components/ui/Badge';
import { cn } from '@/src/lib/utils';

const HOURS = Array.from({ length: 11 }, (_, i) => `${i + 8}:00`);
const PROFESSIONALS = ['Dr. Carlos', 'Dra. Julia', 'Dr. Marcos', 'Dra. Ana'];

export default function AgendaMestra() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Agenda Mestra</h1>
            <p className="text-text-secondary">Gestão completa de horários e profissionais.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" className="flex gap-2">
              <Icons.Filter className="h-4 w-4" />
              Filtros
            </Button>
            <Button variant="primary" className="flex gap-2">
              <Icons.Plus className="h-4 w-4" />
              Novo Agendamento
            </Button>
          </div>
        </div>

        {/* Calendar Controls */}
        <Card className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Icons.ArrowLeft className="h-4 w-4" />
            </Button>
            <h3 className="text-lg font-bold text-text-primary">10 de Abril, 2026</h3>
            <Button variant="ghost" size="sm">
              <Icons.ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="sm">Hoje</Button>
          </div>
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button className="px-4 py-1.5 text-sm font-bold bg-white rounded-md shadow-sm text-primary-600">Dia</button>
            <button className="px-4 py-1.5 text-sm font-medium text-text-secondary">Semana</button>
            <button className="px-4 py-1.5 text-sm font-medium text-text-secondary">Mês</button>
          </div>
        </Card>

        {/* Agenda Grid */}
        <Card padding="none" className="overflow-hidden">
          <div className="grid grid-cols-[100px_repeat(4,1fr)] border-b border-border-default bg-gray-50">
            <div className="p-4 border-r border-border-default" />
            {PROFESSIONALS.map((name) => (
              <div key={name} className="p-4 border-r border-border-default text-center">
                <p className="text-sm font-bold text-text-primary">{name}</p>
                <p className="text-xs text-text-muted">Clínica Geral</p>
              </div>
            ))}
          </div>

          <div className="relative">
            {HOURS.map((hour) => (
              <div key={hour} className="grid grid-cols-[100px_repeat(4,1fr)] border-b border-border-default min-h-[100px]">
                <div className="p-4 border-r border-border-default text-sm font-medium text-text-muted text-center">
                  {hour}
                </div>
                {PROFESSIONALS.map((_, i) => (
                  <div key={i} className="border-r border-border-default relative group hover:bg-primary-50/30 transition-colors">
                    {/* Mock Appointments */}
                    {hour === '09:00' && i === 0 && (
                      <div className="absolute inset-1 rounded-md bg-primary-100 border-l-4 border-primary-600 p-2 shadow-sm z-10">
                        <p className="text-xs font-bold text-primary-900">Ana Silva</p>
                        <p className="text-[10px] text-primary-700">Limpeza</p>
                      </div>
                    )}
                    {hour === '10:00' && i === 1 && (
                      <div className="absolute inset-1 h-[150px] rounded-md bg-success-100 border-l-4 border-success-600 p-2 shadow-sm z-10">
                        <p className="text-xs font-bold text-success-900">Bruno Costa</p>
                        <p className="text-[10px] text-success-700">Implante</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}
