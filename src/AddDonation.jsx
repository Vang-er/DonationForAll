import { useState } from "react";
import {
  ArrowLeft,
  Tag,
  MapPin,
  Calendar,
  Info,
  UploadCloud,
  User,
  Phone,
  ShieldCheck,
  Check,
  Send,
  Crosshair,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AddDonation() {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="min-h-screen bg-green-50/40 pb-16">
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-green-700 font-medium hover:text-green-800 transition mb-6"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>

        <h1 className="text-3xl md:text-4xl font-black text-gray-900">Add Donation</h1>
        <p className="text-gray-500 mt-2 mb-8">
          Share what you have and help someone in need.
        </p>

        <form className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Tag className="text-green-600" size={20} />
                <h2 className="font-bold text-lg text-gray-900">Donation Details</h2>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    What are you donating? <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Other (Select category)</option>
                    <option>Food</option>
                    <option>Clothes</option>
                    <option>Books</option>
                    <option>Medicine</option>
                  </select>

                  <div className="flex items-start gap-2 bg-green-50 border border-green-100 rounded-xl px-3 py-2.5 mt-2 text-xs text-green-800">
                    <Info size={14} className="shrink-0 mt-0.5" />
                    <p>After selecting "Other", you will be able to choose the specific category.</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Winter Jacket, Paracetamol, Math Book"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                      Quantity <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="e.g. 2"
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <select className="border border-gray-200 rounded-xl px-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>pcs</option>
                        <option>kg</option>
                        <option>box</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                      Condition <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>Select condition</option>
                      <option>New</option>
                      <option>Like new</option>
                      <option>Used - good</option>
                      <option>Used - fair</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value.slice(0, 300))}
                    maxLength={300}
                    rows={4}
                    placeholder="Describe the item, its condition, and any other details."
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <div className="text-right text-xs text-gray-400 mt-1">{description.length}/300</div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Photos <span className="text-red-500">*</span>
                  </label>
                  <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-green-300 rounded-2xl py-8 cursor-pointer hover:bg-green-50/60 transition">
                    <div className="bg-green-600 rounded-full p-2">
                      <UploadCloud className="text-white" size={20} />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">Upload clear photos of the item</span>
                    <span className="text-xs text-gray-400">PNG, JPG up to 5MB</span>
                    <input type="file" accept="image/png, image/jpeg" multiple className="hidden" />
                  </label>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2">
                    <Info size={13} />
                    Make sure the item is clearly visible
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="text-green-600" size={20} />
                <h2 className="font-bold text-lg text-gray-900">Pickup Information</h2>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Pickup Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      placeholder="Enter your address"
                      className="w-full border border-gray-200 rounded-xl pl-9 pr-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-green-700 text-sm font-medium mt-2 hover:text-green-800 transition"
                  >
                    <Crosshair size={14} />
                    Use my current location
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    City / Area <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Select your city / area</option>
                    <option>El Ganayen</option>
                    <option>El Arbaeen</option>
                    <option>El Ataqa</option>
                    <option>Faisal</option>
                    <option>Salam 1</option>
                    <option>Salam 2</option>
                    <option>El Sokhna</option>
                    <option>Mubarak Neighborhood</option>
                    <option>El Nasr</option>
                </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Available For Pickup <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="date"
                      className="w-full border border-gray-200 rounded-xl pl-9 pr-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">When can this item be picked up?</p>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Expires In <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <select className="w-full bg-white border border-gray-200 rounded-xl pl-9 pr-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>Select duration</option>
                      <option>7 days</option>
                      <option>14 days</option>
                      <option>30 days</option>
                    </select>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    How many days until the item expires? <span className="text-green-700">e.g. 7 days, 14 days, 30 days</span>
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Additional Notes <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value.slice(0, 200))}
                    maxLength={200}
                    rows={4}
                    placeholder="Any additional information for the receiver"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <div className="text-right text-xs text-gray-400 mt-1">{notes.length}/200</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-5">
              <User className="text-green-600" size={20} />
              <h2 className="font-bold text-lg text-gray-900">Your Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="tel"
                    placeholder="01xxxxxxxxx"
                    className="w-full border border-gray-200 rounded-xl pl-9 pr-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-green-50 border border-green-100 rounded-xl px-4 py-3 mt-5 text-xs text-green-800">
              <ShieldCheck size={16} className="shrink-0 mt-0.5" />
              <p>Your phone number will only be shared with interested charities or verified receivers.</p>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-100 rounded-2xl p-6 flex items-center justify-between gap-6 flex-wrap">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-green-600 rounded-full p-1">
                  <Check className="text-white" size={14} />
                </div>
                <h3 className="font-bold text-gray-900">Before you publish</h3>
              </div>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={14} />
                  Ensure the item is safe and in good condition.
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={14} />
                  Provide accurate information.
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={14} />
                  Be available during the selected pickup time.
                </li>
              </ul>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl py-3.5 flex items-center justify-center gap-2 mt-8 transition"
          >
            <Send size={18} />
            Publish Donation
          </button>

          <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mt-3">
            <ShieldCheck size={13} />
            Your information is safe and will not be shared publicly.
          </p>
        </form>
      </div>
    </div>
  );
}