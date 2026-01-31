// import React from "react";
// import { Box, Card, CardContent, Typography, Stack, Divider, useTheme } from "@mui/material";

// // ✅ Awards data with direct Google Drive image links
// const awards = [
//   {
//     title: "Mindbowser’s Pinnacle Award",
//     issuer: "Mindbowser Inc",
//     method: "Annual excellence awards",
//     year: "Oct 2025",
//     description: "Awarded to top 5 employees",
//     images: [
//       "https://drive.google.com/uc?export=view&id=1Z5haYDxoSXVbG8qj9vQozNTraiwMF2-F",
//       "https://drive.google.com/uc?export=view&id=1E1MnR0X88xcy-9eEfzCt2YNyXbz1UWEC"
//     ],
//   },
//   {
//     title: "Mindbowser’s Shining Star Award",
//     issuer: "Mindbowser Inc",
//     method: "Company-wide performance review",
//     year: "May 2024",
//     description: "Top performer among 20+ freshers",
//     images: [
//       "https://drive.google.com/uc?export=view&id=1HAIRDfGM99v7tFuMdzz1y-VhlIvKPCEE",
//       "https://drive.google.com/uc?export=view&id=1lif2Sa6Rf-5xhKmQhS_IiKzORzHvpgOC"
//     ],
//   },
// ];


// export default function AwardsSection() {
//   const theme = useTheme();

//   return (
//     <Box sx={{ py: { xs: 2, md: 3 } }}> {/* reduced top padding */}
//       <Typography variant="h4" fontWeight={700} mb={3}>
//         Honors & Awards
//       </Typography>

//       <Stack spacing={2.5}>
//         {awards.map((award, index) => (
//           <Card
//             key={index}
//             sx={{
//               borderRadius: 3,
//               backdropFilter: "blur(10px)",
//               background:
//                 theme.palette.mode === "dark"
//                   ? "rgba(15,23,42,0.88)"
//                   : "#fff",
//               border: "1px solid",
//               borderColor:
//                 theme.palette.mode === "dark"
//                   ? "rgba(255,255,255,0.08)"
//                   : "rgba(0,0,0,0.06)",
//               transition: "0.3s ease",
//               "&:hover": {
//                 transform: "translateY(-3px)",
//                 boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
//               },
//             }}
//           >
//             <CardContent sx={{ pb: "16px !important" }}>
//               {/* HEADER */}
//               <Typography fontWeight={600}>{award.title}</Typography>
//               <Divider sx={{ my: 1 }} />

//               {/* META LINE */}
//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 sx={{ fontSize: "0.78rem" }}
//                 mb={1}
//               >
//                 {award.issuer} • {award.method} • {award.year}
//               </Typography>

//               {/* DESCRIPTION */}
//               <Typography
//                 variant="body2"
//                 sx={{ fontSize: "0.82rem", mb: 1, color: theme.palette.text.primary }}
//               >
//                 {award.description}
//               </Typography>

//               {/* IMAGE ROW */}
//               <Stack direction="row" spacing={1.5} flexWrap="wrap">
//                 {award.images.map((img, i) => (
//                   <Box
//                     key={i}
//                     component="img"
//                     src={img} // ✅ direct Drive link
//                     alt={award.title}
//                     sx={{
//                       width: 120,
//                       height: 120,
//                       borderRadius: 2,
//                       objectFit: "cover",
//                       border: "1px solid rgba(0,0,0,0.08)",
//                     }}
//                   />
//                 ))}
//               </Stack>
//             </CardContent>
//           </Card>
//         ))}
//       </Stack>
//     </Box>
//   );
// }


import React from "react";
import { Box, Card, CardContent, Typography, Stack, Divider, useTheme } from "@mui/material";

// ✅ Awards data with GitHub raw image links
const awards = [
  {
    title: "Mindbowser’s Pinnacle Award",
    issuer: "Mindbowser Inc",
    method: "Annual excellence awards",
    year: "Oct 2025",
    description: "Awarded to top 5 employees",
    images: [
      "https://raw.githubusercontent.com/ashitoshmane1234/ashitosh-photos/main/pinnacle-award.jpg",
      "https://raw.githubusercontent.com/ashitoshmane1234/ashitosh-photos/main/pinnacle-award%20(1).jpg",
    ],
  },
  {
    title: "Mindbowser’s Shining Star Award",
    issuer: "Mindbowser Inc",
    method: "Company-wide performance review",
    year: "May 2024",
    description: "Top performer among 20+ freshers",
    images: [
      "https://raw.githubusercontent.com/ashitoshmane1234/ashitosh-photos/main/Shinning-start.jpg",
      "https://raw.githubusercontent.com/ashitoshmane1234/ashitosh-photos/main/shining-start%20(1).jpg",
    ],
  },
];

export default function AwardsSection() {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 2, md: 3 } }}>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Honors & Awards
      </Typography>

      <Stack spacing={2.5}>
        {awards.map((award, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: 3,
              backdropFilter: "blur(10px)",
              background:
                theme.palette.mode === "dark"
                  ? "rgba(15,23,42,0.88)"
                  : "#fff",
              border: "1px solid",
              borderColor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.06)",
              transition: "0.3s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
              },
            }}
          >
            <CardContent sx={{ pb: "16px !important" }}>
              {/* HEADER */}
              <Typography fontWeight={600}>{award.title}</Typography>
              <Divider sx={{ my: 1 }} />

              {/* META LINE */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "0.78rem" }}
                mb={1}
              >
                {award.issuer} • {award.method} • {award.year}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: "0.82rem",
                  mb: 1,
                  color: theme.palette.text.primary,
                }}
              >
                {award.description}
              </Typography>

              {/* IMAGE ROW */}
              {/* IMAGE ROW */}
<Stack direction="row" spacing={1.5} flexWrap="wrap">
  {award.images.map((img, i) => (
    <Box
      key={i}
      component="a"         // ✅ Make it clickable
      href={img}            // ✅ Link to full image
      target="_blank"       // ✅ Open in new tab
      rel="noopener noreferrer"
      sx={{ textDecoration: "none" }}
    >
      <Box
        component="img"
        src={img}            // ✅ Thumbnail
        alt={award.title}
        sx={{
          width: 120,
          height: 120,
          borderRadius: 2,
          objectFit: "cover",
          border: "1px solid rgba(0,0,0,0.08)",
          cursor: "pointer", // ✅ Shows clickable cursor
        }}
      />
    </Box>
  ))}
</Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
