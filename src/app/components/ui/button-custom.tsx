import React from "react";
import { cn } from "@/app/lib/utils";

interface ButtonCustomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

export const ButtonCustom = ({ 
  variant = "primary", 
  size = "md", 
  icon, 
  iconPosition = "left", 
  className, 
  children, 
  ...props 
}: ButtonCustomProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-agentia-teal to-agentia-green hover:from-agentia-teal-light hover:to-agentia-green-light text-white shadow-lg shadow-agentia-green/20 hover:shadow-agentia-green/30 transition-all duration-300";
      case "secondary":
        return "glass hover:bg-white/[0.12] dark:text-white text-agentia-dark-800 transition-all duration-300";
      case "outline":
        return "bg-transparent border border-agentia-green hover:bg-agentia-green/10 dark:text-white text-agentia-dark-800 transition-all duration-300";
      case "ghost":
        return "bg-transparent hover:bg-black/5 dark:hover:bg-white/10 dark:text-white text-agentia-dark-800 transition-all duration-300";
      default:
        return "bg-gradient-to-r from-agentia-teal to-agentia-green hover:from-agentia-teal-light hover:to-agentia-green-light text-white shadow-lg shadow-agentia-green/20 hover:shadow-agentia-green/30 transition-all duration-300";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "text-sm px-4 py-2";
      case "md":
        return "text-base px-6 py-2.5";
      case "lg":
        return "text-lg px-8 py-3";
      default:
        return "text-base px-6 py-2.5";
    }
  };

  return (
    <button
      className={cn(
        "relative rounded-lg font-medium flex items-center justify-center gap-2 overflow-hidden transition-transform active:scale-95",
        getVariantClasses(),
        getSizeClasses(),
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
      <div className="absolute -inset-0.5 -z-10 rounded-lg blur-md opacity-0 group-hover:opacity-75 transition-opacity"></div>
    </button>
  );
};
