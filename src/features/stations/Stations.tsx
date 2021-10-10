import React, { ReactElement } from "react";
import { Box } from "@mui/material";
import { useStations } from "./logic/useStations";
import AddStation from "./addStation";
import StationList from "./StationList";
import Button from "../../components/button";

const Stations = (): ReactElement => {
  const { isFormShown, setIsFormShown } = useStations();
  return (
    <Box>
      {isFormShown ? <AddStation /> : null}
      <Button variant="outlined" onClick={() => setIsFormShown(!isFormShown)}>
        {isFormShown ? "hide the form" : "+Add a station"}
      </Button>
      <StationList />
    </Box>
  );
};

export default Stations;
