import { Typography, Container } from "@mui/material";

function VictimDashboard() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Victim Dashboard</Typography>
      <Typography mt={2}>
        Access emergency contacts, counselling support, and legal help.
      </Typography>
    </Container>
  );
}

export default VictimDashboard;