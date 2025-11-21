import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import RootNavigator from "./src/navigation/RootNavigator";

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigator />
    </ThemeProvider>
  );
}
