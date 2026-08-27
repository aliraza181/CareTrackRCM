"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  maxWidth?: number;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  onDark = false,
  maxWidth = 760,
}: Props) {
  const isCenter = align === "center";
  return (
    <Box
      sx={{
        maxWidth,
        mx: isCenter ? "auto" : 0,
        textAlign: align,
        mb: { xs: 5, md: 8 },
      }}
    >
      {eyebrow && (
        <Reveal>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              mb: 2,
            }}
          >
            <Box
              component="span"
              sx={{
                width: 24,
                height: 2,
                borderRadius: 1,
                bgcolor: onDark ? "primary.light" : "primary.main",
                display: isCenter ? "none" : "block",
              }}
            />
            <Typography
              variant="overline"
              sx={{ color: onDark ? "primary.light" : "primary.main" }}
            >
              {eyebrow}
            </Typography>
          </Box>
        </Reveal>
      )}
      <Reveal delay={60}>
        <Typography
          variant="h2"
          component="h2"
          sx={{ color: onDark ? "#F3F7FB" : "text.primary" }}
        >
          {title}
        </Typography>
      </Reveal>
      {subtitle && (
        <Reveal delay={120}>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              mt: 2.5,
              color: onDark ? "rgba(230,238,245,0.75)" : "text.secondary",
              maxWidth: isCenter ? 680 : "100%",
              mx: isCenter ? "auto" : 0,
            }}
          >
            {subtitle}
          </Typography>
        </Reveal>
      )}
    </Box>
  );
}
