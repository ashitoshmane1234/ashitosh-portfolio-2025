import { Card, CardContent, Typography, Stack, Chip } from "@mui/material";

export default function Projects() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Projects</Typography>

        <Stack mt={2}>
          <Typography fontWeight={600}>MyCa – Healthcare SaaS</Typography>
          <Typography>
            Secure multi-tenant healthcare platform with AI symptom summaries.
          </Typography>
          <Stack direction="row" spacing={1} mt={1}>
            <Chip label="Spring Boot" />
            <Chip label="Auth0" />
            <Chip label="FHIR" />
            <Chip label="AWS" />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
