import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import { MightLike, UpComing } from "../Ecommerce/Gadgets/Utils/CookingData";
import ImageBlurShadow from "react-native-image-blur-shadow";

const CookingHomepage = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Top content */}
      <View>
        <View style={styles.topBar}>
          <View>
            <Text style={{ fontFamily: "Poppins-Bold" }}>New York</Text>
            <Text
              style={{
                fontFamily: "Poppins-Light",
                fontSize: 11,
                alignSelf: "stretch",
              }}
            >
              within 20 miles
            </Text>
          </View>

          <Image
            source={require("../../../assets/cooking/avatar.jpg")}
            style={{
              width: 30,
              height: 30,
              borderRadius: 90,
            }}
          />
        </View>

        {/* Hello username */}
        <View>
          <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 30 }}>
            Hello, Simone
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 25,
              color: "#BA98DB",
            }}
          >
            {"There are 25 new\nevents in your area."}
          </Text>
        </View>

        {/* Search */}
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 15,
            marginTop: 20,
          }}
        >
          <Image
            source={require("../../../assets/cooking/search.png")}
            style={{
              width: 20,
              height: 20,
              alignItems: "center",
              alignContent: "center",
            }}
          />
          <TextInput
            placeholder="Seach for an event"
            style={{ fontFamily: "Poppins-Light", flex: 1 }}
          />
        </View>
      </View>

      {/* might like */}
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <Text style={{ fontFamily: "Poppins-Bold", fontSize: 15 }}>
            You might like
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Light",
            }}
          >
            See All
          </Text>
        </View>

        <FlatList
          style={{ marginTop: 15 }}
          horizontal={true}
          data={MightLike}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <View style={{ borderRadius: 30 }}>
                  <ImageBackground
                    resizeMode="cover"
                    source={item.image}
                    style={{
                      padding: 50,
                      height: 200,
                      width: 290,
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#acabb7",

                        alignSelf: "flex-start",
                        padding: 5,
                        paddingHorizontal: 7,
                        alignItems: "center",
                        position: "absolute",
                        borderRadius: 9,
                        top: 10,
                        left: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Poppins-SemiBold",
                          color: "white",
                        }}
                      >
                        {item.month}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Poppins-SemiBold",
                          color: "white",
                          marginTop: -5,
                        }}
                      >
                        {item.date}
                      </Text>
                    </View>

                    <View
                      style={{
                        position: "absolute",
                        backgroundColor: "rgba(227, 227, 201, .7)",
                        padding: 5,
                        paddingHorizontal: 10,
                        bottom: 10,
                        left: 10,
                        borderRadius: 9,
                        flexDirection: "row",
                      }}
                    >
                      <Image
                        source={require("../../../assets/cooking/book.png")}
                        style={{ width: 20, height: 20, marginRight: 5 }}
                      />
                      <Text
                        style={{
                          fontFamily: "Poppins-SemiBold",
                          color: "#65945B",
                        }}
                      >
                        {item.category}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text
                    style={{
                      fontFamily: "Poppins-Bold",
                    }}
                  >
                    {item.title}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={require("../../../assets/cooking/clock.png")}
                      style={{ width: 15, height: 15, marginRight: 5 }}
                    />
                    <Text
                      style={{
                        fontFamily: "Poppins-Light",
                      }}
                    >
                      {item.timeFrom} - {item.timeTo}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Upcoming events */}
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontFamily: "Poppins-Bold", fontSize: 15 }}>
            Upcoming events
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Light",
            }}
          >
            See All
          </Text>
        </View>
        <FlatList
          style={{ marginTop: 15 }}
          horizontal={true}
          data={UpComing}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View style={{ flexDirection: "row", marginRight: 20 }}>
                <View
                  style={{
                    marginRight: 15,
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      padding: 10,
                      borderColor: "gray",
                      borderWidth: 1,
                      borderRadius: 9,
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                    }}
                  >
                    <Text style={{ fontFamily: "Poppins-SemiBold" }}>
                      {item.month}
                    </Text>
                    <Text
                      style={{ fontFamily: "Poppins-SemiBold", marginTop: -5 }}
                    >
                      {item.date}
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 180,
                      width: 1,
                      backgroundColor: "gray",
                      marginLeft: 25,
                    }}
                  ></View>
                  <View
                    style={{
                      padding: 5,
                      width: 10,
                      height: 10,
                      borderRadius: 19,
                      borderColor: "gray",
                      borderWidth: 1,
                      marginLeft: 19,
                    }}
                  ></View>
                </View>

                <View>
                  <ImageBlurShadow
                    source={item.image}
                    // style={{ borderRadius: 9, width: 290, height: 250 }}
                    imageWidth={290}
                    imageHeight={250}
                    imageBorderRadius={22}
                    shadowOffset={50}
                    shadowBlurRadius={30}
                    shadowBackgroundColor={"#FAEFFF"}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CookingHomepage;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    backgroundColor: "#FAEFFF",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
});
