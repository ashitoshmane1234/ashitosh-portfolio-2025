import React from "react";
import { Box, Container, Stack, Typography, IconButton, Divider } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme } from "@mui/material/styles";

const brandColors = {
  linkedin: "#0A66C2",
  github: "#000000",
  email: "#EA4335",
  phone: "#34A853",
  instagram: "#E1306C",
};

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        mt: 10,
        py: 5,
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(0,0,0,0.35)"
            : "rgba(59, 130, 246, 0.15)", // light mode subtle primary
        backdropFilter: "blur(6px)",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="center">
          <Typography variant="h6" fontWeight={600}>
            Ashitosh Mane
          </Typography>

          <Stack direction="row" spacing={2}>
            <IconButton
              component="a"
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              sx={{ color: brandColors.linkedin }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              sx={{ color: brandColors.github }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com/YOUR_INSTAGRAM"
              target="_blank"
              sx={{ color: brandColors.instagram }}
            >
              <InstagramIcon />
            </IconButton>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems="center"
            mt={1}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon sx={{ fontSize: 20, color: brandColors.email }} />
              <Typography
                variant="body2"
                sx={{ wordBreak: "break-all", fontSize: "0.85rem" }}
              >
                ashitoshmane1234@gmail.com
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon sx={{ fontSize: 20, color: brandColors.phone }} />
              <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
                +91 8600750284
              </Typography>
            </Stack>
          </Stack>

          <Divider
            sx={{
              width: "100%",
              maxWidth: 400,
              borderColor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(59,130,246,0.3)", // subtle primary tint in light
            }}
          />

          <Typography
            variant="body2"
            sx={{
              opacity: 0.8,
              textAlign: "center",
              fontSize: { xs: "0.75rem", sm: "0.85rem" },
            }}
          >
            © {new Date().getFullYear()} Ashitosh Mane. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
