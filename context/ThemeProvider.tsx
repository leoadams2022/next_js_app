"use client";
import React, { useContext, createContext, useState, useEffect } from "react";

interface IThemeContext {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("");

  const handelThemeChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.remove("light");
    }
  };
  useEffect(() => {
    handelThemeChange();
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
