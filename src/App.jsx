import { useRef, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import videoBg from "./assets/videoback1.mp4"; // moreopts
import Projects from "./Components/Projects/Projects.jsx";
import Work from "./Components/Work/Work.jsx";
import Volunteering from "./Components/Volunteering/Volunteering.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="container">
      <video
        ref={videoRef}
        src={videoBg}
        autoPlay
        loop
        muted
        style={{ filter: "brightness(0.4)" }}
      />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Work />
      <Volunteering />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
