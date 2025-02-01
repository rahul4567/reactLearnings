// Utility functions for handling CSV file import/export

// Function to convert an array of objects into CSV format
export const convertToCSV = (data: any[], headers: string[]): string => {
  const csvRows: string[] = [];

  // Add the header row
  csvRows.push(headers.join(","));

  // Add the data rows
  data.forEach((row) => {
    const values = headers.map((header) => {
      return JSON.stringify(row[header] ?? ""); // Escape any data if needed
    });
    csvRows.push(values.join(","));
  });

  return csvRows.join("\n");
};

// Function to download CSV as a file
export const downloadCSV = (
  data: any[],
  headers: string[],
  filename: string
) => {
  const csvContent = convertToCSV(data, headers);
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Function to parse a CSV file and convert it to an array of objects
export const parseCSV = (csvText: string, headers: string[]): any[] => {
  const rows = csvText.split("\n");
  const data: any[] = [];

  // Skip the first row (header)
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].trim();
    if (row === "") continue; // Skip empty rows

    const values = row.split(",");
    const rowObject: any = {};

    headers.forEach((header, idx) => {
      rowObject[header] = values[idx] || ""; // Assign value to corresponding header
    });

    data.push(rowObject);
  }

  return data;
};

// Function to import CSV file and convert it to an array of objects
export const importCSVFile = (
  file: File,
  headers: string[],
  onComplete: (data: any[]) => void
) => {
  const reader = new FileReader();

  reader.onload = function (e) {
    const csvText = e.target?.result as string;
    const parsedData = parseCSV(csvText, headers);
    onComplete(parsedData); // Pass the parsed data to the callback
  };

  reader.readAsText(file);
};
