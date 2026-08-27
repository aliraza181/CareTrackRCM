"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import MonitorHeartRoundedIcon from "@mui/icons-material/MonitorHeartRounded";
import type { SvgIconComponent } from "@mui/icons-material";
import Section from "@/components/primitives/Section";
import SectionHeading from "@/components/primitives/SectionHeading";
import Reveal from "@/components/primitives/Reveal";
import { security } from "@/data/site";

const icons: SvgIconComponent[] = [
  HealthAndSafetyRoundedIcon,
  LockRoundedIcon,
  AdminPanelSettingsRoundedIcon,
  HistoryRoundedIcon,
  HubRoundedIcon,
  MonitorHeartRoundedIcon,
];

export default function Security() {
  return (
    <Section id="security" tone="default" py={{ xs: 9, md: 14 }}>
      <SectionHeading
        eyebrow={security.eyebrow}
        title={security.title}
        subtitle={security.subtitle}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {security.items.map((item, i) => {
          const Icon = icons[i] ?? HealthAndSafetyRoundedIcon;
          return (
            <Reveal key={item.title} delay={i * 60}>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  height: "100%",
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 3,
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    flexShrink: 0,
                    borderRadius: 2,
                    display: "grid",
                    placeItems: "center",
                    color: "primary.main",
                    bgcolor: "rgba(14,116,144,0.10)",
                  }}
                >
                  <Icon fontSize="small" />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700 }}>{item.title}</Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mt: 0.5 }}
                  >
                    {item.body}
                  </Typography>
                </Box>
              </Stack>
            </Reveal>
          );
        })}
      </Box>
      <Typography
        variant="caption"
        sx={{ display: "block", mt: 3, color: "text.secondary", textAlign: "center" }}
      >
        {security.note}
      </Typography>
    </Section>
  );
}
