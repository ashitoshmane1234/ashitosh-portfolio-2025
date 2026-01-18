import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Button,
  IconButton
} from "@mui/material";

import {
  SiUdemy,
  SiSpringboot,
  SiSpringsecurity,
  SiJavascript,
  SiNodedotjs,
  SiFuturelearn
} from "react-icons/si";

/* =======================
   BRAND COLORS
======================= */
const brandColors = {
  Udemy: "#A435F0",
  "Future Learning": "#DE1B54",
  "Great Learning": "#0A5CD8"
};

/* =======================
   CERTIFICATION DATA
======================= */
const certifications = [
  {
    title: "Master Microservices with Spring Boot and Spring Cloud",
    issuer: "Udemy",
    issueDate: "Nov 2025",
    credentialId: "UC-8a998251-8463-4277-a818-408b11fed544",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-8a998251-8463-4277-a818-408b11fed544/",
    logo: <SiUdemy />,
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Spring Cloud", icon: <SiSpringboot /> },
      { name: "Microservices", icon: <SiSpringsecurity /> }
    ]
  },
  {
    title: "Modern JavaScript From The Beginning 2.0",
    issuer: "Udemy",
    issueDate: "Nov 2023",
    credentialId: "UC-cfc8d5eb-6b37-4900-91d4-d9b7f93e1f9b",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-cfc8d5eb-6b37-4900-91d4-d9b7f93e1f9b/",
    logo: <SiUdemy />,
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Node.js", icon: <SiNodedotjs /> }
    ]
  },
  {
    title: "Basics of Java Programming",
    issuer: "Great Learning",
    issueDate: "No Expiry",
    credentialId: null,
    credentialUrl: "https://www.mygreatlearning.com/",
    logo: null,
    skills: [{ name: "Java" }]
  },
  {
    title: "Introduction to Business Management",
    issuer: "Future Learning",
    issueDate: "No Expiry",
    credentialId: null,
    credentialUrl: "https://www.futurelearn.com/",
    logo: <SiFuturelearn />,
    skills: [
      { name: "Business Fundamentals" },
      { name: "Management Basics" }
    ]
  }
];

/* =======================
   COMPONENT
======================= */
export default function Certifications() {
  const [expanded, setExpanded] = useState(false);

  const visibleCerts = expanded
    ? certifications
    : certifications.slice(0, 2);

  return (
    <Box sx={{ py: 5 }}>
      {/* Section Title */}
      <Typography variant="h4" fontWeight={700} mb={4}>
        Certifications
      </Typography>

      <Stack spacing={3}>
        {visibleCerts.map((cert, index) => (
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
                {cert.logo && (
                  <IconButton
                    component="a"
                    href={cert.credentialUrl}
                    target="_blank"
                    sx={{
                      color: brandColors[cert.issuer] || "primary.main",
                      fontSize: 40,
                      transition: "0.3s",
                      "&:hover": {
                        transform: "scale(1.1)"
                      }
                    }}
                  >
                    {cert.logo}
                  </IconButton>
                )}

                <Box>
                  <Typography fontWeight={600}>
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cert.issuer} • Issued {cert.issueDate}
                  </Typography>
                </Box>
              </Stack>

              {/* Skills */}
              <Stack direction="row" flexWrap="wrap" gap={1} mt={2}>
                {cert.skills.map((skill) => (
                  <Chip
                    key={skill.name}
                    icon={skill.icon}
                    label={skill.name}
                    size="small"
                    variant="outlined"
                  />
                ))}
              </Stack>

              {/* Credential ID */}
              {cert.credentialId && (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  mt={1}
                >
                  Credential ID: {cert.credentialId}
                </Typography>
              )}

              {/* View Credential */}
              {cert.credentialUrl && (
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ mt: 2 }}
                  component="a"
                  href={cert.credentialUrl}
                  target="_blank"
                >
                  Show Credential
                </Button>
              )}
            </CardContent>
          </Card>
        ))}

        {/* Faded preview of next cert */}
        {!expanded && certifications.length > 2 && (
          <Card variant="outlined" sx={{ opacity: 0.35 }}>
            <CardContent>
              <Typography fontWeight={600}>
                {certifications[2].title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {certifications[2].issuer}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Stack>

      {/* View More / Less */}
      {certifications.length > 2 && (
        <Box mt={3} textAlign="right">
          <Button onClick={() => setExpanded(!expanded)}>
            {expanded ? "View Less" : "... View More"}
          </Button>
        </Box>
      )}
    </Box>
  );
}
