import "./Hero.css";
import Typewriter from "typewriter-effect";
import Icons from "../Icons/Icons";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="content">
        <h1 className="center-text">Tarek Ibrahim</h1>
        <div className="center-text typewriter-text">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 60,
              strings: [
                "Hi, welcome to my software engineering portfolio ",
                "Welcome to the highlight of my journey!",
                "Step inside my portfolio—no popcorn required ",
              ],
              pauseFor: 6000,
            }}
          />
        </div>
        <Icons />
      </div>
    </div>
  );
};

export default Hero;
