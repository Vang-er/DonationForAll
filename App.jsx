import { useState } from "react"; 
import CardCarousel from "./Cards";
export default function MyApp() {
  return (
    <>
      <nav className="bg-green-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

          {/* Logo */}
          <div className="text-2xl font-bold cursor-pointer">
            Donate For All
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
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

          {/* Right Side */}
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Log in
            </button>

            <button className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get started
            </button>
          </div>

        </div>
      </nav>

      <main className="">
       <div className="pt-15 pl-50 pr-10 bg-green-100 flex items-center justify-between gap-10">
       <div className="flex-1">        <div className="text-5xl font-extrabold">Share what you have,<br></br><div className="text-green-700 mt-3">nourish their lives.</div></div>
       <div className="max-w-100 pt-2 pb-3">
            <p>Donate For All connects donors with those in need.
            Together, we can reduce waste and end hunger in our community.</p>
        </div>
        <div className="grid grid-cols-2 gap-10 max-w-1/4">
            <button className="cursor-pointer bg-green-600 hover:bg-green-800 text-white rounded-md font-bold h-12">I want to donate</button>
            <button className="cursor-pointer  rounded-md font-bold h-12 border-2 border-green-800 hover:bg-green-800">We are a charity</button>
        </div>
        <div className="">
            <img></img> <p>Join <div className="text-green-800">thounds</div></p>
        </div>
        </div>
         <div className="frame relative w-full max-w-[520px] h-[420px] md:h-[500px] shrink-0">
         <Cards/>
         </div>
        </div>
      </main>
    </>
  );
}
