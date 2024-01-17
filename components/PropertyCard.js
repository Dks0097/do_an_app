import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const url = 'http://192.168.1.138:81/api/images/roomimg/';


const PropertyCard = ({
  data,children,
  property,
  adults,
  selectedDates,
  availableRooms,
  email
}) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  return (
    <View>
      <FlatList 
  data={data} 
  renderItem={({item, index}) => (
    
    <Pressable
    onPress={() => navigation.navigate("Info",{
      name:item.nameType,
      
      oldPrice:item.price,
      newPrice:(item.price -(item.price * (item.discount / 100))),
      photos:item.image,
      availableRooms:item.idType,
      adults:adults,
      children:children,
      rooms:item.idType,
      discount:item.discount,
      selectedDates:selectedDates,
      email:email,
    })}
      style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}
    >
      <View>
        <Image
          style={{ height: height / 4, width: width - 280 }}
          source={{uri:`${url}${item.image}`}}
        />
      </View>

      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ width: 200 }}>Phòng {item.nameType}</Text>
          <AntDesign name="hearto" size={24} color="red" />
        </View>
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
              backgroundColor: "#6CB4EE",
              paddingVertical: 3,
              borderRadius: 5,
              width: 100,
            }}
          >
            <Text
              style={{ textAlign: "center", color: "white", fontSize: 15 }}
            >
              {adults}  Người
            </Text>
          </View>
        </View>

        <Text
          style={{
            width: 210,
            marginTop: 6,
            color: "gray",
            fontWeight: "bold",
          }}
        >
        {/* {item.discount.length > 50
              ? item.discount.substr(0, 50)
              : item.discount} */}
        </Text>

     
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Text
            style={{
              color: "red",
              fontSize: 18,
              textDecorationLine: "line-through",
            }}
          >
          Giá  {item.price }
          </Text>
          <Text style={{ fontSize: 18 }}>
            Giá mới: {(item.price -(item.price * (item.discount / 100))).toFixed(1)
            }
          </Text>
        </View>

        <View style={{ marginTop: 6 }}>
          <Text style={{ fontSize: 16, color: "gray" }}>Phòng Deluxe</Text>
          <Text style={{ fontSize: 16, color: "gray" }}>
            Số người : {item.total_adult} 
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#6082B6",
            paddingVertical: 2,
            marginTop:2,
            borderRadius: 5,
            width: 150,
            paddingHorizontal:3,
          }}
        >
          <Text style={{textAlign:"center",color:"white"}}>Thời gian giới hạn</Text>
        </View>
      </View>
    </Pressable>
  )}
/>

    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
