import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropertyCard from "./components/property/PropertyCard";
import Home from "./components/ui/Home";
import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";


function App() {
  return (
    <Router>
      <div style={{ flex: "1 0 auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="property" element={<PropertyCard />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
