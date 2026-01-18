import React from "react";
import { Box, Card, CardContent, Chip, Stack, Typography, Grid } from "@mui/material";
import {
  SiJavascript, SiSpringboot, SiSpringsecurity, SiReact, SiNextdotjs, SiNodedotjs, SiNestjs,
  SiPython, SiDjango, SiFastapi, SiPostgresql, SiMysql, SiMongodb, SiRedis, SiAmazon,
  SiDocker, SiGithubactions, SiSonarqube, SiGooglecloud, SiAuth0, SiOkta, SiFirebase,
  SiTwilio, SiStripe, SiZoom, SiMailchimp, SiOpenai, SiGit, SiGithub, SiBitbucket,
  SiJira, SiPostman, SiSwagger, SiGrafana, SiIntellijidea, SiEclipseide
} from "react-icons/si";

import { FaProjectDiagram, FaDatabase } from "react-icons/fa";

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
  "Frontend": [
    { name: "React.js", icon: <SiReact /> }
  ],
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

export default function Skills() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
        Skills
      </Typography>

      <Grid container spacing={3}>
        {Object.entries(skills).map(([category, items]) => (
          <Grid item xs={12} md={6} key={category}>
            <Card variant="outlined" sx={{ height: "100%", p: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
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
                        "& .MuiChip-icon": { fontSize: "1.1rem" }
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
