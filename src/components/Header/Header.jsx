import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { heroContainer, textVariant, imageVariant } from "./Header.styles";

const Header = () => {
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
        py: { xs: 6, md: 10 }
      }}
    >
      {/* LEFT TEXT */}
      <Box
        component={motion.div}
        variants={textVariant}
        sx={{ flex: 1 }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          gutterBottom
        >
          Hi, I’m{" "}
          <Box component="span" color="primary.main">
            Ashitosh Mane
          </Box>
        </Typography>

         <Typography
  variant="h5"
  color="text.secondary"
  sx={{ mb: 2 }}
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
    "Experience with React, Next.js, and NestJS",
    2000
  ]}
  speed={50}
  repeat={Infinity}
/>
</Typography>




        <Typography color="text.secondary" maxWidth={520}>
  I am a <strong>Software Engineer</strong> building
  <strong> scalable and secure software</strong> with clean code and
  thoughtful architecture across <strong>multiple real-world projects</strong>.
  I specialize in <strong>Spring Boot, Security, Microservices, and AI integrations</strong>,
  with hands-on experience using <strong>React.js, HL7/FHIR, AWS, NestJS, and Next.js</strong>.
  I enjoy transforming ideas into <strong>production-ready applications</strong>
  through <strong>AI-powered rapid development</strong> and continuous learning.
</Typography>

        <Stack
  direction={{ xs: "column", sm: "row" }}
  spacing={2}
  mt={4}
>
  {/* VIEW RESUME */}
  <Button
    variant="contained"
    size="large"
    component="a"
    href="/Ashitosh_Mane_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    View My Resume
  </Button>

  {/* CONTACT ME */}
  <Button
    variant="outlined"
    size="large"
    component="a"
    href="mailto:ashitoshmane1234@gmail.com"
  >
    Contact Me
  </Button>
</Stack>
      </Box>

      {/* RIGHT IMAGE */}
      <Box
        component={motion.div}
        variants={imageVariant}
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Box
          component="img"
          src="/ashitosh.png"
          alt="Ashitosh Mane"
          sx={{
            width: { xs: 260, md: 340 },
            height: { xs: 260, md: 340 },
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow:
              "0 0 60px rgba(99,102,241,0.6)",
            animation: "float 6s ease-in-out infinite",
            "@keyframes float": {
              "0%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-15px)" },
              "100%": { transform: "translateY(0px)" }
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
