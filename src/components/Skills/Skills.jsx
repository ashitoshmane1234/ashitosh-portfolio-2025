import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
  Grid,
  useTheme,
  Button,
} from "@mui/material";
import {
  SiJavascript, SiSpringboot, SiSpringsecurity, SiReact, SiNextdotjs, SiNodedotjs, SiNestjs,
  SiPython, SiDjango, SiFastapi, SiPostgresql, SiMysql, SiMongodb, SiRedis, SiAmazon,
  SiDocker, SiGithubactions, SiSonarqube, SiGooglecloud, SiAuth0, SiOkta, SiFirebase,
  SiTwilio, SiStripe, SiZoom, SiMailchimp, SiOpenai, SiGit, SiGithub, SiBitbucket,
  SiJira, SiPostman, SiSwagger, SiGrafana, SiIntellijidea, SiEclipseide,
  SiSendgrid
} from "react-icons/si";
import { FaProjectDiagram, FaDatabase, FaApple, FaJava, FaGooglePlay, FaGoogle, FaFacebook } from "react-icons/fa";

/* =======================
   SKILLS DATA (unchanged)
======================= */
const skills = {
  "Backend & Architecture": [
    { name: "Java",icon: <FaJava /> },
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
  { name: "AWS Services", icon: <SiAmazon /> },
  { name: "Google Cloud", icon: <SiGooglecloud /> },
  { name: "Google Cloud Pub/Sub", icon: <SiGooglecloud /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "SonarQube", icon: <SiSonarqube /> }
],
  "Security & Authentication": [
    { name: "OAuth2", icon: <SiAuth0 /> },
    { name: "Auth0", icon: <SiAuth0 /> },
    { name: "Okta", icon: <SiOkta /> },
    { name: "RBAC", icon: <FaProjectDiagram /> },
    { name: "JWT", icon: <FaProjectDiagram /> },
    { name: "Google Sign-In", icon: <FaGoogle /> },
  { name: "Apple Sign-In", icon: <FaApple /> },
  { name: "Facebook Login", icon: <FaFacebook /> }
  ],
  "Frontend": [{ name: "React.js", icon: <SiReact /> },    
    { name: "JavaScript", icon: <SiJavascript /> }
],
  "Additional Technologies": [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "NestJS", icon: <SiNestjs /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "FastAPI", icon: <SiFastapi /> }
  ],
  "Payments & Billing": [
  { name: "Stripe", icon: <SiStripe /> },
  { name: "Apple App Store (In-App Purchases)", icon: <FaApple /> },
  { name: "Google Play Store (Play Billing)", icon: <FaGooglePlay /> }
],
  "APIs & Integrations": [
  { name: "OpenAI", icon: <SiOpenai /> },
  { name: "HL7 / FHIR", icon: <FaProjectDiagram /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Twilio", icon: <SiTwilio /> },
  { name: "SendGrid", icon: <SiSendgrid /> },
  { name: "Zoom", icon: <SiZoom /> },
  { name: "Mailchimp", icon: <SiMailchimp /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Bitbucket", icon: <SiBitbucket /> }
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
  const [expanded, setExpanded] = useState(false);

  const skillEntries = Object.entries(skills);

  return (
    <Box sx={{ py: { xs: 1, md: 2 }, position: "relative" }}>
      <Typography variant="h4" fontWeight={700} mb={{ xs: 2, md: 3 }}>
        Skills
      </Typography>

      {/* CLIPPED STACK */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          maxHeight: expanded ? "none" : 720, // adjust height to show 3 + partial 4th
          transition: "max-height 0.45s ease"
        }}
      >
        <Grid container spacing={3}>
          {skillEntries.map(([category, items], index) => {
            // Make the 4th card partially visible if not expanded
            const isPartial = !expanded && index === 3;

            return (
              <Grid item xs={12} md={6} key={category}>
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    borderLeft: "4px solid",
                    borderLeftColor: "primary.main",
                    transition: "0.3s ease",
                    opacity: isPartial ? 0.6 : 1,
                    transform: isPartial ? "translateY(20px)" : "none",
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
            );
          })}
        </Grid>

        {/* FADE */}
        {!expanded && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 120,
              pointerEvents: "none",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(transparent, #0B0F1B)"
                  : "linear-gradient(transparent, #fff)"
            }}
          />
        )}
      </Box>

      {/* VIEW MORE BUTTON */}
{skillEntries.length > 3 && (
  <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
    <Button
      size="small"
      onClick={() => setExpanded(!expanded)}
      sx={{ fontWeight: 600, textTransform: "none" }}
    >
      {expanded ? "View Less" : "... View More"}
    </Button>
  </Box>
)}
    </Box>
  );
}
