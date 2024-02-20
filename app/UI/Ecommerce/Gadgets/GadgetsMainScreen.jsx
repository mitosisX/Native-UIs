import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import React from "react";
import GadgetColors from "./Utils/Colors";
import TopBar from "./Components/TopBar";

const height = Dimensions.get("window").height;

const GadgetsMainScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={GadgetColors.white} />
      <ScrollView>
        <TopBar />
      </ScrollView>
    </View>
  );
};

export default GadgetsMainScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GadgetColors.gray,
    height,
  },
});
