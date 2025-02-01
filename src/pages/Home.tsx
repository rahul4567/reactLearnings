import React, { useEffect, useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import FormList from "../components/FormList";
import FormBuilder from "../components/FormBuilder";
import { Form } from "../types/interfaces";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/storage";

const Home: React.FC = () => {
  // State to hold the list of forms
  const [forms, setForms] = useState<Form[]>([]);

  useEffect(() => {
    // Retrieve saved form data from localStorage on component mount
    const forms = getFromLocalStorage<any[]>("savedForms");
    if (forms) {
      setForms(forms);
    }
  }, []);

  // Function to edit a form (for now, just logs the form ID)
  const handleEditForm = (formId: string) => {
    console.log(`Editing form with id: ${formId}`);
    // You can implement navigation to a form editor page
  };

  // Function to delete a form
  const handleDeleteForm = (formId: string) => {
    setForms(forms.filter((form) => form.id !== formId));
    saveToLocalStorage("savedForms", [...forms]);
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 4,
        }}
      ></Box>
      <FormBuilder
        formFields={[] as any}
        isPreviewEnabled={false}
        formsData={forms}
        isEdit={false}
        onCreateCallBack={(forms: Array<Form>) => {
          setForms(forms);
        }}
      />

      {/* If no forms exist, show a message */}
      {forms.length === 0 ? (
        <Typography variant="body1">
          No forms available. Click "Create New Form" to start.
        </Typography>
      ) : (
        <FormList
          forms={forms}
          onEdit={handleEditForm}
          onDelete={handleDeleteForm}
        />
      )}
    </Container>
  );
};

export default Home;
