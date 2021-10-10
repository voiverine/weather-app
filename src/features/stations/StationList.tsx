import React from "react";
import { useStationList } from "./logic/useStationList";
import Subtitle from "../../components/subtitle";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const StationList = () => {
  const { isError, data, isLoading, removeStation, disabled } =
    useStationList();
  const isDisabled = (id: string) => disabled.current.has(id);

  return (
    <div>
      {isError ? <Subtitle>Couldn't fetch the station list.</Subtitle> : null}
      {isLoading && !data ? <Subtitle>Loading...</Subtitle> : null}
      {data && !data.length ? <Subtitle>Add a station.</Subtitle> : null}
      {data && data.length ? (
        <>
          <TableContainer sx={{ overflowX: "auto", width: "100%" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Latitude</TableCell>
                  <TableCell>Longitude</TableCell>
                  <TableCell>Altitude</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="td" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.latitude}</TableCell>
                    <TableCell>{row.longitude}</TableCell>
                    <TableCell>{row.altitude}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => {
                          removeStation(row.id);
                        }}
                        disabled={isDisabled(row.id)}
                      >
                        X
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : null}
    </div>
  );
};

export default StationList;
