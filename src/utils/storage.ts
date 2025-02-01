// Utility functions for interacting with localStorage

// Function to save data to localStorage
export const saveToLocalStorage = (key: string, data: any) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error("Could not save to localStorage", error);
  }
};

// Function to get data from localStorage
export const getFromLocalStorage = <T>(key: string): T | null => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) return null;
    return JSON.parse(serializedData);
  } catch (error) {
    console.error("Could not retrieve from localStorage", error);
    return null;
  }
};

// Function to remove data from localStorage
export const removeFromLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Could not remove from localStorage", error);
  }
};

// Function to clear all data from localStorage
export const clearLocalStorage = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Could not clear localStorage", error);
  }
};
