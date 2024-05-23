import { useState } from "react";
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
    </>
  );
}

export default App;
