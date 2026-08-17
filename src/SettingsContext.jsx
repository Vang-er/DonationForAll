import { createContext, useContext, useState, useEffect } from "react";

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem("df_language") || "en");
  const [theme, setTheme] = useState(() => localStorage.getItem("df_theme") || "light");
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("df_logged_in") === "true");

  useEffect(() => {
    localStorage.setItem("df_logged_in", isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("df_language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  useEffect(() => {
    localStorage.setItem("df_theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <SettingsContext.Provider
      value={{
        language,
        theme,
        setLanguage,
        setTheme,
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}