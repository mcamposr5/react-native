import { Redirect } from "expo-router";

const App = () => {
  //return <Redirect href="/(stack)/home" />;
  return <Redirect href="/tabs/home" />;
  /*return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text className="text-3xl font-work-black">Hello, World!</Text>

        <Link href="/products">Products</Link>
      </View>
    </SafeAreaView>
  );*/
};

export default App;
