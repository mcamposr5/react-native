import React, { useEffect } from "react";

import { Slot, SplashScreen } from "expo-router";

import { useFonts } from "expo-font";

import "./global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  // Si no hay error y tampoco tengo las fuentes entonces no muesto nada
  if (!fontsLoaded && !error) return null;

  // Si ya tengo las fuentes o si hay un error entonces muestro el contenido de la app
  return <Slot />;
  //return <Stack />;
};

export default RootLayout;
