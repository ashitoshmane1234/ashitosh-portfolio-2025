import { Box, Container, Stack } from "@mui/material";

import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #1e3a8a 0%, #020617 45%)",
        position: "relative",
        color: "#fff",
      }}
    >
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 2, md: 6 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Stack spacing={{ xs: 6, md: 12 }}>
          {/* HERO */}
          <Box id="hero">
            <Header />
          </Box>

          {/* SKILLS */}
          <Box id="skills">
            <Skills />
          </Box>

          {/* EXPERIENCE */}
          <Box id="experience">
            <Experience />
          </Box>

          {/* PROJECTS */}
          <Box id="projects">
            <Projects />
          </Box>

          {/* CERTIFICATIONS */}
          <Box id="certifications">
            <Certifications />
          </Box>

          {/* CONTACT */}
          <Box id="contact">
            <Contact />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
