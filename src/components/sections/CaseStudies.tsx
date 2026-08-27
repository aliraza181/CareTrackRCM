"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Section from "@/components/primitives/Section";
import SectionHeading from "@/components/primitives/SectionHeading";
import Reveal from "@/components/primitives/Reveal";
import { caseStudies } from "@/data/site";

export default function CaseStudies() {
  return (
    <Section id="case-studies" tone="default" py={{ xs: 9, md: 14 }}>
      <SectionHeading
        eyebrow={caseStudies.eyebrow}
        title={caseStudies.title}
        subtitle={caseStudies.subtitle}
      />

      <Stack spacing={3}>
        {caseStudies.items.map((cs, i) => (
          <Reveal key={cs.practice} delay={i * 80}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr" },
                gap: { xs: 3, md: 5 },
                p: { xs: 3, md: 4.5 },
                borderRadius: 4,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "0 8px 24px rgba(14,27,42,0.05)",
              }}
            >
              {/* narrative */}
              <Box>
                <Chip
                  label={cs.specialty}
                  size="small"
                  sx={{
                    bgcolor: "rgba(14,116,144,0.10)",
                    color: "primary.dark",
                    fontWeight: 700,
                    mb: 2,
                  }}
                />
                <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
                  {cs.practice}
                </Typography>

                <Stack spacing={1.75}>
                  <Box>
                    <Typography
                      variant="overline"
                      sx={{ color: "error.main" }}
                    >
                      Challenge
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {cs.challenge}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="overline"
                      sx={{ color: "primary.main" }}
                    >
                      What we changed
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {cs.intervention}
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              {/* results */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 1.5,
                  alignContent: "center",
                  p: { xs: 2, md: 3 },
                  borderRadius: 3,
                  bgcolor: "#F5F9FB",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                {cs.result.map((r) => (
                  <Box key={r.label} sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontFamily: "var(--font-jakarta)",
                        fontWeight: 800,
                        fontSize: { xs: "1.3rem", md: "1.6rem" },
                        color: "primary.main",
                        lineHeight: 1.1,
                      }}
                    >
                      {r.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      {r.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Reveal>
        ))}
      </Stack>
    </Section>
  );
}
