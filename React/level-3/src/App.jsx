import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

function App() {
  let para1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur quis quia debitis doloremque accusantium molestias labore nam";
  let imgURL = "https://i.ibb.co/Q3rW2zz7/Screenshot-2025-12-23-182455.png";

  let imgURL2 = "https://i.ibb.co/pj7Jwd8L/Screenshot-2026-01-25-131433.png";
  return (
    <>
      <Navbar logo="MBR_GYM" btn="Entry" />
      <Navbar logo="WebGyaan" btn="Follow" />
      <div>
        <Cards title="Ganesh Dutt" details={para1} imgURL={imgURL} />
        <Cards title="Sanjay Dutt" details={para1} imgURL={imgURL2} />
        <Cards title="Krishna Dutt" details={para1} imgURL={imgURL} />
      </div>
    </>
  );
}

export default App;
