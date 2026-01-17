import { Card, CardContent, Typography } from "@mui/material";

export default function About() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">About Me</Typography>
        <Typography mt={1}>
          Software Engineer with 2+ years of experience building secure,
          scalable SaaS and healthcare platforms using Java, Spring Boot,
          React, and cloud-native architectures.
        </Typography>
      </CardContent>
    </Card>
  );
}
