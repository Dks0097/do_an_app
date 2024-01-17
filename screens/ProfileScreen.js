import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, {useState,useEffect,useLayoutEffect} from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import initUser from "./api/initUser";

const ProfileScreen = () => {
  const route = useRoute();
  const email = route.params.email;
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Profile",
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
  useEffect(() => {
    initUser(email).then((resJSON) => {
      const { room } = resJSON;

      setData(room); // Cập nhật trạng thái cho data
    });
  }, []);
  console.log(data)
  return (
    <FlatList
    data={data}
    renderItem={({ item, index }) => (
    <View style={styles.container}>
      
      <Text style={styles.username}>Xin chào {item.name}</Text>
      <Text style={styles.location}></Text>
      <View style={styles.menuContainer}>
       
        <TouchableOpacity style={styles.btnSignInStyle} >
        
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btnSignInStyle} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.btnTextSignIn}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
       )}  />
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 30
  },
  username: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  location: {
    color: 'grey',
    fontSize: 15,
    marginBottom: 50
  },
  menuContainer: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSignInStyle: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 200,
    marginBottom: 10,
    justifyContent: 'center',
    paddingLeft: 10
  },
  btnTextSignIn: {
    color: '#34B089',
    fontSize: 15
  },
})
