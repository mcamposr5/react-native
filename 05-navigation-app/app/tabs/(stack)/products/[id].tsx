import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const ProductDetailScreen = () => {
  // Para obtener el id del producto que se ha pasado como parámetro en la ruta, vamos a utilizar el hook useLocalSearchParams de Expo Router.
  // Desestructuramos el id del objeto que devuelve el hook, que contiene todos los parámetros de la ruta.
  const { id } = useLocalSearchParams();

  // Reviso que el id que recibe el hook sea el mismo que el id de alguno de los productos en el array de productos.
  // Para esto, utilizo el método find del array, que devuelve el primer elemento que cumple con la condición especificada en la función de callback.
  const product = products.find((p) => p.id === id);

  //Si el producto no existe, navego de vuelta a la pantalla de productos utilizando el componente Redirect de Expo Router,
  // que redirige a la ruta especificada en su prop href.
  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="px-5 mt-2">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-work-black text-2xl">{product.price}</Text>
    </View>
  );
};

export default ProductDetailScreen;
