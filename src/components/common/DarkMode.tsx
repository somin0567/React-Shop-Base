import { useEffect, useState } from "react";
import ThemeToggle from "../nav/ThemeToggle";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <ThemeToggle isDark={isDark} onToggle={() => setIsDark((prev) => !prev)} />
  );
};

export default DarkMode;
