import {StyleSheet, Text, View,Image,Pressable} from "react-native";
import { Link } from 'expo-router';
import {Ionicons} from '@expo/vector-icons'
export default function Index() {
  return (
    <View>
    <View style={styles.header}>
      <Link href="/profile" asChild>
      <Pressable>  
      <Ionicons name="person-circle-outline"
      size={45}
      color="cyan"
      style={{marginRight:275,}}
     />
      </Pressable>
      </Link>
     <Link href="/settings" asChild>
     <Pressable>
      <Ionicons name="settings"
       size={45}
       color="green" />
     </Pressable>
     </Link>
   </View>
   <View style={styles.body}>

   </View>

   </View>
  );
}
const styles=StyleSheet.create({
   header:{
    justifyContent:"space-evenly",
    backgroundColor:"rgb(23,30,38)",
    width:"100%",
    height:110,
    alignItems:"center",
    flexDirection:"row",
    paddingTop:30,
  },
   body:{

   },
   content:{
   fontSize:30,
   color:"white",
   fontWeight:"bold",  
   }
})