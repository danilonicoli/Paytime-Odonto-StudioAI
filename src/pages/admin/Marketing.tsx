import * as React from 'react';
import AdminLayout from '@/src/layouts/AdminLayout';
import { Card } from '@/src/components/ui/Card';
import { Icons } from '@/src/components/ui/Icons';
import { Button } from '@/src/components/ui/Button';
import { Badge } from '@/src/components/ui/Badge';

export default function MarketingPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Marketing e Retenção</h1>
            <p className="text-text-secondary">Crie campanhas e automatize a comunicação com seus pacientes.</p>
          </div>
          <Button variant="primary" className="flex gap-2">
            <Icons.Plus className="h-4 w-4" />
            Nova Campanha
          </Button>
        </div>

        {/* Campaign Stats */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="text-center">
            <p className="text-sm font-medium text-text-muted">Mensagens Enviadas</p>
            <h3 className="text-2xl font-bold text-text-primary mt-1">1.240</h3>
          </Card>
          <Card className="text-center">
            <p className="text-sm font-medium text-text-muted">Taxa de Abertura</p>
            <h3 className="text-2xl font-bold text-text-primary mt-1">68%</h3>
          </Card>
          <Card className="text-center">
            <p className="text-sm font-medium text-text-muted">Agendamentos Gerados</p>
            <h3 className="text-2xl font-bold text-text-primary mt-1">42</h3>
          </Card>
          <Card className="text-center">
            <p className="text-sm font-medium text-text-muted">ROI Estimado</p>
            <h3 className="text-2xl font-bold text-success-600 mt-1">4.2x</h3>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Active Campaigns */}
          <Card padding="none">
            <div className="p-6 border-b border-border-default">
              <h3 className="text-lg font-bold text-text-primary">Campanhas Ativas</h3>
            </div>
            <div className="divide-y divide-border-default">
              {[
                { name: 'Revisão Semestral', target: 'Pacientes sumidos há 6 meses', channel: 'WhatsApp', status: 'active' },
                { name: 'Promoção Clareamento', target: 'Base completa', channel: 'E-mail', status: 'paused' },
                { name: 'Aniversariantes do Mês', target: 'Aniversariantes', channel: 'SMS', status: 'active' },
              ].map((campaign, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                      <Icons.Marketing className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary">{campaign.name}</p>
                      <p className="text-xs text-text-muted">{campaign.target} • {campaign.channel}</p>
                    </div>
                  </div>
                  <Badge variant={campaign.status === 'active' ? 'success' : 'neutral'}>
                    {campaign.status === 'active' ? 'Ativa' : 'Pausada'}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Message Templates */}
          <Card padding="none">
            <div className="p-6 border-b border-border-default flex items-center justify-between">
              <h3 className="text-lg font-bold text-text-primary">Templates de Mensagens</h3>
              <Button variant="ghost" size="sm">Gerenciar</Button>
            </div>
            <div className="p-6 space-y-4">
              <div className="rounded-lg border border-border-default p-4 bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-text-muted uppercase">Lembrete de Consulta</span>
                  <Icons.Mail className="h-4 w-4 text-text-muted" />
                </div>
                <p className="text-sm text-text-secondary italic">
                  "Olá [Nome], lembramos que você tem uma consulta amanhã às [Hora] com o [Dentista]. Podemos confirmar?"
                </p>
              </div>
              <div className="rounded-lg border border-border-default p-4 bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-text-muted uppercase">Boas-vindas</span>
                  <Icons.Phone className="h-4 w-4 text-text-muted" />
                </div>
                <p className="text-sm text-text-secondary italic">
                  "Bem-vindo à Paytime Odonto, [Nome]! É um prazer ter você conosco. Qualquer dúvida, estamos aqui."
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
