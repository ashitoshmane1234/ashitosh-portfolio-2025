// src/components/Common/Section.jsx
import { Box } from "@mui/material";

const Section = ({ id, children }) => {
  return (
    <Box id={id} component="section">
      {children}
    </Box>
  );
};

export default Section;
