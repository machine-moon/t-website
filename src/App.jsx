import { useRef, useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import videoBg from "./assets/output.mp4"; // moreopts
import Projects from "./Components/Projects/Projects.jsx";
import Work from "./Components/Work/Work.jsx";
import Volunteering from "./Components/Volunteering/Volunteering.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent.toLowerCase(),
        );
      setIsMobile(isMobileDevice);
    };

    checkMobile();

    // Listen for any user interaction to enable autoplay on mobile
    const handleUserInteraction = () => {
      setUserInteracted(true);
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };

    if (isMobile) {
      document.addEventListener("touchstart", handleUserInteraction, {
        passive: true,
      });
      document.addEventListener("click", handleUserInteraction);
      document.addEventListener("keydown", handleUserInteraction);
    }

    return () => {
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, [isMobile]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = async () => {
      if (typeof video.playbackRate !== "undefined") {
        video.playbackRate = 0.5;
      }
      if (typeof video.setAttribute === "function") {
        video.setAttribute("data-loaded", "true");
      }

      // Try to play video automatically
      if (!isMobile) {
        try {
          await video.play();
          setVideoPlaying(true);
        } catch (error) {
          console.warn("Autoplay failed:", error);
          setVideoPlaying(false);
        }
      } else if (userInteracted) {
        // On mobile, try to play after user interaction
        try {
          await video.play();
          setVideoPlaying(true);
        } catch (error) {
          console.warn("Mobile autoplay failed:", error);
          setVideoPlaying(false);
        }
      }
    };

    const handleLoadStart = () => {
      if (typeof video.currentTime !== "undefined") {
        video.currentTime = 0;
      }
    };

    const handlePlay = () => {
      setVideoPlaying(true);
    };

    const handlePause = () => {
      setVideoPlaying(false);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadstart", handleLoadStart);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    if (
      typeof video.load === "function" &&
      !process.env.NODE_ENV?.includes("test")
    ) {
      try {
        video.load();
      } catch (error) {
        console.warn("Video load failed:", error);
      }
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadstart", handleLoadStart);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, [isMobile, userInteracted]);

  // Intersection Observer for mobile autoplay after user interaction
  useEffect(() => {
    if (!isMobile || !userInteracted || videoPlaying) return;

    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting && !videoPlaying) {
            try {
              await video.play();
              setVideoPlaying(true);
            } catch (error) {
              console.warn("Intersection observer autoplay failed:", error);
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [isMobile, userInteracted, videoPlaying]);

  // Handle page visibility changes to resume video when returning to tab
  useEffect(() => {
    const handleVisibilityChange = async () => {
      const video = videoRef.current;
      if (!video) return;

      if (!document.hidden && video.paused) {
        // Page became visible and video is paused
        try {
          await video.play();
          setVideoPlaying(true);
        } catch (error) {
          console.warn(
            "Failed to resume video after visibility change:",
            error,
          );
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleVideoClick = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
        setVideoPlaying(true);
      } else {
        video.pause();
        setVideoPlaying(false);
      }
    } catch (error) {
      console.warn("Video play/pause failed:", error);
    }
  };

  return (
    <div className="container">
      <div
        style={{
          position: "relative",
          cursor: isMobile && !videoPlaying ? "pointer" : "default",
        }}
        onClick={isMobile && !videoPlaying ? handleVideoClick : undefined}
      >
        <video
          ref={videoRef}
          src={videoBg}
          autoPlay={!isMobile}
          loop
          muted
          playsInline
          preload="auto"
          style={{ filter: "brightness(0.4)" }}
          webkit-playsinline="true"
        />
        {isMobile && !videoPlaying && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "white",
              padding: "20px 30px",
              borderRadius: "50px",
              fontSize: "18px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            <span style={{ fontSize: "24px" }}>▶</span>
            Tap to play video
          </div>
        )}
      </div>
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
