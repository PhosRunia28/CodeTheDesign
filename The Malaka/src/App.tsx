import { useState } from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
function App() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="relative overflow-hidden  text-white">
      {/* clip path */}
      <div className="absolute inset-0 rounded-br-md bg-dark text-white lg:clip-custom-polygon"></div>
      <div className="relative z-30 mx-auto w-full max-w-5xl space-y-5 px-6 font-dm_sans lg:space-y-20 lg:px-0">
        <NavBar setOpenNav={setOpenNav} openNav={openNav} />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
