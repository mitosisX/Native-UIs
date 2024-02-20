import { StyleSheet, Text, Image, View, TextInput } from "react-native";
import GadgetColors from "../Utils/Colors";

const TopBar = () => {
  return (
    <View style={styles.topBarContainer}>
      {/* First view: settings, address, notification */}
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View>
          <Image
            source={require("../../../../../assets/gadgets/settings.png")}
            style={{
              backgroundColor: GadgetColors.green,
              borderRadius: 30,
              padding: 30,
              resizeMode: "contain",
            }}
          />
        </View>
        <View style={{ marginLeft: 20, justifyContent: "center" }}>
          <Text style={{ textAlign: "center" }}>Delivery address</Text>
          <Text
            style={{ fontWeight: "bold", fontSize: 15, textAlign: "center" }}
          >
            92 High Street, London
          </Text>
        </View>
        <View style={{ marginLeft: 20 }}>
          <Image
            source={require("../../../../../assets/gadgets/noti1.png")}
            style={{
              backgroundColor: GadgetColors.gray,
              borderRadius: 30,
              padding: 30,
            }}
          />
        </View>
      </View>

      {/* Seconds View: search */}
      <View
        style={{
          paddingHorizontal: 80,
          backgroundColor: GadgetColors.gray,
          marginTop: 15,
          borderRadius: 10,
          flexDirection: "row",
        }}
      >
        <Image source={require("../../../../../assets/gadgets/search.png")} />
        <TextInput placeholder="Search the entire shop" />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBarContainer: {
    backgroundColor: GadgetColors.white,
    height: 150,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 10,
    paddingHorizontal: 20,
  },
});
