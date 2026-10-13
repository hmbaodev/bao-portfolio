import { RiSunLine, RiMoonLine } from "@remixicon/react";
import { useTheme } from "../../context/ThemeContext";

const ToggleMode = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      className="cursor-pointer fixed right-3 top-3 z-50 flex size-12 items-center justify-center rounded-full border-2 border-black text-black transition-colors hover:bg-[#CC3266] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CC3266]"
    >
      {isDark ? (
        <RiSunLine size={24} aria-hidden="true" />
      ) : (
        <RiMoonLine size={24} aria-hidden="true" />
      )}
    </button>
  );
};

export default ToggleMode;
