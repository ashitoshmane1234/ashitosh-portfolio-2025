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
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 0 }
      }}
    >
      {/* LEFT TEXT */}
      <Box component={motion.div} variants={textVariant} sx={{ flex: 1 }}>
        <Typography variant="h3" gutterBottom>
          Hi, I’m{" "}
          <Box component="span" color="primary.main">
            Ashitosh Mane
          </Box>
        </Typography>

        <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
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

        <Typography color="text.secondary" maxWidth={520} sx={{ mb: 4 }}>
          I am a <strong>Software Engineer</strong> building
          <strong> scalable and secure software</strong> with clean code and
          thoughtful architecture across <strong>multiple real-world projects</strong>.
          I specialize in <strong>Spring Boot, Security, Microservices, and AI integrations</strong>,
          with hands-on experience using <strong>React.js, HL7/FHIR, AWS, NestJS, and Next.js</strong>.
          I enjoy transforming ideas into <strong>production-ready applications</strong>
          through <strong>AI-powered rapid development</strong> and continuous learning.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            variant="contained"
            size="large"
            component="a"
            href="/Ashitosh_Mane_Resume.pdf"
            target="_blank"
            sx={{
              background: "linear-gradient(90deg, #6366F1 0%, #22D3EE 100%)",
              "&:hover": { background: "linear-gradient(90deg, #4F46E5 0%, #06B6D4 100%)" }
            }}
          >
            View My Resume
          </Button>

          <Button
            variant="outlined"
            size="large"
            component="a"
            href="mailto:ashitoshmane1234@gmail.com"
            sx={{
              borderColor: "primary.main",
              color: "primary.main",
              "&:hover": { backgroundColor: "primary.main", color: "#fff" }
            }}
          >
            Contact Me
          </Button>
        </Stack>
      </Box>

      {/* RIGHT IMAGE */}
      <Box component={motion.div} variants={imageVariant} sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Box
          component="img"
          src={process.env.PUBLIC_URL + "/ashitosh.png"}
          alt="Ashitosh Mane"
          sx={{
            width: { xs: 260, md: 340 },
            height: { xs: 260, md: 340 },
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 0 60px rgba(99,102,241,0.6)",
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
