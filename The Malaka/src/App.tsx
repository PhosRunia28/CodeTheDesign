import { useState } from "react";
import CarouselItem from "./components/CarouselItem";
import TitleWithBadge from "./components/TitleWithBadge";
import AuthorSection from "./sections/AuthorSection";
import BenefitSection from "./sections/BenefitSection";
import BuySection from "./sections/BuySection";
import CardPriceSection from "./sections/CardPriceSection";
import CardSection from "./sections/CardSection";
import CarouselSection from "./sections/CarouselSection";
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
      <CarouselSection />
      <BuySection />
    </>
  );
}

export default App;
