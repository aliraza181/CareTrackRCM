"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@/components/primitives/Stack";
import Link from "@mui/material/Link";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import type { SvgIconComponent } from "@mui/icons-material";
import Section from "@/components/primitives/Section";
import SectionHeading from "@/components/primitives/SectionHeading";
import Reveal from "@/components/primitives/Reveal";
import { services } from "@/data/site";

const iconMap: Record<string, SvgIconComponent> = {
  rcm: MonetizationOnRoundedIcon,
  coding: FactCheckRoundedIcon,
  ops: BadgeRoundedIcon,
  intel: InsightsRoundedIcon,
};

export default function Services() {
  return (
    <Section id="services" tone="default" py={{ xs: 9, md: 14 }}>
      <SectionHeading
        eyebrow={services.eyebrow}
        title={services.title}
        subtitle={services.subtitle}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 2.5, md: 3 },
        }}
      >
        {services.categories.map((cat, i) => {
          const Icon = iconMap[cat.key] ?? MonetizationOnRoundedIcon;
          return (
            <Reveal key={cat.key} delay={i * 80}>
              <Box
                sx={{
                  height: "100%",
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "box-shadow 0.25s, border-color 0.25s, transform 0.25s",
                  "&:hover": {
                    boxShadow: "0 20px 48px rgba(14,27,42,0.10)",
                    borderColor: "rgba(14,116,144,0.35)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      flexShrink: 0,
                      borderRadius: 2.5,
                      display: "grid",
                      placeItems: "center",
                      color: "primary.main",
                      bgcolor: "rgba(14,116,144,0.10)",
                    }}
                  >
                    <Icon />
                  </Box>
                  <Box>
                    <Typography variant="h4" component="h3">
                      {cat.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ mt: 1, color: "text.secondary" }}
                    >
                      {cat.body}
                    </Typography>
                  </Box>
                </Stack>

                <Box
                  sx={{
                    mt: 3,
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: 1,
                  }}
                >
                  {cat.capabilities.map((cap) => (
                    <Stack
                      key={cap}
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    >
                      <CheckRoundedIcon
                        sx={{ fontSize: 17, color: "success.main" }}
                      />
                      <Typography variant="body2" sx={{ color: "text.primary" }}>
                        {cap}
                      </Typography>
                    </Stack>
                  ))}
                </Box>

                <Link
                  href="#assessment"
                  sx={{
                    mt: 3,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: "primary.main",
                    "&:hover": { gap: 1 },
                    transition: "gap 0.2s",
                  }}
                >
                  Learn more
                  <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
                </Link>
              </Box>
            </Reveal>
          );
        })}
      </Box>
    </Section>
  );
}
