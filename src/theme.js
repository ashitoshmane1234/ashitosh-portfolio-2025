import { createTheme } from "@mui/material/styles";

const baseTheme = {
  typography: {
    fontFamily: "Inter, sans-serif",
    h3: { fontWeight: 800, lineHeight: 1.2 },
    h4: { fontWeight: 700, lineHeight: 1.3 },
    h5: { fontWeight: 600, lineHeight: 1.4 },
    body1: { fontWeight: 400, lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "0.75rem 1.75rem",
          transition: "0.3s all ease",
        }
      }
    }
  }
};

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: { main: "#6366F1" }, // Indigo
    secondary: { main: "#22D3EE" }, // Cyan
    text: {
      primary: "#E5E7EB",
      secondary: "#A1A1AA"
    },
    background: {
      default: "#0B0F1B", // deep dark
      paper: "rgba(15, 23, 42, 0.85)" // subtle frosted effect
    }
  }
});

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: { main: "#4F46E5" }, // Indigo-600
    secondary: { main: "#06B6D4" }, // Cyan-500
    text: {
      primary: "#111827",
      secondary: "#6B7280"
    },
    background: {
      default: "#F3F4F6", // Light neutral
      paper: "#FFFFFF"
    }
  }
});

export default darkTheme;
