import { Container, Typography, Grid, Paper } from "@mui/material";

function CounsellorDashboard() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Counsellor Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Assigned Victims</Typography>
            <Typography mt={1}>
              View and manage victims assigned for counselling.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Counselling Sessions</Typography>
            <Typography mt={1}>
              Track counselling sessions and emotional progress.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Progress Monitoring</Typography>
            <Typography mt={1}>
              Monitor mental health recovery and safety status.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CounsellorDashboard;