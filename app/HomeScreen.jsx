import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import AccountDetails from "./UI/Airtel/AccountDetails";
import SecondCard from "./UI/Airtel/SecondCard";
import FirstCard from "./UI/Airtel/FirstCard";
import HomeTopBar from "./UI/Airtel/HomeTopBar";
import QuickActions from "./UI/Airtel/QuickActions";
import Seperator from "./Components/Seperator";
import AirtelHomeScreen from "./UI/Airtel/AirtelHomeScreen";
import GadgetsMainScreen from "./UI/Ecommerce/Gadgets/GadgetsMainScreen";

export default function HomeScreen() {
  return <GadgetsMainScreen />;
}
