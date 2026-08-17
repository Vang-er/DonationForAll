import { useState } from "react";
import {
  Heart,
  User,
  Bell,
  MapPin,
  Clock,
  Plus,
  LayoutGrid,
  UtensilsCrossed,
  Shirt,
  BookOpen,
  Pill,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: "all", label: "All", icon: LayoutGrid },
  { id: "food", label: "Food", icon: UtensilsCrossed },
  { id: "clothes", label: "Clothes", icon: Shirt },
  { id: "books", label: "Books", icon: BookOpen },
  { id: "medicine", label: "Medicine", icon: Pill },
];

const donations = [
  { id: 1, name: "Grilled Fish", location: "Maadi, Cairo", qty: "1.2 kg", expires: "4 days", category: "Food", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop" },
  { id: 2, name: "Beef Casserole Tray", location: "Nasr City, Cairo", qty: "2.5 kg", expires: "4 days", category: "Food", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" },
  { id: 3, name: "Grilled Chicken", location: "Al-Rehab, Cairo", qty: "3.1 kg", expires: "4 days", category: "Food", img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop" },
  { id: 4, name: "Rice with Meat", location: "6th October, Giza", qty: "4.0 kg", expires: "4 days", category: "Food", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop" },
  { id: 5, name: "Fried Fish", location: "Mohandessin, Giza", qty: "2.7 kg", expires: "4 days", category: "Food", img: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&h=300&fit=crop" },
  { id: 6, name: "Bechamel Pasta", location: "El Shorouk, Cairo", qty: "3.6 kg", expires: "4 days", category: "Food", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop" },
  { id: 7, name: "Grilled Chicken", location: "Helwan Gardens, Cairo", qty: "2.0 kg", expires: "4 days", category: "Food", img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop" },
  { id: 8, name: "Meat with Vegetables", location: "Maadi, Cairo", qty: "2.8 kg", expires: "4 days", category: "Food", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" },
  { id: 9, name: "Lasagna", location: "Sheikh Zayed, Giza", qty: "3.2 kg", expires: "4 days", category: "Food", img: "https://images.unsplash.com/photo-1619895092538-128341789043?w=400&h=300&fit=crop" },
];

export default function AllDonations() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredDonations =
    activeCategory === "all"
      ? donations
      : donations.filter((d) => d.category.toLowerCase() === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center">
          <Heart className="text-white" size={20} fill="white" />
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
            <Bell className="text-gray-600" size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition">
            <User className="text-white" size={18} />
          </button>
        </div>
      </div>

      <div className="px-6 pb-24 flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-60 shrink-0">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <h2 className="font-semibold text-gray-800 mb-3">Choose Donation Type</h2>
            <div className="flex flex-col gap-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition text-left ${
                    activeCategory === cat.id
                      ? "bg-green-50 text-green-700"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <cat.icon size={18} />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-6 text-sm text-gray-700 leading-relaxed">
            <Info className="text-blue-500 shrink-0 mt-0.5" size={18} />
            <p>
              <span className="font-bold text-gray-900">
                This platform is a link between donors, charities, and beneficiaries only.
              </span>{" "}
              All responsibility for coordinating, collecting, and delivering a donation lies with the charity organization and the person receiving it — the platform does not manage or guarantee the exchange. The admin does not review or approve incoming requests; the admin can only remove a request once it has been published.
            </p>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">All Donations</h1>
          <p className="text-gray-500 mt-1 mb-6">
            Browse available donations and help those around you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDonations.map((d) => (
              <div
                key={d.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className="relative">
                  <img src={d.img} alt={d.name} className="w-full h-44 object-cover" />
                  <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {d.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{d.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                    <MapPin className="text-gray-400" size={14} />
                    {d.location}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{d.qty}</span>
                    <span className="flex items-center gap-1 text-red-500 font-medium">
                      <Clock size={14} />
                      Expires in {d.expires}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <button
        onClick={() => navigate("/add-donation")}
        className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white rounded-full pl-4 pr-5 py-3 flex items-center gap-2 shadow-lg font-semibold text-sm transition"
      >
        <Plus size={18} />
        Donate Now
      </button>
    </div>
  );
}