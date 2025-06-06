import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import PropertyCard from "./components/property/PropertyCard";
import Home from "./components/ui/Home";
import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/dashboard/Profile";
import PrivateRoute from "./components/auth/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/property"
              element={
                <PrivateRoute>
                  <PropertyCard />
                </PrivateRoute>
              }
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Box>
      </Router>
    </AuthProvider>
  );
}

export default App;
