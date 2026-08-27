"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@/components/primitives/Stack";
import Paper from "@mui/material/Paper";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import Section from "@/components/primitives/Section";
import Reveal from "@/components/primitives/Reveal";
import { technology } from "@/data/site";

const scrubChecks = [
  "Eligibility verified",
  "Coding & modifiers validated",
  "Payer rules applied",
  "Duplicate check passed",
];

const bars = [58, 72, 64, 83, 76, 91];

function TechVisual() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.5, md: 3 },
        borderRadius: 4,
        border: "1px solid",
        borderColor: "rgba(255,255,255,0.10)",
        bgcolor: "rgba(255,255,255,0.04)",
        color: "#E8EEF5",
        boxShadow: "0 24px 60px rgba(6,20,38,0.35)",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <BoltRoundedIcon sx={{ color: "#2DD4BF", fontSize: 20 }} />
        <Typography sx={{ fontWeight: 700, color: "#F3F7FB" }}>
          Claim scrubber
        </Typography>
        <Box
          sx={{
            ml: "auto",
            px: 1,
            py: 0.25,
            borderRadius: 1,
            bgcolor: "rgba(16,185,129,0.16)",
            color: "#34d399",
            fontSize: "0.7rem",
            fontWeight: 700,
          }}
        >
          READY TO SUBMIT
        </Box>
      </Stack>

      <Stack spacing={1.25} sx={{ mb: 3 }}>
        {scrubChecks.map((c, i) => (
          <Stack
            key={c}
            direction="row"
            alignItems="center"
            spacing={1.25}
            sx={{
              p: 1.25,
              borderRadius: 2,
              bgcolor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              opacity: 0,
              animation: "rowIn 0.5s ease forwards",
              animationDelay: `${i * 140}ms`,
              "@keyframes rowIn": {
                to: { opacity: 1 },
              },
            }}
          >
            <CheckCircleRoundedIcon sx={{ color: "#2DD4BF", fontSize: 18 }} />
            <Typography variant="body2" sx={{ color: "rgba(230,238,245,0.9)" }}>
              {c}
            </Typography>
          </Stack>
        ))}
      </Stack>

      <Typography
        variant="caption"
        sx={{ color: "rgba(230,238,245,0.55)", fontWeight: 700 }}
      >
        Clean-claim rate by week
      </Typography>
      <Box
        sx={{
          mt: 1.5,
          display: "grid",
          gridTemplateColumns: `repeat(${bars.length}, 1fr)`,
          alignItems: "end",
          gap: 1,
          height: 88,
        }}
      >
        {bars.map((b, i) => (
          <Box
            key={i}
            sx={{
              height: `${b}%`,
              borderRadius: "6px 6px 2px 2px",
              background:
                "linear-gradient(180deg, #2DD4BF 0%, #0E7490 100%)",
              transformOrigin: "bottom",
              animation: "growBar 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
              animationDelay: `${i * 80}ms`,
              transform: "scaleY(0.15)",
              "@keyframes growBar": { to: { transform: "scaleY(1)" } },
            }}
          />
        ))}
      </Box>
    </Paper>
  );
}

export default function Technology() {
  return (
    <Section id="technology" tone="ink" py={{ xs: 9, md: 14 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 5, md: 8 },
          alignItems: "center",
        }}
      >
        {/* copy + features */}
        <Box>
          <Reveal>
            <Typography variant="overline" sx={{ color: "primary.light" }}>
              {technology.eyebrow}
            </Typography>
          </Reveal>
          <Reveal delay={60}>
            <Typography variant="h2" sx={{ color: "#F3F7FB", mt: 2 }}>
              {technology.title}
            </Typography>
          </Reveal>
          <Reveal delay={120}>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ mt: 2.5, color: "rgba(230,238,245,0.75)" }}
            >
              {technology.subtitle}
            </Typography>
          </Reveal>

          <Box
            sx={{
              mt: 4,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2.5,
            }}
          >
            {technology.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <Box>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: "#2DD4BF",
                      }}
                    />
                    <Typography sx={{ fontWeight: 700, color: "#F3F7FB" }}>
                      {f.title}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(230,238,245,0.68)", pl: 2 }}
                  >
                    {f.body}
                  </Typography>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>

        {/* visual */}
        <Reveal delay={160} y={26}>
          <TechVisual />
        </Reveal>
      </Box>
    </Section>
  );
}
