import { useState } from "react";
import Manfaat2Book from "./components/Manfaat2Book";
import ManfaatBook from "./components/ManfaatBook";
import Prantinjau from "./components/Prantinjau";
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
      <section className="bg-lightBlue ">
        <div className="mx-auto w-full max-w-5xl space-y-20 overflow-hidden px-6 pb-24 pt-24 font-dm_sans lg:px-0">
          {/* book 1 */}
          <ManfaatBook />
          {/* book 2 */}
          <Manfaat2Book />
          {/* book3 */}
          <Prantinjau />
        </div>
      </section>
    </>
  );
}

export default App;
