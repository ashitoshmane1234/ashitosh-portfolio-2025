// Footer.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Divider,
  Tooltip,
} from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Instagram,
  Email,
  Phone,
  ContentCopy,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { getIconColor } from "../Common/themeUtils";

/* =======================
   SOCIAL LINKS
======================= */
const socialLinks = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/ashitosh-mane-7a2b121b9/",
    Icon: LinkedIn,
  },
  {
    name: "github",
    href: "https://github.com/ashitoshmane1234",
    Icon: GitHub,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/ashitosh_mane_/",
    Icon: Instagram,
  },
  {
    name: "gmail",
    href: "mailto:ashitoshmane1234@gmail.com?subject=Contact%20from%20Portfolio",
    Icon: Email,
  },
];

const Footer = () => {
  const theme = useTheme();
  const iconSize = 20;

  const [copied, setCopied] = useState("");

  const handleCopy = async (text, type) => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 1500);
  };

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
            : "rgba(59,130,246,0.15)",
        backdropFilter: "blur(6px)",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="center">
          <Typography variant="h6" fontWeight={600}>
            Ashitosh Mane
          </Typography>

          {/* SOCIAL ICONS */}
          <Stack direction="row" spacing={2}>
            {socialLinks.map(({ name, href, Icon }) => (
              <IconButton
                key={name}
                component="a"
                href={href}
                target={name === "gmail" ? undefined : "_blank"}
                rel={name !== "gmail" ? "noopener noreferrer" : undefined}
                sx={{ color: getIconColor(theme, name) }}
              >
                <Icon sx={{ fontSize: iconSize }} />
              </IconButton>
            ))}
          </Stack>

          {/* CONTACT INFO */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            alignItems="center"
          >
            {/* EMAIL */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Email
                sx={{ fontSize: iconSize, color: getIconColor(theme, "gmail") }}
              />

              {/* OPEN MAIL */}
              <Typography
                component="a"
                href="mailto:ashitoshmane1234@gmail.com"
                sx={{
                  fontSize: "0.85rem",
                  color: "text.primary",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                ashitoshmane1234@gmail.com
              </Typography>

              {/* COPY */}
              <Tooltip title={copied === "email" ? "Copied!" : "Copy email"}>
                <IconButton
                  size="small"
                  onClick={() =>
                    handleCopy("ashitoshmane1234@gmail.com", "email")
                  }
                >
                  <ContentCopy sx={{ fontSize: 16 }} />
                </IconButton>
              </Tooltip>
            </Stack>

            {/* PHONE */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Phone
                sx={{ fontSize: iconSize, color: getIconColor(theme, "phone") }}
              />

              {/* OPEN DIALER */}
              <Typography
                component="a"
                href="tel:+918600750284"
                sx={{
                  fontSize: "0.85rem",
                  color: "text.primary",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                +91 8600750284
              </Typography>

              {/* COPY */}
              <Tooltip title={copied === "phone" ? "Copied!" : "Copy number"}>
                <IconButton
                  size="small"
                  onClick={() => handleCopy("+918600750284", "phone")}
                >
                  <ContentCopy sx={{ fontSize: 16 }} />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Divider
            sx={{
              width: "100%",
              maxWidth: 400,
              borderColor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(59,130,246,0.3)",
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
