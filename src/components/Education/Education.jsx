import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Divider,
  IconButton,
  useTheme
} from "@mui/material";
import { FaUniversity, FaSchool } from "react-icons/fa";

/* =======================
   EDUCATION DATA
======================= */
const educationData = [
  {
    institute: "SunBeam Institute of Information Technology, Pune–Karad",
    degree:
      "Postgraduate Diploma (PG-DAC) – Advanced Computing, Computer Science",
    duration: "Mar 2023 – Sep 2023",
    grade: "A",
    type: "Full Time",
    logo: <FaUniversity />,
    certificate: "https://www.cdac.in/"
  },
  {
    institute:
      "Dr. Babasaheb Ambedkar Technological University, Lonere",
    degree: "Bachelor of Technology (B.Tech) – Mechanical Engineering",
    duration: "2017 – 2021",
    grade: "A+",
    type: "Full Time",
    logo: <FaUniversity />,
    certificate: "https://dbatu.ac.in/"
  },
  {
    institute: "Miraj Mahavidyalay, Miraj, Sangli, Maharashtra",
    degree: "Class XII (HSC)",
    duration: "2017",
    grade: "A",
    logo: <FaSchool />,
    certificate: "#"
  },
  {
    institute:
      "Karmveer Bhaurao Patil Vidyalaya, Mhaisal, Sangli, Maharashtra",
    degree: "Class X (SSC)",
    duration: "2015",
    grade: "A+",
    logo: <FaSchool />,
    certificate: "#"
  }
];


export default function Education() {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 5, md: 6 } }}>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Education
      </Typography>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          maxHeight: expanded ? "none" : 500,
          transition: "max-height 0.45s ease"
        }}
      >
        <Stack spacing={2.5}>
          {educationData.map((edu, index) => {
            const isPartial = !expanded && index === 2;

            return (
              <Card
                key={index}
                sx={{
                  borderRadius: 3,
                  backdropFilter: "blur(10px)",
                  background:
                    theme.palette.mode === "dark"
                      ? "rgba(15,23,42,0.88)"
                      : "#fff",
                  border: "1px solid",
                  borderColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(0,0,0,0.06)",
                  opacity: isPartial ? 0.9 : 1,
                  transition: "0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 28px rgba(0,0,0,0.12)"
                  }
                }}
              >
                <CardContent sx={{ pb: "16px !important" }}>
                  {/* HEADER */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <IconButton
                      sx={{ fontSize: 30, color: "primary.main" }}
                    >
                      {edu.logo}
                    </IconButton>

                    <Box>
                      <Typography fontWeight={600}>
                        {edu.degree}
                        {isPartial && " …"}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {edu.institute}
                      </Typography>
                    </Box>
                  </Stack>

                  {!isPartial && (
                    <>
                      <Divider sx={{ my: 1.5 }} />

                      <Typography variant="body2" color="text.secondary" mb={1.5}>
                        {edu.duration}
                        {edu.type && ` • ${edu.type}`} • Grade: {edu.grade}
                      </Typography>

                      {edu.certificate && (
                        <Button
                          size="small"
                          variant="outlined"
                          component="a"
                          href={edu.certificate}
                          target="_blank"
                          sx={{ fontWeight: 600, textTransform: "none" }}
                        >
                          View Certificate
                        </Button>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </Stack>

        {!expanded && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 110,
              pointerEvents: "none",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(transparent, #0B0F1B)"
                  : "linear-gradient(transparent, #fff)"
            }}
          />
        )}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1.5 }}>
        <Button
          size="small"
          onClick={() => setExpanded(!expanded)}
          sx={{ fontWeight: 600, textTransform: "none" }}
        >
          {expanded ? "View Less" : "... View More"}
        </Button>
      </Box>
    </Box>
  );
}
