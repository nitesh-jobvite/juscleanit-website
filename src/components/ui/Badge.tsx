import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
}

const variantStyles = {
  primary: 'bg-primary-50 text-primary-700 ring-primary-200',
  secondary: 'bg-secondary-50 text-secondary-700 ring-secondary-200',
  accent: 'bg-accent-50 text-accent-700 ring-accent-200',
  neutral: 'bg-neutral-100 text-neutral-600 ring-neutral-200',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export function Badge({ children, variant = 'primary', size = 'md', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center font-medium rounded-full ring-1 ring-inset',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
