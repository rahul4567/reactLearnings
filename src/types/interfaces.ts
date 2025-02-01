// Define the structure for a single form field
export interface FormField {
  id: string; // Unique identifier for the field
  type: "text" | "radio" | "checkbox" | "select" | "date"; // Field type
  label: string; // Label for the field
  options?: string[]; // Options for radio, checkbox, or select fields
  placeholder?: string; // Placeholder for text fields
  required?: boolean; // Whether the field is required
}

// Define the structure for a form containing multiple fields
export interface Form {
  id: string; // Unique identifier for the form
  title: string; // Title of the form
  fields: FormField[]; // Array of form fields
}

// Define the structure for a response to a form
export interface FormResponse {
  formId: string; // ID of the form that this response belongs to
  responses: Record<string, string | string[]>; // Map of field IDs to their responses
}
