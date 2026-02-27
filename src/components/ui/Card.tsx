import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'bordered' | 'elevated' | 'glass';
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const variantStyles = {
  default: 'bg-white shadow-soft',
  bordered: 'bg-white border border-neutral-200',
  elevated: 'bg-white shadow-medium',
  glass: 'glass-card',
};

export function Card({
  children,
  className,
  hover = false,
  padding = 'md',
  variant = 'default',
}: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-2xl transition-all duration-300',
        variantStyles[variant],
        paddingStyles[padding],
        hover && 'hover:-translate-y-1 hover:shadow-strong cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
