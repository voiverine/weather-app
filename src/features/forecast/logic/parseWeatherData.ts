import { ParsedResponse, WeatherResponseData } from "./types";
import { formatDate } from "../../../app/formatDate";
import { createImageUri } from "../../../app/createImageUri";
import { apiPaths } from "../../../app/constants";

type ParseWeatherData = (data: WeatherResponseData) => ParsedResponse;

export const parseWeatherData: ParseWeatherData = (data) => {
  return [
    {
      type: apiPaths.weather,
      id: data.dt,
      location: data.name,
      ...formatDate(data.dt),
      icon: createImageUri(data.weather[0].icon),
      description: data.weather[0].description,
      clouds: data.weather[0].main,
      temp_min: Math.round(data.main.temp_min),
      temp_max: Math.round(data.main.temp_max),
    },
  ];
};
