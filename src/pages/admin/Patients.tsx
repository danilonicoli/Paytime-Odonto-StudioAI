import * as React from 'react';
import AdminLayout from '@/src/layouts/AdminLayout';
import { Card } from '@/src/components/ui/Card';
import { Icons } from '@/src/components/ui/Icons';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';
import { Badge } from '@/src/components/ui/Badge';

export default function PatientList() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Gestão de Pacientes</h1>
            <p className="text-text-secondary">Visualize e gerencie o histórico dos seus pacientes.</p>
          </div>
          <Button variant="primary" className="flex gap-2">
            <Icons.AddUser className="h-4 w-4" />
            Novo Paciente
          </Button>
        </div>

        {/* Filters */}
        <Card className="flex flex-wrap items-center gap-4 py-4">
          <div className="relative flex-1 min-w-[300px]">
            <Icons.Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
            <input 
              type="text" 
              placeholder="Buscar por nome, CPF ou telefone..." 
              className="h-10 w-full rounded-md border border-gray-300 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200"
            />
          </div>
          <Button variant="secondary" className="flex gap-2">
            <Icons.Filter className="h-4 w-4" />
            Mais Filtros
          </Button>
        </Card>

        {/* Table */}
        <Card padding="none" className="overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-border-default">
              <tr>
                <th className="p-4 text-xs font-bold text-text-muted uppercase tracking-wider">Paciente</th>
                <th className="p-4 text-xs font-bold text-text-muted uppercase tracking-wider">Última Visita</th>
                <th className="p-4 text-xs font-bold text-text-muted uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-text-muted uppercase tracking-wider">Tags</th>
                <th className="p-4 text-xs font-bold text-text-muted uppercase tracking-wider text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-default">
              {[
                { name: 'Ana Silva', email: 'ana@email.com', lastVisit: '10/03/2026', status: 'active', tags: ['VIP', 'Ortodontia'] },
                { name: 'Bruno Costa', email: 'bruno@email.com', lastVisit: '05/04/2026', status: 'active', tags: ['Implante'] },
                { name: 'Carla Dias', email: 'carla@email.com', lastVisit: '12/02/2026', status: 'inactive', tags: ['Avaliação'] },
                { name: 'Diego Lima', email: 'diego@email.com', lastVisit: '20/03/2026', status: 'active', tags: ['Canal'] },
                { name: 'Elena Rosa', email: 'elena@email.com', lastVisit: '01/04/2026', status: 'active', tags: ['Limpeza'] },
              ].map((patient, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 font-bold">
                        {patient.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-primary">{patient.name}</p>
                        <p className="text-xs text-text-muted">{patient.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-text-secondary">{patient.lastVisit}</td>
                  <td className="p-4">
                    <Badge variant={patient.status === 'active' ? 'success' : 'neutral'}>
                      {patient.status === 'active' ? 'Ativo' : 'Inativo'}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-1">
                      {patient.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-gray-100 text-[10px] font-bold text-gray-600 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 text-text-muted hover:text-primary-600 transition-colors">
                      <Icons.More className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 border-t border-border-default flex items-center justify-between bg-gray-50">
            <p className="text-sm text-text-muted">Mostrando 5 de 124 pacientes</p>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" disabled>Anterior</Button>
              <Button variant="secondary" size="sm">Próximo</Button>
            </div>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}
