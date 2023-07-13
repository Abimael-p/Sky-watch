import { useState } from "react";
import { getCurrentLocation } from "../../services/getCurrentLocation";
import "./FilterLocation.css";
import { getCurrentWeather } from "../../services/getCurrentWeather";

const FilterLocation = ({ setWeather }) => {
  const [locationCountry, setLocationCountry] = useState("");

  const handleClick = async () => {
    const location = await getCurrentLocation(locationCountry);
    const lat = location.lat;
    const lon = location.lon;
    const weatherLocation = await getCurrentWeather(lat, lon);
    setWeather(weatherLocation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
  };

  return (
    <div className="container__filter_search">
      <form className="container_location_search" onSubmit={handleSubmit}>
        <input
          type="text"
          value={locationCountry}
          onChange={(e) => setLocationCountry(e.target.value)}
          className="input_location"
        />
        <div className="container_btn_search">
          <button type="submit">
            <i>search</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterLocation;
