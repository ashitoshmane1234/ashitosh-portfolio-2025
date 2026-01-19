import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Button,
  IconButton,
  Divider,
  useTheme
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
    title: "Master Microservices with Spring Boot & Spring Cloud",
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
    credentialUrl: "https://www.mygreatlearning.com/",
    skills: [{ name: "Java" }]
  },
  {
    title: "Introduction to Business Management",
    issuer: "Future Learning",
    issueDate: "No Expiry",
    credentialUrl: "https://www.futurelearn.com/",
    logo: <SiFuturelearn />,
    skills: [
      { name: "Business Fundamentals" },
      { name: "Management Basics" }
    ]
  }
];

export default function Certifications() {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 5, md: 6 } }}>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Certifications
      </Typography>

      {/* CLIPPED STACK */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          maxHeight: expanded ? "none" : 520,
          transition: "max-height 0.45s ease"
        }}
      >
        <Stack spacing={2.5}>
          {certifications.map((cert, index) => {
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
                    {cert.logo && (
                      <IconButton
                        sx={{
                          fontSize: 32,
                          color:
                            brandColors[cert.issuer] || "primary.main"
                        }}
                      >
                        {cert.logo}
                      </IconButton>
                    )}

                    <Box>
                      <Typography fontWeight={600}>
                        {cert.title}
                        {isPartial && " …"}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {cert.issuer} • {cert.issueDate}
                      </Typography>
                    </Box>
                  </Stack>

                  {!isPartial && (
                    <>
                      <Divider sx={{ my: 1.5 }} />

                      {/* SKILLS */}
                      <Stack direction="row" flexWrap="wrap" gap={1} mb={1.5}>
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

                      {cert.credentialUrl && (
                        <Button
                          size="small"
                          variant="outlined"
                          component="a"
                          href={cert.credentialUrl}
                          target="_blank"
                          sx={{ fontWeight: 600, textTransform: "none" }}
                        >
                          View Credential
                        </Button>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </Stack>

        {/* FADE */}
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

      {/* VIEW MORE */}
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
