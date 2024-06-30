import AgencySection from "./components/section/AgencySection";
import FacilitieSection from "./components/section/FacilitieSection";
import Footer from "./components/section/Footer";
import GallerySection from "./components/section/GallerySection";
import Header from "./components/section/Header";
import HeroSection from "./components/section/HeroSection";
import PackageSection from "./components/section/PackageSection";
import TestimonialSection from "./components/section/TestimonialSection";
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AgencySection />
      <PackageSection />
      <FacilitieSection />
      <TestimonialSection />
      <GallerySection />
      <Footer />
    </>
  );
}

export default App;
