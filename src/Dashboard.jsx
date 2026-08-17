import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts";
import {
  Home, Gift, Users, User, Settings, LogOut, ChevronLeft, TrendingUp, TrendingDown,
  Clock, CheckCircle2, Calendar, ChevronDown, RefreshCw, Trash2, UserPlus, Check,
  Heart, Target, Plus
} from "lucide-react";

const chartData = [
  { day: "May 6", value: 40 },
  { day: "May 7", value: 52 },
  { day: "May 8", value: 82 },
  { day: "May 9", value: 58 },
  { day: "May 10", value: 38 },
  { day: "May 11", value: 65 },
  { day: "May 12", value: 84 },
];

const pieData = [
  { name: "Food", value: 78, count: 256, color: "#1F9D55" },
  { name: "Clothes", value: 10, count: 33, color: "#3B82F6" },
  { name: "Books", value: 7, count: 23, color: "#8B5CF6" },
  { name: "Medicine", value: 5, count: 16, color: "#F59E0B" },
];

const stats = [
  { icon: Gift, iconBg: "#E7F4EC", iconColor: "#1F9D55", value: "328", label: "Total Donations", trend: "up" },
  { icon: Users, iconBg: "#EAF2FE", iconColor: "#2563EB", value: "215", label: "Donors", trend: "up" },
  { icon: User, iconBg: "#F3EDFB", iconColor: "#7C3AED", value: "142", label: "Beneficiaries", trend: "up" },
  { icon: Clock, iconBg: "#FDF1E7", iconColor: "#EA8A2A", value: "26", label: "Published Requests", trend: "down" },
  { icon: CheckCircle2, iconBg: "#E7F4EC", iconColor: "#1F9D55", value: "302", label: "Delivered", trend: "up" },
];

const donations = [
  { name: "Ahmed Mohamed", type: "Grilled Chicken", qty: "3.1 kg", location: "Al-Rehab, Cairo", status: "Available", expires: "4 days", img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=100&h=100&fit=crop" },
  { name: "Sara Mahmoud", type: "Beef Casserole Tray", qty: "2.5 kg", location: "Nasr City, Cairo", status: "Available", expires: "4 days", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=100&h=100&fit=crop" },
  { name: "Mohamed Ali", type: "Grilled Fish", qty: "1.2 kg", location: "Maadi, Cairo", status: "Available", expires: "4 days", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=100&h=100&fit=crop" },
  { name: "Norhan Saeed", type: "Rice with Meat", qty: "4.0 kg", location: "6th October, Giza", status: "Available", expires: "4 days", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=100&h=100&fit=crop" },
  { name: "Kareem Hatem", type: "Bechamel Pasta", qty: "3.6 kg", location: "El Shorouk, Cairo", status: "Available", expires: "4 days", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=100&h=100&fit=crop" },
];

const activity = [
  { icon: Plus, bg: "#E7F4EC", color: "#1F9D55", text: "New donation added by Ahmed Mohamed", time: "10 minutes ago" },
  { icon: Check, bg: "#EAF2FE", color: "#2563EB", text: "Donation delivered to Al-Amal Charity Association", time: "30 minutes ago" },
  { icon: UserPlus, bg: "#F3EDFB", color: "#7C3AED", text: "New donor registered: Sara Mahmoud", time: "1 hour ago" },
  { icon: RefreshCw, bg: "#FDF1E7", color: "#EA8A2A", text: "Donation status updated to Available", time: "2 hours ago" },
  { icon: Trash2, bg: "#FBE7E7", color: "#DC2626", text: "Donation removed by Mohamed Ali", time: "3 hours ago" },
];

const quickStats = [
  { icon: Calendar, bg: "#E7F4EC", color: "#1F9D55", label: "Avg. Daily Donations", value: "46", change: "+12% vs last week" },
  { icon: Clock, bg: "#EAF2FE", color: "#2563EB", label: "Avg. Response Time", value: "2.4 hrs", change: "-8% vs last week" },
  { icon: Target, bg: "#FDF1E7", color: "#EA8A2A", label: "Successful Delivery Rate", value: "95%", change: "+3% vs last week" },
  { icon: Heart, bg: "#FBEAF0", color: "#DB2777", label: "Beneficiary Satisfaction", value: "4.8/5", change: "+0.2 vs last week" },
];

const navItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Gift, label: "Donations" },
  { icon: User, label: "Beneficiaries" },
  { icon: Settings, label: "Settings" },
];

function StatCard({ icon: Icon, iconBg, iconColor, value, label, trend }) {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm border border-gray-100">
      <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: iconBg }}>
        <Icon size={20} color={iconColor} />
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="flex items-center gap-1.5 text-sm text-gray-500">
        <span>{label}</span>
        {trend === "up" ? (
          <TrendingUp size={14} className="text-green-600" />
        ) : (
          <TrendingDown size={14} className="text-red-500" />
        )}
        <span className="text-xs text-gray-400">this week</span>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] flex text-gray-800" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-100 flex flex-col py-6 px-4 shrink-0">
        <div className="flex items-center gap-2 px-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-green-600 flex items-center justify-center">
            <Heart size={18} color="white" fill="white" />
          </div>
          <span className="font-bold text-lg text-gray-900">Control Panel</span>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${
                item.active ? "bg-green-50 text-green-700" : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 w-full text-left">
            <LogOut size={18} />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              Welcome, Admin <span>👋</span>
            </h1>
            <p className="text-gray-500 text-sm mt-1">Here's an overview of donation activity today</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600">
              <Calendar size={16} />
              May 12, 2024
            </button>
            <div className="flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop"
                className="w-9 h-9 rounded-full object-cover"
                alt="Admin"
              />
              <div className="text-sm">
                <div className="font-semibold text-gray-900">Admin</div>
                <div className="text-gray-400 text-xs">System Admin</div>
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mb-3">
          <h2 className="text-sm font-semibold text-gray-700">At a Glance</h2>
          <p className="text-xs text-gray-400">A quick snapshot of how donations are moving through the platform this week.</p>
        </div>
        <div className="grid grid-cols-5 gap-4 mb-6">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* Middle row: table + chart */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-gray-900">Latest Donations</h3>
              <button className="flex items-center gap-1 text-sm text-green-700 font-medium">
                View All <ChevronLeft size={14} />
              </button>
            </div>
            <p className="text-xs text-gray-400 mb-4">
              Items donors have listed and made available for a charity or beneficiary to claim. The platform only displays the listing — pickup and delivery are arranged directly between the donor and the receiving party.
            </p>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 text-xs border-b border-gray-100">
                  <th className="text-left font-medium pb-3">Image</th>
                  <th className="text-left font-medium pb-3">Donor</th>
                  <th className="text-left font-medium pb-3">Type</th>
                  <th className="text-left font-medium pb-3">Qty</th>
                  <th className="text-left font-medium pb-3">Location</th>
                  <th className="text-left font-medium pb-3">Status</th>
                  <th className="text-left font-medium pb-3">Expires In</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((d) => (
                  <tr key={d.name} className="border-b border-gray-50 last:border-0">
                    <td className="py-3">
                      <img src={d.img} className="w-9 h-9 rounded-lg object-cover" alt={d.type} />
                    </td>
                    <td className="py-3 font-medium text-gray-800">{d.name}</td>
                    <td className="py-3 text-gray-600">{d.type}</td>
                    <td className="py-3 text-gray-600">{d.qty}</td>
                    <td className="py-3 text-gray-600">{d.location}</td>
                    <td className="py-3">
                      <span className="bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
                        {d.status}
                      </span>
                    </td>
                    <td className="py-3 text-red-500 font-medium">{d.expires}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-gray-900">Donation Overview</h3>
              <button className="flex items-center gap-1 text-xs text-gray-500 border border-gray-200 rounded-lg px-2 py-1">
                Last 7 days <ChevronDown size={12} />
              </button>
            </div>
            <p className="text-xs text-gray-400 mb-3">How many donations were listed each day this week.</p>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={chartData}>
                <CartesianGrid stroke="#F1F2F4" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#1F9D55" strokeWidth={2.5} dot={{ r: 3, fill: "#1F9D55" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-1">Recent Activity</h3>
            <p className="text-xs text-gray-400 mb-4">A running log of what's changed on the platform, for visibility only — the admin isn't approving these actions.</p>
            <div className="flex flex-col gap-4">
              {activity.map((a, i) => (
                <div key={i} className="flex items-center justify-between gap-3">
                  <span className="text-sm text-gray-700">{a.text}<br /><span className="text-xs text-gray-400">{a.time}</span></span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: a.bg }}>
                    <a.icon size={14} color={a.color} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-1">Distribution by Type</h3>
              <p className="text-xs text-gray-400 mb-3">Share of all listed donations by category, based on this week's totals.</p>
              <div className="flex items-center gap-4">
                <ResponsiveContainer width={110} height={110}>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" innerRadius={32} outerRadius={50} paddingAngle={2}>
                      {pieData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-col gap-2 text-sm">
                  {pieData.map((p) => (
                    <div key={p.name} className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
                      <span className="text-gray-600">{p.name}</span>
                      <span className="text-gray-400 text-xs">{p.value}% ({p.count})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-1">Quick Stats</h3>
              <p className="text-xs text-gray-400 mb-3">Overall platform performance compared with last week.</p>
              <div className="grid grid-cols-2 gap-3">
                {quickStats.map((q) => (
                  <div key={q.label} className="flex flex-col gap-1.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: q.bg }}>
                      <q.icon size={14} color={q.color} />
                    </div>
                    <div className="text-lg font-bold text-gray-900">{q.value}</div>
                    <div className="text-xs text-gray-400">{q.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}