import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const UserScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "User Details",
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const finalStep = () => {
    if (!firstName || !lastName || !phoneNo) {
      Alert.alert(
        "Thông báo!",
        "Vui lòng nhập đủ thông tin!",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
    if (firstName && lastName  && phoneNo) {
      navigation.navigate("Confirmation", {
        rooms:route.params.rooms,
        oldPrice: route.params.oldPrice,
        newPrice: route.params.newPrice,
        name: route.params.name,
        firstName:firstName,
        email:route.params.email,
        phone: phoneNo,
        children: route.params.children,
        adults: route.params.adults,
        rating: route.params.rating,
        startDate: route.params.startDate,
        endDate: route.params.endDate,
      });
    }
  };
  return (
    <>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text>First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Last Name</Text>
          <TextInput
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Email</Text>
          <TextInput
            value={route.params.email}
            onChangeText={(text) => setEmail(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Phone no</Text>
          <TextInput
            value={phoneNo}
            onChangeText={(text) => setPhoneNo(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>
      </View>

      <Pressable
        style={{
          backgroundColor: "white",
          marginTop: "auto",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 40,
          padding: 10,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",

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
             Giá {route.params.oldPrice }
            </Text>
            <Text style={{ fontSize: 20 }}>
              Giá mới {route.params.newPrice }
            </Text>
          </View>
          <Text>
            Bạn trả {route.params.newPrice} vnđ
          </Text>
        </View>
        <Pressable
          onPress={finalStep}
          style={{ backgroundColor: "#007FFF", padding: 10, borderRadius: 5 }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
            Final Step
          </Text>
        </Pressable>
      </Pressable>
    </>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
