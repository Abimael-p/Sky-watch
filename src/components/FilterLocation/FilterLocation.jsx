import { getCurrentLocation } from "../../services/getCurrentLocation";
import { getCurrentWeather } from "../../services/getCurrentWeather";
import { useState } from "react";
import "./FilterLocation.css";

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
      <form className="container_location_search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search for city (“Examplo: Paris”)"
          value={locationCountry}
          onChange={(e) => setLocationCountry(e.target.value)}
          className="input_location"
        />
        <div className="container_btn_search">
          <button type="submit">
            <i className='bx bx-search'></i>
          </button>
        </div>
      </form>
  );
};

export default FilterLocation;
