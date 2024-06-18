import AboutUs from "./components/section/AboutUs";
import Blogs from "./components/section/Blogs";
import CardAllinOne from "./components/section/CardAllinOne";
import Companies from "./components/section/Companies";
import Features from "./components/section/Features";
import Footer from "./components/section/Footer";
import Header from "./components/section/Header";
import Integration from "./components/section/Integration";
import Testimonials from "./components/section/Testimonials";
import WhatYouCanDo from "./components/section/WhatYouCanDo";

function App() {
  return (
    <>
      <Header />
      <Companies />
      <CardAllinOne />
      <AboutUs />
      <WhatYouCanDo />
      <Features />
      <Integration />
      <Testimonials />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
