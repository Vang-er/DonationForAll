import { useState } from "react";
import CardCarousel from "./Cards"; 
import { HiMiniUser,HiMiniUsers,HiMiniHome,HiMiniGift } from "react-icons/hi2";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-green-600 text-white shadow-md">
  <div className="max-w-7xl mx-auto h-16 px-4 md:px-6 flex items-center justify-between">

    {/* Logo */}
    <div className="flex items-center gap-2">
      <img src={logo} className="h-8" alt="Donate For All logo" />
      <div className="text-lg md:text-2xl font-bold cursor-pointer">
        Donate For All
      </div>
    </div>

    {/* Navigation Links - hidden on mobile */}
    <div className="hidden md:flex items-center gap-8">
      <button className="hover:text-green-200 transition group cursor-pointer">
        <p>Home</p>
        <div className="mt-1 h-0.5 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></div>
      </button>

      <button className="hover:text-green-200 transition group cursor-pointer">
        <p>About</p>
        <div className="mt-1 h-0.5 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></div>
      </button>

      <button className="hover:text-green-200 transition group cursor-pointer">
        <p>How it works</p>
        <div className="mt-1 h-0.5 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></div>
      </button>

      <button className="hover:text-green-200 transition group cursor-pointer">
        <p>Contact</p>
        <div className="mt-1 h-0.5 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></div>
      </button>
    </div>

    {/* Right Side - hidden on mobile */}
    <div className="hidden md:flex gap-3">
      <Link to="/login" className="px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-1">
        <HiMiniUser className=""></HiMiniUser>
        Log in
      </Link>

      <button className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
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
      <button className="text-left">Home</button>
      <button className="text-left">About</button>
      <button className="text-left">How it works</button>
      <button className="text-left">Contact</button>
      <Link to="/login" className="text-left">Log in</Link>
      <button className="bg-white text-green-700 py-2 rounded-lg font-semibold">Get started</button>
    </div>
  )}
</nav>

      <main className="">
        <div className="pt-8 px-4 md:pt-15 md:pl-20 lg:pl-50 bg-green-100 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-1/2">
          <div className="">
        <div className="text-3xl md:text-5xl font-extrabold">Share what you have,<br></br><div className="text-green-700 mt-3">nourish their lives.</div></div>
        <div className="max-w-full md:max-w-100 pt-2 pb-3">
            <p>Donate For All connects donors with those in need.
            Together, we can reduce waste and end hunger in our community.</p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 md:gap-10">
            <button className="cursor-pointer bg-green-600 hover:bg-green-800 hover:scale-110 transition duration-300 text-white rounded-md font-bold h-12 w-40 flex items-center gap-1 px-4 py-2 "><HiMiniGift className="text-4xl"></HiMiniGift><div  className="text-base">I want to donate</div></button>
            <button className="cursor-pointer  rounded-md font-bold h-12 border-2 border-green-800 hover:bg-green-800 hover:scale-110 hover:text-white transition duration-300 w-40 flex items-center gap-1 px-4 py-2"><HiMiniUsers className="text-4xl"></HiMiniUsers>We are a charity</button>
        </div>
        <div className="max-w-full md:max-w-sm mt-10">
        <p className="tracking-wider">Join <span className="text-green-800">thousands</span> of donors and charities making a real difference.</p>
        </div>
        </div>
        
       <div className="frame relative w-full max-w-[520px] shrink-0 mt-32 sm:mt-24 md:mt-0">
          <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-10">
    <div className="font-extrabold text-xl md:text-3xl text-center px-4">Some of the Sites' active donations</div>
    <div className="relative w-full h-[260px] sm:h-[300px] md:h-[400px]">
    <CardCarousel/>
    </div>
  <div className="px-4 md:pl-20 mx-auto text-sm md:text-base text-center tracking-wider text-gray-800">From daily essentials to education and emergency <br></br>relif, see how your genrosity is creating real <br></br> change everyday.</div>
</div>
          </div>
          </div>
        <div className="bg-white leading-none overflow-hidden">
  <svg
    className="block w-full h-24"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#dcfce7"
      d="M0,96 C360,0 1080,0 1440,96 L1440,0 L0,0 Z"
    />
  </svg>
</div>
<div className="grid grid-cols-1 grid-rows-2 gap-6 md:gap-15 place-items-center px-4">
       <div className="flex items-center max-w-4xl mx-auto gap-3 md:gap-6 px-4">
  <div className="flex-1 h-0.5 bg-green-600"></div>

  <h2 className="text-xl sm:text-2xl md:text-5xl font-bold whitespace-nowrap">
    How <span className="text-green-600">Donate For All</span> works
  </h2>

  <div className="flex-1 h-0.5 bg-green-600"></div>
</div>

<button className="cursor-pointer hover:translate-y-5 transition duration-300 infinite"><div className="relative w-8 h-4 "><div className="absolute w-10 h-0.5 bg-green-600 rotate-65"></div><div className="absolute w-10 h-0.5 bg-green-600 rotate-295 ml-4"></div></div></button></div>
     </main>
    </>
  );
}