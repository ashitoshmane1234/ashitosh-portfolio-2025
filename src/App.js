import { Box, Container, Stack } from "@mui/material";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer"; // Footer will act as Contact
import { useRef } from "react";

function App() {
  const footerRef = useRef(null); // create a ref for Footer

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #6a728aff 0%, #3234147a 45%)",
        position: "relative",
        color: "#fff",
      }}
    >
      <Navbar scrollToFooter={scrollToFooter} /> {/* pass scroll function to Navbar */}

      {/* MAIN CONTENT */}
      <Container maxWidth="lg" sx={{ py: { xs: 2, md: 6 }, px: { xs: 2, md: 4 } }}>
        <Stack spacing={{ xs: 6, md: 12 }}>
          <Box id="hero"><Header /></Box>
          <Box id="skills"><Skills /></Box>
          <Box id="experience"><Experience /></Box>
          <Box id="projects"><Projects /></Box>
          <Box id="certifications"><Certifications /></Box>
          <Box id="education"><Education /></Box>
        </Stack>
      </Container>

      {/* FOOTER */}
      <Footer ref={footerRef} />
    </Box>
  );
}

export default App;