import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { heroContainer, textVariant, imageVariant } from "./Header.styles";
import { useState } from "react";

const Header = () => {

  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      component={motion.div}
      variants={heroContainer}
      initial="hidden"
      animate="show"
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 6,
        py: { xs: 3, md: 6 }   ,
        px: { xs: 2, md: 0 }
      }}
    >
      {/* LEFT TEXT */}
      <Box component={motion.div} variants={textVariant} sx={{ flex: 1 }}>
        {/* NAME */}
        <Typography
  gutterBottom
  sx={{
    fontWeight: 700,
    lineHeight: 1.15,
    fontSize: {
      xs: "1.7rem",   // ⬅ reduced for mobile
      sm: "2.2rem",
      md: "2.8rem"
    }
  }}
>
  Hi, I’m{" "}
  <Box component="span" color="primary.main">
    Ashitosh Mane
  </Box>
</Typography>


        {/* EXPERIENCE BADGE */}
        <Typography
          sx={{
            display: "inline-block",
            mt: 1,
            mb: 3,
            px: 2.5,
            py: 0.75,
            borderRadius: "999px",
            fontSize: { xs: "0.85rem", sm: "0.9rem" },
            fontWeight: 600,
            background: "linear-gradient(90deg, #22D3EE 0%, #6366F1 100%)",
            color: "#fff",
          }}
        >
          2.4+ Years of Professional Experience
        </Typography>

        {/* TYPING TEXT */}
        <Typography
          sx={{
            mb: 3,
            fontSize: { xs: "1.25rem", md: "1.25rem" },
             fontWeight: 600,
          }}
          color="text.secondary"
        >
          <TypeAnimation
            sequence={[
              "Software Engineer",
              2000,
              "Java & Spring Boot Developer",
              2000,
              "Building Scalable, Secure Systems",
              2000,
              "Cloud & DevOps: AWS, GCP, CI/CD",
              2000,
              "React, Next.js & NestJS",
              2000
            ]}
            speed={50}
            repeat={Infinity}
          />
        </Typography>

        {/* DESCRIPTION */}
<Typography
  color="text.secondary"
  maxWidth={520}
  sx={{
    mb: 1,
    display: "-webkit-box",
    WebkitLineClamp: { xs: expanded ? "unset" : 4, md: "unset" },
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  }}
>
  I am a <strong>Software Engineer</strong> building
  <strong> scalable and secure software</strong> with clean code and
  thoughtful architecture across <strong>real-world projects</strong>.
  I specialize in{" "}
  <strong>
    Spring Boot, Security, Microservices, and AI integrations
  </strong>
  , with hands-on experience using{" "}
  <strong>React.js, HL7/FHIR, AWS, NestJS, and Next.js</strong>. I enjoy
  transforming ideas into{" "}
  <strong>production-ready applications</strong> through{" "}
  <strong>AI-powered rapid development</strong> and continuous learning.
</Typography>

{/* READ MORE – mobile only */}
<Box sx={{ display: { xs: "block", md: "none" }, mb: 3 }}>
  <Button
    size="small"
    onClick={() => setExpanded(!expanded)}
    sx={{
      textTransform: "none",
      px: 0,
      fontWeight: 600,
    }}
  >
    {expanded ? "Show less" : "...Read more"}
  </Button>
</Box>

        {/* ACTION BUTTONS */}
         {/* ACTION BUTTONS */}
<Stack
  direction="row"
  spacing={1.5}
  justifyContent={{sm: "flex-start" }}
  alignItems="center"
  sx={{
    mt: 3,
    flexWrap: "nowrap", // ⛔ never stack
  }}
>
  <Button
    variant="contained"
    size="medium"                 // 🔑 smaller on mobile
    component="a"
    href="https://drive.google.com/file/d/1f5D_rExZidnCJNT6rcYcIWr5xsk5AfZt/preview"
    target="_blank"
    sx={{
      px: 3,
      py: 1,
      fontSize: "0.9rem",
      borderRadius: "999px",      // 🔥 pill shape looks premium
      background:
        "linear-gradient(90deg, #6366F1 0%, #22D3EE 100%)",
      boxShadow: "0 6px 18px rgba(99,102,241,0.35)",
      "&:hover": {
        background:
          "linear-gradient(90deg, #4F46E5 0%, #06B6D4 100%)",
      },
    }}
  >
    View Resume
  </Button>

  <Button
    variant="outlined"
    size="medium"
    component="a"
    href="mailto:ashitoshmane1234@gmail.com"
    sx={{
      px: 3,
      py: 1,
      fontSize: "0.9rem",
      borderRadius: "999px",
      borderColor: "primary.main",
      color: "primary.main",
      "&:hover": {
        backgroundColor: "primary.main",
        color: "#fff",
      },
    }}
  >
    Contact
  </Button>
</Stack>
      </Box>

      {/* RIGHT IMAGE */}
      <Box
        component={motion.div}
        variants={imageVariant}
        sx={{ flex: 1, display: "flex", justifyContent: "center" }}
      >
        <Box
          component="img"
          src={process.env.PUBLIC_URL + "/ashitosh.png"}
          alt="Ashitosh Mane"
          sx={{
  width: { xs: 180, sm: 210, md: 340 },
  height: { xs: 180, sm: 210, md: 340 },
  borderRadius: "50%",
  objectFit: "cover",
  boxShadow: "0 0 60px rgba(99,102,241,0.6)",
  animation: "float 6s ease-in-out infinite",
  "@keyframes float": {
    "0%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-12px)" }, // slightly less float on mobile
    "100%": { transform: "translateY(0px)" }
  }
}}
        />
      </Box>
    </Box>
  );
};

export default Header;
