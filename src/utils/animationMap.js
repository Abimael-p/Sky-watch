import ClearSkyDay from "./components/animations/ClearSkyDay";
import ClearSkyNight from "./components/animations/ClearSkyNight";
import FewCloudsDay from "./components/animations/FewCloudsDay";
import FewCloudsNight from "./components/animations/FewCloudsNight";
import ScatteredClouds from "./components/animations/ScatteredClouds";
import BrokenClouds from "./components/animations/BrokenClouds";
import ShowerRain from "./components/animations/ShowerRain";
import RainDay from "./components/animations/RainDay";
import RainNight from "./components/animations/RainNight";
import Thunderstorm from "./components/animations/Thunderstorm";
import Snow from "./components/animations/Snow";
import Mist from "./components/animations/Mist";

export const animationMap = {
  "01d": ClearSkyDay,
  "01n": ClearSkyNight,
  "02d": FewCloudsDay,
  "02n": FewCloudsNight,
  "03d": ScatteredClouds,
  "03n": ScatteredClouds,
  "04d": BrokenClouds,
  "04n": BrokenClouds,
  "09d": ShowerRain,
  "09n": ShowerRain,
  "10d": RainDay,
  "10n": RainNight,
  "11d": Thunderstorm,
  "11n": Thunderstorm,
  "13d": Snow,
  "13n": Snow,
  "50d": Mist,
  "50n": Mist
};
