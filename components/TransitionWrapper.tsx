"use client";

import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { useRef } from "react";

const TransitionWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <div
      ref={ref}
      className={cn(
        `transition-all duration-700 ease-in-out overflow-hidden transform ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 delay-1000"
        }`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default TransitionWrapper;
