import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Strategies from "./components/Strategies";
import StatsBar from "./components/StatsBar";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [siteData, setSiteData] = useState(null);

  useEffect(() => {
    fetch('/content/site.json')
      .then(res => res.json())
      .then(data => setSiteData(data))
      .catch(() => setSiteData(null));
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero data={siteData?.hero} />
      <StatsBar data={siteData?.stats} />
      <About data={siteData?.about} vmg={siteData?.vmg} />
      <Programs data={siteData?.programs} />
      <Strategies data={siteData?.strategies} />
      <Team data={siteData?.team} staff={siteData?.core_staff} />
      <Gallery data={siteData?.gallery} />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}