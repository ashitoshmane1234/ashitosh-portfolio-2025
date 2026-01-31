import { useState } from "react";
import { Box, Stack, Typography, Card, CardContent, Chip, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const experienceData = [
  {
    role: "Associate Software Engineer",
    company: "Mindbowser Inc, Pune",
    duration: "Feb 2024 – Present",
    projects: [
       {
      name: "CuradentAI",
      client: "",
      duration: "Jan 2026 – Present",
      summary: [
        "Designed and built a reusable event-driven architecture using Google Pub/Sub with retries and DLQ",
        "Implemented Stripe subscription integration: create, upgrade, downgrade, cancel, and renew",
        "Handled webhooks, discussions, and coupon code logic for seamless subscription management"
      ],
      skills: [
        "Event-Driven Architecture",
        "Google Pub/Sub",
        "Stripe Integration",
        "Webhooks",
        "Subscription Management"
      ]
    },
      {
        name: "MyCa (Healthcare SaaS Platform)",
        client: "Nuvance Health",
        duration: "Aug 2025 – Present",
        summary: [
          "Built secure multi-tenant backend with Spring Boot, Spring Security, OAuth2 PKCE, Auth0 & Okta",
          "Developed Next.js front-end login flow and multi-provider authentication",
          "Implemented HL7/FHIR workflows for PHI-compliant healthcare data",
          "Developed AI-powered symptom logging and summaries for doctors",
          "Optimized performance with Redis caching and GitHub Actions CI/CD"
        ],
        skills: ["Java", "Spring Boot", "Spring Security", "OAuth2", "Next.js", "AI", "Redis", "GitHub Actions"]
      },
      {
        name: "MyMori (Caregiving Mobile App)",
        client: "Jocelyn Campbell",
        duration: "Mar 2025 – Jul 2025",
        summary: [
          "Built Spring Boot backend for Google Play & Apple subscriptions",
          "Implemented SSO login (Google, Apple, Facebook) with JWT issuance",
          "Integrated Twilio, Mailchimp, Firebase & AWS S3 for notifications & storage",
          "Implemented dynamic form logic and digital legacy journal"
        ],
        skills: ["Spring Boot", "SSO", "JWT", "AWS S3", "Twilio", "Firebase"]
      },
      {
        name: "StartupOS (Platform for Startups)",
        client: "Michael Lee",
        duration: "Feb 2024 – Feb 2025",
        summary: [
          "Enhanced microservices and APIs for production system",
          "Built event management, appointment booking with Zoom, timezone rules",
          "Developed analytics dashboards & financial insights using GraphQL/REST",
          "Boosted search performance by 70% using Spring Data JPA Specifications",
          "Built Stripe integration for one-time product purchases",
          "Implemented vector-based company search with OpenAI embeddings & AWS OpenSearch"
        ],
        skills: ["Spring Boot", "GraphQL", "REST", "Stripe", "OpenAI", "AWS"]
      }
    ]
  },
  {
    role: "Trainee Engineer",
    company: "Mindbowser Inc, Pune",
    duration: "Nov 2023 – Feb 2024",
    projects: [
      {
        name: "Epico (Employee Management)",
        client: "In-House Project",
        duration: "Nov 2023 – Feb 2024",
        summary: [
          "Developed monthly employee performance feedback feature",
          "Worked on automation for cloning project templates and updating branches"
        ],
        skills: ["Java", "Spring Boot", "Bitbucket"]
      }
    ]
  }
];


export default function ExperienceTimeline() {
  const [expanded, setExpanded] = useState({});
    const theme = useTheme();
  
  const toggleExpand = (i) => {
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <Box sx={{ py: 6, position: "relative" }}>
          <Stack spacing={4}>
        <Typography variant="h4" fontWeight={700} mb={4}>
          Experience
        </Typography>
          </Stack>

      

      {/* 🔥 ONE CONTINUOUS TIMELINE LINE */}
      <Box sx={{ position: "absolute", top: 90, bottom: 0, left: 12, width: 2, bgcolor: "primary.main" }} />

       <Stack spacing={8} sx={{ position: "relative" }}>
        {experienceData.map((exp, i) => {
          const isCurrentRole = i === 0;

          // Slice logic for partial next project
          const projectsToShow = expanded[i]
            ? exp.projects
            : exp.projects.length > 1
            ? [exp.projects[0], { ...exp.projects[1], partial: true }]
            : exp.projects;

          return (
            <Box key={i} sx={{ display: "flex", gap: 3 }}>
              {/* DOT COLUMN */}
              <Box sx={{ width: 24, position: "relative" }}>
                {isCurrentRole ? (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 6,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      border: "2px solid",
                      borderColor: "success.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 8px rgba(76, 175, 80, 0.5)"
                    }}
                  >
                    <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "primary.main" }} />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      bgcolor: "primary.main"
                    }}
                  />
                )}
              </Box>

              {/* CONTENT */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight={600}>
                  {exp.role} | {exp.company}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {exp.duration}
                </Typography>

                <Stack spacing={2}>
                  {projectsToShow.map((proj, idx) => (
                    <Card
                      key={idx}
                      variant="outlined"
                      sx={{ borderRadius: 3, opacity: proj.partial ? 0.6 : 1 }}
                    >
                      <CardContent>
                        <Typography fontWeight={500} mb={1}>
                          {proj.name} | Client: {proj.client} | {proj.duration}
                          {proj.partial && " ..."}
                        </Typography>

                        {!proj.partial && (
                          <>
                            <ul style={{ margin: 0, paddingLeft: "1rem" }}>
                              {proj.summary.map((p, pi) => (
                                <li key={pi}>
                                  <Typography variant="body2" color="text.secondary">
                                    {p}
                                  </Typography>
                                </li>
                              ))}
                            </ul>
                             <Stack
  direction="row"
  flexWrap="wrap"
  gap={0.8} // gap instead of spacing
  mt={1.5}
>
  {proj.skills.map((skill) => (
    <Chip
      key={skill}
      label={skill}
      size="small"
      sx={{
        fontWeight: 500,
        flexShrink: 0, // prevents shrinking too much
        bgcolor:
          theme.palette.mode === "dark"
            ? "rgba(99,102,241,0.15)"
            : "rgba(79,70,229,0.1)",
        mb: 0.5 // small margin bottom for wrapping
      }}
    />
  ))}
</Stack>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </Stack>

                {/* TOGGLE */}
                {exp.projects.length > 1 && (
                  <Button size="small" sx={{ mt: 1 }} onClick={() => toggleExpand(i)}>
                    {expanded[i] ? "View Less" : "... View More"}
                  </Button>
                )}
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
