import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  Calendar,
  Camera,
  Pencil,
  ShieldCheck,
  Lock,
  Globe,
  Sun,
  Moon,
  Bell,
  LogOut,
} from "lucide-react";
import { useSettings } from "./SettingsContext";

const translations = {
  en: {
    title: "My Profile",
    subtitle: "Manage your personal information and account settings.",
    changePhoto: "Change Photo",
    donor: "Donor",
    personalInfo: "Personal Information",
    editInfo: "Edit Information",
    save: "Save",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    dob: "Date of Birth",
    gender: "Gender",
    country: "Country",
    city: "City",
    address: "Address",
    accountInfo: "Account Information",
    accountType: "Account Type",
    memberSince: "Member Since",
    accountStatus: "Account Status",
    active: "Active",
    lastLogin: "Last Login",
    security: "Security",
    password: "Password",
    changePassword: "Change Password",
    preferences: "Preferences",
    language: "Language",
    changeLanguage: "Change Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    notifications: "Notifications",
    managePreferences: "Manage Preferences",
    logout: "Logout",
  },
  ar: {
    title: "الملف الشخصي",
    subtitle: "إدارة بياناتك الشخصية وإعدادات الحساب.",
    changePhoto: "تغيير الصورة",
    donor: "متبرع",
    personalInfo: "البيانات الشخصية",
    editInfo: "تعديل البيانات",
    save: "حفظ",
    fullName: "الاسم بالكامل",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    dob: "تاريخ الميلاد",
    gender: "النوع",
    country: "الدولة",
    city: "المدينة",
    address: "العنوان",
    accountInfo: "بيانات الحساب",
    accountType: "نوع الحساب",
    memberSince: "عضو منذ",
    accountStatus: "حالة الحساب",
    active: "نشط",
    lastLogin: "آخر دخول",
    security: "الأمان",
    password: "كلمة المرور",
    changePassword: "تغيير كلمة المرور",
    preferences: "التفضيلات",
    language: "اللغة",
    changeLanguage: "تغيير اللغة",
    theme: "المظهر",
    light: "فاتح",
    dark: "داكن",
    notifications: "الإشعارات",
    managePreferences: "إدارة التفضيلات",
    logout: "تسجيل الخروج",
  },
};

export default function Profile() {
  const { language, setLanguage, theme, setTheme } = useSettings();
  const t = translations[language];

  const [editing, setEditing] = useState(false);
  const [fullName, setFullName] = useState("Marwan Yehia Mohammed Farag");
  const [phone, setPhone] = useState("012 3456 7890");
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10 px-4 transition-colors">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">{t.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1 mb-8">{t.subtitle}</p>

        {/* Header card */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <User className="text-green-700 dark:text-green-400" size={40} />
            </div>
            <button className="flex items-center gap-1.5 border border-green-600 text-green-700 dark:text-green-400 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/30 transition">
              <Camera size={14} />
              {t.changePhoto}
            </button>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{fullName}</h2>
            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400 text-xs font-semibold px-3 py-1 rounded-full mt-2 mb-3">
              {t.donor}
            </span>
            <div className="flex flex-col gap-1.5 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={14} /> {phone}
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} /> marwanyehia10@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} /> {t.memberSince}: May 16, 2024
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <User className="text-green-600" size={18} />
              <h3 className="font-bold text-gray-900 dark:text-white">{t.personalInfo}</h3>
            </div>
            <button
              onClick={() => setEditing(!editing)}
              className="flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-200"
            >
              <Pencil size={14} />
              {editing ? t.save : t.editInfo}
            </button>
          </div>

          <div className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
            <Row label={t.fullName}>
              {editing ? (
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              ) : (
                fullName
              )}
            </Row>
            <Row label={t.email}>marwanyehia10@gmail.com</Row>
            <Row label={t.phone}>
              {editing ? (
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              ) : (
                phone
              )}
            </Row>
            <Row label={t.dob}>May 3, 2010</Row>
            <Row label={t.gender}>Male</Row>
            <Row label={t.country}>Egypt</Row>
            <Row label={t.city}>Suez</Row>
            <Row label={t.address}>Al Salam Military, Suez, Egypt</Row>
          </div>
        </div>

        {/* Account Information */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="text-green-600" size={18} />
            <h3 className="font-bold text-gray-900 dark:text-white">{t.accountInfo}</h3>
          </div>
          <div className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
            <Row label={t.accountType}>{t.donor}</Row>
            <Row label={t.memberSince}>May 16, 2024</Row>
            <Row label={t.accountStatus}>
              <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
                {t.active}
              </span>
            </Row>
            <Row label={t.lastLogin}>May 18, 2024 - 10:30 AM</Row>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Lock className="text-green-600" size={18} />
            <h3 className="font-bold text-gray-900 dark:text-white">{t.security}</h3>
          </div>
          <Row label={t.password}>**********</Row>
          <button className="text-green-700 dark:text-green-400 text-sm font-medium mt-3 hover:underline">
            {t.changePassword}
          </button>
        </div>

        {/* Preferences */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="text-green-600" size={18} />
            <h3 className="font-bold text-gray-900 dark:text-white">{t.preferences}</h3>
          </div>

          <div className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
            {/* Language */}
            <div className="py-3 flex items-center justify-between relative">
              <div>
                <div className="text-gray-500 dark:text-gray-400 text-xs mb-0.5">{t.language}</div>
                <div className="text-gray-900 dark:text-white">{language === "ar" ? "العربية" : "English"}</div>
              </div>
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-200"
                >
                  <Globe size={14} />
                  {t.changeLanguage}
                </button>
                {langMenuOpen && (
                  <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden z-10">
                    <button
                      onClick={() => { setLanguage("en"); setLangMenuOpen(false); }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                    >
                      English
                    </button>
                    <button
                      onClick={() => { setLanguage("ar"); setLangMenuOpen(false); }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                    >
                      العربية
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Theme */}
            <div className="py-3 flex items-center justify-between">
              <div>
                <div className="text-gray-500 dark:text-gray-400 text-xs mb-0.5">{t.theme}</div>
                <div className="text-gray-900 dark:text-white">{theme === "dark" ? t.dark : t.light}</div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setTheme("light")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition ${
                    theme === "light"
                      ? "bg-green-50 border-green-600 text-green-700"
                      : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <Sun size={14} />
                  {t.light}
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition ${
                    theme === "dark"
                      ? "bg-green-50 border-green-600 text-green-700"
                      : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <Moon size={14} />
                  {t.dark}
                </button>
              </div>
            </div>

            {/* Notifications */}
            <div className="py-3 flex items-center justify-between">
              <div>
                <div className="text-gray-500 dark:text-gray-400 text-xs mb-0.5">{t.notifications}</div>
                <div className="text-gray-900 dark:text-white">Email and SMS</div>
              </div>
              <button className="flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-200">
                <Bell size={14} />
                {t.managePreferences}
              </button>
            </div>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 border border-red-200 text-red-600 font-semibold rounded-xl py-3 hover:bg-red-50 dark:hover:bg-red-950 transition">
          <LogOut size={18} />
          {t.logout}
        </button>
      </div>
    </div>
  );
}

function Row({ label, children }) {
  return (
    <div className="py-3 flex items-center justify-between">
      <span className="text-gray-500 dark:text-gray-400">{label}</span>
      <span className="text-gray-900 dark:text-white font-medium">{children}</span>
    </div>
  );
}