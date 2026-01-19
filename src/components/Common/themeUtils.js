// themeUtils.js
export const getIconColor = (theme, brand) => {
  const lightModeColors = {
    linkedin: "#0A66C2",
    github: "#000000",
    gmail: "#EA4335",
    instagram: "#E1306C",
    phone: "#34A853",
    email: "#EA4335",
  };

  const darkModeColors = {
    linkedin: "#0A66C2",
    github: "#ffffff",
    gmail: "#EA4335",
    instagram: "#E1306C",
    phone: "#34A853",
    email: "#EA4335",
  };

  return theme.palette.mode === "dark"
    ? darkModeColors[brand] || "#ffffff"
    : lightModeColors[brand] || "#000000";
};
