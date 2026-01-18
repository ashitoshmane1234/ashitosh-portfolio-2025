import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  IconButton
} from "@mui/material";

import { FaUniversity, FaSchool } from "react-icons/fa";

/* =======================
   BRAND COLORS
======================= */
const brandColors = {
  CDAC: "#E53935",
  DBATU: "#1E88E5",
  Maharashtra: "#6D4C41"
};

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
    link: "https://www.cdac.in/"
  },
  {
    institute:
      "Dr. Babasaheb Ambedkar Technological University, Lonere",
    degree: "Bachelor of Technology (B.Tech) – Mechanical Engineering",
    duration: "2017 – 2021",
    grade: "A+",
    type: "Full Time",
    logo: <FaUniversity />,
    link: "https://dbatu.ac.in/"
  },
  {
    institute: "Miraj Mahavidyalay, Miraj, Sangli, Maharashtra",
    degree: "Class XII (HSC)",
    duration: "2017",
    grade: "A",
    logo: <FaSchool />,
    link: "#"
  },
  {
    institute: "Karmveer Bhaurao Patil vidyalaya, Mhaisal, Sangli, Maharashtra",
    degree: "Class X (SSC)",
    duration: "2015",
    grade: "A+",
    logo: <FaSchool />,
    link: "#"
  }
];

/* =======================
   COMPONENT
======================= */
export default function Education() {
  const [expanded, setExpanded] = useState(false);

  const visibleEducation = expanded
    ? educationData
    : educationData.slice(0, 2);

  return (
    <Box sx={{ py: 5 }}>
      {/* Section Title */}
      <Typography variant="h4" fontWeight={700} mb={4}>
        Education
      </Typography>

      <Stack spacing={3}>
        {visibleEducation.map((edu, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{
              transition: "0.3s",
              "&:hover": { boxShadow: 3 }
            }}
          >
            <CardContent>
              {/* Header */}
              <Stack direction="row" spacing={2} alignItems="center">
                <IconButton
                  component="a"
                  href={edu.link}
                  target="_blank"
                  sx={{
                    fontSize: 36,
                    color:
                      brandColors[edu.institute.split(",")[0]] ||
                      "primary.main"
                  }}
                >
                  {edu.logo}
                </IconButton>

                <Box>
                  <Typography fontWeight={600}>
                    {edu.degree}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {edu.institute}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {edu.duration}
                    {edu.type && ` • ${edu.type}`} • Grade: {edu.grade}
                  </Typography>
                </Box>
              </Stack>

              {/* View Certificate */}
              {edu.link && (
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ mt: 2 }}
                  component="a"
                  href={edu.link}
                  target="_blank"
                >
                  View Certificate
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </Stack>

      {/* View More / Less */}
      {educationData.length > 2 && (
        <Box mt={3} textAlign="right">
          <Button onClick={() => setExpanded(!expanded)}>
            {expanded ? "View Less" : "... View More"}
          </Button>
        </Box>
      )}
    </Box>
  );
}
