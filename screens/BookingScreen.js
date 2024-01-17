import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  FlatList,Alert
} from "react-native";
import React, { useLayoutEffect, useState, useEffect,useCallback } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import getBooking from "./api/getBooking";
import delbooking from "./api/delbooking";

const BookingScreen = () => {
  const bookings = useSelector((state) => state.booking.booking);
  const navigation = useNavigation();
  const route = useRoute();
  const email = route.params.email;
  const [user_id, setUserId] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState([]); // Khởi tạo data như một mảng rỗng
  const [isLoading,setIsLoading] = useState(false);
  useEffect(() => {
    getBooking(email).then((resJSON) => {
      const { room } = resJSON;

      setData(room); // Cập nhật trạng thái cho data
    });
  }, []);
  console.log(data);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Bookings",
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
  // if (data.length === 0) {
  //   return <Text>Chưa có phòng được đặt! Hãy </Text>;
  // }
  const delBooking = useCallback(() => {
    delbooking(email, id)
      .then((response) => {
        console.log(response.data);
        Alert.alert(
          "Thông báo",
          "Hủy phòng thành công!",
          [
            {
              text: "OK",
              onPress: () => navigation.navigate("Main", { email: email }),
              style: "ok",
            },
          ],
          { cancelable: false }
        );
      })
      .catch((error) => {
        console.error("Error fetching hotels:", error);
      });
  }, [email, id]);
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <Pressable
            key={index}
            style={{ backgroundColor: "white", margin: 10 }}
          >
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
                  {item.nameType}
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
                      Genius Level
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  backgroundColor:
                    item.payment_status === "0" ? "#FFFF00" : "#17B169", // Màu vàng nếu item.status = 0, ngược lại thì màu xanh
                  paddingHorizontal: 6,
                  paddingVertical: 4,
                  borderRadius: 6,
                }}
              >
                <Text
                  style={{
                    color: item.payment_status === "0" ? "red" : "white",
                    fontSize: 13,
                  }}
                >
                  {item.payment_status === "0"
                    ? "Chưa thanh toán"
                    : "Đã thanh toán"}
                </Text>
              </View>
            </View>

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
                  {item.check_in}
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
                  {item.check_out}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 12,
                marginTop: 4,
                gap: 8,
              }}
            >
              <Text style={{ fontSize: 20 }}>
                Tổng tiền : {item.total_price}
              </Text>
            </View>
            <View style={{ margin: 12 }}>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
              >
                Phòng và số người
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {item.number_of_rooms} phòng {item.persion} người
              </Text>
            </View>
            <View style={{ margin: 12 }}>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
              >
                Trạng thái đặt phòng
              </Text>
            </View>
            <Pressable
              style={{
                backgroundColor: item.status === "0" ? "#FFFF00" : "#17B169",
                width: 120,
                padding: 5,
                marginHorizontal: 12,
                marginBottom: 20,
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: item.status === "0" ? "red" : "white",
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                {item.status === "0" ? "Đang xử lí" : "Đã hoàn thành"}
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setId(item.id);
                delBooking();
              }}
              style={{
                backgroundColor: "red",
                width: 120,
                padding: 5,
                marginHorizontal: 12,
                marginBottom: 20,
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Hủy đặt phòng
              </Text>
            </Pressable>
          </Pressable>
        )}
        refreshing={isLoading}
        onRefresh={() => {
          setIsLoading(true);
          getBooking(email).then((resJSON) => {
            const { room } = resJSON;
            setIsLoading(false);
            setData(room); // Cập nhật trạng thái cho data
          });
        }}  />
    </SafeAreaView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({});
