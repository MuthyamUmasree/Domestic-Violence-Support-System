import { Container, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

function CounsellorNotes() {
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    alert("Counselling notes saved");
    setNotes("");
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Counselling Notes</Typography>

      <TextField
        label="Guidance / Observations"
        multiline
        rows={4}
        fullWidth
        sx={{ mt: 3 }}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleSave}
      >
        Save Notes
      </Button>
    </Container>
  );
}

export default CounsellorNotes;