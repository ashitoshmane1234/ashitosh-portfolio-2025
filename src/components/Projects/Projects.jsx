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
      "Designed and implemented a production-ready authentication and authorization system using Spring Security and OAuth 2.0.",
    highlights: [
      "OAuth 2.0 PKCE, Auth0 & Okta",
      "Dynamic multi-tenant authentication",
      "JWT & opaque token validation",
      "Role & permission-based access control"
    ],
    skills: ["Spring Security", "OAuth2", "JWT", "Auth0"]
  },
  {
    title: "Secure Healthcare App – SMART on FHIR",
    view: "#",
    summary:
      "Implemented SMART on FHIR authentication enabling secure, role-aware access to healthcare data.",
    highlights: [
      "OAuth 2.0 PKCE with Cerner",
      "FHIR-compliant access",
      "Single sign-on experience"
    ],
    skills: ["FHIR", "SMART on FHIR", "OAuth2"]
  },
  {
    title: "Unified Notification Service",
    view: "#",
    summary:
      "Built a reusable notification service supporting email, SMS, and push notifications.",
    highlights: [
      "Factory & Strategy patterns",
      "Async processing with retries",
      "Provider-agnostic design"
    ],
    skills: ["Spring Boot", "Design Patterns", "AWS"]
  },
  {
    title: "NestJS Auth & User Management",
    view: "https://lnkd.in/dnQWSEFn",
    summary:
      "Built a complete authentication and user management system using NestJS.",
    highlights: [
      "JWT authentication with RBAC",
      "Modular architecture",
      "Caching & performance optimizations"
    ],
    skills: ["NestJS", "TypeScript", "JWT"]
  }
];

export default function ProjectsAndContributions() {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 2, md: 4 },
        mb: expanded ? 0 : { xs: -1.5, md: -2 } // 🔑 removes fake gap
      }}
    >
      {/* SECTION TITLE */}
      <Typography
        fontWeight={700}
        fontSize={{ xs: "1.4rem", md: "2rem" }}
        mb={{ xs: 2, md: 3 }}
      >
        Projects & Technical Contributions
      </Typography>

      {/* PROJECT LIST */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          maxHeight: expanded ? "none" : { xs: 680, md: 720 },
          transition: "max-height 0.4s ease"
        }}
      >
        <Stack spacing={{ xs: 2, md: 3 }}>
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                borderRadius: 2,
                background:
                  theme.palette.mode === "dark"
                    ? "rgba(15,23,42,0.75)"
                    : "#fff",
                border: "1px solid",
                borderColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(0,0,0,0.06)",
                transition: "0.25s ease",
                "&:hover": {
                  transform: { md: "translateY(-4px)" },
                  boxShadow: { md: "0 10px 26px rgba(0,0,0,0.12)" }
                }
              }}
            >
              <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                {/* HEADER */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  gap={2}
                >
                  <Typography fontWeight={600} fontSize="1rem">
                    {project.title}
                  </Typography>

                  <Button
                    size="small"
                    variant="text"
                    endIcon={<LaunchIcon fontSize="small" />}
                    href={project.view}
                    target="_blank"
                  >
                    View
                  </Button>
                </Stack>

                <Divider sx={{ my: 1.2 }} />

                {/* SUMMARY */}
                <Typography
                  color="text.secondary"
                  lineHeight={1.6}
                  mb={1.3}
                >
                  {project.summary}
                </Typography>

                {/* HIGHLIGHTS */}
                <Stack spacing={0.5} mb={1.3}>
                  {project.highlights.map((point, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      color="text.secondary"
                    >
                      • {point}
                    </Typography>
                  ))}
                </Stack>

                {/* SKILLS */}
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
              </CardContent>
            </Card>
          ))}
        </Stack>

        {/* FADE MASK (SHORT, CLEAN) */}
        {!expanded && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: { xs: 64, md: 96 },
              pointerEvents: "none",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(transparent, #0B0F1B)"
                  : "linear-gradient(transparent, #fff)"
            }}
          />
        )}
      </Box>

      {/* VIEW MORE — RIGHT SIDE */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 1
        }}
      >
        <Button
          size="small"
          onClick={() => setExpanded(!expanded)}
          sx={{ fontWeight: 600 }}
        >
          {expanded ? "View Less" : "... View More"}
        </Button>
      </Box>
    </Box>
  );
}
