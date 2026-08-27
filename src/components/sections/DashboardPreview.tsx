"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@/components/primitives/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import AreaTrend from "@/components/charts/AreaTrend";
import Donut from "@/components/charts/Donut";
import { dashboard } from "@/data/site";

function StatTile({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "positive" | "neutral";
}) {
  return (
    <Box
      sx={{
        p: 1.75,
        borderRadius: 2.5,
        bgcolor: "#F7FAFC",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="caption"
        sx={{ color: "text.secondary", fontWeight: 600 }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontFamily: "var(--font-jakarta)",
          fontWeight: 800,
          fontSize: "1.35rem",
          color: tone === "positive" ? "success.main" : "text.primary",
          lineHeight: 1.1,
          mt: 0.5,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export default function DashboardPreview() {
  return (
    <Box sx={{ position: "relative" }}>
      {/* glow behind the card */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: -30,
          background:
            "radial-gradient(420px 260px at 70% 20%, rgba(45,212,191,0.25), transparent 70%)",
          filter: "blur(10px)",
          zIndex: 0,
        }}
      />

      <Paper
        elevation={0}
        sx={{
          position: "relative",
          zIndex: 1,
          p: { xs: 2, sm: 2.5 },
          borderRadius: 4,
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "0 30px 70px rgba(6,20,38,0.28)",
          maxWidth: 520,
          mx: "auto",
        }}
      >
        {/* header */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{ color: "text.secondary", display: "block" }}
            >
              Revenue performance
            </Typography>
            <Typography sx={{ fontWeight: 700, color: "text.primary" }}>
              Practice overview
            </Typography>
          </Box>
          <Chip
            size="small"
            label={dashboard.period}
            sx={{ bgcolor: "#EDF3F7", color: "text.secondary" }}
          />
        </Stack>

        {/* collections + trend */}
        <Box
          sx={{
            p: 2,
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            mb: 2,
          }}
        >
          <Stack
            direction="row"
            alignItems="flex-end"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {dashboard.collections.label}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-jakarta)",
                  fontWeight: 800,
                  fontSize: "2rem",
                  lineHeight: 1,
                  color: "text.primary",
                }}
              >
                {dashboard.collections.value}
              </Typography>
            </Box>
            <Chip
              size="small"
              icon={<ArrowUpwardRoundedIcon sx={{ fontSize: 15 }} />}
              label={dashboard.collections.delta}
              sx={{
                bgcolor: "rgba(16,185,129,0.12)",
                color: "success.main",
                fontWeight: 700,
                "& .MuiChip-icon": { color: "success.main" },
              }}
            />
          </Stack>
          <Box sx={{ mt: 1 }}>
            <AreaTrend data={dashboard.trend} height={120} ariaLabel="Monthly collections trend, demo data" />
          </Box>
        </Box>

        {/* stat tiles */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1.25,
            mb: 2,
          }}
        >
          {dashboard.metrics.map((m) => (
            <StatTile key={m.label} label={m.label} value={m.value} tone={m.tone} />
          ))}
        </Box>

        {/* payer mix */}
        <Box
          sx={{
            p: 2,
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Donut
            data={dashboard.payerMix}
            centerLabel="Payer"
            centerSub="mix"
          />
          <Stack spacing={0.75} sx={{ flex: 1 }}>
            {dashboard.payerMix.map((p) => (
              <Stack
                key={p.label}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "3px",
                      bgcolor: p.color,
                    }}
                  />
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {p.label}
                  </Typography>
                </Stack>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 700, color: "text.primary" }}
                >
                  {p.value}%
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        <Typography
          variant="caption"
          sx={{ display: "block", mt: 1.5, color: "text.secondary", textAlign: "center" }}
        >
          Illustrative dashboard · demo data
        </Typography>
      </Paper>
    </Box>
  );
}
