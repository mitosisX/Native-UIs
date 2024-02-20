import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";

export default function QuickActions() {
  const [quickActionsList, setQuickActionsList] = useState([]);
  useEffect(() => {
    setQuickActionsList([
      { name: "My Favourites", image: require("../../../assets/star.png") },
      { name: "Recharge", image: require("../../../assets/phone.png") },
      { name: "Buy Bundles", image: require("../../../assets/wallet.png") },
      { name: "Send Money", image: require("../../../assets/money.png") },
      { name: "Withdraw cash", image: require("../../../assets/atm.png") },
      { name: "Bank to Wallet", image: require("../../../assets/wallet.png") },
      { name: "Pay Bills", image: require("../../../assets/receipt.png") },
      { name: "Scan & Pay", image: require("../../../assets/barcode_red.png") },
    ]);
  }, []);

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Quick Actions</Text>
        <Text style={{ color: "#3277F5" }}>View All</Text>
      </View>
      <View>
        <FlatList
          data={quickActionsList}
          horizontal={!true}
          numColumns={4}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View style={{ gap: 10, marginRight: 10 }}>
                <View style={styles.roundedAction}>
                  <Image
                    source={item.image}
                    style={{ width: 20, height: 20 }}
                  />
                </View>
                <Text>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  roundedAction: {
    // maxWidth: 30,
    justifyContent: "center",
    backgroundColor: "#FDF1F1",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    marginRight: 20,
    marginTop: 20,
  },
});
