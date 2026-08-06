 import CardCarousel from "./Cards";
import { HiMiniUser, HiMiniUsers, HiMiniGift } from "react-icons/hi2";

export default function MyApp() {
  return (
    <>
      <nav className="bg-green-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

          {/* Logo */}
          <div>
            <img src="assets/logo.png" alt="Donate For All logo" />
          </div>
          <div className="text-2xl font-bold cursor-pointer">Donate For All</div>

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
            <button className="rounded-lg hover:bg-green-700 transition flex items-center gap-1 px-4 py-2">
              <HiMiniUser className="" />
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
          <div className="flex-1">
            <div className="text-5xl font-extrabold">
              Share what you have,
              <div className="text-green-700 mt-3">nourish their lives.</div>
            </div>
            <div className="max-w-100 pt-2 pb-3">
              <p>
                Donate For All connects donors with those in need.
                Together, we can reduce waste and end hunger in our community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-20 max-w-1/3">
              <button className="cursor-pointer bg-green-600 hover:bg-green-800 hover:scale-110 transition duration-300 text-white rounded-md font-bold h-12 w-40 flex items-center gap-1 px-4 py-2">
                <HiMiniGift className="text-4xl" />
                <div className="text-base">I want to donate</div>
              </button>
              <button className="cursor-pointer rounded-md font-bold h-12 border-2 border-green-800 hover:bg-green-800 hover:scale-110 hover:text-white transition duration-300 w-40 flex items-center gap-1 px-4 py-2">
                <HiMiniUsers className="text-4xl" />
                We are a charity
              </button>
            </div>
            <div className="max-w-1/4 mt-10">
              <div className="inline tracking-wider">
                Join <span className="text-green-800">thousands</span> of donors and charities making a real difference.
              </div>
            </div>
          </div>

          <div className="frame relative w-full max-w-[520px] h-[420px] md:h-[500px] shrink-0">
            <CardCarousel />
          </div>
        </div>

        <div className="frame relative w-full max-w-[520px] h-[420px] md:h-[500px] shrink-0 mx-auto mt-10">
          <div className="grid grid-rows-3 gap-35">
            <div className="font-extrabold flex justify-items-center text-3xl text-center">
              Some of the Sites' active donations
            </div>
            <CardCarousel />
            <div className="pl-20 mx-auto text-base text-center tracking-wider text-gray-800">
              From daily essentials to education and emergency <br />relif, see how your genrosity is creating real <br />change everyday.
            </div>
          </div>
        </div>

        <div className="bg-white leading-none overflow-hidden">
          <svg className="block w-full h-24" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#dcfce7" d="M0,96 C360,0 1080,0 1440,96 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="grid grid-cols-1 grid-rows-2 gap-15 place-items-center">
          <div className="flex items-center max-w-4xl mx-auto gap-6">
            <div className="flex-1 h-0.5 bg-green-600"></div>
            <h2 className="text-5xl font-bold whitespace-nowrap">
              How <span className="text-green-600">Donate For All</span> works
            </h2>
            <div className="flex-1 h-0.5 bg-green-600"></div>
          </div>

          <button className="cursor-pointer hover:translate-y-5 transition duration-300 infinite">
            <div className="relative w-8 h-4">
              <div className="absolute w-10 h-0.5 bg-green-600 rotate-65"></div>
              <div className="absolute w-10 h-0.5 bg-green-600 rotate-295 ml-4"></div>
            </div>
          </button>
        </div>
      </main>
    </>
  );
}
