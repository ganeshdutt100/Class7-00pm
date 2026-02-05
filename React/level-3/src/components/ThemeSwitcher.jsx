import React, { useState } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}
    >
      <div className="h-screen">
        <h1>{darkMode ? "DarkMode" : "Light Mode"}</h1>
        <button className="bg-yellow-500" onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "DarkMode"}
        </button>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi
          culpa itaque dolore? Cumque nesciunt distinctio, ipsa consequuntur
          dolore enim adipisci, ratione iste perferendis nemo, a veniam
          molestias velit dolor.
        </p>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
