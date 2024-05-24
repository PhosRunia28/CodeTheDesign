import { useState } from "react";
import CarouselItem from "./components/CarouselItem";
import AuthorSection from "./sections/AuthorSection";
import BenefitSection from "./sections/BenefitSection";
import CardPriceSection from "./sections/CardPriceSection";
import CardSection from "./sections/CardSection";
import Header from "./sections/Header";
import PengantarSection from "./sections/PengantarSection";

function App() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <Header setOpenNav={setOpenNav} openNav={openNav} />
      <CardSection />
      <PengantarSection />
      <BenefitSection />
      <CardPriceSection />
      <AuthorSection />
    </>
  );
}

export default App;
