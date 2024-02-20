import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Seperator({ marginTop = 15 }) {
  return (
    <View
      style={{
        marginTop,
        borderBottomColor: "#CCCCCC",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 1,
      }}
    ></View>
  );
}
