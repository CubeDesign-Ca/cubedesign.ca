"use client";
import React, { useState, useCallback, ChangeEvent } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import Container from '@mui/material/Container';

interface Form {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const formDefaultValue = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const currencies = [
  {
    value: "placeholder",
    label: "Select a service you would like to request",
  },
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

interface ContactProps {
  url: string;
}

const Contact = ({ url }: ContactProps) => {
  const [form, setForm] = useState<Form>(formDefaultValue);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    [form]
  );

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={url} alt="contact-img" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" component="h3">
            Contact Us
          </Typography>

          <Typography variant="body1" component="p">
            Ready to take your offline presence to the next level? 123-456-7890
          </Typography>

          <Box
            component="div"
            sx={{
              "& .MuiTextField-root": { my: 1, width: "100%" },
            }}
          >
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              defaultValue="placeholder"
              helperText="Please select your currency"
              variant="standard"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              "flex-wrap": "nowrap",
              columnGap: "1vh",
              "& > :not(style)": { my: 1, width: "49%" },
            }}
          >
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              value={form.firstName}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              value={form.lastName}
              onChange={handleChange}
              variant="standard"
            />
          </Box>
          <Box
            component="div"
            sx={{
              "& > :not(style)": { my: 1, width: "100%" },
            }}
          >
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email Address"
              value={form.email}
              onChange={handleChange}
              variant="standard"
            />
          </Box>
          <Box
            component="div"
            sx={{
              "& > :not(style)": { my: 1, width: "100%" },
            }}
          >
            <TextField
              id="message"
              name="message"
              label="Message (optional)"
              value={form.message}
              onChange={handleChange}
              multiline
              rows={4}
            />
          </Box>
          <Box
            component="div"
            sx={{
              "& > :not(style)": { my: 1, width: "100%" },
            }}
          >
            <Button sx={{ "bgcolor": "#D9D9D9" }} variant="contained">
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
