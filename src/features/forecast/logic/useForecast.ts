import { FormEvent, MouseEvent, useMemo, useState } from "react";
import { apiPaths, units } from "../../../app/constants";
import { useAPIQuery } from "../../../hooks/useAPIQuery";
import { parseWeatherData } from "./parseWeatherData";
import { parseForecastData } from "./parseForecastData";
import { ForecastResponseData, WeatherResponseData } from "./types";

export const useForecast = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [forecastType, setForecastType] = useState<
    typeof apiPaths.weather | typeof apiPaths.forecast
  >(apiPaths.weather);

  // 1 day
  const {
    refetch: fetchWeather,
    error: errorWeather,
    data: dataWeather,
    isLoading: isLoadingWeather,
  } = useAPIQuery<WeatherResponseData>(
    [apiPaths.weather, { q: searchPhrase, units }],
    { enabled: false }
  );

  // 5 days
  const {
    refetch: fetchForecast,
    error: errorForecast,
    data: dataForecast,
    isLoading: isLoadingForecast,
  } = useAPIQuery<ForecastResponseData>(
    [apiPaths.forecast, { q: searchPhrase, units }],
    { enabled: false }
  );

  const handleApiCall = (type = forecastType) => {
    if (type === apiPaths.weather) {
      void fetchWeather();
    }
    if (type === apiPaths.forecast) {
      void fetchForecast();
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchPhrase) {
      void handleApiCall();
    }
  };
  const handleForecastTypeChange = (
    ev: MouseEvent<HTMLElement>,
    value: string
  ) => {
    if (value) {
      setForecastType(value);
    }
    if (value && searchPhrase) {
      // fetch results for the type of state that component is changing to
      handleApiCall(value);
    }
    if (!value && searchPhrase) {
      // fetch results for the current type of state if state doesn't change
      handleApiCall();
    }
  };

  const parsedData = useMemo(() => {
    if (dataWeather && forecastType === apiPaths.weather) {
      return parseWeatherData(dataWeather);
    }

    if (dataForecast && forecastType === apiPaths.forecast) {
      return parseForecastData(dataForecast);
    }
  }, [dataWeather, dataForecast, forecastType]);

  return {
    handleSubmit,
    handleForecastTypeChange,
    error: errorWeather || errorForecast,
    isLoading: isLoadingWeather || isLoadingForecast,
    parsedData,
    setSearchPhrase,
    searchPhrase,
    forecastType,
  };
};
