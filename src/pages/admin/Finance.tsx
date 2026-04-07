import * as React from 'react';
import AdminLayout from '@/src/layouts/AdminLayout';
import { Card } from '@/src/components/ui/Card';
import { Icons } from '@/src/components/ui/Icons';
import { Button } from '@/src/components/ui/Button';
import { Badge } from '@/src/components/ui/Badge';

export default function FinancePage() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Financeiro</h1>
            <p className="text-text-secondary">Gestão de contas, repasses e fluxo de caixa.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" className="flex gap-2">
              <Icons.Calculator className="h-4 w-4" />
              Conciliação
            </Button>
            <Button variant="primary" className="flex gap-2">
              <Icons.Plus className="h-4 w-4" />
              Nova Cobrança
            </Button>
          </div>
        </div>

        {/* Financial Summary */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-primary-50 border-primary-100">
            <p className="text-sm font-medium text-primary-700">Contas a Receber</p>
            <h3 className="text-2xl font-bold text-primary-900 mt-1">R$ 42.800,00</h3>
            <p className="text-xs text-primary-600 mt-2">12 cobranças pendentes</p>
          </Card>
          <Card className="bg-success-50 border-success-100">
            <p className="text-sm font-medium text-success-700">Recebido (Mês)</p>
            <h3 className="text-2xl font-bold text-success-900 mt-1">R$ 85.200,00</h3>
            <p className="text-xs text-success-600 mt-2">+15% em relação ao mês anterior</p>
          </Card>
          <Card className="bg-error-50 border-error-100">
            <p className="text-sm font-medium text-error-700">Inadimplência</p>
            <h3 className="text-2xl font-bold text-error-900 mt-1">R$ 3.450,00</h3>
            <p className="text-xs text-error-600 mt-2">4 pacientes com atraso {'>'} 30 dias</p>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card padding="none">
          <div className="p-6 border-b border-border-default flex items-center justify-between">
            <h3 className="text-lg font-bold text-text-primary">Últimas Transações</h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">Ver tudo</Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-border-default">
                <tr>
                  <th className="p-4 text-xs font-bold text-text-muted uppercase">Data</th>
                  <th className="p-4 text-xs font-bold text-text-muted uppercase">Paciente</th>
                  <th className="p-4 text-xs font-bold text-text-muted uppercase">Descrição</th>
                  <th className="p-4 text-xs font-bold text-text-muted uppercase">Valor</th>
                  <th className="p-4 text-xs font-bold text-text-muted uppercase">Status</th>
                  <th className="p-4 text-xs font-bold text-text-muted uppercase text-right">Método</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-default">
                {[
                  { date: '07/04/2026', patient: 'Ana Silva', desc: 'Limpeza + Avaliação', amount: 'R$ 300,00', status: 'paid', method: 'Cartão Crédito' },
                  { date: '07/04/2026', patient: 'Bruno Costa', desc: 'Parcela Implante (2/10)', amount: 'R$ 450,00', status: 'paid', method: 'PIX' },
                  { date: '06/04/2026', patient: 'Carla Dias', desc: 'Consulta Emergência', amount: 'R$ 250,00', status: 'pending', method: 'Boleto' },
                  { date: '05/04/2026', patient: 'Diego Lima', desc: 'Tratamento Canal', amount: 'R$ 800,00', status: 'paid', method: 'Cartão Débito' },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm text-text-secondary">{item.date}</td>
                    <td className="p-4 text-sm font-bold text-text-primary">{item.patient}</td>
                    <td className="p-4 text-sm text-text-secondary">{item.desc}</td>
                    <td className="p-4 text-sm font-bold text-text-primary">{item.amount}</td>
                    <td className="p-4">
                      <Badge variant={item.status === 'paid' ? 'success' : 'warning'}>
                        {item.status === 'paid' ? 'Pago' : 'Pendente'}
                      </Badge>
                    </td>
                    <td className="p-4 text-sm text-text-muted text-right">{item.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}
