"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface GlassSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  backgroundOpacity?: number;
  blur?: number;
  borderRadius?: number;
  borderWidth?: number;
}

const GlassSurface = React.forwardRef<HTMLDivElement, GlassSurfaceProps>(
  (
    {
      children,
      className,
      backgroundOpacity = 0.05,
      blur = 16,
      borderRadius = 20,
      borderWidth = 1,
      style,
      ...props
    },
    ref
  ) => {
    const backgroundHsl = "222 84% 4.9%"; // From :root --background

    const containerStyle: React.CSSProperties = {
      ...style,
      backgroundColor: `hsla(${backgroundHsl} / ${backgroundOpacity})`,
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`,
      borderRadius: `${borderRadius}px`,
      border: `${borderWidth}px solid hsla(217.2, 32.6%, 17.5%, 0.5)`, // From :root --border with alpha
    };

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        style={containerStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassSurface.displayName = "GlassSurface";

export default GlassSurface;
