import './Hero.css';
import Typewriter from 'typewriter-effect';
import Icons from '../Icons/Icons';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className='content'>
        <h1 className="center-text">Tarek Ibrahim</h1>
        <p className="center-text">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 60,
              strings: ["Hi, Welcome to my Software Engineering Portfolio 🚀"],
              pauseFor: 6000,
            }}
          />
        </p>
        <Icons />
      </div>
    </div>
  );
};

export default Hero;