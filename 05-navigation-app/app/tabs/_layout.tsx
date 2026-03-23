import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    // Crear los tabs que serviran para navegar entre las diferentes pantallas de la aplicación.
    // Para esto, vamos a utilizar el componente Tabs de Expo Router, que nos permite crear una navegación por pestañas de manera sencilla.
    <Tabs screenOptions={{ tabBarActiveTintColor: "purple" }}>
      {/* Cada tab se define como un componente hijo de Tabs, y su nombre se corresponde con la ruta que queremos que tenga ese tab. */}
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="star-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
