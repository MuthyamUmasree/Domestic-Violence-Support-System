import { useState, useContext } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  MenuItem,
  Box
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";
import { toast } from "react-toastify";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password || !role) {
      toast.error("All fields are required");
      return;
    }

    login(username, role);
    toast.success("Login Successful");

    navigate(`/${role}`);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" align="center">
        Login
      </Typography>

      <Box sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          select
          fullWidth
          label="Role"
          margin="normal"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="victim">Victim</MenuItem>
          <MenuItem value="counsellor">Counsellor</MenuItem>
          <MenuItem value="legal">Legal Advisor</MenuItem>
        </TextField>

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, backgroundColor: "#e53935" }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default Login;