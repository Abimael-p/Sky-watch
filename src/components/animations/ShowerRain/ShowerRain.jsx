import React, { useRef, useEffect } from 'react';
import { createRain, clearRain } from "../../../utils/animationsEffect/rain";
import './ShowerRain.css';

const ShowerRain = () => {
  const rainContainer = useRef(null);

  useEffect(() => {
    createRain(rainContainer.current);
    return () => clearRain(rainContainer.current);
  }, []);

  return <div ref={rainContainer} className="rain"></div>;
};

export default ShowerRain;
