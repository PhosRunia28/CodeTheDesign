import Header from "./components/section/Header";
import HeroSection from "./components/section/HeroSection";
function App() {
  return (
    <div>
      <div className="relative mb-10 overflow-hidden">
        <Header />
        <HeroSection />
        {/* background */}
        <div className="absolute inset-0 z-20 h-full w-full scale-y-125 rounded-bl-[4rem] rounded-br-[5rem] bg-secondary sm:ml-2 sm:h-[67%] sm:skew-x-1 sm:skew-y-[10deg]"></div>
        <div className="absolute inset-0 z-10 h-full w-full rounded-bl-[4rem] rounded-br-[5rem] bg-primary sm:h-[77%] sm:skew-y-[10deg]"></div>
      </div>
    </div>
  );
}

export default App;
