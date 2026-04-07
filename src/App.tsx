import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Pages
const LoginPage = React.lazy(() => import('./pages/auth/LoginPage'));
const AdminDashboard = React.lazy(() => import('./pages/admin/Dashboard'));
const AdminAgenda = React.lazy(() => import('./pages/admin/Agenda'));
const AdminPatients = React.lazy(() => import('./pages/admin/Patients'));
const AdminFinance = React.lazy(() => import('./pages/admin/Finance'));
const AdminMarketing = React.lazy(() => import('./pages/admin/Marketing'));
const AdminSettings = React.lazy(() => import('./pages/admin/Settings'));
const ClinicalDashboard = React.lazy(() => import('./pages/clinical/Dashboard'));
const MobileHome = React.lazy(() => import('./pages/mobile/Home'));
const MobileCheckin = React.lazy(() => import('./pages/mobile/Checkin'));
const MobileCharge = React.lazy(() => import('./pages/mobile/Charge'));

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <React.Suspense fallback={<div className="flex h-screen items-center justify-center">Carregando...</div>}>
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/agenda" element={<AdminAgenda />} />
            <Route path="/admin/pacientes" element={<AdminPatients />} />
            <Route path="/admin/financeiro" element={<AdminFinance />} />
            <Route path="/admin/marketing" element={<AdminMarketing />} />
            <Route path="/admin/configuracoes" element={<AdminSettings />} />
            
            {/* Clinical Routes */}
            <Route path="/clinical" element={<ClinicalDashboard />} />
            
            {/* Mobile Terminal Routes */}
            <Route path="/mobile" element={<MobileHome />} />
            <Route path="/mobile/checkin" element={<MobileCheckin />} />
            <Route path="/mobile/charge" element={<MobileCharge />} />
            
            {/* Default Redirect */}
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
