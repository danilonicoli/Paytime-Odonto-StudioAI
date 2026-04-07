import * as React from 'react';
import { Card } from '@/src/components/ui/Card';
import { cn } from '@/src/lib/utils';

const Tooth = ({ id, status, onClick }: { id: number; status?: string; onClick: () => void }) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 cursor-pointer group",
        status === 'treated' && "text-primary-600",
        status === 'problem' && "text-error-600",
        !status && "text-gray-400 hover:text-gray-600"
      )}
    >
      <span className="text-[10px] font-bold">{id}</span>
      <div className={cn(
        "w-8 h-10 border-2 rounded-t-lg rounded-b-md flex items-center justify-center transition-all",
        status === 'treated' ? "bg-primary-50 border-primary-600" : 
        status === 'problem' ? "bg-error-50 border-error-600" : 
        "bg-white border-gray-200 group-hover:border-gray-400"
      )}>
        <div className="w-4 h-4 rounded-full border border-current opacity-20" />
      </div>
    </div>
  );
};

export default function Odontogram() {
  const [selectedTooth, setSelectedTooth] = React.useState<number | null>(null);

  // Mock data for upper and lower teeth
  const upperTeeth = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];
  const lowerTeeth = [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38];

  return (
    <Card className="space-y-12 py-12 overflow-x-auto">
      <div className="min-w-[800px] space-y-12">
        {/* Upper Arch */}
        <div className="flex justify-center gap-2">
          {upperTeeth.map((id) => (
            <div key={id}>
              <Tooth 
                id={id} 
                status={id === 16 ? 'treated' : id === 24 ? 'problem' : undefined}
                onClick={() => setSelectedTooth(id)} 
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 w-full relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Linha Média
          </div>
        </div>

        {/* Lower Arch */}
        <div className="flex justify-center gap-2">
          {lowerTeeth.map((id) => (
            <div key={id}>
              <Tooth 
                id={id} 
                status={id === 46 ? 'treated' : undefined}
                onClick={() => setSelectedTooth(id)} 
              />
            </div>
          ))}
        </div>
      </div>

      {selectedTooth && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200 animate-in fade-in slide-in-from-bottom-2">
          <h4 className="font-bold text-text-primary mb-2">Dente {selectedTooth}</h4>
          <div className="flex gap-4">
            <button className="text-xs font-medium text-primary-600 hover:underline">Adicionar Observação</button>
            <button className="text-xs font-medium text-primary-600 hover:underline">Ver Histórico</button>
            <button className="text-xs font-medium text-error-600 hover:underline">Marcar Problema</button>
          </div>
        </div>
      )}
    </Card>
  );
}
