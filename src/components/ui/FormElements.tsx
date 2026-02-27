import { clsx } from 'clsx';
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';

/* ─── Input ─── */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, hint, className, id, ...props },
  ref
) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="space-y-1.5">
      <label htmlFor={inputId} className="block text-sm font-medium text-neutral-700">
        {label}
        {props.required && <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>}
      </label>
      <input
        ref={ref}
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        className={clsx(
          'block w-full rounded-xl border px-4 py-3 text-body text-neutral-900 shadow-sm transition-all duration-200',
          'placeholder:text-neutral-400',
          'focus:outline-none focus:ring-2 focus:ring-offset-0',
          error
            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
            : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-200',
          'disabled:bg-neutral-50 disabled:text-neutral-500',
          className
        )}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={`${inputId}-hint`} className="text-sm text-neutral-500">
          {hint}
        </p>
      )}
    </div>
  );
});

/* ─── Textarea ─── */
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, className, id, ...props },
  ref
) {
  const textareaId = id || label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="space-y-1.5">
      <label htmlFor={textareaId} className="block text-sm font-medium text-neutral-700">
        {label}
        {props.required && <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>}
      </label>
      <textarea
        ref={ref}
        id={textareaId}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        className={clsx(
          'block w-full rounded-xl border px-4 py-3 text-body text-neutral-900 shadow-sm transition-all duration-200 resize-y min-h-[120px]',
          'placeholder:text-neutral-400',
          'focus:outline-none focus:ring-2 focus:ring-offset-0',
          error
            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
            : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-200',
          className
        )}
        {...props}
      />
      {error && (
        <p id={`${textareaId}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

/* ─── Select ─── */
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, options, placeholder, className, id, ...props },
  ref
) {
  const selectId = id || label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="space-y-1.5">
      <label htmlFor={selectId} className="block text-sm font-medium text-neutral-700">
        {label}
        {props.required && <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>}
      </label>
      <select
        ref={ref}
        id={selectId}
        aria-invalid={!!error}
        className={clsx(
          'block w-full rounded-xl border px-4 py-3 text-body text-neutral-900 shadow-sm transition-all duration-200 appearance-none bg-white',
          'focus:outline-none focus:ring-2 focus:ring-offset-0',
          error
            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
            : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-200',
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});
