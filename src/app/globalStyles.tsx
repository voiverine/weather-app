import { GlobalStyles as GlobalStylesComponent } from "@mui/material";

const GlobalStyles = () => {
  return (
    <GlobalStylesComponent
      styles={{
        html: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          height: "100%",
          width: "100%",
        },
        "*, *::before, *::after": {
          boxSizing: "inherit",
        },
        body: {
          height: "100%",
          width: "100%",
          margin: 0,
          padding: 0,
        },
        "#root": {
          height: "100%",
          width: "100%",
        },
      }}
    />
  );
};

export default GlobalStyles;
