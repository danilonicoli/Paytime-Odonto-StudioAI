import * as React from 'react';
import { Icons } from '@/src/components/ui/Icons';
import { Button } from '@/src/components/ui/Button';
import { Card } from '@/src/components/ui/Card';
import { Badge } from '@/src/components/ui/Badge';
import { useNavigate } from 'react-router-dom';

export default function MobileCharge() {
  const navigate = useNavigate();
  const [step, setStep] = React.useState<'select' | 'confirm' | 'processing' | 'success'>('select');

  return (
    <div className="flex min-h-screen flex-col bg-background-app p-6">
      <header className="mb-8 flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate('/mobile')}>
          <Icons.ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-bold text-text-primary">Cobrança</h1>
      </header>

      {step === 'select' && (
        <div className="flex-1 space-y-6">
          <Card className="p-6 border-primary-200 bg-primary-50/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-xl">
                JS
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">João da Silva</h3>
                <p className="text-sm text-text-secondary">Procedimento: Limpeza</p>
              </div>
            </div>
            <div className="space-y-2 border-t border-primary-100 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Subtotal</span>
                <span className="font-medium">R$ 300,00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Desconto</span>
                <span className="text-error-600">- R$ 20,00</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-text-primary pt-2">
                <span>Total</span>
                <span>R$ 280,00</span>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider">Forma de Pagamento</h4>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="secondary" className="h-20 flex flex-col gap-1">
                <Icons.Finance className="h-6 w-6" />
                Crédito
              </Button>
              <Button variant="secondary" className="h-20 flex flex-col gap-1">
                <Icons.Finance className="h-6 w-6" />
                Débito
              </Button>
              <Button variant="secondary" className="h-20 flex flex-col gap-1">
                <Icons.Finance className="h-6 w-6" />
                PIX
              </Button>
              <Button variant="secondary" className="h-20 flex flex-col gap-1">
                <Icons.Finance className="h-6 w-6" />
                Dinheiro
              </Button>
            </div>
          </div>

          <Button variant="primary" className="w-full h-16 text-xl mt-auto" onClick={() => setStep('processing')}>
            Iniciar Pagamento
          </Button>
        </div>
      )}

      {step === 'processing' && (
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
          <div className="relative h-32 w-32">
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary-100 border-t-primary-600" />
            <div className="flex h-full w-full items-center justify-center">
              <Icons.Terminal className="h-12 w-12 text-primary-600" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Processando...</h2>
            <p className="text-text-secondary mt-2">Aguardando resposta da maquininha Paytime</p>
          </div>
          <Button variant="ghost" onClick={() => setStep('select')}>Cancelar</Button>
          
          {/* Simulation trigger */}
          <div className="absolute bottom-10 opacity-0" onClick={() => setStep('success')}>.</div>
        </div>
      )}

      {step === 'success' && (
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in-95 duration-300">
          <div className="h-24 w-24 rounded-full bg-success-100 flex items-center justify-center text-success-600">
            <Icons.Success className="h-16 w-16" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-text-primary">Pagamento Aprovado!</h2>
            <p className="text-text-secondary mt-2">O recibo foi enviado para o e-mail do paciente.</p>
          </div>
          <div className="w-full space-y-4">
            <Button variant="primary" className="w-full h-14" onClick={() => navigate('/mobile')}>
              Voltar ao Início
            </Button>
            <Button variant="secondary" className="w-full h-14">
              Imprimir Comprovante
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
