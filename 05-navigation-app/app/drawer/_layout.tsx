import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import React from "react";
import CustomDrawer from "../../components/shared/CustomDrawer";

const DrawerLayout = () => {
  return (
    <Drawer
      // Al momento de pasarlo de esta manera drawerContent={CustomDrawer}
      // estamos pasando por referencia las properties del componente CustomDrawer,
      // lo que nos permite personalizar el contenido del drawer.
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0,0,0,0.4)",
        drawerInactiveTintColor: "indigo",
        headerShadowVisible: false,

        sceneStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: "User",
          title: "Usuario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: "Schedule",
          title: "Horario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
