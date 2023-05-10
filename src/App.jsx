import { useEffect, useState } from "react";
import { getCoordinates } from "./services/getCoordinates";
import { getCurrentWeather } from "./services/getCurrentWeather";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [isCelsius, setisCelsius] = useState(true);

  useEffect(() => {
    const loadWeather = async () => {
      const coordinates = await getCoordinates();
      if (coordinates) {
        const weatherData = await getCurrentWeather(
          coordinates.latitude,
          coordinates.longitude
        );
        setWeather(weatherData);
      }
    };
    loadWeather();
  }, []);

  return (
    <>
      <header>
        <h1 className="main__title">Sky Watch</h1> 
      </header>
      {weather ? (
        <>
          <article>
            <section className="weather__information">
              <div className="container__weather">
                <p className="temperature__weather" id="text__color">
                  {isCelsius
                    ? weather.temperature.celsius.toFixed(0)
                    : weather.temperature.farenheit.toFixed(0)}{" "}
                  °{isCelsius ? "C" : "F"}
                </p>
                <div className="icon__container">
                  <img className="icon__img"
                    src={weather.weather.icon}
                    alt={weather.weather.description}
                  />
                </div>
              </div>
              <div className="info__description">
                <div>
                  <h2>{weather.weather.main}</h2>
                  <p>{weather.weather.description}</p>
                </div>
                <p className="country__current" id="text__color">
                  {weather.city},{weather.country}
                </p>
              </div>
            </section>
          </article>
          <div className="button__degree">
            <button
              className="button__click"
              onClick={() => setisCelsius(!isCelsius)}
            >
              change °{isCelsius ? "F" : "C"}
            </button>
          </div>
        </>
      ) : (
        <div className="loading__weather">
          <p>loading weather</p>
        </div>
      )}
    </>
  );
}

export default App;
