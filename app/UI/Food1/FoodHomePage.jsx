import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  categories,
  foods,
  restraunts,
} from "../Ecommerce/Gadgets/Utils/FoodData1";
import ImageBlurShadow from "react-native-image-blur-shadow";

const FoodHomePage = () => {
  return (
    <View style={{ padding: 20, backgroundColor: "#FCFCFC" }}>
      {/* Top bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../../../assets/food1/menu.png")}
            style={{ height: 30, width: 30 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Poppins-Bold",
          }}
        >
          Search Food
        </Text>
        <TouchableOpacity>
          <Image
            source={require("../../../assets/cooking/avatar.jpg")}
            style={{ height: 30, width: 30, borderRadius: 9 }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={{ fontFamily: "Poppins-Light", fontSize: 30 }}>
          {"Find The "}
          <Text style={{ fontFamily: "Poppins-ExtraBold", fontSize: 30 }}>
            Best
          </Text>
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-ExtraBold",
            fontSize: 30,
            marginTop: -10,
          }}
        >
          Food
          <Text style={{ fontFamily: "Poppins-Light", fontSize: 30 }}>
            {" "}
            Around You
          </Text>
        </Text>
      </View>

      {/* Search bar */}
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          gap: 10,
          marginTop: 20,
          alignContent: "center",
        }}
      >
        <View
          style={{
            paddingHorizontal: 10,
            backgroundColor: "#F9F9F9",
            padding: 10,
            borderRadius: 19,
            flexDirection: "row",
            flex: 1,
          }}
        >
          {/* <Image
            source={require("../../../assets/cooking/search.png")}
            style={{ width: 25, height: 25 }}
          /> */}
          <TextInput
            placeholder={"Healthy Food"}
            style={{ fontFamily: "Poppins-Medium", flex: 1, marginLeft: 10 }}
          />
        </View>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              padding: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 20,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 10,
              borderRadius: 9,
            }}
          >
            <Image
              source={require("../../../assets/cooking/search.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 40 }}
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={{ marginLeft: 5 }}>
              <View
                style={{
                  backgroundColor: index == 0 ? "#FFBC30" : "#f6f6f6",
                  borderRadius: 50,
                  padding: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "flex-start",
                }}
              >
                <View
                  style={{
                    padding: 5,
                    backgroundColor: "white",
                    alignSelf: "flex-start",
                    borderRadius: 50,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                  />
                </View>
                <Text
                  style={{
                    color: index == 0 ? "white" : "black",
                    fontFamily: "Poppins-Medium",
                    marginLeft: 5,
                    paddingRight: 10,
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      {/* Food list */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 40 }}
        data={foods}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                marginLeft: 10,
                padding: 8,
                backgroundColor: "#fff",
                borderRadius: 19,
                shadowColor: "#a29f9f",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.17,
                shadowRadius: 3.05,
                elevation: 4,
              }}
            >
              <ImageBlurShadow
                source={item.image}
                // style={{ borderRadius: 9, width: 290, height: 250 }}
                imageWidth={140}
                imageHeight={140}
                imageBorderRadius={19}
                shadowOffset={30}
                shadowBlurRadius={50}
              />
              <Text
                style={{
                  fontFamily: "Poppins-ExtraBold",
                  fontSize: 13,
                  marginTop: -10,
                }}
              >
                {item.name}
              </Text>

              <Text
                style={{
                  fontFamily: "Poppins-Bold",
                  fontSize: 12,
                  color: "gray",
                }}
              >
                {item.subtitle}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins-Bold",
                    fontSize: 12,
                  }}
                >
                  {item.price}
                </Text>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/food1/heart.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />

      {/* Favourites Restaraunts */}
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 10,
            marginRight: 10,
            marginTop: 50,
          }}
        >
          <Text style={{ fontFamily: "Poppins-Bold" }}>
            Favourites Restaraunts
          </Text>
          <Text style={{ fontFamily: "Poppins-Light" }}>See all</Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 5 }}
          data={restraunts}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 10,
                  padding: 8,
                  backgroundColor: "#fff",
                  borderRadius: 19,
                  shadowColor: "#a29f9f",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 3.05,
                  elevation: 4,
                  paddingRight: 20,
                  paddingTop: 20,
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 90, height: 90, borderRadius: 50 }}
                />
                <View
                  style={{
                    marginLeft: 10,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins-SemiBold",
                      fontSize: 12,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{ fontFamily: "Poppins-SemiBold", fontSize: 12 }}
                  >
                    Restraunts
                  </Text>

                  <View style={{ flexDirection: "row" }}>
                    {[1, 2, 3, 4].map((a, b) => {
                      return (
                        <Image
                          source={require("../../../assets/food1/star.png")}
                          style={{ width: 20, height: 20 }}
                        />
                      );
                    })}
                  </View>

                  <Text
                    style={{
                      fontFamily: "Poppins-Light",
                      fontSize: 10,
                      color: "grey",
                    }}
                  >
                    {item.address}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default FoodHomePage;
