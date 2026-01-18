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

  const certsToShow = expanded
    ? certifications
    : certifications.slice(0, 3); // 2 full + partial 3rd

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} mb={4}>
        Certifications
      </Typography>

      {/* CLIPPED CONTAINER */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          maxHeight: expanded ? "none" : 560,
          transition: "max-height 0.4s ease"
        }}
      >
        <Stack spacing={3}>
          {certsToShow.map((cert, index) => {
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
                    {cert.logo && (
                      <IconButton
                        sx={{
                          fontSize: 34,
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
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        {cert.issuer} • Issued {cert.issueDate}
                      </Typography>
                    </Box>
                  </Stack>

                  <Divider sx={{ my: 1.5 }} />

                  {/* SKILLS */}
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={1}
                    sx={{
                      mb: 2,
                      display: isPartial ? "none" : "flex"
                    }}
                  >
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

                  {/* CREDENTIAL ID */}
                  {cert.credentialId && !isPartial && (
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                      mb={1}
                    >
                      Credential ID: {cert.credentialId}
                    </Typography>
                  )}

                  {/* SHOW CREDENTIAL (IMPORTANT ACTION) */}
                  {cert.credentialUrl && !isPartial && (
                    <Button
                      variant="outlined"
                      size="small"
                      component="a"
                      href={cert.credentialUrl}
                      target="_blank"
                      sx={{
                        textTransform: "none",
                        fontWeight: 600
                      }}
                    >
                      Show Credential
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
          {expanded ? "View Less" : "View More"}
        </Button>
      </Box>
    </Box>
  );
}
