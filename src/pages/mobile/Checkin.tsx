import * as React from 'react';
import { Icons } from '@/src/components/ui/Icons';
import { Button } from '@/src/components/ui/Button';
import { Card } from '@/src/components/ui/Card';
import { Input } from '@/src/components/ui/Input';
import { Badge } from '@/src/components/ui/Badge';
import { useNavigate } from 'react-router-dom';

export default function MobileCheckin() {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState('');

  const patients = [
    { time: '13:00', name: 'João da Silva', procedure: 'Limpeza', status: 'scheduled' },
    { time: '13:30', name: 'Maria Oliveira', procedure: 'Avaliação', status: 'scheduled' },
    { time: '14:00', name: 'Pedro Santos', procedure: 'Canal', status: 'scheduled' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background-app p-6">
      <header className="mb-8 flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate('/mobile')}>
          <Icons.ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-bold text-text-primary">Check-in</h1>
      </header>

      <div className="mb-8">
        <div className="relative">
          <Icons.Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
          <input 
            type="text" 
            placeholder="Buscar paciente..." 
            className="h-14 w-full rounded-2xl border border-gray-300 pl-12 pr-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary-200 shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 space-y-4">
        <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider">Próximos Atendimentos</h3>
        {patients.map((p, i) => (
          <Card key={i} className="flex items-center justify-between p-5 active:bg-gray-50 transition-colors" onClick={() => {}}>
            <div className="flex items-center gap-4">
              <div className="text-lg font-bold text-primary-600">{p.time}</div>
              <div>
                <p className="text-lg font-bold text-text-primary">{p.name}</p>
                <p className="text-sm text-text-secondary">{p.procedure}</p>
              </div>
            </div>
            <Button variant="primary" size="sm">Confirmar</Button>
          </Card>
        ))}
      </div>

      <footer className="mt-8">
        <Button variant="secondary" className="w-full h-14 text-lg" onClick={() => {}}>
          Novo Paciente
        </Button>
      </footer>
    </div>
  );
}
