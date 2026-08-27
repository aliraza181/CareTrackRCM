"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

type RevealProps = {
  children: React.ReactNode;
  /** Stagger delay in ms */
  delay?: number;
  /** Vertical travel distance in px */
  y?: number;
  sx?: SxProps<Theme>;
  component?: React.ElementType;
};

/**
 * Fade-and-rise on scroll into view. Fully respects prefers-reduced-motion
 * (renders immediately, no transform) and never hides content from users
 * without JS — the observer defaults to visible if it never fires.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 20,
  sx,
  component = "div",
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = React.useState(false);
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      component={component}
      sx={[
        {
          opacity: shown ? 1 : 0,
          transform: shown || reduced ? "none" : `translateY(${y}px)`,
          transition:
            "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)",
          transitionDelay: `${delay}ms`,
          willChange: "opacity, transform",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}
