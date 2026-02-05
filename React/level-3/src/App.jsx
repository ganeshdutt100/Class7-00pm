import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Demo from "./components/Demo";
import LikeButton from "./components/LikeButton";
import Navbar from "./components/Navbar";
import ThemeSwitcher from "./components/ThemeSwitcher";
import File1 from "./components/File1";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div
        className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}
      >
        <div className="h-screen">
          <h1>{darkMode ? "DarkMode" : "Light Mode"}</h1>
          <button className="bg-yellow-500" onClick={toggleTheme}>
            {darkMode ? "Light Mode" : "DarkMode"}
          </button>
          {/* <LikeButton />
          <ThemeSwitcher /> */}
          <File1 />

          <Demo />
        </div>
      </div>
    </>
  );
}

export default App;
