import { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";

function HomePage() {
  const [selectedRole, setSelectedRole] = useState("");

  const roleInfo = {
    Admin: "Manage users, monitor platform activity, update resources, and ensure data security.",
    Victim:
      "Access emergency contacts, legal rights information, counselling support, and safe reporting tools.",
    Counsellor:
      "Provide emotional support, monitor survivor progress, and offer guidance through recovery.",
    Legal:
      "Offer legal advice, update legal resources, and assist with filing complaints or legal procedures.",
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Gender-Responsive Domestic Violence Support System
      </Typography>

      <Typography align="center" mb={4}>
        Select your role to view relevant information and services.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {["Admin", "Victim", "Counsellor", "Legal"].map((role) => (
          <Grid item xs={12} sm={6} md={3} key={role}>
            <Card
              sx={{
                cursor: "pointer",
                textAlign: "center",
                p: 2,
                backgroundColor:
                  selectedRole === role ? "#e3f2fd" : "white",
              }}
              onClick={() => setSelectedRole(role)}
            >
              <CardContent>
                <Typography variant="h6">{role}</Typography>
                <Button sx={{ mt: 2 }} variant="contained">
                  Select
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedRole && (
        <Box mt={5} p={3} sx={{ backgroundColor: "#f5f5f5", borderRadius: 2 }}>
          <Typography variant="h5">{selectedRole} Dashboard Info</Typography>
          <Typography mt={2}>{roleInfo[selectedRole]}</Typography>
        </Box>
      )}
    </Container>
  );
}

export default HomePage;