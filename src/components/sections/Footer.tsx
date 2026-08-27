"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@/components/primitives/Stack";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Logo from "@/components/Logo";
import { footer, company } from "@/data/site";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#06121F",
        color: "rgba(230,238,245,0.72)",
        pt: { xs: 6, md: 9 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1.4fr repeat(3, 1fr)",
            },
            gap: { xs: 5, sm: 4 },
          }}
        >
          {/* brand */}
          <Box>
            <Logo onDark />
            <Typography
              variant="body2"
              sx={{ mt: 2, color: "rgba(230,238,245,0.6)", maxWidth: 320 }}
            >
              A revenue cycle management partner helping healthcare practices
              reduce denials, recover A/R, and get paid faster.
            </Typography>
            <Stack spacing={0.5} sx={{ mt: 3 }}>
              <Link
                href={`tel:${company.phone.replace(/[^\d]/g, "")}`}
                sx={{
                  color: "rgba(230,238,245,0.8)",
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 44,
                  gap: 1,
                }}
              >
                <PhoneRoundedIcon sx={{ fontSize: 17 }} />
                {company.phone}
              </Link>
              <Link
                href={`mailto:${company.email}`}
                sx={{
                  color: "rgba(230,238,245,0.8)",
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 44,
                  gap: 1,
                }}
              >
                <EmailRoundedIcon sx={{ fontSize: 17 }} />
                {company.email}
              </Link>
            </Stack>
            <Button
              href="#assessment"
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Get a free assessment
            </Button>
          </Box>

          {/* link columns */}
          {footer.columns.map((col) => (
            <Box key={col.title}>
              <Typography
                variant="overline"
                sx={{ color: "rgba(230,238,245,0.5)", display: "block", mb: 2 }}
              >
                {col.title}
              </Typography>
              <Stack spacing={0}>
                {col.links.map((l) => (
                  <Link
                    key={l}
                    href="#assessment"
                    sx={{
                      color: "rgba(230,238,245,0.72)",
                      fontWeight: 500,
                      display: "inline-flex",
                      alignItems: "center",
                      minHeight: 40,
                      "&:hover": { color: "#fff" },
                    }}
                  >
                    {l}
                  </Link>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 4 }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
        >
          <Typography variant="caption" sx={{ color: "rgba(230,238,245,0.5)" }}>
            © {new Date().getFullYear()} {company.name}. Demo site — all data is
            placeholder. Not affiliated with any real company.
          </Typography>
          <Stack
            direction="row"
            spacing={2.5}
            sx={{ flexWrap: "wrap", rowGap: 1 }}
          >
            {footer.legal.map((l) => (
              <Link
                key={l}
                href="#"
                variant="caption"
                sx={{
                  color: "rgba(230,238,245,0.55)",
                  "&:hover": { color: "#fff" },
                }}
              >
                {l}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
