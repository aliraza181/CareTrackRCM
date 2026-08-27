"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Reveal from "@/components/primitives/Reveal";
import { trustStrip } from "@/data/site";

export default function TrustStrip() {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 5 },
        bgcolor: "#0C2036",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        color: "#E8EEF5",
      }}
    >
      <Container maxWidth="lg">
        <Reveal>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "rgba(230,238,245,0.55)",
              mb: 3,
            }}
          >
            {trustStrip.intro}
          </Typography>
        </Reveal>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr 1fr",
              sm: "repeat(5, 1fr)",
            },
            gap: { xs: 2.5, md: 2 },
            alignItems: "center",
          }}
        >
          {trustStrip.items.map((item, i) => (
            <Reveal key={item.stat} delay={i * 60}>
              <Box sx={{ textAlign: "center", px: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "var(--font-jakarta)",
                    fontWeight: 800,
                    fontSize: { xs: "1.4rem", md: "1.7rem" },
                    color: "#F3F7FB",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.stat}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(230,238,245,0.6)" }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            mt: 3,
            color: "rgba(230,238,245,0.35)",
          }}
        >
          {trustStrip.footnote}
        </Typography>
      </Container>
    </Box>
  );
}
