import { useNavigate, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AllDonations from "./AllDonations";
import AddDonation from "./AddDonation"; 
import Navbar from "./Navbar";
import Profile from "./Profile";
import { useSettings } from "./SettingsContext";
import { Navigate } from "react-router-dom";

function SignInWrapper() {
  const navigate = useNavigate();
  return <SignIn onNavigateToSignUp={() => navigate("/signup")} />;
}

function SignUpWrapper() {
  const navigate = useNavigate();
  return <SignUp onNavigateToSignIn={() => navigate("/login")} />;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useSettings();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default function MyApp() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignInWrapper />} />
        <Route path="/signup" element={<SignUpWrapper />} />
        <Route path="/donations" element={<AllDonations />} />
        <Route path="/add-donation" element={<AddDonation />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
    </>
  );
}