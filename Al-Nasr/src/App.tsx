// import {
//   ArrowLeft,
//   ArrowRight,
//   Facebook,
//   Instagram,
//   Menu,
//   Package,
//   Youtube,
// } from "lucide-react";

import AgencySection from "./components/section/AgencySection";
import FacilitieSection from "./components/section/FacilitieSection";
import Header from "./components/section/Header";
import HeroSection from "./components/section/HeroSection";
import PackageSection from "./components/section/PackageSection";
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AgencySection />
      <PackageSection />
      <FacilitieSection />
    </>
  );
}

export default App;
