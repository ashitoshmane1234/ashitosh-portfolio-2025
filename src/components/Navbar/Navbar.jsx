import { useState } from "react";
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
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SiLinkedin, SiGithub, SiGmail, SiInstagram } from "react-icons/si";

const sections = [
  { name: "About", id: "hero" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Certifications", id: "certifications" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" }, // Footer
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

  // Handle click on sections
  const handleClick = (sec) => {
  const element = document.getElementById(sec.id);
  element?.scrollIntoView({ behavior: "smooth" });
  setMobileOpen(false);
};

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0,0,0,0.35)",
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          {/* LOGO */}
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => handleClick({ id: "hero" })}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "text.primary" }}
            >
              DevSphere
            </Typography>
          </Box>

          {/* SECTION LINKS */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", gap: 3 }}>
              {sections.map((sec) => (
                <Button
                  key={sec.id}
                  onClick={() => handleClick(sec)}
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                    textTransform: "none",
                    "&:hover": { color: theme.palette.primary.main },
                  }}
                >
                  {sec.name}
                </Button>
              ))}
            </Box>
          )}

          {/* SOCIAL ICONS OR HAMBURGER */}
          {isMobile ? (
            <IconButton
              color="inherit"
              onClick={() => setMobileOpen(true)}
              sx={{ marginLeft: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
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
          sx: { top: "56px", height: "calc(100% - 64px)", bgcolor: theme.palette.background.paper },
        }}
      >
        <Box
          sx={{
            width: 220,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: 2,
            height: "100%",
          }}
        >
          <List>
            {sections.map((sec) => (
              <ListItem key={sec.id} disablePadding>
                <ListItemButton onClick={() => handleClick(sec)}>
                  <ListItemText
                    primary={sec.name}
                    sx={{ color: theme.palette.text.primary, textAlign: "center" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 1, bgcolor: theme.palette.text.secondary }} />

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
