import * as React from 'react';
import { Icons } from '@/src/components/ui/Icons';
import { Button } from '@/src/components/ui/Button';
import { Card } from '@/src/components/ui/Card';
import { Badge } from '@/src/components/ui/Badge';
import { useNavigate } from 'react-router-dom';

const ActionButton = ({ icon: IconName, label, onClick, color }: { 
  icon: keyof typeof Icons; 
  label: string; 
  onClick: () => void;
  color: string;
}) => {
  const Icon = Icons[IconName];
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 shadow-sm border border-border-default active:bg-gray-50 active:scale-95 transition-all"
    >
      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color}`}>
        <Icon className="h-8 w-8" />
      </div>
      <span className="text-lg font-bold text-text-primary">{label}</span>
    </button>
  );
};

export default function MobileHome() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-background-app p-6">
      {/* Header */}
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white">
            <Icons.Clinical className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-text-primary leading-tight">Unidade Serra</h1>
            <p className="text-xs text-text-muted">Terminal A960-ABC-123</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-right">
          <div>
            <p className="text-sm font-bold text-text-primary">Maria Silva</p>
            <p className="text-xs text-text-muted">Operador</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">
            MS
          </div>
        </div>
      </header>

      {/* Quick Stats / Context */}
      <Card className="mb-8 bg-primary-600 text-white border-none" padding="sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-primary-100 uppercase tracking-wider font-bold">Próximo Atendimento</p>
            <h2 className="text-xl font-bold">João da Silva</h2>
            <p className="text-sm text-primary-100">13:00 • Dr. Carlos • Limpeza</p>
          </div>
          <Badge variant="info" className="bg-white/20 text-white border-none">
            Em 15 min
          </Badge>
        </div>
      </Card>

      {/* Action Grid */}
      <div className="grid flex-1 grid-cols-2 gap-4">
        <ActionButton 
          icon="Agenda" 
          label="Agenda" 
          onClick={() => {}} 
          color="bg-primary-50 text-primary-600"
        />
        <ActionButton 
          icon="Check" 
          label="Check-in" 
          onClick={() => {}} 
          color="bg-success-50 text-success-600"
        />
        <ActionButton 
          icon="Finance" 
          label="Cobrar" 
          onClick={() => {}} 
          color="bg-warning-50 text-warning-600"
        />
        <ActionButton 
          icon="History" 
          label="Retornos" 
          onClick={() => {}} 
          color="bg-info-50 text-info-600"
        />
        <ActionButton 
          icon="Patients" 
          label="Pacientes" 
          onClick={() => {}} 
          color="bg-gray-100 text-gray-600"
        />
        <ActionButton 
          icon="Logout" 
          label="Sair" 
          onClick={() => navigate('/login')} 
          color="bg-error-50 text-error-600"
        />
      </div>

      {/* Footer Status */}
      <footer className="mt-8 flex items-center justify-center gap-2 text-xs text-text-muted">
        <div className="h-2 w-2 rounded-full bg-success-500" />
        <span>Conectado à Paytime Cloud</span>
      </footer>
    </div>
  );
}
