"use client";

import * as React from "react";
import Box from "@mui/material/Box";

type Segment = { label: string; value: number; color: string };

type Props = {
  data: Segment[];
  size?: number;
  thickness?: number;
  centerLabel?: string;
  centerSub?: string;
};

/** Donut chart drawn with stroked SVG arcs (no chart lib). */
export default function Donut({
  data,
  size = 132,
  thickness = 16,
  centerLabel,
  centerSub,
}: Props) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;

  return (
    <Box
      role="img"
      aria-label={`Distribution: ${data
        .map((d) => `${d.label} ${Math.round((d.value / total) * 100)}%`)
        .join(", ")}`}
      sx={{ position: "relative", width: size, height: size }}
    >
      <svg width={size} height={size}>
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="rgba(14,27,42,0.06)"
            strokeWidth={thickness}
          />
          {data.map((d) => {
            const frac = d.value / total;
            const dash = frac * c;
            const seg = (
              <circle
                key={d.label}
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke={d.color}
                strokeWidth={thickness}
                strokeDasharray={`${dash} ${c - dash}`}
                strokeDashoffset={-offset}
                strokeLinecap="butt"
              />
            );
            offset += dash;
            return seg;
          })}
        </g>
      </svg>
      {(centerLabel || centerSub) && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {centerLabel && (
            <Box sx={{ fontWeight: 800, fontSize: "1.1rem", color: "#0E1B2A" }}>
              {centerLabel}
            </Box>
          )}
          {centerSub && (
            <Box sx={{ fontSize: "0.7rem", color: "#54677B" }}>{centerSub}</Box>
          )}
        </Box>
      )}
    </Box>
  );
}
