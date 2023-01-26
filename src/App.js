import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import { Routes, Route, useNavigate } from 'react-router-dom';



function App() {
  return (

  <div className="text-2xl font-bold">
      <Navbar/>
      <Home/>
      <About/>
      <Work/>
      <Contact/>
      
    </div>

  );
}

export default App;
