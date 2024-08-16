import { useRef, useEffect } from "react";
import { createRain, clearRain } from "../../../utils/animationsEffect/rain";
import rainMp3 from "../../../assets/sounds/rainMp3.mp3";
import SoundPlayer from "../../common/SoundPlayer/SoundsPlayer.jsx";
import "./ShowerRain.css";

const ShowerRain = ({ playSound, onSoundError }) => {
  const rainContainer = useRef(null);
  const soundPlayerRef = useRef(null);
  const lightningRef = useRef(null);

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

  useEffect(() => {
    const triggerLightning = () => {
      if (lightningRef.current) {
        lightningRef.current.classList.add("active");
        setTimeout(() => {
          lightningRef.current.classList.remove("active");
        }, 500); // Duración del destello
      }
    };

    const lightningInterval = setInterval(() => {
      if (Math.random() > 0.8) { // 20% de probabilidad de rayo
        triggerLightning();
      }
    }, Math.random() * 5000 + 2000); // Intervalo entre 2 y 7 segundos

    return () => clearInterval(lightningInterval);
  }, []);

  return (
    <>
      <div ref={rainContainer} className="rain"></div>
      <div ref={lightningRef} className="lightning-flash"></div>
      <SoundPlayer ref={soundPlayerRef} soundFile={rainMp3} loop={true} onError={onSoundError} />
    </>
  );
};

export default ShowerRain;