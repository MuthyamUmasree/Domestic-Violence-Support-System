import { Typography, Container } from "@mui/material";

function LegalDashboard() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Legal Advisor Dashboard</Typography>
      <Typography mt={2}>
        Offer legal advice and assist victims with legal actions.
      </Typography>
    </Container>
  );
}

export default LegalDashboard;