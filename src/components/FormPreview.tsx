import React from "react";
import {
  Container,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { FormField as FormFieldType } from "../types/interfaces";
import FormField from "./FormField";

interface FormPreviewProps {
  fields: FormFieldType[];
}

const FormPreview: React.FC<FormPreviewProps> = ({ fields }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <Container>
      <Typography variant="h5">Form Preview</Typography>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id} style={{ marginBottom: "1rem" }}>
            <Typography variant="subtitle1">
              {field.label} {field.required && "*"}
            </Typography>

            {field.type === "text" && <FormField field={field} />}
            {field.type === "date" && <FormField field={field} />}

            {field.type === "checkbox" && <FormField field={field} />}

            {field.type === "radio" && field.options && (
              <RadioGroup>
                {field.options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            )}

            {field.type === "select" && <FormField field={field} />}
          </div>
        ))}
      </form>
    </Container>
  );
};

export default FormPreview;
