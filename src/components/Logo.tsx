"use client";

import * as React from "react";
import Box from "@mui/material/Box";

type Props = { onDark?: boolean; compact?: boolean };

/** CareTrack RCM wordmark with an abstract "revenue pulse" mark. */
export default function Logo({ onDark = false, compact = false }: Props) {
  const ink = onDark ? "#F3F7FB" : "#0A1A2F";
  const accent = onDark ? "#5EEAD4" : "#0E7490";
  return (
    <Box
      component="a"
      href="#top"
      aria-label="CareTrack RCM home"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1.25,
        textDecoration: "none",
      }}
    >
      <Box
        sx={{
          width: 38,
          height: 38,
          borderRadius: "11px",
          display: "grid",
          placeItems: "center",
          background:
            "linear-gradient(135deg, #0E7490 0%, #128AA6 55%, #2DD4BF 130%)",
          boxShadow: "0 6px 16px rgba(14,116,144,0.35)",
          flexShrink: 0,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M2 13h4l2.2-6.4a1 1 0 0 1 1.9.05L13 17l2-4h7"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      {!compact && (
        <Box sx={{ lineHeight: 1 }}>
          <Box
            sx={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontWeight: 800,
              fontSize: "1.12rem",
              letterSpacing: "-0.02em",
              color: ink,
            }}
          >
            CareTrack
            <Box component="span" sx={{ color: accent }}>
              {" "}
              RCM
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
