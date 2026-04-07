import * as React from 'react';
import { Icons } from '@/src/components/ui/Icons';
import { cn } from '@/src/lib/utils';
import { Link, useLocation } from 'react-router-dom';

interface SidebarItemProps {
  icon: keyof typeof Icons;
  label: string;
  href: string;
  active?: boolean;
  key?: React.Key;
}

const SidebarItem = ({ icon: IconName, label, href, active }: SidebarItemProps) => {
  const Icon = Icons[IconName];
  return (
    <Link
      to={href}
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
        active 
          ? 'bg-primary-50 text-primary-600' 
          : 'text-text-secondary hover:bg-gray-50 hover:text-text-primary'
      )}
    >
      <Icon className="h-5 w-5" />
      {label}
    </Link>
  );
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const menuItems = [
    { icon: 'Dashboard', label: 'Dashboard', href: '/admin' },
    { icon: 'Agenda', label: 'Agenda Mestra', href: '/admin/agenda' },
    { icon: 'Patients', label: 'Pacientes', href: '/admin/pacientes' },
    { icon: 'Finance', label: 'Financeiro', href: '/admin/financeiro' },
    { icon: 'Marketing', label: 'Marketing', href: '/admin/marketing' },
    { icon: 'Settings', label: 'Configurações', href: '/admin/configuracoes' },
  ] as const;

  return (
    <div className="flex h-screen bg-background-app">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-border-default bg-white lg:flex">
        <div className="flex h-16 items-center gap-2 px-6 border-b border-border-default">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary-600 text-white">
            <Icons.Clinical className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold text-text-primary">Paytime Odonto</span>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {menuItems.map((item) => (
            <SidebarItem 
              key={item.href} 
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={location.pathname === item.href} 
            />
          ))}
        </nav>

        <div className="p-4 border-t border-border-default">
          <SidebarItem icon="Logout" label="Sair" href="/login" />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex h-16 items-center justify-between border-b border-border-default bg-white px-6">
          <div className="flex items-center gap-4">
            <button className="lg:hidden">
              <Icons.Menu className="h-6 w-6" />
            </button>
            <h2 className="text-lg font-semibold text-text-primary">
              {menuItems.find(item => item.href === location.pathname)?.label || 'Dashboard'}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Icons.Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="h-9 w-64 rounded-md border border-gray-300 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200"
              />
            </div>
            <button className="relative rounded-full p-2 text-text-secondary hover:bg-gray-100">
              <Icons.Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-error-500 border-2 border-white" />
            </button>
            <div className="flex items-center gap-3 pl-2 border-l border-border-default">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-text-primary">Danilo Nicoli</p>
                <p className="text-xs text-text-muted">Administrador</p>
              </div>
              <div className="h-9 w-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">
                DN
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
