import { clsx } from 'clsx';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        'max-w-3xl mb-12 md:mb-16',
        align === 'center' && 'mx-auto text-center',
        align === 'left' && 'text-left'
      )}
    >
      {badge && (
        <span
          className={clsx(
            'inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase',
            dark
              ? 'bg-white/10 text-white/90'
              : 'bg-primary-50 text-primary-600'
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={clsx(
          'font-heading text-h2 md:text-display text-balance',
          dark ? 'text-white' : 'text-neutral-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'mt-4 text-body-lg',
            dark ? 'text-white/70' : 'text-neutral-500'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
