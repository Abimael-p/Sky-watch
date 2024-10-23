import axios from "axios";

export const getCurrentLocation = async (Location) => {
  try {
    const APi_key = "02942da5bb1f4e599efedf0ecbc1838c"
    const res = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${Location}&key=${APi_key}`);
    const locationInfo = {
      lat: res.data.results[0].geometry.lat,
      lon: res.data.results[0].geometry.lng
    };
    
    return locationInfo;
  } catch (error) {
    console.log(error);
  }
};
