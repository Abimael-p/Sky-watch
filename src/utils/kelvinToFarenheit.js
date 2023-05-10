import { kelvinToCelsius } from "./kelvinToCelsius";

export const kelvinToFarenheit = (kelvinToFarenheit) => {
  const celsius = kelvinToCelsius(kelvinToFarenheit);
  const conversion_Fahrenheit = 9 / 5;
  const offset = 32;

  return celsius * conversion_Fahrenheit + offset;
};
