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

  const educationToShow = expanded
    ? educationData
    : educationData.slice(0, 3); // 2 full + partial 3rd

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} mb={4}>
        Education
      </Typography>

      {/* CLIPPED CONTAINER */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          maxHeight: expanded ? "none" : 540,
          transition: "max-height 0.4s ease"
        }}
      >
        <Stack spacing={3}>
          {educationToShow.map((edu, index) => {
            const isPartial = !expanded && index === 2;

            return (
              <Card
                key={index}
                sx={{
                  borderRadius: 3,
                  backdropFilter: "blur(8px)",
                  background:
                    theme.palette.mode === "dark"
                      ? "rgba(15,23,42,0.85)"
                      : "#fff",
                  border: "1px solid",
                  borderColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(0,0,0,0.06)",
                  transition: "0.3s ease",
                  opacity: isPartial ? 0.95 : 1,
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.12)"
                  }
                }}
              >
                <CardContent>
                  {/* HEADER */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <IconButton
                      sx={{
                        fontSize: 32,
                        color: "primary.main"
                      }}
                    >
                      {edu.logo}
                    </IconButton>

                    <Box>
                      <Typography fontWeight={600}>
                        {edu.degree}
                        {isPartial && " …"}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        {edu.institute}
                      </Typography>
                    </Box>
                  </Stack>

                  <Divider sx={{ my: 1.5 }} />

                  {/* DETAILS */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      display: isPartial ? "-webkit-box" : "block",
                      WebkitLineClamp: isPartial ? 2 : "unset",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}
                  >
                    {edu.duration}
                    {edu.type && ` • ${edu.type}`} • Grade: {edu.grade}
                  </Typography>

                  {/* CERTIFICATE BUTTON (IMPORTANT) */}
                  {edu.certificate && !isPartial && (
                    <Button
                      variant="outlined"
                      size="small"
                      component="a"
                      href={edu.certificate}
                      target="_blank"
                      sx={{
                        textTransform: "none",
                        fontWeight: 600
                      }}
                    >
                      View Certificate
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </Stack>

        {/* FADE MASK */}
        {!expanded && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 120,
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(transparent, #0B0F1B)"
                  : "linear-gradient(transparent, #fff)"
            }}
          />
        )}
      </Box>

      {/* VIEW MORE / LESS */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button size="small" onClick={() => setExpanded(!expanded)}>
          {expanded ? "View Less" : "...View More"}
        </Button>
      </Box>
    </Box>
  );
}
