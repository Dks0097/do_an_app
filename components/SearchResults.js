import { StyleSheet, Text, View ,FlatList, Pressable, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const url = 'http://192.168.1.138:81/api/images/roomimg/';

const SearchResults = ({data,input,setInput}) => {
    const navigation = useNavigation();
  return (
    <View style={{padding:10}}>
       <FlatList data={data} renderItem={({item}) => {
           if(item.nameType.toLowerCase().includes(input.toLowerCase())){
               if(input === ""){
                   return null;
               }
               return (
                   <Pressable onPress={() => {
                       setInput(item.nameType);
                       navigation.navigate("Home",{
                           input:item.nameType
                       })

                   }} style={{flexDirection:"row",alignItems:"center",marginVertical:10}}>
                       <View>
                           <Image style={{width:70,height:70}} source={{uri:`${url}${item.image}`}}/>
                       </View>
                       <View style={{marginLeft:10}}>
                           <Text style={{fontSize:15,fontWeight:"500"}}>Tên phòng: {item.nameType}</Text>
                           <Text style={{marginVertical:4}}>giá: {item.price}</Text>
                           <Text style={{color:"gray",fontSize:15}}>Số người {item.total_adult}</Text>
                       </View>
                   </Pressable>
               )
           }
       }}/>
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({})