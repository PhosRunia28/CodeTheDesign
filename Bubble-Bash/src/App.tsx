import Footer from "./components/pages/Footer";
import SectionContact from "./components/pages/SectionContact";
import SectionHeading from "./components/pages/SectionHeading";
import SectionHero from "./components/pages/SectionHero";
import SectionPortolioAndClient from "./components/pages/SectionPortolioAndClient";
import SectionServices from "./components/pages/SectionServices";
function App() {
  return (
    <>
      <SectionHeading />
      <SectionHero />
      <SectionServices />
      <SectionPortolioAndClient />
      <SectionContact />
      <Footer />
    </>
  );
}

export default App;
