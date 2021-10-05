import { unstable_createMuiStrictModeTheme as createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
    ].join(","),
    body1: {
      lineHeight: 1.2,
    },
    body2: {
      textAlign: "left",
    },
    h2: {
      fontSize: "1.2rem",
      fontWeight: 500,
      textAlign: "left",
    },
    h3: {
      fontSize: "1.1rem",
      textAlign: "left",
      marginBottom: "0.2rem",
    },
  },
});
