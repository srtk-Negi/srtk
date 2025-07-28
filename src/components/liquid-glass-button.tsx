"use client";

import { useState } from "react";

interface LiquidGlassButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function LiquidGlassButton({
  children,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
}: LiquidGlassButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const baseClasses = `
    relative overflow-hidden font-medium transition-all duration-300 ease-out
    border backdrop-blur-md group cursor-pointer
    disabled:cursor-not-allowed disabled:opacity-50
    active:scale-95 hover:scale-105
  `;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
  };

  const variantClasses = {
    primary: `
      bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20
      border-white/20 dark:border-white/10 hover:border-white/30 dark:hover:border-white/20
      text-gray-900 dark:text-white
      shadow-lg shadow-black/5 dark:shadow-white/5
    `,
    secondary: `
      bg-gray-100/10 dark:bg-gray-800/10 hover:bg-gray-100/20 dark:hover:bg-gray-800/20
      border-gray-200/20 dark:border-gray-700/20 hover:border-gray-200/30 dark:hover:border-gray-700/30
      text-gray-700 dark:text-gray-300
      shadow-lg shadow-gray-500/5 dark:shadow-gray-400/5
    `,
    accent: `
      bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10
      dark:from-blue-400/10 dark:via-purple-400/10 dark:to-cyan-400/10
      hover:from-blue-500/20 hover:via-purple-500/20 hover:to-cyan-500/20
      dark:hover:from-blue-400/20 dark:hover:via-purple-400/20 dark:hover:to-cyan-400/20
      border-blue-500/20 dark:border-blue-400/20 hover:border-blue-500/30 dark:hover:border-blue-400/30
      text-blue-900 dark:text-blue-100
      shadow-lg shadow-blue-500/10 dark:shadow-blue-400/10
    `,
  };

  const glowClasses = {
    primary: "from-white/20 via-gray-100/20 to-white/20",
    secondary: "from-gray-200/20 via-gray-300/20 to-gray-200/20",
    accent: "from-blue-400/20 via-purple-400/20 to-cyan-400/20",
  };

  const rippleClasses = {
    primary: "bg-white/30 dark:bg-white/20",
    secondary: "bg-gray-300/30 dark:bg-gray-400/20",
    accent:
      "bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-cyan-400/30",
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      style={{
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
      }}
    >
      {/* Glass surface layer */}
      <div
        className="absolute inset-0 bg-white/5 dark:bg-black/5 transition-all duration-300 group-hover:bg-white/10 dark:group-hover:bg-black/10"
        style={{
          backdropFilter: "blur(15px) saturate(150%)",
          WebkitBackdropFilter: "blur(15px) saturate(150%)",
        }}
      />

      {/* Animated glow effect */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-r ${glowClasses[variant]}
          blur-xl scale-75 opacity-0 group-hover:scale-125 group-hover:opacity-100
          transition-all duration-500 ease-out
        `}
      />

      {/* Ripple effect on press */}
      <div
        className={`
          absolute inset-0 ${rippleClasses[variant]} rounded-inherit
          scale-0 opacity-0 transition-all duration-200 ease-out
          ${isPressed ? "scale-100 opacity-100" : ""}
        `}
      />

      {/* Shimmer effect */}
      <div className="absolute inset-0 overflow-hidden rounded-inherit">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
          -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out
          skew-x-12 w-1/2"
        />
      </div>

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading && (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {children}
      </span>

      {/* Inner highlight */}
      <div
        className="absolute inset-[1px] rounded-inherit bg-gradient-to-b from-white/10 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </button>
  );
}
