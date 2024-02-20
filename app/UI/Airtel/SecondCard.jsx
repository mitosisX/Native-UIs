import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function SecondCard() {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        width: 385,
        height: 70,
        borderColor: "#ececec",
        borderWidth: 1,
        position: "relative",
        bottom: 30,
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
        }}
      >
        <View>
          <Text style={{ color: "#ED1B24", fontWeight: "bold" }}>
            Airtel Money
          </Text>
          <Text style={{ color: "#ED1B24", fontWeight: "bold" }}>
            MWK{" "}
            <Text style={{ color: "black", fontWeight: "bold" }}>
              XXXXXXXXXX
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderColor: "black",
            borderWidth: 2,
            padding: 7,
            paddingHorizontal: 30,
            borderRadius: 19,
            alignSelf: "baseline",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>View Balance</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
