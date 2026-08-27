"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Section from "@/components/primitives/Section";
import SectionHeading from "@/components/primitives/SectionHeading";
import Reveal from "@/components/primitives/Reveal";
import { process } from "@/data/site";

export default function Process() {
  return (
    <Section id="process" tone="muted" py={{ xs: 9, md: 14 }}>
      <SectionHeading eyebrow={process.eyebrow} title={process.title} />

      <Box sx={{ position: "relative" }}>
        {/* connecting line (desktop) */}
        <Box
          aria-hidden
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: 28,
            left: "12%",
            right: "12%",
            height: 2,
            background:
              "linear-gradient(90deg, rgba(14,116,144,0.15), rgba(14,116,144,0.5), rgba(14,116,144,0.15))",
          }}
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {process.steps.map((step, i) => (
            <Reveal key={step.no} delay={i * 90}>
              <Box sx={{ textAlign: { xs: "left", md: "center" } }}>
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    mx: { xs: 0, md: "auto" },
                    display: "grid",
                    placeItems: "center",
                    fontFamily: "var(--font-jakarta)",
                    fontWeight: 800,
                    color: "#fff",
                    background:
                      "linear-gradient(135deg, #0E7490 0%, #128AA6 100%)",
                    boxShadow: "0 10px 24px rgba(14,116,144,0.30)",
                  }}
                >
                  {step.no}
                </Box>
                <Typography variant="h5" component="h3" sx={{ mt: 2.5 }}>
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    color: "text.secondary",
                    maxWidth: 240,
                    mx: { xs: 0, md: "auto" },
                  }}
                >
                  {step.body}
                </Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Section>
  );
}
