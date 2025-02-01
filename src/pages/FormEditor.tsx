import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import { Form, FormField } from "../types/interfaces";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";
import { getFromLocalStorage } from "../utils/storage";
import FormBuilder from "../components/FormBuilder";

interface FormEditorProps {
  forms: FormField[]; // Existing form data passed to this component
  onSave: (formId: string, updatedForm: FormField[]) => void; // Callback to save the updated form
}

const FormEditor: React.FC<any> = () => {
  const { formId } = useParams<{ formId: string }>(); // Form ID from URL params
  const [forms, setForms] = useState<Form[]>([]);
  const [formTitle, setFormTitle] = useState<String>("");

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve saved form data from localStorage on component mount
    const savedFormData = getFromLocalStorage<any[]>("savedForms");
    if (savedFormData) {
      setForms(savedFormData);
      const form = savedFormData.find((f: any) => f.id === formId);
      setFormTitle(form?.title ?? "");
    }
  }, []);

  // Find the form by ID (assuming the form data exists in the forms state)
  const form = forms.find((f: any) => f.id === formId);
  if (!form) {
    return <Typography variant="h6">Form not found</Typography>;
  }
  // Save the form
  const handleSave = () => {
    //onSave(formId, updatedForm);
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Edit Form
      </Typography>

      {/* Form Title */}
      <TextField
        label="Form Title"
        value={formTitle}
        onChange={(e) => {
          // Update the form title (this can be handled via the `onSave` function too)
          setFormTitle(e.target.value);
        }}
        fullWidth
        sx={{ mb: 3 }}
      />

      <Typography variant="h6" gutterBottom>
        Fields
      </Typography>
      <FormBuilder
        formFields={form.fields}
        isPreviewEnabled={false}
        formsData={forms}
        isEdit={true}
        formId={formId}
        formTitle={formTitle}
      />
    </Container>
  );
};

export default FormEditor;
