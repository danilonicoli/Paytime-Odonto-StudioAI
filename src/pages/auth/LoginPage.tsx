import * as React from 'react';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';
import { Icons } from '@/src/components/ui/Icons';
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle } from '@/src/lib/firebase';

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await loginWithGoogle();
      navigate('/admin');
    } catch (err) {
      console.error('Login error:', err);
      setError('Falha ao entrar com Google. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, we only support Google Login as per instructions
    handleGoogleLogin();
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side: Form */}
      <div className="flex w-full flex-col justify-center px-6 lg:w-1/2 lg:px-24">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-10 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white">
              <Icons.Clinical className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold text-text-primary">Paytime Odonto</h1>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-text-primary">Bem-vindo de volta</h2>
            <p className="mt-2 text-text-secondary">Entre com sua conta Google para acessar o sistema</p>
          </div>

          {error && (
            <div className="mb-6 rounded-lg bg-error-50 p-4 text-sm text-error-700">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <Button 
              onClick={handleGoogleLogin} 
              className="w-full flex gap-3" 
              variant="secondary" 
              size="lg" 
              disabled={loading}
            >
              <Icons.User className="h-5 w-5" />
              {loading ? 'Entrando...' : 'Entrar com Google'}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background-app px-2 text-text-muted">Ou use e-mail</span>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <Input 
                label="E-mail" 
                placeholder="seu@email.com" 
                type="email" 
                disabled 
              />
              <Input 
                label="Senha" 
                placeholder="••••••••" 
                type="password" 
                disabled 
              />
              <Button type="submit" className="w-full" size="lg" disabled>
                Entrar com E-mail
              </Button>
            </form>
          </div>

          <p className="mt-10 text-center text-sm text-text-muted">
            Problemas com acesso? <button className="font-medium text-primary-600 hover:underline">Contate o suporte</button>
          </p>
        </div>
      </div>

      {/* Right Side: Image/Branding */}
      <div className="hidden w-1/2 bg-primary-600 lg:block">
        <div className="flex h-full flex-col items-center justify-center p-12 text-white">
          <div className="relative mb-12 h-64 w-64">
            <div className="absolute inset-0 animate-pulse rounded-full bg-white/10" />
            <div className="absolute inset-4 animate-pulse rounded-full bg-white/20" />
            <div className="flex h-full w-full items-center justify-center">
              <Icons.Clinical className="h-32 w-32" />
            </div>
          </div>
          <h3 className="mb-4 text-4xl font-bold">Gestão Inteligente</h3>
          <p className="max-w-md text-center text-xl text-primary-100">
            A solução completa para o seu consultório, do agendamento ao checkout financeiro.
          </p>
        </div>
      </div>
    </div>
  );
}
