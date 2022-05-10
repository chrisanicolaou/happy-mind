import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: "#96c5e0",
    accent: "#C8A7AE",
    background: "#f6f6f6",
    text: "black",
  },
  animation: {
    scale: 1.0,
  },
};
export const darkTheme = {
  ...DefaultTheme,
  roundness: 10,
  dark: true,
  mode: "exact",
  colors: {
    ...DefaultTheme.colors,
    error: "#975E6A",
    background: "#312F2F",
    primary: "#8FAACC",
    placeholder: "white",
    text: "white",
  },
  animation: {
    scale: 1.0,
  },
};
