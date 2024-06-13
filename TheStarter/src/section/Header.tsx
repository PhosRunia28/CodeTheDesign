import { useState } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "./HeroSection";
export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className="relative overflow-hidden pb-44">
      <div className="relative z-30 text-white">
        <div className="section_container pt-10">
          <NavBar openNav={openNav} setOpenNav={setOpenNav} />
        </div>
        <HeroSection />
      </div>
      {/* background */}
      <div className="absolute inset-0 bottom-0 left-1/2 z-20 origin-bottom -translate-x-1/2 scale-[5] rounded-[50%] bg-gradient-to-br from-gradient1 to-gradient2"></div>
    </header>
  );
}
