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
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";

const sections = [
  { name: "Hero", id: "hero" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

// Brand Colors
const brandColors = {
  linkedin: "#0A66C2",
  github: "#333", // dark gray
  gmail: "#EA4335",
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
  {/* LEFT: Logo */}
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    }}
    onClick={() => scrollToSection("hero")}
  >
    <Typography
      variant="h6"
      sx={{
        fontWeight: 700,
        color: "text.primary",
      }}
    >
      DevSphere
    </Typography>
  </Box>

  {/* CENTER: Section Links */}
  {!isMobile && (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", gap: 3 }}>
      {sections.map((sec) => (
        <Button
          key={sec.id}
          onClick={() => scrollToSection(sec.id)}
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

  {/* RIGHT: Social Icons or Hamburger */}
  {/* RIGHT: Social Icons or Hamburger */}
{isMobile ? (
  <IconButton
    color="inherit"
    onClick={() => setMobileOpen(true)}
    sx={{ marginLeft: "auto" }} // <-- this pushes it to the right
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
      top: '56px', // Drawer starts below AppBar (Navbar)
      height: 'calc(100% - 64px)', // Adjust height so it fits the remaining screen
      bgcolor: theme.palette.background.paper,
    },
  }}
>
  <Box
    sx={{
      width: 220,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      p: 2,
      height: '100%', // full height inside Drawer
    }}
  >
    {/* SECTION LINKS */}
    <List>
      {sections.map((sec) => (
        <ListItem key={sec.id} disablePadding>
          <ListItemButton onClick={() => scrollToSection(sec.id)}>
            <ListItemText
              primary={sec.name}
              sx={{ color: theme.palette.text.primary, textAlign: "center" }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>

    <Divider sx={{ my: 1, bgcolor: theme.palette.text.secondary }} />

    {/* SOCIAL ICONS */}
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
    </Box>
  </Box>
</Drawer>

    </>
  );
}
