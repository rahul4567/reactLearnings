import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Container,
  MenuItem,
  Select,
  TextField,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FormPreview from "./FormPreview";
import { Form, FormField } from "../types/interfaces";
import { v4 as uuidv4 } from "uuid";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/storage";

const FormBuilder: React.FC<any> = ({
  formFields = [],
  isPreviewEnabled = false,
  formsData = [],
  isEdit = false,
  formId = null,
  formTitle,
  onCreateCallBack,
}) => {
  const [fields, setFields] = useState<FormField[]>(formFields);
  const [preview, setPreview] = useState(isPreviewEnabled);
  const [savedForms, setSavedForms] = useState<Form[]>(formsData);
  const [newOption, setNewOption] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  // Update Form Fields
  const updateField = (id: string, key: keyof FormField, value: any) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id
          ? {
              ...field,
              [key]: value,
              options:
                key === "type" &&
                ["radio", "checkbox", "select"].includes(value)
                  ? []
                  : field.options,
            }
          : field
      )
    );
  };

  // Add New Field
  const addField = () => {
    setFields([
      ...fields,
      {
        id: `${Date.now()}`,
        type: "text",
        label: "New Field",
        required: false,
        options: [],
      },
    ]);
  };

  // Add New Option
  const addOption = (id: string) => {
    if (!newOption[id]?.trim()) return;

    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id
          ? { ...field, options: [...(field.options || []), newOption[id]] }
          : field
      )
    );

    setNewOption({ ...newOption, [id]: "" });
  };

  // Remove Field
  const removeField = (id: string) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  // Remove Option
  const removeOption = (id: string, index: number) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id
          ? { ...field, options: field.options?.filter((_, i) => i !== index) }
          : field
      )
    );
  };

  // Update Existing Form
  const updateForm = () => {
    if (formId) {
      const updatedForms = savedForms.map((form) =>
        form.id === formId ? { ...form, title: formTitle, fields } : form
      );
      saveToLocalStorage("savedForms", updatedForms);
    }
  };

  // Create New Form
  const createForm = () => {
    if (!fields.length) return;
    const forms = getFromLocalStorage<any[]>("savedForms") ?? [];
    const newForm: Form = { id: uuidv4(), title: "Form", fields };
    const updatedForms = [...forms, newForm];

    setSavedForms(updatedForms);
    setFields([]);
    saveToLocalStorage("savedForms", updatedForms);
    onCreateCallBack(updatedForms);
  };

  // Handle Save
  const handleSave = () => {
    updateForm();
    navigate("/");
  };

  // Action Buttons
  const renderActionButton = () => (
    <Button
      variant="outlined"
      color="primary"
      onClick={isEdit ? handleSave : createForm}
      sx={{ mt: 2, ml: 2 }}
    >
      {isEdit ? "Save Form" : "Create Form"}
    </Button>
  );

  return (
    <Container>
      {!preview ? (
        <>
          <Typography variant="h5">Form Builder</Typography>

          {fields.map((field) => (
            <Paper key={field.id} sx={{ p: 2, mb: 2 }}>
              <TextField
                label="Field Label"
                value={field.label}
                onChange={(e) => updateField(field.id, "label", e.target.value)}
                fullWidth
                sx={{ mb: 1 }}
              />
              <Select
                value={field.type}
                onChange={(e) =>
                  updateField(
                    field.id,
                    "type",
                    e.target.value as FormField["type"]
                  )
                }
                fullWidth
                sx={{ mb: 1 }}
              >
                {["text", "radio", "checkbox", "select", "date"].map((type) => (
                  <MenuItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </MenuItem>
                ))}
              </Select>

              {/* Options for Select, Radio, and Checkbox */}
              {["radio", "checkbox", "select"].includes(field.type) && (
                <>
                  {field.options?.map((option, index) => (
                    <Paper
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                        p: 1,
                      }}
                    >
                      <TextField
                        label={`Option ${index + 1}`}
                        value={option}
                        onChange={(e) =>
                          updateField(field.id, "options", [
                            ...field.options!.slice(0, index),
                            e.target.value,
                            ...field.options!.slice(index + 1),
                          ])
                        }
                        fullWidth
                        sx={{ mr: 1 }}
                      />
                      <IconButton
                        color="error"
                        onClick={() => removeOption(field.id, index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Paper>
                  ))}

                  {/* Input for Adding New Option */}
                  <TextField
                    label="New Option"
                    value={newOption[field.id] || ""}
                    onChange={(e) =>
                      setNewOption({ ...newOption, [field.id]: e.target.value })
                    }
                    fullWidth
                    sx={{ mb: 1 }}
                  />
                  <Button
                    variant="outlined"
                    onClick={() => addOption(field.id)}
                    sx={{ mb: 1 }}
                  >
                    Add Option
                  </Button>
                </>
              )}

              {/* Remove Field Button */}
              <Button
                variant="contained"
                color="error"
                onClick={() => removeField(field.id)}
                sx={{ mt: 1 }}
                startIcon={<DeleteIcon />}
              >
                Remove Field
              </Button>
            </Paper>
          ))}

          {/* Form Controls */}
          <Button variant="contained" onClick={addField} sx={{ mt: 2 }}>
            Add Field
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setPreview(true)}
            sx={{ mt: 2, ml: 2 }}
          >
            Preview Form
          </Button>
          {renderActionButton()}
        </>
      ) : (
        <>
          <FormPreview fields={fields} />
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setPreview(false)}
            sx={{ mt: 2 }}
          >
            Back to Edit
          </Button>
          {renderActionButton()}
        </>
      )}
    </Container>
  );
};

export default FormBuilder;
