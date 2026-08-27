"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Stack from "@/components/primitives/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Section from "@/components/primitives/Section";
import SectionHeading from "@/components/primitives/SectionHeading";
import Reveal from "@/components/primitives/Reveal";

const usd0 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function Field({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  const id = React.useId();
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        sx={{ mb: 0.5 }}
      >
        <Typography
          component="label"
          htmlFor={id}
          variant="body2"
          sx={{ color: "text.secondary", fontWeight: 600 }}
        >
          {label}
        </Typography>
        <Typography
          sx={{
            fontFamily: "var(--font-jakarta)",
            fontWeight: 800,
            color: "text.primary",
          }}
        >
          {display}
        </Typography>
      </Stack>
      <Slider
        id={id}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(_, v) => onChange(v as number)}
        aria-label={label}
        sx={{
          "& .MuiSlider-thumb": {
            width: 18,
            height: 18,
            boxShadow: "0 2px 8px rgba(14,116,144,0.4)",
          },
        }}
      />
    </Box>
  );
}

function ResultRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ py: strong ? 0.5 : 0 }}
    >
      <Typography
        sx={{
          color: strong ? "#F3F7FB" : "rgba(230,238,245,0.72)",
          fontWeight: strong ? 700 : 500,
          fontSize: strong ? "1rem" : "0.95rem",
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontFamily: "var(--font-jakarta)",
          fontWeight: 800,
          color: strong ? "#2DD4BF" : "#F3F7FB",
          fontSize: strong ? "1.5rem" : "1.05rem",
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
}

export default function RevenueCalculator() {
  const [collections, setCollections] = React.useState(320000); // monthly
  const [denial, setDenial] = React.useState(11); // %
  const [ar, setAr] = React.useState(480000); // outstanding
  const [providers, setProviders] = React.useState(6);

  // --- Estimate logic (clearly labeled as estimates) ---
  const targetDenial = 4;
  const recoverableDenialPct = Math.max(denial - targetDenial, 0) / 100;
  const captureRate = 0.6; // portion realistically recoverable
  const monthlyAdditional = collections * recoverableDenialPct * captureRate;
  const annualAdditional = monthlyAdditional * 12;
  const arRecovery = ar * 0.25; // recover 25% of aging balance
  const totalOpportunity = annualAdditional + arRecovery;

  return (
    <Section id="calculator" tone="default" py={{ xs: 9, md: 14 }}>
      <SectionHeading
        eyebrow="Revenue opportunity"
        title="How much revenue could your practice be leaving behind?"
        subtitle="Move the sliders to model your practice. All outputs are directional estimates for illustration — your assessment produces a precise figure."
      />

      <Reveal>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            gap: 0,
            borderRadius: 4,
            overflow: "hidden",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 24px 60px rgba(14,27,42,0.10)",
          }}
        >
          {/* Inputs */}
          <Box sx={{ p: { xs: 3, md: 5 }, bgcolor: "background.paper" }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Your practice
            </Typography>
            <Stack spacing={3.5}>
              <Field
                label="Monthly collections"
                value={collections}
                display={usd0.format(collections)}
                min={20000}
                max={2000000}
                step={10000}
                onChange={setCollections}
              />
              <Field
                label="First-pass denial rate"
                value={denial}
                display={`${denial}%`}
                min={2}
                max={30}
                step={1}
                onChange={setDenial}
              />
              <Field
                label="Outstanding A/R"
                value={ar}
                display={usd0.format(ar)}
                min={0}
                max={5000000}
                step={20000}
                onChange={setAr}
              />
              <Field
                label="Providers"
                value={providers}
                display={`${providers}`}
                min={1}
                max={60}
                step={1}
                onChange={setProviders}
              />
            </Stack>
          </Box>

          {/* Results */}
          <Box
            sx={{
              p: { xs: 3, md: 5 },
              bgcolor: "#0A1A2F",
              color: "#E8EEF5",
              backgroundImage:
                "radial-gradient(600px 300px at 100% 0%, rgba(45,212,191,0.16), transparent 60%)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="overline"
              sx={{ color: "rgba(230,238,245,0.6)" }}
            >
              Estimated annual opportunity
            </Typography>
            <Typography
              sx={{
                fontFamily: "var(--font-jakarta)",
                fontWeight: 800,
                fontSize: "clamp(2.4rem, 5vw, 3.2rem)",
                lineHeight: 1.05,
                color: "#F5F9FC",
                mt: 0.5,
                mb: 3,
              }}
            >
              {usd0.format(Math.round(totalOpportunity))}
            </Typography>

            <Stack spacing={1.5} sx={{ flexGrow: 1 }}>
              <ResultRow
                label="Additional collections / yr"
                value={usd0.format(Math.round(annualAdditional))}
              />
              <ResultRow
                label="Potential A/R recovery"
                value={usd0.format(Math.round(arRecovery))}
              />
              <ResultRow
                label="Per provider / yr"
                value={usd0.format(
                  Math.round(totalOpportunity / Math.max(providers, 1))
                )}
              />
              <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", my: 1 }} />
              <ResultRow
                label="Total opportunity"
                value={usd0.format(Math.round(totalOpportunity))}
                strong
              />
            </Stack>

            <Button
              href="#assessment"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{ mt: 3, alignSelf: "flex-start" }}
            >
              Get my detailed revenue analysis
            </Button>
            <Typography
              variant="caption"
              sx={{ mt: 2, color: "rgba(230,238,245,0.5)" }}
            >
              Estimates only, based on your inputs and typical recovery ranges.
              Not a guarantee of results.
            </Typography>
          </Box>
        </Box>
      </Reveal>
    </Section>
  );
}
