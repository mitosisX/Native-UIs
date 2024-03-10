import { View, Text, ScrollView } from "react-native";
import HomeScreen from "./HomeScreen";
import GadgetsMainScreen from "./UI/Ecommerce/Gadgets/GadgetsMainScreen";
import CookingHomepage from "./UI/Cooking/CookingHomepage";
import { useFonts } from "expo-font";
import FoodHomePage from "./UI/Food1/FoodHomePage";

const Home = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  return (
    <ScrollView>
      <FoodHomePage />
    </ScrollView>
  );
};

export default Home;
