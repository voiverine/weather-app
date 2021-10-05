import {
  FormEvent,
  MouseEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { apiPaths } from "../../../app/constants";
import { useAPIQuery } from "../../../hooks/useAPIQuery";
import { parseWeatherData } from "./parseWeatherData";
import { ForecastResponseData, WeatherResponseData } from "./types";
import { parseForecastData } from "./parseForecastData";

export const useForecast = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [forecastType, setForecastType] = useState<
    typeof apiPaths.weather | typeof apiPaths.forecast
  >(apiPaths.weather);

  const {
    refetch: fetchWeather,
    error: errorWeather,
    data: dataWeather,
  } = useAPIQuery([apiPaths.weather, { q: searchPhrase }], { enabled: false });
  const {
    refetch: fetchForecast,
    error: errorForecast,
    data: dataForecast,
  } = useAPIQuery([apiPaths.forecast, { q: searchPhrase }], { enabled: false });

  const handleApiCall = () => {
    if (forecastType === apiPaths.weather) {
      void fetchWeather();
    }
    if (forecastType === apiPaths.forecast) {
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
    } else if (searchPhrase) {
      handleApiCall();
    }
  };

  // trigger request on change of 1-day / 5-day forecast
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    if (searchPhrase) handleApiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forecastType]);

  const parsedData = useMemo(() => {
    if (dataWeather && forecastType === apiPaths.weather) {
      return parseWeatherData(dataWeather as WeatherResponseData);
    }

    if (dataForecast && forecastType === apiPaths.forecast) {
      return parseForecastData(dataForecast as ForecastResponseData);
    }
  }, [dataWeather, dataForecast, forecastType]);

  return {
    handleSubmit,
    handleForecastTypeChange,
    error: errorWeather || errorForecast,
    parsedData,
    setSearchPhrase,
    searchPhrase,
    forecastType,
  };
};
