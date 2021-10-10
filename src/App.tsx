import React, { useState } from "react";
import { Container, Tabs, Tab } from "@mui/material";
import { ToastContainer } from "react-toastify";
import Forecast from "./features/forecast";
import Stations from "./features/stations";
import TabPanel from "./components/tabPanel";

import "react-toastify/dist/ReactToastify.min.css";
const App = () => {
  const [selectedTab, setSelectedTab] = useState<"forecast" | "stations">(
    "stations"
  );

  return (
    <Container maxWidth="lg">
      <header>
        <Tabs value={selectedTab} onChange={(e, val) => setSelectedTab(val)}>
          <Tab label="Weather" id="forecast" value="forecast" />
          <Tab label="My Weather Stations" id="stations" value="stations" />
        </Tabs>
        <TabPanel value={selectedTab} index="forecast">
          <Forecast />
        </TabPanel>
        <TabPanel value={selectedTab} index="stations">
          <Stations />
        </TabPanel>
      </header>
      <ToastContainer position="bottom-right" />
    </Container>
  );
};

export default App;
