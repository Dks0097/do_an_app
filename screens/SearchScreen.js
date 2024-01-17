import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React ,{useEffect, useState} from "react";
import { Feather } from "@expo/vector-icons";
import SearchResults from "../components/SearchResults";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import initData from './api/initData';
const url = 'upload/rooming/';
const SearchScreen = () => {
    const [input,setInput] = useState("");

      const [items,setItems] = useState([]);
    
      const [data, setData] = useState({}); // Thêm trạng thái cho data

      useEffect(() => {
          initData()
          .then(resJSON => {
              const { room } = resJSON;
              
              setData(room); // Cập nhật trạng thái cho data
          });
      },[]);
  console.log(data);
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor:"#FFC72C",
          borderWidth:4,
          borderRadius:10
        }}
      >
        <TextInput value={input} onChangeText={(text) => setInput(text)} placeholder="Enter Your Destination" />
        <Feather name="search" size={22} color="black" />
      </View>

      <SearchResults data={data} input={input} setInput={setInput}/>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
