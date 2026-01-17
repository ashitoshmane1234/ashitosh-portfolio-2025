import { Card, CardContent, Typography, Link } from "@mui/material";

export default function Certifications() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Certifications</Typography>
        <Link href="#" target="_blank" display="block" mt={1}>
          Master Microservices with Spring Boot
        </Link>
        <Link href="#" target="_blank" display="block">
          Modern JavaScript
        </Link>
      </CardContent>
    </Card>
  );
}
