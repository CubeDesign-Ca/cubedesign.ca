"use client";
import React, { useState, useCallback, ChangeEvent } from "react";
import { Box, TextField, MenuItem } from "@/lib/mui";

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
    value: 'placeholder',
    label: 'Select a service you would like to request'
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

const Contact = () => {
  const [form, setForm] = useState<Form>(formDefaultValue);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    [form]
  );

  return (
    <div>
    
<Typography variant="h1" component="h2">
  h1. Heading
</Typography>;

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Standard" variant="standard" />
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
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
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
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
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
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
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
    </div>
  );
};

export default Contact;
