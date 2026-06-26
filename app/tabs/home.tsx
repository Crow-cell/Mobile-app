import {StyleSheet, Text, View,Image,Pressable} from "react-native";
import { Link } from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
import {useState} from 'react';



export default function Index() {
    const[Luni,setLuni]=useState(false)
    const[Marti,setMarti]=useState(false)
    const[Miercuri,setMiercuri]=useState(false)
    const[Joi,setJoi]=useState(false)
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
   <View style={styles.body}>{ /* body-ul dintre nav bar de sus si tab bar */} 
     <View style={styles.trackbar}><Text style={styles.contentTrackbar}>WEEKLY TRACKER</Text></View>
     <View> // bara cu literele cu zile
      <Text style={styles.dayBar}>M     T      W      T      F      S       S</Text>
      </View>
     <View style={styles.baraCercuri}>{/* bara cu progresul*/}
     <Pressable style={styles.cerc} onPress={()=>setLuni(!Luni)}>
      {Luni ? (
         <Ionicons name="checkmark-circle" size={30} color="limegreen"/>  /* if true*/
      ): (
        <Ionicons name="ellipse-outline" size={30} color="white"/>      /* if false*/
      )}
      </Pressable>
      <Pressable style={styles.cerc} onPress={()=>setMarti(!Marti)}>
        {Marti ? (
            <Ionicons name="checkmark-circle" size={30} color="limegreen" />
          ): (
            <Ionicons name="ellipse-outline" size={30} color="white"/>
          )}
        </Pressable>     
     </View>
   </View>
   </View>
  )
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
     backgroundColor:"#121212",
     width:"100%",
     height:800,
     flexDirection:"column",
   },
   contentTrackbar:{
   fontSize:25,
   color:"white",
   fontWeight:"bold",  
   },
   trackbar:{
    width:"100%",
    backgroundColor:"rgb(33,115,127)",
    height:40,
    alignItems:"center",
    justifyContent:"center",
  },
  dayBar:{
    color:"white",
    fontSize:25,
    marginLeft:30,
  },
  baraCercuri:{
    width:"100%",
    height:10,
    backgroundColor:"#121212",
    gap:50,
    flexDirection:"row",
  },
  cerc:{
    width:30,
    height:100,
    borderRadius:"50%",
  }
})