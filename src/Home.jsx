import { useState } from "react";
import CardCarousel from "./Cards"; 
import { HiMiniUser,HiMiniUsers,HiMiniHome,HiMiniGift } from "react-icons/hi2";
import logo from "./assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useRef , useEffect } from "react";
import { PiSelectionInverseBold } from "react-icons/pi";
import { LuPackage,LuMapPin,LuHandHeart, LuHeart, LuTrees} from "react-icons/lu";
import { ArrowBigDown, ArrowBigLeft, ArrowBigRight, ChevronRight } from "lucide-react";
export function AnimatedBoxes(){
  const sectionRef = useRef(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const boxes = [
    {
      title: "Box 1",
      description: "First box",
      color: "bg-green-500",
      content:<div className="flex flex-col gap-2 h-1/2">
        <div className="bg-green-100 rounded-full items-center mx-auto w-50 h-50 flex justify-center">
          <LuPackage className="text-green-700 text-7xl"/>
          </div>
          <div className="tracking-wide font-bold justify-center flex text-2xl">1.Donate Food,Books and much more!</div><div className="text-gray-700 text-md flex justify-center items-center mx-auto">Share extra food safely and easily.</div>
          </div>,
    },
    {
      title: "Box 2",
      description: "Second box",
      color: "bg-green-500",
      content:<div className="flex flex-col gap-2 h-1/2">
        <div className="bg-green-100 w-50 h-50 flex justify-center items-center mx-auto rounded-full">
          <LuMapPin className="text-green-700 text-7xl"/>
          </div>
          <div className="tracking-wide font-bold justify-center flex text-2xl">2.We connect</div><div className="text-gray-700 text-md flex justify-center items-center mx-auto">We match your donation with nearby charities.</div>
          </div>,
    },
    {
      title: "Box 3",
      description: "third box",
      color: "bg-green-500",
      content:<div className="flex flex-col gap-2 h-1/2">
        <div className="bg-green-100 rounded-full  w-50 h-50 items-center mx-auto flex justify-center">
          <LuHandHeart className="text-green-700 text-7xl"/>
          </div>
          <div className="tracking-wide font-bold justify-center flex text-2xl">3.Help & Impact</div><div className="text-gray-700 text-md flex justify-center items-center mx-auto">Food reaches those in need and creates a real impact.</div>
          </div>,
    },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([Entry]) => {
        if (Entry.isIntersecting){
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );
    if (sectionRef.current){
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className="w-full pb-20 px-6"><div className="flex flex-col md:flex-row items-center justify-center gap-6">
      {boxes.map((box,index) => (<div key={index} className="flex items-center gap-6" >
        <AnimatedBox index={index} sectionVisible={sectionVisible}>{box.content}</AnimatedBox> {index < boxes.length - 1 && (
          <div className="hidden md:block text-3xl font-bold mx-auto "><ChevronRight/></div>
        )}
        </div>
        ))}
        </div></section>
  );
}
function AnimatedBox({children, index, sectionVisible}){
  const boxRef = useRef(null);
  const [visible,setVisible] = useState(false);
  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (isDesktop){
      if(sectionVisible){
        const timer = setTimeout(() => {
          setVisible(true);
        },index * 400);
        return () => clearTimeout(timer);
      }
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting){
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );
    if (boxRef.current){
      observer.observe(boxRef.current);
    }
    return () => observer.disconnect();
  },[sectionVisible,index]);
  return (
    <div ref={boxRef} className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-x-0": "opacity-0 -translate-x-20"}`}>{children}</div>
  );
}
  export default function Home() {

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
  return (
    <>
      <main className="">
        <div className="pt-8 px-4 md:pt-15 md:pl-20 lg:pl-50 bg-green-100 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-1/2">
          <div className="">
        <div className="text-3xl md:text-5xl font-extrabold">Share what you have,<br></br><div className="text-green-700 mt-3">nourish their lives.</div></div>
        <div className="max-w-full md:max-w-100 pt-2 pb-3">
            <p>Donate For All connects donors with those in need.
            Together, we can reduce waste and end hunger in our community.</p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 md:gap-10">
            <button className="cursor-pointer bg-green-600 hover:bg-green-800 hover:scale-110 transition duration-300 text-white rounded-md font-bold h-12 w-40 flex items-center gap-1 px-4 py-2 xs:w-full lg:w-40 xs:justify-center" onClick={() => navigate("/signup")}><HiMiniGift className="text-4xl"></HiMiniGift><div  className="text-base">I want to donate</div></button>
            <button className="cursor-pointer  rounded-md font-bold h-12 border-2 border-green-800 hover:bg-green-800 hover:scale-110 hover:text-white transition duration-300 w-40 flex items-center gap-1 px-4 py-2 xs:w-full lg:w-40 xs:justify-center" onClick={() => navigate("/signup")}><HiMiniUsers className="text-4xl"></HiMiniUsers>We are a charity</button>
        </div>
        <div className="max-w-full md:max-w-sm mt-10">
        <p className="tracking-wider">Join <span className="text-green-800">thousands</span> of donors and charities making a real difference.</p>
        </div>
        </div>
        
       <div className="frame relative w-full max-w-130 shrink-0 mt-10 xs:mt-0 sm:mt-24 md:mt-0 bg-linear-to-br from-green-100 via-green-500 to-cyan-200 rounded-2xl">
          <div className="flex flex-col items-center gap-0 sm:gap-1 md:gap-2">
    <div className="font-extrabold text-xl md:text-3xl text-center px-4 font-poppins mt-2">Some of the Sites' active donations</div>
    <div className="relative w-full h-65 sm:h-75 md:h-100">
    <CardCarousel className="shadow-2xl"/>
    </div>
  <div className="flex px-4 md:pl-20 text-sm md:text-base text-center tracking-wider text-gray-800 justify-center mx-auto">From daily essentials to education and emergency <br></br>relif, see how your genrosity is creating real <br></br> change everyday.</div>
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
<div id="how-it-works" className="grid grid-cols-1 grid-rows-2 gap-6 md:gap-15 place-items-center px-4">
       <div className="flex items-center max-w-4xl mx-auto gap-3 md:gap-6 px-4">
  <div className="flex-1 h-0.5 bg-green-600"></div>

  <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-5xl font-bold whitespace-nowrap">
    How <span className="text-green-600">Donate For All</span> works
  </h2>

  <div className="flex-1 h-0.5 bg-green-600"></div>
</div>

<button className="cursor-pointer transition animate-bounce p-5 flex items-center justify-center mx-auto"><div className="relative w-8 h-4 "><div className="absolute w-10 h-0.5 bg-green-600 rotate-65"></div><div className="absolute w-10 h-0.5 bg-green-600 rotate-295 ml-4"></div></div></button></div>
        <div className="flex flex-col">
          <div className="gird grid-rows-3 gap-2 mt-10">
<div className="flex text-green-700 bg-green-100 font-bold justify-center px-3 py-2 rounded-2xl w-fit mx-auto">HOW IT WORKS</div></div>
<div className="flex justify-center mx-auto mt-3 my-auto items-center h-10 mb-3"><div className="font-bold inline text-4xl">Simple steps, </div><div className="text-green-700 font-bold inline text-4xl">real impact.</div></div>
<div><AnimatedBoxes/></div>
</div>
<div id="about" className="w-full bg-gray-50 py-20 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* Left: Text content */}
    <div>
      <div className="bg-green-100 text-green-700 rounded-full font-bold w-fit px-4 py-1 text-sm mb-4">
        About us
      </div>

      <h2 className="text-3xl md:text-4xl font-black mb-6">
        We are <span className="text-green-700">Donate For All</span>
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
        Donate For All is a community-driven platform that connects people who want to donate food, books, clothes and even medicine with those who need it most.
      </p>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
        We believe that no good food should go to waste and that together, we can build a world with zero hunger.
      </p>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col items-start gap-2">
          <div className="rounded-full bg-green-100 p-3 w-fit">
            <HiMiniUsers className="text-green-700 text-xl" />
          </div>
          <div className="font-bold text-lg">Community</div>
          <div className="text-sm text-gray-500">Built on trust and kindness.</div>
        </div>

        <div className="flex flex-col items-start gap-2">
          <div className="rounded-full bg-green-100 p-3 w-fit">
            <LuTrees className="text-green-700 text-xl" />
          </div>
          <div className="font-bold text-lg">Sustainability</div>
          <div className="text-sm text-gray-500">Reducing waste, protecting our planet.</div>
        </div>
      </div>
    </div>

    {/* Right: Visual card */}
    <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center gap-6">
      <div className="rounded-full bg-green-100 p-6">
        <LuHeart className="text-green-700 text-6xl" />
      </div>
      <div className="text-center">
        <div className="text-4xl font-black text-green-700 mb-1">1,000+</div>
        <div className="text-gray-500">Donations shared this month</div>
      </div>
      <div className="w-full h-px bg-gray-200"></div>
      <div className="grid grid-cols-2 gap-6 w-full text-center">
        <div>
          <div className="text-2xl font-black text-green-700">500+</div>
          <div className="text-sm text-gray-500">Active donors</div>
        </div>
        <div>
          <div className="text-2xl font-black text-green-700">50+</div>
          <div className="text-sm text-gray-500">Partner charities</div>
        </div>
      </div>
    </div>

  </div>
</div>
      <footer className="w-full bg-green-950 text-white">

  <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

      {/* Brand */}
      <div className="lg:col-span-1">

        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-black">
            Donate <span className="text-green-400">For All</span>
          </span>
        </div>

        <p className="text-green-100/80 leading-relaxed text-sm max-w-xs">
          Connecting good food with good people to build a hunger-free
          community.
        </p>

        {/* Socials */}
        <div className="flex gap-3 mt-6">

          <a
            href="#"
            className="w-9 h-9 rounded-full border border-green-300/40
                       flex items-center justify-center
                       hover:bg-green-600 transition"
          >
            f
          </a>

          <a
            href="#"
            className="w-9 h-9 rounded-full border border-green-300/40
                       flex items-center justify-center
                       hover:bg-green-600 transition"
          >
            ◎
          </a>

          <a
            href="#"
            className="w-9 h-9 rounded-full border border-green-300/40
                       flex items-center justify-center
                       hover:bg-green-600 transition"
          >
            𝕏
          </a>

          <a
            href="#"
            className="w-9 h-9 rounded-full border border-green-300/40
                       flex items-center justify-center
                       hover:bg-green-600 transition"
          >
            in
          </a>

        </div>
      </div>


      {/* Quick Links */}
      <div>
        <h3 className="font-bold text-lg mb-5">
          Quick Links
        </h3>

        <div className="flex flex-col gap-3 text-sm text-green-100/80">

          <a href="#" className="hover:text-white transition">
            Home
          </a>

          <a href="#about" className="hover:text-white transition">
            About Us
          </a>

          <a href="#how-it-works" className="hover:text-white transition">
            How It Works
          </a>

          <a href="#impact" className="hover:text-white transition">
            Impact
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </div>
      </div>


      {/* Donors */}
      <div>
        <h3 className="font-bold text-lg mb-5">
          For Donors
        </h3>

        <div className="flex flex-col gap-3 text-sm text-green-100/80">

          <a href="#" className="hover:text-white transition">
            Donate Food
          </a>

          <a href="#" className="hover:text-white transition">
            How to Donate
          </a>

          <a href="#" className="hover:text-white transition">
            Food Guidelines
          </a>

          <a href="#" className="hover:text-white transition">
            FAQs
          </a>

        </div>
      </div>


      {/* Charities */}
      <div>
        <h3 className="font-bold text-lg mb-5">
          For Charities
        </h3>

        <div className="flex flex-col gap-3 text-sm text-green-100/80">

          <a href="Signup" className="hover:text-white transition">
            Register Charity
          </a>

          <a href="#" className="hover:text-white transition">
            Resources
          </a>

          <a href="#" className="hover:text-white transition">
            Partnerships
          </a>

          <a href="#" className="hover:text-white transition">
            FAQs
          </a>

        </div>
      </div>


      {/* Contact */}
      <div id="contact">

        <h3 className="font-bold text-lg mb-5">
          Get in Touch
        </h3>

        <div className="flex flex-col gap-4 text-sm text-green-100/80">

          <div>
            📍 Suez, Egypt
          </div>

          <div>
            ✉️ hello@donatforall.com
          </div>

          <div>
            📞 +20 123 456 7890
          </div>

        </div>

      </div>

    </div>


    {/* Divider */}
    <div className="border-t border-green-800 my-10"></div>


    {/* Bottom */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-green-200/70">

      <p>
        © 2026 donat for all. All rights reserved.
      </p>

      <div className="flex gap-6">

        <a href="#" className="hover:text-white transition">
          Privacy Policy
        </a>

        <a href="#" className="hover:text-white transition">
          Terms of Service
        </a>

      </div>

    </div>

  </div>

</footer>
     </main>
    </>
  );
}