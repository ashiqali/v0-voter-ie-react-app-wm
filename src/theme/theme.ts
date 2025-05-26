import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#4a90a4", // Blue-gray from the header
      dark: "#2c5f70",
    },
    secondary: {
      main: "#4caf50", // Green for buttons
      dark: "#388e3c",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.4,
      color: "#333333",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#666666",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "25px",
          padding: "12px 24px",
          fontSize: "1rem",
          fontWeight: 500,
        },
        contained: {
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          "&:hover": {
            boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          border: "1px solid #e0e0e0",
        },
      },
    },
  },
})

export default theme
