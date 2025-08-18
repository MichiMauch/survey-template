import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex h-fit items-center justify-center font-semibold no-underline transition-all duration-300 ease-out rounded-lg relative overflow-hidden group',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border border-transparent shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0',
        secondary:
          'border-2 border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0',
        ghost:
          'bg-transparent text-gray-600 hover:text-blue-600 hover:bg-blue-50/50',
      },
      size: {
        default: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg',
        xl: 'px-12 py-5 text-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

interface LinkButtonProps
  extends VariantProps<typeof buttonVariants>,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant,
  size,
  className,
  type = 'button',
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {/* Shimmer effect for primary buttons */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-all duration-700 group-hover:translate-x-full opacity-0 group-hover:opacity-100" />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
});

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(({
  children,
  variant,
  size,
  className,
  href,
  ...props
}, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {/* Shimmer effect for primary buttons */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-all duration-700 group-hover:translate-x-full opacity-0 group-hover:opacity-100" />
      )}
      <span className="relative z-10">{children}</span>
    </a>
  );
});

Button.displayName = 'Button';
LinkButton.displayName = 'LinkButton';

export { Button, LinkButton, buttonVariants };