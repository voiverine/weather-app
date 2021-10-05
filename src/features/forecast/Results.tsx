import React, { ReactElement } from "react";
import { ParsedResponse } from "./logic/types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
} from "@mui/material";
import Subtitle from "../../components/subtitle/Subtitle";
import { apiPaths } from "../../app/constants";

interface Props {
  data: ParsedResponse;
}

const Results = (props: Props): ReactElement => {
  const { data } = props;

  if (data.length === 0) {
    return <Subtitle>No forecast for that query.</Subtitle>;
  }

  const resultType =
    data[0].type === apiPaths.weather ? "Current weather" : "5 day forecast";

  return (
    <>
      <Subtitle>
        {resultType} for {data[0].location}
      </Subtitle>
      <TableContainer sx={{ overflowX: "auto", width: "100%" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell>High</TableCell>
              <TableCell>Low</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.date} {row.isToday ? <Chip label="Today" /> : null}
                </TableCell>
                <TableCell>
                  <Avatar
                    sx={{ width: "50px" }}
                    alt={row.description}
                    title={row.description}
                    src={row.icon}
                  />
                </TableCell>
                <TableCell>{row.clouds}</TableCell>
                <TableCell>{row.temp_min} C</TableCell>
                <TableCell>{row.temp_max} C</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Results;
