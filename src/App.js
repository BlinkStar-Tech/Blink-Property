import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropertyCard from "./components/property/PropertyCard";
import Home from "./components/ui/Home";
import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/auth/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={{ flex: "1 0 auto" }}>
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
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
