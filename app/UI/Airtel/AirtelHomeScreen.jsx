import { StyleSheet, StatusBar, View } from "react-native";
import React from "react";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import QuickActions from "./QuickActions";
import HomeTopBar from "./HomeTopBar";

const AirtelHomeScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor={"#CB161B"} />
      <View style={{ backgroundColor: "#ED1B24", height: 110 }}>
        <HomeTopBar />
      </View>

      <FirstCard />
      <SecondCard />

      <View style={{ paddingHorizontal: 20 }}>
        <QuickActions />
      </View>
    </View>
  );
};

export default AirtelHomeScreen;

const styles = StyleSheet.create({});
