"use client";

import * as React from "react";
import Box from "@mui/material/Box";

type Props = {
  data: number[]; // values 0..100
  height?: number;
  stroke?: string;
  fillFrom?: string;
  fillTo?: string;
  ariaLabel?: string;
};

/** Lightweight smoothed area chart drawn as inline SVG (no chart lib). */
export default function AreaTrend({
  data,
  height = 160,
  stroke = "#0E7490",
  fillFrom = "rgba(14,116,144,0.22)",
  fillTo = "rgba(14,116,144,0)",
  ariaLabel = "Trend chart",
}: Props) {
  const id = React.useId().replace(/[:]/g, "");
  const W = 100;
  const H = 100;
  const pad = 6;

  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * (W - pad * 2) + pad;
    const y = H - pad - (v / 100) * (H - pad * 2);
    return [x, y] as const;
  });

  // Catmull-Rom -> cubic bezier for a smooth line
  const line = React.useMemo(() => {
    if (pts.length < 2) return "";
    let d = `M ${pts[0][0]} ${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] ?? pts[i];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] ?? p2;
      const c1x = p1[0] + (p2[0] - p0[0]) / 6;
      const c1y = p1[1] + (p2[1] - p0[1]) / 6;
      const c2x = p2[0] - (p3[0] - p1[0]) / 6;
      const c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2[0]} ${p2[1]}`;
    }
    return d;
  }, [pts]);

  const area = `${line} L ${pts[pts.length - 1][0]} ${H - pad} L ${pts[0][0]} ${
    H - pad
  } Z`;

  const last = pts[pts.length - 1];

  return (
    <Box
      role="img"
      aria-label={ariaLabel}
      sx={{ width: "100%", height, lineHeight: 0 }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        width="100%"
        height={height}
      >
        <defs>
          <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fillFrom} />
            <stop offset="100%" stopColor={fillTo} />
          </linearGradient>
        </defs>
        {/* subtle gridlines */}
        {[25, 50, 75].map((g) => (
          <line
            key={g}
            x1={pad}
            x2={W - pad}
            y1={(g / 100) * (H - pad * 2) + pad}
            y2={(g / 100) * (H - pad * 2) + pad}
            stroke="rgba(14,27,42,0.06)"
            strokeWidth={0.4}
          />
        ))}
        <path d={area} fill={`url(#grad-${id})`} />
        <path
          d={line}
          fill="none"
          stroke={stroke}
          strokeWidth={1.6}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx={last[0]} cy={last[1]} r={2.2} fill={stroke} />
        <circle cx={last[0]} cy={last[1]} r={4.5} fill={stroke} opacity={0.18} />
      </svg>
    </Box>
  );
}
