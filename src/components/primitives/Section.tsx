"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import type { SxProps, Theme } from "@mui/material/styles";

type Tone = "default" | "muted" | "ink" | "gradient";

const toneStyles: Record<Tone, SxProps<Theme>> = {
  default: { bgcolor: "background.default", color: "text.primary" },
  muted: { bgcolor: "#EEF3F8", color: "text.primary" },
  ink: {
    bgcolor: "secondary.main",
    color: "#E8EEF5",
    backgroundImage:
      "radial-gradient(1200px 500px at 15% -10%, rgba(45,212,191,0.12), transparent 60%), radial-gradient(900px 500px at 100% 0%, rgba(34,166,191,0.14), transparent 55%)",
  },
  gradient: {
    color: "#0E1B2A",
    backgroundImage:
      "linear-gradient(180deg, #FFFFFF 0%, #EAF3F6 100%)",
  },
};

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  tone?: Tone;
  /** Vertical padding scale (uses spacing units) */
  py?: number | { xs: number; md: number };
  maxWidth?: "sm" | "md" | "lg" | "xl" | false;
  disableGutters?: boolean;
  sx?: SxProps<Theme>;
  containerSx?: SxProps<Theme>;
};

export default function Section({
  id,
  children,
  tone = "default",
  py = { xs: 8, md: 14 },
  maxWidth = "lg",
  sx,
  containerSx,
}: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={[
        { position: "relative", py, overflow: "hidden" },
        toneStyles[tone] as SxProps<Theme>,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Container maxWidth={maxWidth} sx={containerSx}>
        {children}
      </Container>
    </Box>
  );
}
