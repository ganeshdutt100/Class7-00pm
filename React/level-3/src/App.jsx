import React, { useState } from "react";
import "./App.css";
import UseEffect2 from "./components/Hooks/UseEffect2";
import CardsAPI from "./components/Hooks/CardsAPI";
import PropsD1 from "./components/propsDrilling/PropsD1";
import CA1 from "./components/ContextAPI/CA1";
import UserContext from "./context/UserContext";
// import Cards from "./components/Cards";
// import Demo from "./components/Demo";
// import LikeButton from "./components/Hooks/LikeButton";
// import Navbar from "./components/Navbar";
// import ThemeSwitcher from "./components/ThemeSwitcher";
// import File1 from "./components/File1";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  // const toggleTheme = () => {
  //   setDarkMode(!darkMode);
  // };
  const profile = {
    name: "Kartik",
    course: "FullStack",
  };
  return (
    <>
      <UserContext.Provider value={profile}>
        <CA1 />
      </UserContext.Provider>

      {/* <PropsD1 title="class7:15pm" /> */}
      {/* <CardsAPI /> */}
      {/* <UseEffect2 /> */}

      {/* <div
        className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}
      >
        <div className="h-screen">
          <h1>{darkMode ? "DarkMode" : "Light Mode"}</h1>
          <button className="bg-yellow-500" onClick={toggleTheme}>
            {darkMode ? "Light Mode" : "DarkMode"}
          </button>
          <LikeButton />
          <ThemeSwitcher />
          <File1 />

          <Demo />
        </div>
      </div> */}
    </>
  );
}

export default App;

//create context (container )
//Provider
//consumer
