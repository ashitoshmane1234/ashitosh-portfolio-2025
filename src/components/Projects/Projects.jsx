import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Button
} from "@mui/material";

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

  // Show first two fully + third partially when not expanded
  const projectsToShow = expanded
    ? projects
    : [projects[0], projects[1], projects[2]];

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} mb={4}>
        Projects & Technical Contributions
      </Typography>

      {/* Container for clipped stack */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          maxHeight: expanded ? "none" : 830, // adjust to fit 2 full cards + part of 3rd
          transition: "max-height 0.4s ease"
        }}
      >
        <Stack spacing={3}>
          {projectsToShow.map((project, index) => {
            const isPartial = !expanded && index === 2; // third project partially visible

            return (
              <Card
                key={index}
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  opacity: isPartial ? 0.95 : 1
                }}
              >
                <CardContent>
                  {/* Header */}
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="h6" fontWeight={600}>
                      {project.title}
                      {isPartial && " ..."}
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      href={project.view}
                      target="_blank"
                    >
                      View
                    </Button>
                  </Stack>

                  {/* Show full content only if not partial */}
                  {!isPartial && (
                    <>
                      <Typography
                        mt={1.5}
                        color="text.secondary"
                        lineHeight={1.6}
                      >
                        {project.summary}
                      </Typography>

                      <Stack mt={2} spacing={0.8}>
                        {project.highlights.map((point, i) => (
                          <Typography key={i} variant="body2">
                            • {point}
                          </Typography>
                        ))}
                      </Stack>

                      <Stack
                        direction="row"
                        spacing={1}
                        mt={2}
                        flexWrap="wrap"
                      >
                        {project.skills.map((skill, i) => (
                          <Chip key={i} label={skill} size="small" />
                        ))}
                      </Stack>
                    </>
                  )}

                  {/* Partial project shows some summary */}
                  {isPartial && (
                    <Typography
                      mt={1}
                      color="text.secondary"
                      lineHeight={1.4}
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 4, // show first 4 lines of summary
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
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
      </Box>

      {/* View More / Less button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        {!expanded && projects.length > 3 && (
          <Button size="small" onClick={() => setExpanded(true)}>
            ... View More
          </Button>
        )}
        {expanded && (
          <Button size="small" onClick={() => setExpanded(false)}>
            View Less
          </Button>
        )}
      </Box>
    </Box>
  );
}
