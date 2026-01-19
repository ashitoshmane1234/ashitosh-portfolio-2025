import { Box, Container, Stack, useTheme } from "@mui/material";
import { useRef } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import ScrollArrow from "./components/Common/ScrollArrow";
import Section from "./components/Common/Section";

function App() {
  const footerRef = useRef(null);
  const theme = useTheme();

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        color: "text.primary",
        backgroundColor: theme.palette.background.default,

        /* ✨ Subtle premium glow depending on mode */
        backgroundImage:
          theme.palette.mode === "dark"
            ? `
              radial-gradient(
                circle at 20% 10%,
                rgba(99,102,241,0.15) 0%,
                rgba(34,211,238,0.06) 45%,
                transparent 70%
              )
            `
            : `
              radial-gradient(
                circle at 20% 10%,
                rgba(79,70,229,0.12) 0%,
                rgba(6,182,212,0.08) 45%,
                transparent 70%
              )
            `,
      }}
    >
      {/* NAVBAR */}
      <Navbar scrollToFooter={scrollToFooter} />

      {/* MAIN CONTENT */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 3, md: 6 },
          px: { xs: 2, md: 4 },
        }}
      >
       <Stack spacing={{ xs: 3, md: 6 }}>
  <Section id="hero">
    <Header />
  </Section>

  <Section id="skills">
    <Skills />
  </Section>

  <Section id="experience">
    <Experience />
  </Section>

  <Section id="projects">
    <Projects />
  </Section>

  <Section id="certifications">
    <Certifications />
  </Section>

  <Section id="education">
    <Education />
  </Section>
</Stack>
      </Container>

      {/* FOOTER (CONTACT) */}
      <Footer ref={footerRef} />

       {/* FLOATING SCROLL ARROW */}
      <ScrollArrow />
    </Box>
  );
}

export default App;
