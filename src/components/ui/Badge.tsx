import * as React from 'react';
import { cn } from '@/src/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'neutral', ...props }, ref) => {
    const variants = {
      success: 'bg-success-50 text-success-700',
      warning: 'bg-warning-50 text-warning-700',
      error: 'bg-error-50 text-error-700',
      info: 'bg-info-50 text-info-700',
      neutral: 'bg-gray-100 text-gray-700',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
