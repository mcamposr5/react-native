import { Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
  return (
    // Los estilos y ajustes aplicados a Stack se van a aplicar a todas las pantallas que estén dentro de Stack, es decir, a home, products, profile y settings.
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      {/* Lo estilos aplicados a nivel de Stack.Scrren afectan solo esa patanlla */}
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Configuración",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
