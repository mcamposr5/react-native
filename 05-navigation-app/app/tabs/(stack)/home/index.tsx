import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  // Tan pronto la aplicación se lance, vamos a mostrar la pantalla de productos.
  //return <Redirect href="/products" />;
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        {/* Aquí vamos a mostrar un botón para cada una de las pantallas que tenemos en la aplicación. */}
        {/* router.push('/products') para navegar a la pantalla de productos */}
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/tabs/(stack)/products")}
        >
          Productos
        </CustomButton>
        <CustomButton
          className="mb-2"
          color="secondary"
          onPress={() => router.push("/tabs/(stack)/profile")}
        >
          Perfil
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="tertiary"
          onPress={() => router.push("/tabs/(stack)/settings")}
        >
          configuración
        </CustomButton>

        {/* Otra opción para navegar utilizando Link pero consumiendo el CustomButton y la propiedad asChild */}
        <Link href="/tabs/(stack)/products" asChild>
          <CustomButton variant="text-only" className="mb-10" color="primary">
            Productos
          </CustomButton>
        </Link>

        {/*<Link className="mb-5" href="/profile">
          Perfil{" "}
        </Link>
        <Link className="mb-5" href="/settings">
          Configuración{" "}
        </Link>*/}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
