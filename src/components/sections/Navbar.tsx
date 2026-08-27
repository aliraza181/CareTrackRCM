"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Logo from "@/components/Logo";
import { nav } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent-over-dark-hero at the top; frosted-light once scrolled.
  const onDark = !scrolled;
  const linkColor = onDark ? "rgba(243,247,251,0.82)" : "text.secondary";
  const linkHoverColor = onDark ? "#FFFFFF" : "text.primary";
  const linkHoverBg = onDark ? "rgba(255,255,255,0.10)" : "rgba(14,27,42,0.05)";

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          bgcolor: scrolled ? "rgba(255,255,255,0.82)" : "transparent",
          backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(14,27,42,0.08)"
            : "1px solid transparent",
          transition: "all 0.25s ease",
          color: onDark ? "#F3F7FB" : "text.primary",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 68, md: 76 },
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ flex: "0 0 auto" }}>
              <Logo onDark={onDark} />
            </Box>

            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                display: { xs: "none", md: "flex" },
                flex: "1 1 auto",
                justifyContent: "center",
              }}
            >
              {nav.map((item) => (
                <Button
                  key={item.href}
                  href={item.href}
                  sx={{
                    color: linkColor,
                    fontWeight: 600,
                    px: 1.5,
                    transition: "color 0.2s ease, background-color 0.2s ease",
                    "&:hover": {
                      color: linkHoverColor,
                      bgcolor: linkHoverBg,
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>

            <Stack
              direction="row"
              spacing={1.25}
              sx={{
                display: { xs: "none", md: "flex" },
                flex: "0 0 auto",
                alignItems: "center",
              }}
            >
              <Button href="#assessment" variant="contained" color="primary">
                Book a demo
              </Button>
            </Stack>

            <IconButton
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              sx={{
                display: { xs: "inline-flex", md: "none" },
                ml: 1,
                color: onDark ? "#F3F7FB" : "text.primary",
              }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { width: 300, p: 2 } } }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Logo />
          <IconButton aria-label="Close menu" onClick={() => setOpen(false)}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 1 }} />
        <List>
          {nav.map((item) => (
            <ListItemButton
              key={item.href}
              component="a"
              href={item.href}
              onClick={() => setOpen(false)}
              sx={{ borderRadius: 2 }}
            >
              <ListItemText
                primary={item.label}
                slotProps={{ primary: { sx: { fontWeight: 600 } } }}
              />
            </ListItemButton>
          ))}
        </List>
        <Stack spacing={1.25} sx={{ mt: 2 }}>
          <Button
            href="#assessment"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            onClick={() => setOpen(false)}
          >
            Book a demo
          </Button>
          <Button
            href="#assessment"
            variant="outlined"
            fullWidth
            size="large"
            onClick={() => setOpen(false)}
          >
            Talk to an expert
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
