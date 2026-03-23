import { Platform, View } from "react-native";

import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { globalStyles } from "@/styles/global-styles";
import * as NavigationBar from "expo-navigation-bar";

const isAndroid = Platform.OS === "android";
if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("black");
}

const Rootlayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.backgound}>
      <Slot />
      <StatusBar style="light" />
    </View>
  );
};

export default Rootlayout;
