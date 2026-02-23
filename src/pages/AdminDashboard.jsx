import { Typography, Container } from "@mui/material";

function AdminDashboard() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Admin Dashboard</Typography>
      <Typography mt={2}>
        Manage users, control content, and ensure data security.
      </Typography>
    </Container>
  );
}

export default AdminDashboard;