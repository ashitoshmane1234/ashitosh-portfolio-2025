import { Card } from "@mui/material";

export default function GlassCard({ children }) {
  return (
    <Card
      sx={{
        backdropFilter: "blur(12px)",
        background: "rgba(15,23,42,0.75)",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
        }
      }}
    >
      {children}
    </Card>
  );
}
