import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#6366F1" }, // Indigo
    secondary: { main: "#22D3EE" }, // Cyan
    background: {
      default: "#020617",
      paper: "rgba(15, 23, 42, 0.75)"
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h3: { fontWeight: 800 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 }
  },
  shape: {
    borderRadius: 16
  }
});

export default theme;
