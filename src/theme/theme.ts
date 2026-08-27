"use client";

import { createTheme, alpha } from "@mui/material/styles";
import type { Shadows } from "@mui/material/styles";

/* ------------------------------------------------------------------ *
 * Design tokens
 * ------------------------------------------------------------------ *
 * A single premium palette: deep navy "ink" as the dominant dark,
 * one confident teal-cyan accent for brand + conversion, emerald for
 * positive financial data, amber/red reserved for risk/denials.
 * ------------------------------------------------------------------ */

export const tokens = {
  // Brand
  ink: "#0A1A2F", // deep navy — dark sections, headings
  inkSoft: "#10233D",
  brand: "#0E7490", // teal-cyan — primary action / brand
  brandDark: "#0B5566",
  brandLight: "#22A6BF",
  accent: "#2DD4BF", // mint — highlights, chart accents
  // Data semantics
  positive: "#10B981", // collections up, clean claims
  warning: "#F59E0B", // aging A/R
  danger: "#EF4444", // denials
  // Neutrals
  canvas: "#F6F8FB", // page background
  surface: "#FFFFFF",
  surfaceMuted: "#EEF2F7",
  textPrimary: "#0E1B2A",
  textSecondary: "#54677B",
  textFaint: "#8595A6",
  border: "#E3E9F0",
  borderStrong: "#D2DBE5",
} as const;

// Spacing scale (px): 4 8 12 16 24 32 48 64 80 96 120
// MUI spacing(1) = 8; the scale is used via theme.spacing and sx values.

const RADIUS = 12;

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: tokens.brand,
      dark: tokens.brandDark,
      light: tokens.brandLight,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: tokens.ink,
      dark: "#050F1C",
      light: tokens.inkSoft,
      contrastText: "#FFFFFF",
    },
    success: { main: tokens.positive },
    warning: { main: tokens.warning },
    error: { main: tokens.danger },
    info: { main: tokens.brandLight },
    background: {
      default: tokens.canvas,
      paper: tokens.surface,
    },
    text: {
      primary: tokens.textPrimary,
      secondary: tokens.textSecondary,
    },
    divider: tokens.border,
  },

  shape: { borderRadius: RADIUS },

  spacing: 8,

  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1440 },
  },

  typography: {
    fontFamily:
      "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    // Display family for headings
    h1: {
      fontFamily: "var(--font-jakarta), system-ui, sans-serif",
      fontWeight: 800,
      fontSize: "clamp(2.6rem, 5.2vw, 4.25rem)",
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontFamily: "var(--font-jakarta), system-ui, sans-serif",
      fontWeight: 800,
      fontSize: "clamp(2rem, 3.6vw, 3rem)",
      lineHeight: 1.1,
      letterSpacing: "-0.025em",
    },
    h3: {
      fontFamily: "var(--font-jakarta), system-ui, sans-serif",
      fontWeight: 700,
      fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontFamily: "var(--font-jakarta), system-ui, sans-serif",
      fontWeight: 700,
      fontSize: "1.35rem",
      lineHeight: 1.25,
      letterSpacing: "-0.015em",
    },
    h5: {
      fontFamily: "var(--font-jakarta), system-ui, sans-serif",
      fontWeight: 700,
      fontSize: "1.1rem",
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
    },
    h6: {
      fontFamily: "var(--font-jakarta), system-ui, sans-serif",
      fontWeight: 700,
      fontSize: "0.95rem",
      lineHeight: 1.35,
    },
    subtitle1: { fontSize: "1.25rem", lineHeight: 1.55, fontWeight: 400 },
    subtitle2: { fontSize: "1.05rem", lineHeight: 1.55, fontWeight: 600 },
    body1: { fontSize: "1.0625rem", lineHeight: 1.65 },
    body2: { fontSize: "0.95rem", lineHeight: 1.6 },
    button: { fontWeight: 600, letterSpacing: 0 },
    overline: {
      fontWeight: 700,
      fontSize: "0.75rem",
      letterSpacing: "0.14em",
      lineHeight: 1.4,
    },
    caption: { fontSize: "0.8rem", lineHeight: 1.5 },
  },

  shadows: [
    "none",
    "0 1px 2px rgba(14,27,42,0.05)",
    "0 2px 6px rgba(14,27,42,0.06)",
    "0 4px 12px rgba(14,27,42,0.07)",
    "0 8px 24px rgba(14,27,42,0.08)",
    "0 12px 32px rgba(14,27,42,0.10)",
    "0 16px 40px rgba(14,27,42,0.12)",
    "0 20px 48px rgba(14,27,42,0.14)",
    // remaining slots reuse the deepest elevation
    ...Array(17).fill("0 24px 60px rgba(14,27,42,0.16)"),
  ] as unknown as Shadows,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth" },
        body: { backgroundColor: tokens.canvas },
        "::selection": {
          background: alpha(tokens.brand, 0.18),
        },
        "@media (prefers-reduced-motion: reduce)": {
          html: { scrollBehavior: "auto" },
        },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
          "@media (min-width:900px)": {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 600,
          paddingInline: 20,
          paddingBlock: 10,
          minHeight: 44,
        },
        sizeLarge: {
          paddingInline: 26,
          paddingBlock: 13,
          fontSize: "1rem",
          minHeight: 48,
        },
        outlined: {
          borderColor: tokens.borderStrong,
          color: tokens.textPrimary,
          "&:hover": {
            borderColor: tokens.ink,
            background: alpha(tokens.ink, 0.03),
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            boxShadow: `0 8px 20px ${alpha(tokens.brand, 0.28)}`,
            "&:hover": {
              boxShadow: `0 10px 26px ${alpha(tokens.brand, 0.36)}`,
            },
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600, borderRadius: 8, paddingBlock: 2 },
      },
    },
    MuiLink: {
      defaultProps: { underline: "none" },
      styleOverrides: {
        root: { fontWeight: 600 },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "outlined", size: "medium" },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          background: tokens.surface,
        },
      },
    },
  },
});

export default theme;
