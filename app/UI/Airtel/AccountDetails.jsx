import { View, Text, StyleSheet } from "react-native";

export default function AccountDetails({
  title,
  value,
  subtitle,
  showSep = true,
}) {
  return (
    <View style={{ padding: 5, flexDirection: "row" }}>
      <View>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <Text style={{ color: "#ED1B24", fontWeight: "bold" }}>{value}</Text>
        <Text style={{ color: "#B9B9B9" }}>{subtitle}</Text>
      </View>
      {/* Separator */}
      {showSep && (
        <View
          style={{
            height: "100%",
            width: 1,
            backgroundColor: "#CCCCCC",
            marginLeft: 15,
          }}
        ></View>
      )}
    </View>
  );
}
