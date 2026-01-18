import { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { SiLinkedin, SiGithub, SiGmail, SiInstagram } from "react-icons/si";
import { ColorModeContext } from "../ThemeContext"

const sections = [
  { name: "About", id: "hero" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Certifications", id: "certifications" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const brandColors = {
  linkedin: "#0A66C2",
  github: "#ffffff",
  gmail: "#EA4335",
  instagram: "#E1306C",
};

export default function Navbar({ scrollToFooter }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { mode, toggleColorMode } = useContext(ColorModeContext);

  const handleClick = (sec) => {
    const element = document.getElementById(sec.id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
  position="sticky"
  elevation={0}
  sx={{
    backdropFilter: "blur(10px)",
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(0,0,0,0.35)"
        : "rgba(59, 130, 246, 0.15)", // light-mode primary tint
    borderBottom: "none", // remove the border entirely
  }}
>
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          {/* LOGO */}
           <Box
  onClick={() => handleClick({ id: "hero" })}
  sx={{
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    fontWeight: 800,
    letterSpacing: "-0.5px",
    fontSize: "1.35rem",
    userSelect: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-1px)",
      opacity: 0.9
    }
  }}
>
  {/* DEV */}
  <Box
    component="span"
    sx={{
      color: "text.primary",
      mr: 0.5
    }}
  >
    Dev
  </Box>

  {/* SPHERE */}
  <Box
    component="span"
    sx={{
      background: (theme) =>
        theme.palette.mode === "dark"
          ? "linear-gradient(135deg, #6366f1, #22d3ee)"
          : "linear-gradient(135deg, #4338ca, #0284c7)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        inset: 0,
        filter: (theme) =>
          theme.palette.mode === "dark" ? "blur(8px)" : "none",
        opacity: theme.palette.mode === "dark" ? 0.35 : 0
      }
    }}
  >
    Sphere
  </Box>
</Box>

          {/* SECTION LINKS */}
          {!isMobile && (
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                gap: 3,
              }}
            >
              {sections.map((sec) => (
                <Button
                  key={sec.id}
                  onClick={() => handleClick(sec)}
                  sx={{
                    color: "text.primary",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {sec.name}
                </Button>
              ))}
            </Box>
          )}

          {/* THEME SWITCH + SOCIAL / MENU */}
          {isMobile ? (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ ml: "auto" }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* 🌙 THEME SWITCH */}
              <IconButton
                onClick={toggleColorMode}
                sx={{
                  mx: 1.5,
                  color: "text.primary",
                  transition: "0.3s",
                  "&:hover": {
                    color: "primary.main",
                    transform: "rotate(20deg)",
                  },
                }}
              >
                {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>

              {/* SOCIAL ICONS */}
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  component="a"
                  href="https://linkedin.com"
                  target="_blank"
                  sx={{ color: brandColors.linkedin }}
                >
                  <SiLinkedin size={22} />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://github.com"
                  target="_blank"
                  sx={{ color: brandColors.github }}
                >
                  <SiGithub size={22} />
                </IconButton>
                <IconButton
                  component="a"
                  href="mailto:ashitoshmane1234@gmail.com"
                  sx={{ color: brandColors.gmail }}
                >
                  <SiGmail size={22} />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://instagram.com/YOUR_INSTAGRAM"
                  target="_blank"
                  sx={{ color: brandColors.instagram }}
                >
                  <SiInstagram size={22} />
                </IconButton>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            top: "64px",
            height: "calc(100% - 64px)",
            bgcolor: "background.paper",
          },
        }}
      >
        <Box
          sx={{
            width: 220,
            p: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <List>
            {sections.map((sec) => (
              <ListItem key={sec.id} disablePadding>
                <ListItemButton onClick={() => handleClick(sec)}>
                  <ListItemText primary={sec.name} sx={{ textAlign: "center" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 1 }} />

          {/* MOBILE THEME SWITCH */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
            <IconButton onClick={toggleColorMode}>
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>

          {/* MOBILE SOCIAL ICONS */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <IconButton
              component="a"
              href="https://linkedin.com"
              target="_blank"
              sx={{ color: brandColors.linkedin }}
            >
              <SiLinkedin size={22} />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com"
              target="_blank"
              sx={{ color: brandColors.github }}
            >
              <SiGithub size={22} />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:ashitoshmane1234@gmail.com"
              sx={{ color: brandColors.gmail }}
            >
              <SiGmail size={22} />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com/YOUR_INSTAGRAM"
              target="_blank"
              sx={{ color: brandColors.instagram }}
            >
              <SiInstagram size={22} />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
