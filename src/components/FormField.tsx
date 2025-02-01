import React from "react";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

interface FormFieldProps {
  field: {
    id: string;
    type: "text" | "radio" | "checkbox" | "select" | "date";
    label: string;
    options?: string[];
    placeholder?: string;
    required?: boolean;
  };
}

const FormField: React.FC<FormFieldProps> = ({ field }) => {
  switch (field.type) {
    case "text":
      return (
        <TextField
          label={field.label}
          placeholder={field.placeholder}
          fullWidth
          required={field.required}
        />
      );

    case "radio":
      return (
        <RadioGroup>
          {field.options?.map((option, index) => (
            <FormControlLabel key={index} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      );

    case "checkbox":
      return (
        <>
          {field.options?.map((option, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox />}
              label={option}
            />
          ))}
        </>
      );

    case "select":
      return (
        <FormControl fullWidth>
          <InputLabel>{field.label}</InputLabel>
          <Select>
            {field.options?.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );

    case "date":
      return (
        <TextField
          label={field.label}
          type="date"
          fullWidth
          required={field.required}
          InputLabelProps={{ shrink: true }}
        />
      );

    default:
      return null;
  }
};

export default FormField;
