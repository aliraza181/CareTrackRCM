"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@/components/primitives/Stack";
import Avatar from "@mui/material/Avatar";
import Section from "@/components/primitives/Section";
import SectionHeading from "@/components/primitives/SectionHeading";
import Reveal from "@/components/primitives/Reveal";
import { testimonials } from "@/data/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function Testimonials() {
  return (
    <Section id="testimonials" tone="muted" py={{ xs: 9, md: 14 }}>
      <SectionHeading
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
        subtitle={testimonials.subtitle}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: { xs: 2.5, md: 3 },
        }}
      >
        {testimonials.items.map((t, i) => (
          <Reveal key={i} delay={i * 90}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                p: { xs: 3, md: 3.5 },
                borderRadius: 4,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box sx={{ color: "primary.main", mb: 1.5 }}>
                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" aria-hidden>
                  <path
                    d="M0 24V13.2C0 5.9 4.2 1 11.4 0l1.2 3.9c-3.9 1-5.7 3.3-5.7 6.6H12V24H0Zm18 0V13.2C18 5.9 22.2 1 29.4 0l1.2 3.9c-3.9 1-5.7 3.3-5.7 6.6H30V24H18Z"
                    fill="currentColor"
                    opacity="0.22"
                  />
                </svg>
              </Box>
              <Typography
                sx={{
                  color: "text.primary",
                  fontSize: "1.05rem",
                  lineHeight: 1.6,
                  flexGrow: 1,
                }}
              >
                {t.quote}
              </Typography>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                sx={{ mt: 3, pt: 3, borderTop: "1px solid", borderColor: "divider" }}
              >
                <Avatar
                  sx={{
                    bgcolor: "rgba(14,116,144,0.12)",
                    color: "primary.main",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                  }}
                >
                  {initials(t.name)}
                </Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 700 }}>{t.name}</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {t.role} · {t.org}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
