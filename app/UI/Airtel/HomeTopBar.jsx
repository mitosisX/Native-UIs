import { View, Image } from "react-native";
import React from "react";

export default function HomeTopBar() {
  return (
    <View style={{ marginHorizontal: 30, marginVertical: 15 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Image
            style={{ width: 90, height: 30, resizeMode: "contain" }}
            source={require("../../../assets/app.png")}
          />
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../../../assets/barcode.png")}
          />
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../../../assets/notification.png")}
          />
        </View>
      </View>
    </View>
  );
}
