import React, { ReactElement } from "react";
import { Grid, TextField } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { apiPaths } from "../../app/constants";
import { useForecast } from "./logic/useForecast";
import Results from "./Results";
import Subtitle from "../../components/subtitle";

const Forecast = (): ReactElement => {
  const {
    handleSubmit,
    handleForecastTypeChange,
    error,
    isLoading,
    parsedData,
    setSearchPhrase,
    searchPhrase,
    forecastType,
  } = useForecast();

  return (
    <Grid container spacing={1} sx={{ alignItems: "center" }}>
      <Grid item xs={12} sm={4}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            value={searchPhrase}
            onChange={(event) => setSearchPhrase(event.target.value)}
            label="search for city"
            variant="outlined"
          />
        </form>
      </Grid>
      <Grid item xs={12} sm={8}>
        <ToggleButtonGroup
          color="primary"
          value={forecastType}
          exclusive
          onChange={handleForecastTypeChange}
        >
          <ToggleButton value={apiPaths.weather}>Current weather</ToggleButton>
          <ToggleButton value={apiPaths.forecast}>5 day forecast</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      {error && !parsedData ? (
        <Subtitle>We couldn't fetch the results for {searchPhrase}.</Subtitle>
      ) : null}
      {!parsedData && isLoading ? <Subtitle>Loading...</Subtitle> : null}
      {parsedData ? <Results data={parsedData} /> : null}
    </Grid>
  );
};

export default Forecast;
