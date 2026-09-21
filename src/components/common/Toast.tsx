import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'warning';
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 max-w-sm w-full pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl border border-gold-500/30 bg-navy-900/95 backdrop-blur-md shadow-2xl shadow-navy-950/80 transform transition-all duration-300 animate-slide-up"
        >
          <div className="mt-0.5 flex-shrink-0">
            {t.type === 'warning' ? (
              <AlertCircle className="w-5 h-5 text-amber-400" />
            ) : t.type === 'info' ? (
              <Info className="w-5 h-5 text-ocean-400" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-gold-400" />
            )}
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-slate-100">{t.title}</h4>
            {t.description && (
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{t.description}</p>
            )}
          </div>
          <button
            onClick={() => onDismiss(t.id)}
            className="text-slate-400 hover:text-slate-200 transition-colors p-1"
            aria-label="Đóng"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
