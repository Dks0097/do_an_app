import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { pixelNormalize } from "../components/Normalise";
import { MaterialIcons } from "@expo/vector-icons";
import Amenities from "../components/Amenities";
const url = 'http://192.168.1.138:81/api/images/roomimg/';

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = route.params.discount;
  const oldPrice = route.params.oldPrice * route.params.adults;
  const newPrice = route.params.newPrice * route.params.adults;
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Pressable
            style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}
          >
           
              <View style={{ margin: 6 }}>
                <Image
                  style={{
                    width: 120,
                    height: pixelNormalize(80),
                    borderRadius: pixelNormalize(4),
                  }}
                  source={{ uri: `${url}${route.params.photos}`  }}
                />
              </View>
           
            <Pressable
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text style={{ textAlign: "center", marginLeft: 20 }}>
             Show More
              </Text>
            </Pressable>
          </Pressable>

          <View
            style={{
              marginHorizontal: 12,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
               Phòng {route.params.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 7,
                }}
              >
                <MaterialIcons name="stars" size={24} color="green" />
                <Text>5</Text>
                <View
                  style={{
                    backgroundColor: "#003580",
                    paddingVertical: 3,
                    borderRadius: 5,
                    width: 100,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                   {route.params.name}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#17B169",
                paddingHorizontal: 6,
                paddingVertical: 4,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "white", fontSize: 13 }}>
              Du lịch 
              </Text>
            </View>
          </View>

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              marginTop: 10,
              fontSize: 17,
              fontWeight: "500",
              marginHorizontal: 12,
            }}
          >
           Giá cho 1 đêm trên {route.params.adults} người
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 12,
              marginTop: 4,
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 20,
                textDecorationLine: "line-through",
              }}
            >
           Giá cũ:{route.params.oldPrice * route.params.adults}
            </Text>
            <Text style={{ fontSize: 20 }}>
              Giá mới: {route.params.newPrice * route.params.adults}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 12,
              marginTop: 7,
              backgroundColor: "green",
              paddingHorizontal: 4,
              paddingVertical: 5,
              width: 78,
              borderRadius: 4,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Giảm {offerPrice} %
            </Text>
          </View>

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <View
            style={{
              margin: 12,
              flexDirection: "row",
              alignItems: "center",
              gap: 60,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
              >
                Check In
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {route.params.selectedDates.startDate}
              </Text>
            </View>

            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
              >
                Check Out
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {route.params.selectedDates.endDate}
              </Text>
            </View>
          </View>
          <View style={{ margin: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
            Phòng và Khách
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
            Phòng {route.params.rooms} người lớn {route.params.adults} {" "}
             trẻ em  {route.params.children} 
            </Text>
          </View>

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <Amenities />

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
        </ScrollView>
      </SafeAreaView>

      <Pressable
      onPress={() => navigation.navigate("Rooms",{
        rooms:route.params.availableRooms,
        oldPrice:oldPrice,
        newPrice:newPrice,
        name:route.params.name,
        children:route.params.children,
        adults:route.params.adults,
        rating:route.params.rating,
        email:route.params.email,
        startDate:route.params.selectedDates.startDate,
        endDate:route.params.selectedDates.endDate
      })}
        style={{
          backgroundColor: "#6CB4EE",
          position: "absolute",
          bottom: 20,
          padding: 15,
          width:"95%",
          marginHorizontal:10,
        }}
      >
        <Text style={{ textAlign: "center", color: "white",fontWeight:"bold",fontSize:17 }}>
          Select Availabilty
        </Text>
      </Pressable>
    </>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
