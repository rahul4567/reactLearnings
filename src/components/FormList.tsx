import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Form } from "../types/interfaces";

interface FormListProps {
  forms: Form[]; // List of forms to display
  onEdit: (formId: string) => void; // Callback for editing a form
  onDelete: (formId: string) => void; // Callback for deleting a form
}

const FormList: React.FC<FormListProps> = ({ forms, onEdit, onDelete }) => {
  const navigate = useNavigate();
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Existing Forms
      </Typography>
      {forms.length === 0 ? (
        <Typography variant="body1">No forms available.</Typography>
      ) : (
        <List>
          {forms.map((form) => (
            <ListItem
              key={form.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingY: 1,
                borderBottom: "1px solid #ccc",
              }}
            >
              <ListItemText primary={form.title} />
              <Box>
                <IconButton
                  color="primary"
                  onClick={() => navigate(`/form-editor/${form.id}`)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton color="error" onClick={() => onDelete(form.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default FormList;
