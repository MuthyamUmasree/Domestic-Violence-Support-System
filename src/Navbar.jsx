import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#e53935" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SafeStudy – DV Support
        </Typography>

        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          {!user && (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}

          {user && (
            <>
              <Typography
                component="span"
                sx={{ mx: 2, color: "white" }}
              >
                {user.username} ({user.role})
              </Typography>

              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;