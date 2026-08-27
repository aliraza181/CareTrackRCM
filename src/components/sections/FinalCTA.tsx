"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@/components/primitives/Stack";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Reveal from "@/components/primitives/Reveal";
import LeadForm from "./LeadForm";
import { finalCta } from "@/data/site";

export default function FinalCTA() {
  return (
    <Box
      id="assessment"
      component="section"
      sx={{
        position: "relative",
        py: { xs: 9, md: 14 },
        overflow: "hidden",
        bgcolor: "#0A1A2F",
        color: "#E8EEF5",
        backgroundImage:
          "radial-gradient(800px 400px at 10% 0%, rgba(45,212,191,0.16), transparent 55%), radial-gradient(900px 500px at 100% 100%, rgba(34,166,191,0.18), transparent 55%)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          id="contact"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" },
            gap: { xs: 5, md: 8 },
            alignItems: "center",
          }}
        >
          {/* copy */}
          <Box>
            <Reveal>
              <Typography variant="overline" sx={{ color: "#2DD4BF" }}>
                {finalCta.eyebrow}
              </Typography>
            </Reveal>
            <Reveal delay={60}>
              <Typography variant="h2" sx={{ color: "#F5F9FC", mt: 2 }}>
                {finalCta.title}
              </Typography>
            </Reveal>
            <Reveal delay={120}>
              <Typography
                variant="subtitle1"
                component="p"
                sx={{ mt: 2.5, color: "rgba(230,238,245,0.78)", maxWidth: 480 }}
              >
                {finalCta.subtitle}
              </Typography>
            </Reveal>
            <Reveal delay={180}>
              <Stack spacing={1.5} sx={{ mt: 4 }}>
                {finalCta.bullets.map((b) => (
                  <Stack key={b} direction="row" spacing={1.5} alignItems="center">
                    <CheckCircleRoundedIcon sx={{ color: "#2DD4BF", fontSize: 22 }} />
                    <Typography sx={{ color: "rgba(230,238,245,0.9)" }}>
                      {b}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Reveal>
          </Box>

          {/* form */}
          <Reveal delay={140} y={26}>
            <LeadForm />
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}
