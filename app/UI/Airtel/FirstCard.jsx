import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Seperator from "../../Components/Seperator";
import AccountDetails from "./AccountDetails";

export default function FirstCard() {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        width: 385,
        height: "auto",
        borderColor: "#ececec",
        borderWidth: 1,
        position: "relative",
        bottom: 50,
        borderRadius: 10,
        alignSelf: "center",
        padding: 13,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text>OMEGA MSISKA</Text>
          <Text>Prepaid - 990371338</Text>
        </View>
        <Text style={{ color: "#3277F5" }}>Manage Account</Text>
      </View>

      <Seperator />

      <View style={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <View>
          <AccountDetails
            title={"1.49"}
            value={"MWK"}
            subtitle={"Airtel Balance"}
          />
        </View>
        <View>
          <AccountDetails
            title={"0"}
            value={"Min"}
            subtitle={"Voice Balance"}
          />
        </View>
        <View>
          <AccountDetails
            title={"2.54"}
            value={"GB"}
            subtitle={"Data Balance"}
            showSep={false}
          />
        </View>
      </View>

      <Seperator marginTop={5} />

      <View style={{ flexDirection: "row", gap: 5, marginTop: 5 }}>
        <TouchableOpacity style={styles.firstCardButtonsContainer}>
          <Image
            source={require("../../../assets/wallet.png")}
            style={{ height: 20, width: 20 }}
          />
          <Text style={styles.firstCardButtons}>Buy Bundles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.firstCardButtonsContainer}>
          <Image
            source={require("../../../assets/bolt.png")}
            style={{ height: 20, width: 20 }}
          />
          <Text style={styles.firstCardButtons}>Self Recharge</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  firstCardButtonsContainer: {
    backgroundColor: "#FDF1F1",
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    // alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  firstCardButtons: { color: "#ED1B24", paddingHorizontal: 20, fontSize: 13 },
});
