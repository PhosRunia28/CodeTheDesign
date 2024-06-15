import NavBar from "../ui/NavBar";
import HeroSection from "./HeroSection";

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-primary/20 pb-8 md:rounded-b-[50%_20%] md:pb-0 lg:rounded-b-[90%_60%]">
      <NavBar />
      <HeroSection />
    </header>
  );
}
