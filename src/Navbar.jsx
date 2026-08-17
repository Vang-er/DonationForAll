import { useState } from "react";
import { HiMiniUser } from "react-icons/hi2";
import { Settings } from "lucide-react";
import logo from "./assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSettings } from "./SettingsContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { language, isLoggedIn } = useSettings();

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goHome = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-green-600 text-white shadow-md sticky top-0 z-[9999]">
      <div className="max-w-7xl mx-auto h-16 px-4 md:px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} className="h-50" alt="Donate For All logo" />
          <div className="text-lg md:text-2xl font-bold cursor-pointer" onClick={goHome}>
            Donate For All
          </div>
        </div>

        {/* Navigation Links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          <button className="hover:text-green-200 transition group cursor-pointer" onClick={goHome}>
            <p>Home</p>
            <div className="mt-1 h-0.5 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></div>
          </button>

          <button className="hover:text-green-200 transition group cursor-pointer" onClick={() => scrollToSection("about")}>
            <p>About</p>
            <div className="mt-1 h-0.5 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></div>
          </button>

          <button className="hover:text-green-200 transition group cursor-pointer" onClick={() => scrollToSection("how-it-works")}>
            <p>How it works</p>
            <div className="mt-1 h-0.5 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></div>
          </button>

          <button className="hover:text-green-200 transition group cursor-pointer" onClick={() => navigate("/donations")}>
            <p>Donations</p>
            <div className="mt-1 h-0.5 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></div>
          </button>

          <button className="hover:text-green-200 transition group cursor-pointer" onClick={() => scrollToSection("contact")}>
            <p>Contact</p>
            <div className="mt-1 h-0.5 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></div>
          </button>
        </div>

        {/* Right Side - hidden on mobile */}
        <div className="hidden md:flex gap-3 items-center">
          <button
  className="px-3 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-1"
  onClick={() => navigate(isLoggedIn ? "/profile" : "/login")}>

  <Settings size={18} />
  {language === "ar" ? "الإعدادات" : "Settings"}
</button>

          <button className="px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-1" onClick={() => navigate("/login")}>
            <HiMiniUser />
            Log in
          </button>

          <button className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition" onClick={() => navigate("/signup")}>
            Get started
          </button>
        </div>

        {/* Hamburger button - visible only on mobile */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          <button className="text-left" onClick={() => { goHome(); setMenuOpen(false); }}>Home</button>
          <button className="text-left" onClick={() => { scrollToSection("about"); setMenuOpen(false); }}>About</button>
          <button className="text-left" onClick={() => { scrollToSection("how-it-works"); setMenuOpen(false); }}>How it works</button>
          <button className="text-left" onClick={() => { navigate("/donations"); setMenuOpen(false); }}>Donations</button>
          <button className="text-left" onClick={() => { scrollToSection("contact"); setMenuOpen(false); }}>Contact</button>
          <button className="text-left" onClick={() => { navigate("/profile"); setMenuOpen(false); }}>
            {language === "ar" ? "الإعدادات" : "Settings"}
          </button>
          <Link to="/login" className="text-left">Log in</Link>
          <button className="bg-white text-green-700 py-2 rounded-lg font-semibold" onClick={() => navigate("/signup")}>Get started</button>
        </div>
      )}
    </nav>
  );
}