import {StyleSheet, Text, View,Image,Pressable} from "react-native";
import { Link } from 'expo-router';
export default function Index() {
  return (
    <View style={styles.header}>
      <Link href="/profile" asChild>
      <Pressable>  
      <Image 
      source={require("../../assets/profile.png")}
      style={{width:60,height:60}}
      />
      </Pressable>
      </Link>
     
   </View>
  );
}
const styles=StyleSheet.create({
   header:{
    justifyContent:"center",
    backgroundColor:"lightgray",
    width:"100%",
    height:110,
    alignItems:"center",

  },
   content:{
   fontSize:30,
   color:"white",
   fontWeight:"bold",  
   }
})