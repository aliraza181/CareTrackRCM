"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Section from "@/components/primitives/Section";
import SectionHeading from "@/components/primitives/SectionHeading";
import Reveal from "@/components/primitives/Reveal";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import GppGoodRoundedIcon from "@mui/icons-material/GppGoodRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import type { SvgIconComponent } from "@mui/icons-material";
import { workflow } from "@/data/site";

const iconMap: Record<string, SvgIconComponent> = {
  person: PersonRoundedIcon,
  verified: VerifiedRoundedIcon,
  description: DescriptionRoundedIcon,
  code: CodeRoundedIcon,
  send: SendRoundedIcon,
  payments: PaymentsRoundedIcon,
  gpp: GppGoodRoundedIcon,
  savings: SavingsRoundedIcon,
};

export default function SolutionWorkflow() {
  return (
    <Section id="solutions" tone="ink" py={{ xs: 9, md: 14 }}>
      <SectionHeading
        eyebrow={workflow.eyebrow}
        title={workflow.title}
        subtitle={workflow.subtitle}
        onDark
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {workflow.steps.map((step, i) => {
          const Icon = iconMap[step.icon] ?? PersonRoundedIcon;
          const isLast = i === workflow.steps.length - 1;
          return (
            <Reveal key={step.label} delay={i * 60}>
              <Box
                sx={{
                  position: "relative",
                  p: 2.5,
                  height: "100%",
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  transition: "background 0.2s, transform 0.2s",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.07)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    display: "grid",
                    placeItems: "center",
                    mb: 1.75,
                    color: "#0A1A2F",
                    background:
                      "linear-gradient(135deg, #2DD4BF 0%, #22A6BF 100%)",
                  }}
                >
                  <Icon fontSize="small" />
                </Box>
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(230,238,245,0.5)", fontWeight: 700 }}
                >
                  Step {String(i + 1).padStart(2, "0")}
                </Typography>
                <Typography
                  sx={{ fontWeight: 700, color: "#F3F7FB", mt: 0.25 }}
                >
                  {step.label}
                </Typography>

                {/* connector arrow (desktop, not last in row) */}
                {!isLast && (
                  <Box
                    aria-hidden
                    sx={{
                      display: { xs: "none", md: (i + 1) % 4 === 0 ? "none" : "block" },
                      position: "absolute",
                      right: -18,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "rgba(45,212,191,0.6)",
                      fontSize: 18,
                      zIndex: 2,
                    }}
                  >
                    →
                  </Box>
                )}
              </Box>
            </Reveal>
          );
        })}
      </Box>

      <Reveal delay={200}>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          <Box sx={{ height: 1, flex: 1, bgcolor: "rgba(255,255,255,0.12)" }} />
          <Typography
            sx={{
              fontFamily: "var(--font-jakarta)",
              fontWeight: 800,
              color: "#2DD4BF",
              letterSpacing: "-0.01em",
            }}
          >
            Revenue, captured
          </Typography>
          <Box sx={{ height: 1, flex: 1, bgcolor: "rgba(255,255,255,0.12)" }} />
        </Box>
      </Reveal>
    </Section>
  );
}
