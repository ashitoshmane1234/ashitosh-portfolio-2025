import React from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
  Grid,
  useTheme
} from "@mui/material";
import {
  SiJavascript, SiSpringboot, SiSpringsecurity, SiReact, SiNextdotjs, SiNodedotjs, SiNestjs,
  SiPython, SiDjango, SiFastapi, SiPostgresql, SiMysql, SiMongodb, SiRedis, SiAmazon,
  SiDocker, SiGithubactions, SiSonarqube, SiGooglecloud, SiAuth0, SiOkta, SiFirebase,
  SiTwilio, SiStripe, SiZoom, SiMailchimp, SiOpenai, SiGit, SiGithub, SiBitbucket,
  SiJira, SiPostman, SiSwagger, SiGrafana, SiIntellijidea, SiEclipseide
} from "react-icons/si";
import { FaProjectDiagram, FaDatabase } from "react-icons/fa";

/* =======================
   SKILLS DATA (unchanged)
======================= */
const skills = {
  "Backend & Architecture": [
    { name: "Java" },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Spring Security", icon: <SiSpringsecurity /> },
    { name: "Spring Cloud", icon: <SiSpringboot /> },
    { name: "Spring Reactive", icon: <SiSpringboot /> },
    { name: "Microservices", icon: <FaProjectDiagram /> },
    { name: "Event-Driven Architecture", icon: <FaProjectDiagram /> },
    { name: "Multi-Tenant Systems", icon: <FaDatabase /> }
  ],
  "Databases & Caching": [
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Redis", icon: <SiRedis /> }
  ],
  "Cloud, DevOps & CI/CD": [
    { name: "AWS", icon: <SiAmazon /> },
    { name: "Google Cloud", icon: <SiGooglecloud /> },
    { name: "GitHub Actions", icon: <SiGithubactions /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "SonarQube", icon: <SiSonarqube /> }
  ],
  "Security & Authentication": [
    { name: "OAuth2", icon: <SiAuth0 /> },
    { name: "Auth0", icon: <SiAuth0 /> },
    { name: "Okta", icon: <SiOkta /> },
    { name: "RBAC", icon: <FaProjectDiagram /> },
    { name: "JWT", icon: <FaProjectDiagram /> }
  ],
  "Frontend": [{ name: "React.js", icon: <SiReact /> }],
  "Additional Technologies": [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "NestJS", icon: <SiNestjs /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "FastAPI", icon: <SiFastapi /> }
  ],
  "APIs & Integrations": [
    { name: "OpenAI", icon: <SiOpenai /> },
    { name: "HL7 / FHIR", icon: <FaProjectDiagram /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Twilio", icon: <SiTwilio /> },
    { name: "Stripe", icon: <SiStripe /> },
    { name: "Zoom", icon: <SiZoom /> },
    { name: "Mailchimp", icon: <SiMailchimp /> }
  ],
  "Tools & Developer Experience": [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Bitbucket", icon: <SiBitbucket /> },
    { name: "Jira", icon: <SiJira /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Swagger", icon: <SiSwagger /> },
    { name: "Grafana", icon: <SiGrafana /> },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
    { name: "Eclipse / STS", icon: <SiEclipseide /> }
  ]
};

/* =======================
   COMPONENT
======================= */
export default function Skills() {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 1, md: 2 } }}>
      <Typography
  variant="h4"
  fontWeight={700}
  mb={{ xs: 2, md: 3 }}
>
  Skills
</Typography>

      <Grid container spacing={3}>
        {Object.entries(skills).map(([category, items]) => (
          <Grid item xs={12} md={6} key={category}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                borderRadius: 3,
                borderLeft: "4px solid",
                borderLeftColor: "primary.main",
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.12)"
                }
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  {category}
                </Typography>

                <Stack direction="row" flexWrap="wrap" gap={1.2}>
                  {items.map((skill) => (
                    <Chip
                      key={skill.name}
                      icon={skill.icon}
                      label={skill.name}
                      variant="outlined"
                      sx={{
                        fontSize: "0.85rem",
                        transition: "0.2s",
                        "& .MuiChip-icon": { fontSize: "1.1rem" },
                        "&:hover": {
                          bgcolor: theme.palette.action.hover,
                          borderColor: "primary.main"
                        }
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
