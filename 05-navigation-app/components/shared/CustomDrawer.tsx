import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";

// Con DrawerContentComponentProps podemos tipar las propiedades que recibirá nuestro componente CustomDrawer,
// lo que nos permite acceder a las propiedades del drawer y personalizar su contenido.
const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    // Dentro de DrawerContentScrollView vamos a esparcir las props de esta manera {...props}  que vienen de DrawerContentComponentProps,
    // lo que nos permite acceder a las propiedades del drawer y personalizar su contenido.
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-primary font-work-black text-3xl">MC</Text>
        </View>
      </View>

      {/*  <DrawerItemList {...props} /> */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
