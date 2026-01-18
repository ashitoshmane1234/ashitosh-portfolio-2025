import { useState } from "react";
import { Box, Stack, Typography, Card, CardContent, Chip, Button } from "@mui/material";

const experienceData = [
  {
    role: "Associate Software Engineer",
    company: "Mindbowser Inc, Pune",
    duration: "Feb 2024 – Present",
    projects: [
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



// export default function ExperienceTimeline() {
//   const [expanded, setExpanded] = useState({});

//   const toggleExpand = (i) => {
//     setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));
//   };

//   return (
//     <Box sx={{ py: 6, position: "relative" }}>
//       <Box sx={{ position: "relative", zIndex: 2, backgroundColor: "background.default" }}>
//     <Typography variant="h4" fontWeight={700} mb={4}>
//       Experience
//     </Typography>
//   </Box>


//       {/* 🔥 ONE CONTINUOUS TIMELINE LINE */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: 80,
//           bottom: 0,
//           left: 12,
//           width: 2,
//           bgcolor: "primary.main"
//         }}
//       />

//       <Stack spacing={5}>
//         {experienceData.map((exp, i) => {
//   const isCurrentRole = i === 0;

//   // ✅ SHOW LATEST PROJECT BEFORE VIEW MORE
//   const projects = expanded[i]
//     ? exp.projects
//     : [exp.projects[0]];

//           return (
//             <Box key={i} sx={{ display: "flex", gap: 3 }}>
//               {/* DOT COLUMN */}
//               <Box sx={{ width: 24, position: "relative" }}>
//   {isCurrentRole ? (
//     // 🔥 CURRENT ROLE DOT
//     <Box
//       sx={{
//         position: "absolute",
//         top: 6,
//         left: "50%",
//         transform: "translateX(-50%)",
//         width: 16,
//         height: 16,
//         borderRadius: "50%",
//         border: "2px solid",
//         borderColor: "success.main",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         boxShadow: "0 0 8px rgba(76, 175, 80, 0.5)"
//       }}
//     >
//       <Box
//         sx={{
//           width: 8,
//           height: 8,
//           borderRadius: "50%",
//           bgcolor: "primary.main"
//         }}
//       />
//     </Box>
//   ) : (
//     // 🟢 PAST ROLE DOT
//     <Box
//       sx={{
//         position: "absolute",
//         top: 8,
//         left: "50%",
//         transform: "translateX(-50%)",
//         width: 10,
//         height: 10,
//         borderRadius: "50%",
//         bgcolor: "primary.main"
//       }}
//     />
//   )}
// </Box>


//               {/* CONTENT */}
//               <Box sx={{ flex: 1 }}>
//                 {/* ROLE HEADER */}
//                 <Typography variant="h6" fontWeight={600}>
//                   {exp.role} | {exp.company}
//                 </Typography>

//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   mb={2}
//                 >
//                   {exp.duration}
//                 </Typography>

//                 {/* PROJECTS */}
//                 <Stack spacing={2}>
//                   {projects.map((proj, idx) => (
//                     <Card
//                       key={idx}
//                       variant="outlined"
//                       sx={{ borderRadius: 2 }}
//                     >
//                       <CardContent>
//                         <Typography fontWeight={500} mb={1}>
//                           {proj.name} | Client: {proj.client} |{" "}
//                           {proj.duration}
//                         </Typography>

//                         <ul style={{ margin: 0, paddingLeft: "1rem" }}>
//                           {proj.summary.map((p, pi) => (
//                             <li key={pi}>
//                               <Typography
//                                 variant="body2"
//                                 color="text.secondary"
//                               >
//                                 {p}
//                               </Typography>
//                             </li>
//                           ))}
//                         </ul>

//                         <Stack
//                           direction="row"
//                           flexWrap="wrap"
//                           gap={1}
//                           mt={1.5}
//                         >
//                           {proj.skills.map((skill) => (
//                             <Chip
//                               key={skill}
//                               label={skill}
//                               size="small"
//                               variant="outlined"
//                               sx={{ fontSize: "0.7rem" }}
//                             />
//                           ))}
//                         </Stack>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </Stack>

//                 {/* TOGGLE */}
//                 {exp.projects.length > 1 && (
//                   <Button
//                     size="small"
//                     sx={{ mt: 1 }}
//                     onClick={() => toggleExpand(i)}
//                   >
//                     {expanded[i] ? "View Less" : "View More"}
//                   </Button>
//                 )}
//               </Box>
//             </Box>
//           );
//         })}
//       </Stack>
//     </Box>
//   );
// }


export default function ExperienceTimeline() {
  const [expanded, setExpanded] = useState({});
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
                      sx={{ borderRadius: 2, opacity: proj.partial ? 0.6 : 1 }}
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
                            <Stack direction="row" flexWrap="wrap" gap={1} mt={1.5}>
                              {proj.skills.map((skill) => (
                                <Chip
                                  key={skill}
                                  label={skill}
                                  size="small"
                                  variant="outlined"
                                  sx={{ fontSize: "0.7rem" }}
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
