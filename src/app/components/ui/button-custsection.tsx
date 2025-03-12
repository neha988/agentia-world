import React from 'react';
import { cn } from '@/app/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  glowEffect?: boolean;
}

const ButtonCustom: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  icon,
  glowEffect = false,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-agentia-green to-agentia-teal-light/90 text-white hover:brightness-110",
    secondary: "bg-gradient-to-r from-agentia-secondary to-agentia-secondary/90 text-white hover:brightness-110",
    outline: "bg-transparent border border-agentia-primary text-agentia-primary hover:bg-agentia-primary/10",
    ghost: "bg-transparent text-agentia-primary hover:bg-agentia-primary/10",
    link: "bg-transparent text-agentia-primary underline underline-offset-4 hover:text-agentia-primary/80 p-0",
    glass: "glass-button"
  };
  
  const sizeClasses = {
    sm: "text-xs px-3 py-1",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3"
  };
  
  const glowClasses = glowEffect 
    ? variant === 'primary' 
      ? "shadow-neon-blue" 
      : variant === 'secondary' 
        ? "shadow-neon-purple" 
        : ""
    : "";
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        glowClasses,
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default ButtonCustom;
