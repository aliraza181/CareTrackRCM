"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@/components/primitives/Stack";
import Chip from "@mui/material/Chip";
import ButtonBase from "@mui/material/ButtonBase";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Section from "@/components/primitives/Section";
import SectionHeading from "@/components/primitives/SectionHeading";
import Reveal from "@/components/primitives/Reveal";
import { specialties } from "@/data/site";

export default function Specialties() {
  const [active, setActive] = React.useState(0);
  const current = specialties.items[active];

  return (
    <Section id="specialties" tone="default" py={{ xs: 9, md: 14 }}>
      <SectionHeading
        eyebrow={specialties.eyebrow}
        title={specialties.title}
        subtitle={specialties.subtitle}
      />

      <Reveal>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
            gap: { xs: 2, md: 4 },
          }}
        >
          {/* selector */}
          <Box
            role="tablist"
            aria-label="Specialties"
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              gap: 1,
              overflowX: { xs: "auto", md: "visible" },
              overflowY: "visible",
              scrollSnapType: { xs: "x proximity", md: "none" },
              WebkitOverflowScrolling: "touch",
              // fade the right edge on mobile as a scroll affordance
              maskImage: {
                xs: "linear-gradient(90deg, #000 92%, transparent 100%)",
                md: "none",
              },
              pb: { xs: 1, md: 0 },
              mx: { xs: -0.5, md: 0 },
              px: { xs: 0.5, md: 0 },
              "&::-webkit-scrollbar": { height: 6 },
              "&::-webkit-scrollbar-thumb": {
                bgcolor: "divider",
                borderRadius: 3,
              },
            }}
          >
            {specialties.items.map((s, i) => {
              const selected = i === active;
              return (
                <ButtonBase
                  key={s.key}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(i)}
                  sx={{
                    justifyContent: { xs: "center", md: "flex-start" },
                    textAlign: "left",
                    px: { xs: 2.25, md: 2.5 },
                    py: { xs: 1.5, md: 1.75 },
                    minHeight: 44,
                    borderRadius: 2.5,
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    width: { xs: "auto", md: "100%" },
                    border: "1px solid",
                    borderColor: selected ? "primary.main" : "divider",
                    bgcolor: selected ? "rgba(14,116,144,0.06)" : "background.paper",
                    color: selected ? "primary.dark" : "text.primary",
                    fontWeight: selected ? 700 : 600,
                    fontSize: "0.98rem",
                    whiteSpace: "nowrap",
                    transition: "all 0.18s",
                    "&:hover": {
                      borderColor: "primary.main",
                      bgcolor: "rgba(14,116,144,0.04)",
                    },
                  }}
                >
                  {s.name}
                </ButtonBase>
              );
            })}
          </Box>

          {/* detail */}
          <Box
            key={current.key}
            sx={{
              p: { xs: 3, md: 4.5 },
              borderRadius: 4,
              bgcolor: "#0A1A2F",
              color: "#E8EEF5",
              backgroundImage:
                "radial-gradient(500px 260px at 100% 0%, rgba(45,212,191,0.14), transparent 60%)",
              animation: "fadeSwap 0.4s ease",
              "@keyframes fadeSwap": {
                from: { opacity: 0, transform: "translateY(8px)" },
                to: { opacity: 1, transform: "none" },
              },
            }}
          >
            <Chip
              label={current.name}
              sx={{
                bgcolor: "rgba(45,212,191,0.16)",
                color: "#7ff0e0",
                fontWeight: 700,
                mb: 2,
              }}
            />
            <Typography variant="overline" sx={{ color: "rgba(230,238,245,0.55)" }}>
              The billing challenge
            </Typography>
            <Typography
              variant="h4"
              component="h3"
              sx={{ color: "#F3F7FB", mt: 0.5, mb: 3, fontWeight: 700 }}
            >
              {current.challenge}
            </Typography>

            <Typography
              variant="overline"
              sx={{ color: "rgba(230,238,245,0.55)" }}
            >
              How we focus
            </Typography>
            <Stack spacing={1.25} sx={{ mt: 1.5 }}>
              {current.focus.map((f) => (
                <Stack key={f} direction="row" spacing={1.25} alignItems="center">
                  <CheckCircleRoundedIcon
                    sx={{ fontSize: 20, color: "#2DD4BF" }}
                  />
                  <Typography sx={{ color: "rgba(230,238,245,0.9)" }}>
                    {f}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Box>
      </Reveal>
    </Section>
  );
}
