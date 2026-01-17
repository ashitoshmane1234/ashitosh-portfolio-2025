import { Card, CardContent, Typography } from "@mui/material";

export default function Experience() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Experience</Typography>
        <Typography mt={1} fontWeight={600}>
          Mindbowser Inc – Associate Software Engineer
        </Typography>
        <Typography color="text.secondary">
          Healthcare SaaS, Multi-tenant systems, OAuth2, HL7 FHIR
        </Typography>
      </CardContent>
    </Card>
  );
}
