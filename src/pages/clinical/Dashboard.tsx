import * as React from 'react';
import { Icons } from '@/src/components/ui/Icons';
import { Card } from '@/src/components/ui/Card';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { cn } from '@/src/lib/utils';

export default function ClinicalDashboard() {
  return (
    <div className="flex h-screen bg-background-app">
      {/* Simple Sidebar for Dentists */}
      <aside className="w-20 flex-col border-r border-border-default bg-white flex items-center py-6 gap-8">
        <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-600 text-white">
          <Icons.Clinical className="h-6 w-6" />
        </div>
        <nav className="flex flex-col gap-6">
          <button className="p-3 rounded-xl bg-primary-50 text-primary-600">
            <Icons.Dashboard className="h-6 w-6" />
          </button>
          <button className="p-3 rounded-xl text-text-secondary hover:bg-gray-50">
            <Icons.Agenda className="h-6 w-6" />
          </button>
          <button className="p-3 rounded-xl text-text-secondary hover:bg-gray-50">
            <Icons.Patients className="h-6 w-6" />
          </button>
          <button className="p-3 rounded-xl text-text-secondary hover:bg-gray-50">
            <Icons.History className="h-6 w-6" />
          </button>
        </nav>
        <div className="mt-auto">
          <button className="p-3 rounded-xl text-text-secondary hover:bg-gray-50">
            <Icons.Logout className="h-6 w-6" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-text-primary">Olá, Dr. Carlos</h1>
              <p className="text-text-secondary">Você tem 8 atendimentos agendados para hoje.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-bold text-text-primary">Status da Fila</p>
                <p className="text-xs text-success-600 font-bold">2 pacientes aguardando</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-lg">
                C
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Atendimento Atual */}
            <Card className="lg:col-span-2 border-primary-200 ring-4 ring-primary-50" padding="lg">
              <div className="flex items-center justify-between mb-6">
                <Badge variant="success">EM ATENDIMENTO</Badge>
                <span className="text-sm text-text-muted">Iniciado há 12 min</span>
              </div>
              <div className="flex items-start gap-6 mb-8">
                <div className="h-20 w-20 rounded-2xl bg-gray-100 flex items-center justify-center text-3xl font-bold text-gray-400">
                  BC
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-text-primary">Bruno Costa</h2>
                  <p className="text-lg text-text-secondary">Implante • Dente 24</p>
                  <div className="mt-4 flex gap-2">
                    <Badge variant="neutral">Hipertenso</Badge>
                    <Badge variant="error">Alérgico a Penicilina</Badge>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Button variant="secondary" className="flex gap-2">
                  <Icons.History className="h-4 w-4" />
                  Histórico
                </Button>
                <Button variant="secondary" className="flex gap-2">
                  <Icons.Clinical className="h-4 w-4" />
                  Odontograma
                </Button>
                <Button variant="primary" className="flex gap-2">
                  <Icons.Check className="h-4 w-4" />
                  Finalizar
                </Button>
              </div>
            </Card>

            {/* Próximos na Fila */}
            <Card padding="none">
              <div className="p-6 border-b border-border-default">
                <h3 className="text-lg font-bold text-text-primary">Próximos Atendimentos</h3>
              </div>
              <div className="divide-y divide-border-default">
                {[
                  { time: '13:00', name: 'Carla Dias', procedure: 'Avaliação', status: 'waiting' },
                  { time: '14:30', name: 'Diego Lima', procedure: 'Canal', status: 'scheduled' },
                  { time: '16:00', name: 'Elena Rosa', procedure: 'Limpeza', status: 'scheduled' },
                ].map((item, i) => (
                  <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-bold text-primary-600">{item.time}</div>
                      <div>
                        <p className="text-sm font-bold text-text-primary">{item.name}</p>
                        <p className="text-xs text-text-muted">{item.procedure}</p>
                      </div>
                    </div>
                    {item.status === 'waiting' && (
                      <Badge variant="success" className="animate-pulse">Aguardando</Badge>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Atalhos Rápidos */}
          <div className="grid grid-cols-4 gap-6">
            <Card className="hover:border-primary-300 cursor-pointer transition-colors flex flex-col items-center justify-center p-8 gap-3">
              <Icons.Plus className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-text-primary">Novo Prontuário</span>
            </Card>
            <Card className="hover:border-primary-300 cursor-pointer transition-colors flex flex-col items-center justify-center p-8 gap-3">
              <Icons.Gallery className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-text-primary">Galeria de Fotos</span>
            </Card>
            <Card className="hover:border-primary-300 cursor-pointer transition-colors flex flex-col items-center justify-center p-8 gap-3">
              <Icons.Treatment className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-text-primary">Plano de Tratamento</span>
            </Card>
            <Card className="hover:border-primary-300 cursor-pointer transition-colors flex flex-col items-center justify-center p-8 gap-3">
              <Icons.Calculator className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-text-primary">Orçamentos</span>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
