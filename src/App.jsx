import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import About from "./components/About";
import Programs from "./components/Programs";
import Strategies from "./components/Strategies";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="bg-[#FAFAF5]">
      <Preloader />
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Programs />
      <Strategies />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;