import WeatherDetails from "./components/weatherDetails/WeatherDetails";
import FilterLocation from "./components/FilterLocation/FilterLocation";
import ShowerRain from "./components/animations/ShowerRain/ShowerRain";
import { useState } from "react";
import "./App.css";

function App() {
  const [detailWeather, setDetailWeather] = useState(null);

  const updateWeatherDetails = (weatherDetails) => {
    setDetailWeather(weatherDetails);
  };

  return (
    <>
      <ShowerRain />
      <header>
        <h1 className="main__title">
          <img src="https://i.ibb.co/6BF8tHg/Skywatch-Logo.png" alt="SkyWatch App" />
        </h1>
        <div className="filter__lader" >
          <FilterLocation setWeather={updateWeatherDetails} />
        </div>
      </header>
      <section>
        <WeatherDetails weatherDetail={detailWeather} />
      </section>
    </>
  );
}

export default App;
