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
    title:
      "Spring Security: Multi-Provider Auth, Multi-Token & RBAC",
    view: "https://medium.com/@ashitoshmane1234/spring-security-made-simple-advanced-multi-token-multi-provider-authentication-rbac-b623dcc1d882",
    summary:
      "Built a flexible Spring Security setup supporting multiple identity providers, token types, and centralized RBAC.",
    highlights: [
      "JWT, opaque & custom token validation",
      "Dynamic resolver by token issuer",
      "Auth0, Azure AD, Google & Okta support",
      "Centralized roles & permissions"
    ],
    skills: [
      "Spring Security",
      "OAuth2",
      "JWT",
      "RBAC",
      "Auth0",
      "Okta"
    ]
  },
  {
  title: "Reusable Event-Driven Architecture with Google Pub/Sub",
  view: "https://www.linkedin.com/pulse/building-reusable-event-driven-architecture-google-pubsub-mane-rvevf/",
  summary:
    "Designed a reusable event-driven architecture to decouple microservices using Google Cloud Pub/Sub.",
  highlights: [
    "Publish–subscribe model for loose coupling",
    "Generic event envelope with type & payload",
    "Async consumers with retry handling",
    "Dead Letter Queue (DLQ) for reliability"
  ],
  skills: [
    "Event-Driven Architecture",
    "Google Pub/Sub",
    "Microservices",
    "Retries & DLQ"
  ]
},
{
  title:
    "Production-Ready Spring Boot CI/CD with Quality Gates",
  view: "https://github.com/ashitoshmane1234/springboot-cicd-template",
  summary:
    "Built an end-to-end CI/CD pipeline for Spring Boot with automated quality checks and secure delivery.",
  highlights: [
    "CI with GitHub Actions",
    "SonarCloud quality & security gates",
    "Docker build after passing checks",
    "PR-based workflow with branching strategy"
  ],
  skills: [
    "Spring Boot",
    "GitHub Actions",
    "SonarCloud",
    "Docker",
    "CI/CD"
  ]
},
{
  title: "NestJS Auth & User Service",
  view: "https://github.com/ashitoshmane1234/as-node-auth-service/tree/development",
  summary:
    "Built a full-featured auth and user service in NestJS by learning the stack hands-on with AI-assisted development.",
  highlights: [
    "JWT authentication with RBAC",
    "Multi-provider authentication support",
    "User management with caching for performance",
    "Modular, scalable architecture"
  ],
  skills: [
    "NestJS",
    "TypeScript",
    "JWT",
    "RBAC",
    "Caching",
    "System Design"
  ]
},
  {
  title: "Unified Notification Microservice — Clean & Scalable Architecture",
  view: "https://www.linkedin.com/posts/ashitosh-mane-7a2b121b9_mindbowser-cleanarchitecture-designpatterns-activity-7404746776571731968-8ynf",
  summary: "Designed a unified, provider-agnostic notification microservice focused on clean architecture and scalability.",
  highlights: [
    "Factory & Strategy patterns for provider selection",
    "Async execution with centralized retries",
    "Unified flow for email, SMS & push",
    "Plug-and-play providers without core changes"
  ],
  skills: [
    "Design Patterns",
    "Async Processing",
    "Twilio SMS",
    "SendGrid Email",
    "Firebase Push"
  ]
},
{
  title: "Reactive File Management Service (S3) — Streaming & Large File Support",
  view: "#",
  summary: "Built a reactive file management service using Spring WebFlux and AWS S3, optimized for streaming and large file operations.",
  highlights: [
    "Reactive streaming for upload/download of large files",
    "Presigned URL generation for secure access",
    "Modular design for easy integration with other services"
  ],
  skills: [
    "Spring WebFlux",
    "AWS S3",
    "Reactive Programming",
    "Streaming APIs",
  ]
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
  variant="outlined"
  href={project.view}
  target="_blank"
  endIcon={<LaunchIcon fontSize="small" />}
  sx={{
    fontWeight: 600,
    textTransform: "none",
    fontSize: { xs: "0.72rem", sm: "0.78rem" },
    px: { xs: 1, sm: 1.5 },
    py: 0.25,
    minWidth: "unset"
  }}
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
                <Stack direction="row" flexWrap="wrap" gap={0.8} mt={1.5}>
  {project.skills.map((skill, i) => (
    <Chip
      key={i}
      label={skill}
      size="small"
      sx={{
        fontWeight: 500,
        flexShrink: 0,
        bgcolor:
          theme.palette.mode === "dark"
            ? "rgba(99,102,241,0.15)"
            : "rgba(79,70,229,0.1)",
        mb: 0.5
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
