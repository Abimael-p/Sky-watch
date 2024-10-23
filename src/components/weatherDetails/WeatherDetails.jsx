import { useEffect, useState } from "react";
import { getCoordinates } from "../../services/getCoordinates";
import { getCurrentWeather } from "../../services/getCurrentWeather";
import LoadingWeather from "../loadingWeather/loadingWeather";
import "./WeatherDetails.css";

const WeatherDetails = ({ weatherDetail }) => {
  const [weather, setWeather] = useState(null);
  const [isCelsius, setisCelsius] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleGetLocation = async () => {
    setLoading(true);

    const coordinates = await getCoordinates();
    if (coordinates) {
      const weatherData = await getCurrentWeather(
        coordinates.latitude,
        coordinates.longitude
      );
      setWeather(weatherData);
      setLoading(false)
    } else {
      console.log("Error al obtener las coordenadas");
      setWeather(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (weatherDetail) {
      setLoading(true);
      setWeather(weatherDetail);
      setLoading(false);
    } else {
      handleGetLocation();
    }
  }, [weatherDetail]);

  if (loading) {
    return <div className="loading__weather">
      <LoadingWeather />
    </div>;
  }

  return (
    <div className="info__contents">
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
                <img
                  src={weather.weather.icon}
                  alt={weather.weather.description}
                />
              </div>
            </div>
            <div className="info__description">
              <p className="country__current" id="text__color">
                {weather.city}, {weather.country}
              </p>
              <div className="main__descrption">
                <h2>{weather.weather.main}</h2>
                <p>{weather.weather.description}</p>
              </div>
            </div>
          </section>
          <div className="button__degree">
            <button
              onClick={() => setisCelsius(!isCelsius)}
            >
              change °{isCelsius ? "F" : "C"}
            </button>
          </div>
        </article>
      </>
    </div>
  );
};

export default WeatherDetails;
