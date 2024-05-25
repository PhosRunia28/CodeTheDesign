import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";

type HeaderProps = {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ openNav, setOpenNav }: HeaderProps) {
  return (
    <header className="relative overflow-hidden text-white">
      {/* clip path */}
      <div className="absolute inset-0 rounded-br-md bg-dark text-white lg:clip-custom-polygon"></div>
      <div className="container_section relative z-30 space-y-5 px-6 font-dm_sans lg:space-y-20 lg:px-0">
        <NavBar setOpenNav={setOpenNav} openNav={openNav} />
        <HeroSection />
      </div>
    </header>
  );
}
