"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Section from "@/components/primitives/Section";
import Reveal from "@/components/primitives/Reveal";
import { problems } from "@/data/site";

export default function Problems() {
  return (
    <Section id="problems" tone="default" py={{ xs: 9, md: 14 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" },
          gap: { xs: 5, md: 8 },
        }}
      >
        {/* Left: heading (sticky on desktop) */}
        <Box sx={{ position: { md: "sticky" }, top: { md: 120 }, alignSelf: "start" }}>
          <Reveal>
            <Typography variant="overline" sx={{ color: "primary.main" }}>
              {problems.eyebrow}
            </Typography>
          </Reveal>
          <Reveal delay={60}>
            <Typography variant="h2" sx={{ mt: 2 }}>
              {problems.title}
            </Typography>
          </Reveal>
          <Reveal delay={120}>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ mt: 2.5, color: "text.secondary", maxWidth: 420 }}
            >
              {problems.subtitle}
            </Typography>
          </Reveal>
        </Box>

        {/* Right: editorial problem list */}
        <Box>
          {problems.items.map((item, i) => (
            <Reveal key={item.key} delay={i * 80}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "auto 1fr" },
                  gap: { xs: 1.5, sm: 4 },
                  py: { xs: 3, md: 3.5 },
                  borderTop: "1px solid",
                  borderColor: "divider",
                  "&:last-of-type": {
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  },
                }}
              >
                <Box sx={{ minWidth: { sm: 130 } }}>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-jakarta)",
                      fontWeight: 800,
                      fontSize: { xs: "1.8rem", md: "2.1rem" },
                      color: "primary.main",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.stat}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", display: "block", mt: 0.5 }}
                  >
                    {item.statLabel}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" component="h3">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mt: 1, color: "text.secondary" }}
                  >
                    {item.body}
                  </Typography>
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Section>
  );
}
