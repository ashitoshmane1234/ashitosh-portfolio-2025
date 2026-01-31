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

import { ColorModeContext } from "../ThemeContext";
import { getIconColor } from "../Common/themeUtils";

/* =======================
   NAV SECTIONS
======================= */
const sections = [
  { name: "About", id: "hero" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Certifications", id: "certifications" },
  { name: "Awards", id: "awards" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

/* =======================
   SOCIAL LINKS
======================= */
const socialLinks = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/ashitosh-mane-7a2b121b9/",
    Icon: SiLinkedin,
  },
  {
    name: "github",
    href: "https://github.com/ashitoshmane1234",
    Icon: SiGithub,
  },
  {
    name: "gmail",
    href: "mailto:ashitoshmane1234@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Ashitosh,%0D%0A%0D%0A",
    Icon: SiGmail,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/ashitosh_mane_/",
    Icon: SiInstagram,
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const iconSize = 22;

  const handleClick = (sec) => {
    const element = document.getElementById(sec.id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  /* =======================
     SOCIAL ICONS
  ======================= */
  const SocialIcons = ({ gap = 1, center = false }) => (
    <Box
      sx={{
        display: "flex",
        gap,
        justifyContent: center ? "center" : "flex-start",
      }}
    >
      {socialLinks.map(({ name, href, Icon }) => (
        <IconButton
          key={name}
          component="a"
          href={href}
          target={name === "gmail" ? undefined : "_blank"}
          rel={name !== "gmail" ? "noopener noreferrer" : undefined}
          sx={{ color: getIconColor(theme, name) }}
        >
          <Icon size={iconSize} />
        </IconButton>
      ))}
    </Box>
  );

  return (
    <>
      {/* =======================
          APP BAR
      ======================= */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(0,0,0,0.35)"
              : "rgba(59,130,246,0.15)",
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
              fontSize: "1.35rem",
              userSelect: "none",
            }}
          >
            <Box component="span" sx={{ color: "text.primary", mr: 0.5 }}>
              Dev
            </Box>
            <Box
              component="span"
              sx={{
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(135deg, #6366f1, #22d3ee)"
                    : "linear-gradient(135deg, #4338ca, #0284c7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sphere
            </Box>
          </Box>

          {/* DESKTOP LINKS */}
          {!isMobile && (
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                gap: 0.25,
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
                    px: 1.25,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {sec.name}
                </Button>
              ))}
            </Box>
          )}

          {/* RIGHT SIDE */}
          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                onClick={toggleColorMode}
                sx={{ mr: 4 }}
              >
                {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              <SocialIcons />
            </Box>
          ) : (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ ml: "auto" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* =======================
          MOBILE DRAWER
      ======================= */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
  sx: {
    top: "64px",
    height: "calc(100% - 64px)",
    backdropFilter: "blur(14px)",
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(15,23,42,0.95)"   // 🔥 almost solid dark
        : "rgba(255,255,255,0.95)", // 🔥 almost solid light
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
                  <ListItemText
                    primary={sec.name}
                    sx={{ textAlign: "center", fontWeight: 500 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 1 }} />

          <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
            <IconButton onClick={toggleColorMode}>
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>

          <SocialIcons gap={2} center />
        </Box>
      </Drawer>
    </>
  );
}
