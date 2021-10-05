import { ParsedResponse, ForecastResponseData } from "./types";
import { formatDate } from "../../../app/formatDate";
import { createImageUri } from "../../../app/createImageUri";
import { apiPaths } from "../../../app/constants";

type ParseWeatherData = (data: ForecastResponseData) => ParsedResponse;

export const parseForecastData: ParseWeatherData = (data) => {
  return data.list.map((el) => ({
    type: apiPaths.forecast,
    id: el.dt,
    location: data.city.name,
    ...formatDate(el.dt),
    icon: createImageUri(el.weather[0].icon),
    description: el.weather[0].description,
    clouds: el.weather[0].main,
    temp_min: Math.round(el.main.temp_min),
    temp_max: Math.round(el.main.temp_max),
  }));
};
