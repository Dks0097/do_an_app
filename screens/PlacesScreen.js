import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState,useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
// import { Octicons } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import { FontAwesome5 } from "@expo/vector-icons";
import PropertyCard from "../components/PropertyCard";
// import { BottomModal } from "react-native-modals";
// import { ModalFooter } from "react-native-modals";
// import { SlideAnimation } from "react-native-modals";
// import { ModalTitle } from "react-native-modals";
// import { FontAwesome } from '@expo/vector-icons';
// import { Entypo } from "@expo/vector-icons";
// import { ModalContent } from "react-native-modals";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";
import initData from './api/initData';

const PlacesScreen = () => {
  const route = useRoute();

  
  const navigation = useNavigation();
  const [modalVisibile, setModalVisibile] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",
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
  // const filters = [
  //   {
  //     id: "0",
  //     filter: "cost:Low to High",
  //   },
  //   {
  //     id: "1",
  //     filter: "cost:High to Low",
  //   },
  // ];
  const [loading,setLoading] = useState(false);
  const [items,setItems] = useState([]);
  const [data, setData] = useState({}); // Thêm trạng thái cho data

      useEffect(() => {
          initData()
          .then(resJSON => {
              const { room } = resJSON;
              setLoading(false);
              setData(room); // Cập nhật trạng thái cho data
          }) 
          .catch(error => {
            setLoading(true);
            console.error('Error fetching hotels:', error);
          });
      },[]);
console.log(data);


 
  return (
    <View style={{ backgroundColor: "#F5F5F5" }}>
      

      {loading ? (
        <Text>Fetching places....</Text>
      ) : (
     
      <PropertyCard  data={data} rooms={route.params.rooms}
      children={route.params.children}
      adults={route.params.adults}
      selectedDates={route.params.selectedDates}
      email={route.params.email}
/>
      )}
 
    

     
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({});
