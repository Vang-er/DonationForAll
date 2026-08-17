
import React, { useState, useEffect, useRef } from "react";

const CARDS = [
  {
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
    title: "Meal Boxes",
    tag: "Food",
  },
  {
    img: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=600&q=80",
    title: "Fresh Produce",
    tag: "Food",
  },
  {
    img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80",
    title: "Clothing",
    tag: "Essentials",
  },
  {
    img: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=600&q=80",
    title: "Daily Needs",
    tag: "Essentials",
  },
  {
    img: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&q=80",
    title: "Charity Drive",
    tag: "Impact",
  },
  {
    img: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=600&q=80",
    title: "Delivery",
    tag: "Service",
  },
];

const MOBILE_SLOTS = [
  { x: 0, y: 0, scale: 0.75, rot: 0, z: 50 },
  { x: -90, y: -35, scale: 0.4, rot: -10, z: 20 },
  { x: -70, y: 65, scale: 0.44, rot: -6, z: 25 },
  { x: 70, y: 65, scale: 0.44, rot: 6, z: 25 },
  { x: 90, y: -35, scale: 0.4, rot: 10, z: 20 },
  { x: 0, y: -75, scale: 0.35, rot: 0, z: 10 },
];

const DESKTOP_SLOTS = [
  { x: 0, y: 0, scale: 1, rot: 0, z: 50 },
  { x: -170, y: -45, scale: 0.5, rot: -10, z: 20 },
  { x: -130, y: 90, scale: 0.56, rot: -6, z: 25 },
  { x: 130, y: 90, scale: 0.56, rot: 6, z: 25 },
  { x: 170, y: -45, scale: 0.5, rot: 10, z: 20 },
  { x: 0, y: -110, scale: 0.44, rot: 0, z: 10 },
];

const ROTATE_MS = 2800; 
const TRANSITION_MS = 1500; 

export default function CardCarousel({ className = "" }) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [offset, setOffset] = useState(0);
  const timerRef = useRef(null);
  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

const slots = isMobile ? MOBILE_SLOTS : DESKTOP_SLOTS;
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setOffset((prev) => (prev + 1) % CARDS.length);
    }, ROTATE_MS);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <style>{`
        @keyframes centerFloat {
          0%   { transform: translateY(0px) rotate(0deg); }
          50%  { transform: translateY(-8px) rotate(0.6deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .center-float {
          animation: centerFloat 3.2s ease-in-out infinite;
        }
      `}</style>

      {CARDS.map((card, i) => {
        const slotIndex = (i + offset) % CARDS.length;
        const slot = slots[slotIndex];
        const isCenter = slotIndex === 0;

        return (
          <div
            key={card.title}
            className="absolute top-1/2 left-1/2 w-[130px] h-[170px] sm:w-[160px] sm:h-[210px] md:w-[175px] md:h-[225px] rounded-2xl overflow-hidden shadow-xl border-2 border-white"
            style={{
              transform: `translate(-50%, -50%) translate(${slot.x}px, ${slot.y}px) scale(${slot.scale}) rotate(${slot.rot}deg)`,
              zIndex: slot.z,
              transition: `transform ${TRANSITION_MS}ms cubic-bezier(.22,1,.36,1)`,
            }}
          >
            <div className={`w-full h-full ${isCenter ? "center-float" : ""}`}>
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

              <div
                className={`absolute bottom-2 left-2 right-2 text-white transition-opacity duration-700 ${
                  isCenter ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="text-[10px] bg-[#16a34a] px-2 py-0.5 rounded-full font-semibold">
                  {card.tag}
                </span>
                <p className="font-bold mt-1 text-xs md:text-sm">
                  {card.title}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}