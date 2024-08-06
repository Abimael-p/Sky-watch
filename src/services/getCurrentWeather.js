import { getIconById } from "../utils/getIconById";
import { kelvinToFarenheit } from "../utils/kelvinToFarenheit";
import { kelvinToCelsius } from "../utils/kelvinToCelsius";
import axios from "axios";

export const getCurrentWeather = async (lat, lon) => {
  try {
    const params = {
      lat: lat,
      lon: lon,
      appid: "dd04d4b355d025d0e43863ae63ccce7e",
    };
    const res = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?",
      {
        params,
      }
    );
    const weatherInfo = {
      country: res.data.sys.country,
      city: res.data.name,
      weather: {
        main: res.data.weather[0].main,
        description: res.data.weather[0].description,
        icon: getIconById(res.data.weather[0].icon),
        icon1: res.data.weather[0].icon
      },
      temperature: {
        kelvin: res.data.main.temp,
        celsius: kelvinToCelsius(res.data.main.temp),
        farenheit: kelvinToFarenheit(res.data.main.temp),
      },
    };
   return weatherInfo;
  } catch (error) {
    console.log(error);
  }
};
