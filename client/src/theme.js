import { createTheme } from "@material-ui/core/styles";
const theme = createTheme({
  typography: { useNextVariants: true },
  palette: {
    primary: {
      light: "#e0fbfc",
      main: "#FF4500	",
      dark: "#2e355b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#98c1d9",
      main: "#ff4081",
      dark: "#c60055",
      contrastText: "#fff",
    },
    openTitle: "#3d5a80",
    protectedTitle: "#396",
    type: "light",
  },
});
export default theme;
