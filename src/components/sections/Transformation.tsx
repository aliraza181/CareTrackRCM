"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@/components/primitives/Stack";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import Section from "@/components/primitives/Section";
import SectionHeading from "@/components/primitives/SectionHeading";
import Reveal from "@/components/primitives/Reveal";
import { transformation } from "@/data/site";

export default function Transformation() {
  return (
    <Section id="transformation" tone="muted" py={{ xs: 9, md: 14 }}>
      <SectionHeading
        eyebrow={transformation.eyebrow}
        title={transformation.title}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr auto 1fr" },
          gap: { xs: 2.5, md: 3 },
          alignItems: "center",
        }}
      >
        {/* Before */}
        <Reveal>
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography
              variant="overline"
              sx={{ color: "error.main", fontWeight: 700 }}
            >
              {transformation.before.title}
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 2 }}>
              {transformation.before.items.map((item) => (
                <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
                  <Box
                    sx={{
                      mt: 0.25,
                      width: 22,
                      height: 22,
                      flexShrink: 0,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "rgba(239,68,68,0.10)",
                      color: "error.main",
                    }}
                  >
                    <CloseRoundedIcon sx={{ fontSize: 15 }} />
                  </Box>
                  <Typography sx={{ color: "text.secondary" }}>{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Reveal>

        {/* Arrow */}
        <Reveal delay={100}>
          <Box
            aria-hidden
            sx={{
              justifySelf: "center",
              width: 56,
              height: 56,
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              color: "#fff",
              background: "linear-gradient(135deg, #0E7490, #2DD4BF)",
              boxShadow: "0 12px 28px rgba(14,116,144,0.35)",
              transform: { xs: "rotate(90deg)", md: "none" },
            }}
          >
            <EastRoundedIcon />
          </Box>
        </Reveal>

        {/* After */}
        <Reveal delay={160}>
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              color: "#E8EEF5",
              bgcolor: "#0A1A2F",
              border: "1px solid",
              borderColor: "rgba(45,212,191,0.3)",
              backgroundImage:
                "radial-gradient(420px 220px at 100% 0%, rgba(45,212,191,0.16), transparent 60%)",
              boxShadow: "0 24px 60px rgba(6,20,38,0.22)",
            }}
          >
            <Typography
              variant="overline"
              sx={{ color: "#2DD4BF", fontWeight: 700 }}
            >
              {transformation.after.title}
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 2 }}>
              {transformation.after.items.map((item) => (
                <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
                  <Box
                    sx={{
                      mt: 0.25,
                      width: 22,
                      height: 22,
                      flexShrink: 0,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "rgba(45,212,191,0.18)",
                      color: "#2DD4BF",
                    }}
                  >
                    <CheckRoundedIcon sx={{ fontSize: 15 }} />
                  </Box>
                  <Typography sx={{ color: "rgba(230,238,245,0.9)" }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Reveal>
      </Box>
    </Section>
  );
}
