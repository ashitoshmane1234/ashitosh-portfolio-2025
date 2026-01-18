import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Button,
  Divider,
  useTheme
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
  {
    title: "Advanced Security for Modern Applications",
    view: "https://lnkd.in/dkHaWSb4",
    summary:
      "Designed and implemented a production-ready authentication and authorization system using Spring Security and OAuth 2.0, focusing on flexibility, security, and multi-provider support.",
    highlights: [
      "OAuth 2.0 PKCE, refresh tokens, Auth0 & Okta integration",
      "Dynamic AuthenticationManagerResolver for multi-tenant setups",
      "JWT & opaque token validation with custom claim checks",
      "Role and permission-based access control"
    ],
    skills: ["Spring Security", "OAuth2", "Auth0", "JWT", "RBAC"]
  },
  {
    title: "Secure Healthcare App – SMART on FHIR",
    view: "#",
    summary:
      "Implemented a secure and seamless healthcare login experience using SMART on FHIR, enabling role-aware access to patient and provider data without handling credentials.",
    highlights: [
      "OAuth 2.0 PKCE with Cerner EHR",
      "Single sign-on across healthcare modules",
      "FHIR-compliant, role-aware data access",
      "Highly scalable for multi-EHR environments"
    ],
    skills: ["FHIR", "SMART on FHIR", "OAuth2", "Healthcare"]
  },
  {
    title: "Unified Notification Microservice",
    view: "#",
    summary:
      "Architected a reusable and extensible notification microservice to support email, SMS, and push notifications through a single, provider-agnostic workflow.",
    highlights: [
      "Factory & Strategy design patterns",
      "Async execution with retries & error handling",
      "Plug-and-play provider integration",
      "Future-ready architecture"
    ],
    skills: ["Spring Boot", "Microservices", "Design Patterns", "AWS"]
  },
  {
    title: "NestJS Advanced Auth & User Management",
    view: "https://lnkd.in/dnQWSEFn",
    summary:
      "Built a complete authentication and user management system in NestJS by learning the framework through real-world implementation.",
    highlights: [
      "JWT-based authentication with RBAC",
      "Modular and scalable architecture",
      "Dynamic queries with caching",
      "Multi-provider authentication support"
    ],
    skills: ["NestJS", "TypeScript", "JWT", "RBAC"]
  }
];

export default function ProjectsAndContributions() {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const projectsToShow = expanded
    ? projects
    : [projects[0], projects[1], projects[2]];

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} mb={4}>
        Projects & Technical Contributions
      </Typography>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          maxHeight: expanded ? "none" : 820,
          transition: "max-height 0.4s ease"
        }}
      >
        <Stack spacing={3}>
          {projectsToShow.map((project, index) => {
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
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.12)"
                  }
                }}
              >
                <CardContent>
                  {/* HEADER */}
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={2}
                  >
                    <Typography variant="h6" fontWeight={600}>
                      {project.title}
                      {isPartial && " …"}
                    </Typography>

                    <Button
                      size="small"
                      variant="text"
                      endIcon={<LaunchIcon fontSize="small" />}
                      href={project.view}
                      target="_blank"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      View
                    </Button>
                  </Stack>

                  <Divider sx={{ my: 1.5 }} />

                  {/* FULL CONTENT */}
                  {!isPartial && (
                    <>
                      <Typography
                        color="text.secondary"
                        lineHeight={1.6}
                        mb={2}
                      >
                        {project.summary}
                      </Typography>

                      <Stack spacing={0.8} mb={2}>
                        {project.highlights.map((point, i) => (
                          <Typography key={i} variant="body2">
                            • {point}
                          </Typography>
                        ))}
                      </Stack>

                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {project.skills.map((skill, i) => (
                          <Chip
                            key={i}
                            label={skill}
                            size="small"
                            sx={{
                              fontWeight: 500,
                              bgcolor:
                                theme.palette.mode === "dark"
                                  ? "rgba(99,102,241,0.15)"
                                  : "rgba(79,70,229,0.1)"
                            }}
                          />
                        ))}
                      </Stack>
                    </>
                  )}

                  {/* PARTIAL CARD */}
                  {isPartial && (
                    <Typography
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {project.summary}
                    </Typography>
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

      {/* VIEW MORE */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button size="small" onClick={() => setExpanded(!expanded)}>
          {expanded ? "View Less" : "View More"}
        </Button>
      </Box>
    </Box>
  );
}
