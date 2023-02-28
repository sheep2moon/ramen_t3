import { useTheme } from "next-themes";
import React from "react";
import { MoonIcon, SunIcon } from "../icons";
import IconButton from "../ui/IconButton";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <div className="">
      <IconButton onClick={toggleTheme}>
        {theme === "light" && <SunIcon className="h-5 w-5 " />}
        {theme === "dark" && <MoonIcon className="h-5 w-5" />}
      </IconButton>
    </div>
  );
};

export default ThemeToggle;
