// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import VictimDashboard from "./pages/VictimDashboard";
import CounsellorDashboard from "./pages/CounsellorDashboard";
import LegalDashboard from "./pages/LegalDashboard";
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/victim"
          element={
            <ProtectedRoute requiredRole="victim">
              <VictimDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/counsellor"
          element={
            <ProtectedRoute requiredRole="counsellor">
              <CounsellorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/legal"
          element={
            <ProtectedRoute requiredRole="legal">
              <LegalDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;