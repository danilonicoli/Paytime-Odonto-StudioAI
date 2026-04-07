import * as React from 'react';
import AdminLayout from '@/src/layouts/AdminLayout';
import { Card } from '@/src/components/ui/Card';
import { Icons } from '@/src/components/ui/Icons';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';
import { Badge } from '@/src/components/ui/Badge';

export default function SettingsPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Configurações</h1>
          <p className="text-text-secondary">Gerencie os dados da sua clínica, equipe e integrações.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Navigation Tabs */}
          <aside className="lg:col-span-1 space-y-1">
            <button className="w-full text-left px-4 py-2 rounded-md bg-primary-50 text-primary-600 font-medium text-sm">
              Dados da Clínica
            </button>
            <button className="w-full text-left px-4 py-2 rounded-md text-text-secondary hover:bg-gray-50 font-medium text-sm">
              Profissionais
            </button>
            <button className="w-full text-left px-4 py-2 rounded-md text-text-secondary hover:bg-gray-50 font-medium text-sm">
              Procedimentos
            </button>
            <button className="w-full text-left px-4 py-2 rounded-md text-text-secondary hover:bg-gray-50 font-medium text-sm">
              Integrações
            </button>
            <button className="w-full text-left px-4 py-2 rounded-md text-text-secondary hover:bg-gray-50 font-medium text-sm">
              Segurança
            </button>
          </aside>

          {/* Content Area */}
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <h3 className="text-lg font-bold text-text-primary mb-6">Informações Gerais</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Input label="Nome da Clínica" defaultValue="Paytime Odonto - Unidade Serra" />
                <Input label="CNPJ" defaultValue="12.345.678/0001-90" />
                <Input label="E-mail de Contato" defaultValue="contato@paytimeodonto.com" />
                <Input label="Telefone" defaultValue="(27) 99999-9999" />
                <div className="md:col-span-2">
                  <Input label="Endereço" defaultValue="Av. Central, 1000 - Serra, ES" />
                </div>
              </div>
              <div className="mt-8 flex justify-end gap-3">
                <Button variant="secondary">Cancelar</Button>
                <Button variant="primary">Salvar Alterações</Button>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-bold text-text-primary mb-6">Integrações Ativas</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border border-border-default">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded bg-primary-600 flex items-center justify-center text-white">
                      <Icons.Terminal className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary">Paytime Payments</p>
                      <p className="text-xs text-text-muted">Conectado via Terminal A960</p>
                    </div>
                  </div>
                  <Badge variant="success">Ativo</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-border-default">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded bg-info-600 flex items-center justify-center text-white">
                      <Icons.Agenda className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary">Google Calendar</p>
                      <p className="text-xs text-text-muted">Sincronização de agenda profissional</p>
                    </div>
                  </div>
                  <Button variant="secondary" size="sm">Configurar</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
