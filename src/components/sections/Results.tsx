"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Section from "@/components/primitives/Section";
import SectionHeading from "@/components/primitives/SectionHeading";
import Reveal from "@/components/primitives/Reveal";
import CountUp from "@/components/primitives/CountUp";
import { results } from "@/data/site";

export default function Results() {
  return (
    <Section id="results" tone="ink" py={{ xs: 9, md: 14 }}>
      <SectionHeading
        eyebrow={results.eyebrow}
        title={results.title}
        subtitle={results.subtitle}
        onDark
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)" },
          gap: 0,
          borderRadius: 4,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        {results.metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 70}>
            <Box
              sx={{
                p: { xs: 3, md: 4.5 },
                height: "100%",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                bgcolor: "rgba(255,255,255,0.02)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-jakarta)",
                  fontWeight: 800,
                  fontSize: { xs: "2.2rem", md: "3rem" },
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  background:
                    "linear-gradient(120deg, #F3F7FB 0%, #7ff0e0 120%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                <CountUp
                  value={m.value}
                  prefix={m.prefix ?? ""}
                  suffix={m.suffix ?? ""}
                />
              </Typography>
              <Typography sx={{ fontWeight: 700, color: "#F3F7FB", mt: 1.5 }}>
                {m.label}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(230,238,245,0.6)", mt: 0.25 }}
              >
                {m.sub}
              </Typography>
            </Box>
          </Reveal>
        ))}
      </Box>
      <Typography
        variant="caption"
        sx={{
          display: "block",
          mt: 2.5,
          color: "rgba(230,238,245,0.4)",
          textAlign: "center",
        }}
      >
        {results.footnote}
      </Typography>
    </Section>
  );
}
