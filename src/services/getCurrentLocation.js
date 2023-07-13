import axios from "axios";

export const getCurrentLocation = async (Location) => {
  try {
    const APi_key = "9ac2a988081041569709787e53e8f054"
    const res = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=q=URI-ENCODED-${Location}&key=${APi_key}`);
    const locationInfo = {
      lat: res.data.results[0].geometry.lat,
      lon: res.data.results[0].geometry.lng
    };
    return locationInfo;
  } catch (error) {
    console.log(error);
  }
};
