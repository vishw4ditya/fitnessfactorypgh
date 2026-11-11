import React, { createContext, useCallback, useContext, useState } from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

interface FieldWrapperProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({
  id,
  label,
  required,
  error,
  children,
}) => (
  <div className="space-y-1.5">
    <label
      htmlFor={id}
      className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300"
    >
      {label}
      {required && <span className="text-[#EF4444] ml-0.5">*</span>}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} role="alert" className="text-[11px] text-[#F87171] font-medium">
        {error}
      </p>
    )}
  </div>
);

const BASE_INPUT_CLASSES =
  'w-full rounded-lg bg-[#0C0F15] border border-[#282D38] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 transition-colors focus:outline-none focus:border-[#7DB7FF] focus:ring-1 focus:ring-[#7DB7FF]/60';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  required,
  error,
  className = '',
  ...rest
}) => (
  <FieldWrapper id={id} label={label} required={required} error={error}>
    <input
      id={id}
      required={required}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`${BASE_INPUT_CLASSES} ${error ? 'border-[#EF4444]' : ''} ${className}`}
      {...rest}
    />
  </FieldWrapper>
);

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: SelectOption[];
  error?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  options,
  required,
  error,
  className = '',
  ...rest
}) => (
  <FieldWrapper id={id} label={label} required={required} error={error}>
    <select
      id={id}
      required={required}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`${BASE_INPUT_CLASSES} ${error ? 'border-[#EF4444]' : ''} ${className}`}
      {...rest}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value} className="bg-[#12151C] text-slate-100">
          {opt.label}
        </option>
      ))}
    </select>
  </FieldWrapper>
);

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  error?: string;
}

export const TextareaField: React.FC<TextareaFieldProps> = ({
  id,
  label,
  required,
  error,
  className = '',
  ...rest
}) => (
  <FieldWrapper id={id} label={label} required={required} error={error}>
    <textarea
      id={id}
      required={required}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`${BASE_INPUT_CLASSES} min-h-[104px] resize-y ${error ? 'border-[#EF4444]' : ''} ${className}`}
      {...rest}
    />
  </FieldWrapper>
);

interface CheckboxCardProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  title: string;
  subtitle: string;
  priceTag: string;
}

export const CheckboxCard: React.FC<CheckboxCardProps> = ({
  id,
  checked,
  onChange,
  title,
  subtitle,
  priceTag,
}) => (
  <label
    htmlFor={id}
    className={`flex items-center justify-between gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-colors ${
      checked
        ? 'bg-[#121D32] border-[#3B82F6]/60'
        : 'bg-[#0C0F15] border-[#282D38] hover:border-[#3A4152]'
    }`}
  >
    <span className="flex items-center gap-3">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-slate-600 bg-[#0A0C10] text-[#C8102E] focus:ring-[#7DB7FF]"
      />
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-white">
          {title}
        </span>
        <span className="block text-[11px] text-slate-400">{subtitle}</span>
      </span>
    </span>
    <span className="font-display text-sm font-bold text-[#7DB7FF] shrink-0">{priceTag}</span>
  </label>
);

interface ToastItem {
  id: number;
  title: string;
  message: string;
  tone: 'success' | 'info';
}

interface ToastContextValue {
  showToast: (title: string, message: string, tone?: 'success' | 'info') => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return ctx;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const showToast = useCallback(
    (title: string, message: string, tone: 'success' | 'info' = 'success') => {
      const id = Date.now() + Math.floor(Math.random() * 1000);
      setToasts((prev) => [...prev, { id, title, message, tone }]);
      window.setTimeout(() => {
        setToasts((prev) => prev.filter((item) => item.id !== id));
      }, 4800);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        aria-live="polite"
        className="fixed bottom-20 md:bottom-6 right-4 z-50 flex flex-col gap-2.5 max-w-sm w-[calc(100vw-2rem)] pointer-events-none"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            className="pointer-events-auto flex items-start gap-3 rounded-xl bg-[#161B24] border border-[#323A4A] p-4 shadow-2xl shadow-black/70 animate-[fadeIn_0.2s_ease-out]"
          >
            {toast.tone === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <Info className="w-5 h-5 text-[#7DB7FF] shrink-0 mt-0.5" />
            )}
            <div className="flex-1 min-w-0">
              <p className="font-display text-sm uppercase tracking-wider text-white font-semibold">
                {toast.title}
              </p>
              <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{toast.message}</p>
            </div>
            <button
              type="button"
              onClick={() => dismiss(toast.id)}
              aria-label="Dismiss notification"
              className="text-slate-400 hover:text-white p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB7FF]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
