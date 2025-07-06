import { useRef, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import videoBg from './assets/videoback1.mp4' // moreopts
import Projects from "./Components/Projects/Projects.jsx";
import Work from "./Components/Work/Work.jsx";
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
    <div className="container" style={{ position: "relative", minHeight: "100vh" }}>
      <video
        ref={videoRef}
        src={videoBg}
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
          filter: "brightness(0.4)"
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
