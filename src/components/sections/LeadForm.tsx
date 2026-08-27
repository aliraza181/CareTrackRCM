"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { specialtyOptions } from "@/data/site";

type Fields = {
  name: string;
  email: string;
  practice: string;
  phone: string;
  specialty: string;
  collections: string;
};

const empty: Fields = {
  name: "",
  email: "",
  practice: "",
  phone: "",
  specialty: "",
  collections: "",
};

export default function LeadForm() {
  const [values, setValues] = React.useState<Fields>(empty);
  const [errors, setErrors] = React.useState<Partial<Record<keyof Fields, string>>>(
    {}
  );
  const [submitted, setSubmitted] = React.useState(false);

  const update =
    (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Enter a valid work email";
    if (!values.practice.trim()) next.practice = "Please enter your practice";
    if (!values.specialty) next.specialty = "Select a specialty";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Demo only: no backend. Wire this to your CRM / API route in production.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Box
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 4,
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <CheckCircleRoundedIcon
          sx={{ fontSize: 52, color: "success.main", mb: 1.5 }}
        />
        <Typography variant="h4" component="p" sx={{ mb: 1 }}>
          Thanks, {values.name.split(" ")[0] || "there"} 👋
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 3 }}>
          Your request is in. A billing expert will reach out within one business
          day to schedule your free revenue assessment.
        </Typography>
        <Button variant="outlined" onClick={() => {
          setValues(empty);
          setSubmitted(false);
        }}>
          Submit another request
        </Button>
        <Typography
          variant="caption"
          sx={{ display: "block", mt: 2, color: "text.secondary" }}
        >
          Demo form — not connected to a backend.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0 30px 70px rgba(6,20,38,0.18)",
      }}
    >
      <Typography variant="h4" component="p" sx={{ mb: 0.5 }}>
        Get your free revenue assessment
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
        No obligation. Takes under a minute.
      </Typography>

      <Stack spacing={2}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
          <TextField
            label="Full name"
            required
            value={values.name}
            onChange={update("name")}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
          />
          <TextField
            label="Work email"
            type="email"
            required
            value={values.email}
            onChange={update("email")}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
          />
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
          <TextField
            label="Practice name"
            required
            value={values.practice}
            onChange={update("practice")}
            error={!!errors.practice}
            helperText={errors.practice}
            fullWidth
          />
          <TextField
            label="Phone (optional)"
            value={values.phone}
            onChange={update("phone")}
            fullWidth
          />
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
          <TextField
            select
            label="Specialty"
            required
            value={values.specialty}
            onChange={update("specialty")}
            error={!!errors.specialty}
            helperText={errors.specialty}
            fullWidth
          >
            {specialtyOptions.map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Monthly collections (optional)"
            value={values.collections}
            onChange={update("collections")}
            placeholder="e.g. $320,000"
            fullWidth
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ArrowForwardRoundedIcon />}
          sx={{ mt: 1 }}
        >
          Get my free revenue assessment
        </Button>
        <Alert
          icon={false}
          severity="info"
          sx={{
            bgcolor: "rgba(14,116,144,0.06)",
            color: "text.secondary",
            border: "1px solid",
            borderColor: "divider",
            py: 0.5,
          }}
        >
          Your information is kept confidential and used only to prepare your
          assessment.
        </Alert>
      </Stack>
    </Box>
  );
}
