"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@/components/primitives/Stack";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import Reveal from "@/components/primitives/Reveal";
import DashboardPreview from "./DashboardPreview";
import { hero } from "@/data/site";

export default function Hero() {
  const [before, highlight, after] = hero.title.split(
    new RegExp(`(${hero.highlight})`)
  );

  return (
    <Box
      id="top"
      component="header"
      sx={{
        position: "relative",
        pt: { xs: 14, md: 20 },
        pb: { xs: 8, md: 14 },
        overflow: "hidden",
        bgcolor: "#0A1A2F",
        color: "#E8EEF5",
        backgroundImage:
          "radial-gradient(900px 500px at 12% -5%, rgba(45,212,191,0.16), transparent 55%), radial-gradient(1000px 620px at 100% 0%, rgba(34,166,191,0.20), transparent 55%), linear-gradient(180deg, #0A1A2F 0%, #0C2036 100%)",
      }}
    >
      {/* faint grid texture */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.5,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(1200px 600px at 50% 0%, #000 40%, transparent 85%)",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
            gap: { xs: 6, md: 6 },
            alignItems: "center",
          }}
        >
          {/* copy */}
          <Box>
            <Reveal>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{
                  display: "inline-flex",
                  px: 1.5,
                  py: 0.75,
                  mb: 3,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.16)",
                  bgcolor: "rgba(255,255,255,0.04)",
                }}
              >
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    bgcolor: "#2DD4BF",
                    boxShadow: "0 0 0 4px rgba(45,212,191,0.18)",
                  }}
                />
                <Typography
                  variant="overline"
                  sx={{ color: "rgba(230,238,245,0.85)" }}
                >
                  {hero.eyebrow}
                </Typography>
              </Stack>
            </Reveal>

            <Reveal delay={80}>
              <Typography
                variant="h1"
                component="h1"
                sx={{ color: "#F5F9FC", maxWidth: 640 }}
              >
                {before}
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(120deg, #2DD4BF 0%, #22A6BF 60%, #38BDF8 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {highlight}
                </Box>
                {after}
              </Typography>
            </Reveal>

            <Reveal delay={160}>
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  mt: 3,
                  maxWidth: 540,
                  color: "rgba(230,238,245,0.78)",
                }}
              >
                {hero.subtitle}
              </Typography>
            </Reveal>

            <Reveal delay={240}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mt: 4.5 }}
              >
                <Button
                  href="#assessment"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardRoundedIcon />}
                >
                  {hero.primaryCta}
                </Button>
                <Button
                  href="#contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "#E8EEF5",
                    borderColor: "rgba(255,255,255,0.28)",
                    "&:hover": {
                      borderColor: "#fff",
                      bgcolor: "rgba(255,255,255,0.06)",
                    },
                  }}
                >
                  {hero.secondaryCta}
                </Button>
              </Stack>
            </Reveal>

            <Reveal delay={320}>
              <Stack
                direction="row"
                spacing={1.25}
                alignItems="center"
                sx={{ mt: 4, color: "rgba(230,238,245,0.62)" }}
              >
                <ShieldRoundedIcon sx={{ fontSize: 18, color: "#2DD4BF" }} />
                <Typography variant="body2">{hero.trust}</Typography>
              </Stack>
            </Reveal>
          </Box>

          {/* visual */}
          <Reveal delay={200} y={28}>
            <DashboardPreview />
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}
