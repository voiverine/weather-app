import React, { FunctionComponent } from "react";
import { Box, Grid, TextField } from "@mui/material";
import { useAddStation } from "./logic/useAddStation";
import Button from "../../components/button";

const AddStation: FunctionComponent = () => {
  const { formik } = useAddStation();

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1} sx={{ alignItems: "center" }}>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              id="latitude"
              name="latitude"
              label="Latitude"
              type="number"
              value={formik.values.latitude}
              onChange={formik.handleChange}
              error={formik.touched.latitude && Boolean(formik.errors.latitude)}
              helperText={formik.touched.latitude && formik.errors.latitude}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              id="longitude"
              name="longitude"
              label="Longitude"
              type="number"
              value={formik.values.longitude}
              onChange={formik.handleChange}
              error={
                formik.touched.longitude && Boolean(formik.errors.longitude)
              }
              helperText={formik.touched.longitude && formik.errors.longitude}
            />
          </Grid>{" "}
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              id="altitude"
              name="altitude"
              label="Altitude"
              type="number"
              value={formik.values.altitude}
              onChange={formik.handleChange}
              error={formik.touched.altitude && Boolean(formik.errors.altitude)}
              helperText={formik.touched.altitude && formik.errors.altitude}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Button type="submit" variant="outlined">
            Add
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddStation;
