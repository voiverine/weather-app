import { apiPaths } from "../../../app/constants";

export type Weather = {
  main: string;
  icon: string;
  description: string;
  id: number;
}[];
export type Temperature = {
  temp_max: number;
  temp_min: number;
};

export type WeatherResponseData = {
  weather: Weather;
  main: Temperature;
  dt: number;
  name: string;
};

export type ForecastResponseData = {
  city: { name: string };
  list: {
    dt: number;
    main: Temperature;
    weather: Weather;
  }[];
};

export type ParsedResponse = {
  type: typeof apiPaths.weather | typeof apiPaths.forecast;
  id: number;
  location: string;
  date: string;
  isToday?: boolean;
  icon: string;
  description: string;
  clouds: string;
  temp_max: number;
  temp_min: number;
}[];
