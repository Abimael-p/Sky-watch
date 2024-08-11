import WeatherDetails from "./components/weatherDetails/WeatherDetails";
import FilterLocation from "./components/FilterLocation/FilterLocation";
import ShowerRain from "./components/animations/ShowerRain/ShowerRain";
import { useState } from "react";
import "./App.css";

function App() {
  const [detailWeather, setDetailWeather] = useState(null);
  const [soundOn, setSoundOn] = useState(false);
  const [animation, setAnimation] = useState("");
  const [resetAnimation, setResetAnimation] = useState(false);

  const updateWeatherDetails = (weatherDetails) => {
    setDetailWeather(weatherDetails);
  };

  const toggleSound = () => {
    setResetAnimation(true);

    setTimeout(() => {
      setResetAnimation(false);

      if (!animation || animation === 'animationReversa') {
        setAnimation('animation');
      } else if (animation === 'animation') {
        setAnimation('animationReversa');
      }
    }, 1);
    
      setSoundOn((prevState) => !prevState);
  };

  const handleSoundError = () => {
    setSoundOn(false);
  };

  return (
    <>
      <ShowerRain playSound={soundOn} onSoundError={handleSoundError} />
      <header>
        <h1 className="main__title">
          <img src="https://i.ibb.co/6BF8tHg/Skywatch-Logo.png" alt="SkyWatch App" />
        </h1>
        <div className="filter__lader">
          <FilterLocation setWeather={updateWeatherDetails} />
        </div>
        <div className="icon_sound">
        <i className='bx bx-headphone'></i>
        </div>
        <button className="btn_sound" onClick={toggleSound}>
          <div className={`box ${animation} ${resetAnimation ? 'reset-animation' : ''}`}></div>
        </button>
      </header>
      <section>
        <WeatherDetails weatherDetail={detailWeather} />
      </section>
    </>
  );
}

export default App;