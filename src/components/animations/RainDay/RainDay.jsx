import { useRef, useEffect } from "react";
import { createRain, clearRain } from "../../../utils/animationsEffect/rain";
import rainMp3 from "../../../assets/sounds/rainMp3.mp3";
import SoundPlayer from "../../common/SoundPlayer/SoundsPlayer.jsx";
import "./RainDay.css";

const RainDay = ({ playSound, onSoundError }) => {
  const rainContainer = useRef(null);
  const soundPlayerRef = useRef(null);

  useEffect(() => {
    createRain(rainContainer.current);
    return () => clearRain(rainContainer.current);
  }, []);

  useEffect(() => {
    if (playSound && soundPlayerRef.current) {
      soundPlayerRef.current.play();
    } else if (soundPlayerRef.current) {
      soundPlayerRef.current.pause();
    }
  }, [playSound]);

  return ( 
    <>
      <div ref={rainContainer} className="rain"></div>
      <SoundPlayer ref={soundPlayerRef} soundFile={rainMp3} loop={true} onError={onSoundError} />
    </>
  );
};

export default RainDay;

