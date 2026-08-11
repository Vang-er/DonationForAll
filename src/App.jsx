import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function SignInWrapper() {
  const navigate = useNavigate();
  return <SignIn onNavigateToSignUp={() => navigate("/signup")} />;
}

function SignUpWrapper() {
  const navigate = useNavigate();
  return <SignUp onNavigateToSignIn={() => navigate("/login")} />;
}

export default function MyApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignInWrapper />} />
      <Route path="/signup" element={<SignUpWrapper />} />
    </Routes>
  );
}