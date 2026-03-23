import { products } from "@/store/products.store";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";

const ProductsScreen = () => {
  return (
    // Para mostrar la lista de productos, vamos a utilizar un FlatList, que es un componente optimizado para mostrar listas largas de datos.
    // El FlatList recibe como prop data el array de productos y una función renderItem que se encarga de renderizar cada elemento de la lista.
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        // KeyExtractor es una función que recibe un elemento de la lista y devuelve una clave única para ese elemento,
        // lo cual ayuda a React a identificar cada elemento de manera eficiente.
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="">{item.description}</Text>

            <View className="flex flex-row justify-between mt-2">
              <Text className="font-work-black">{item.price}</Text>
              <Link
                href={`/(stack)/products/${item.id}`}
                className="text-primary"
              >
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
