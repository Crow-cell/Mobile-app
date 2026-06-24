import {Tabs} from 'expo-router'
import {Ionicons} from "@expo/vector-icons"
import {Text} from 'react-native'
const TabsLayout = () => {
    return(
        <Tabs screenOptions={{tabBarActiveTintColor:"#48ABA5", //avem aici Tabs ceea ce creeaza bara de tab
            tabBarInactiveTintColor:"grey",
            tabBarStyle:{
                backgroundColor:"rgb(23, 30, 38)",
                borderTopWidth:3,
                borderColor:"rgb(23,50,38)",
                alignContent:"center",
                height:95,
            },
            tabBarLabelStyle:{
                fontSize:13,
            },
            headerShown:false,
        }}>
            <Tabs.Screen name='home' options={{title:"Home ",headerTitle: ()=>(
                    <Text style={{fontSize:18,marginLeft:102}}>Welcome back!</Text>
            ),
                tabBarIcon: ({color,size,})=>(
                <Ionicons name='home' size={size} color={color}></Ionicons>
                )
            }}
            />
        <Tabs.Screen name='workouts' options={{title:"Workouts",
                tabBarIcon: ({color,size,})=>(
                <Ionicons name='barbell' size={size} color={color}></Ionicons>
                )
            }}
            />
             <Tabs.Screen name='progress' options={{title:"Progress",
                tabBarIcon: ({color,size,})=>(
                <Ionicons name='analytics' size={size} color={color}></Ionicons>
                )
            }}
            />
             <Tabs.Screen name='logs' options={{title:"Logs",
                tabBarIcon: ({color,size,})=>(
                <Ionicons name='checkmark-outline' size={size} color={color}></Ionicons>
                )
            }}
            />
        </Tabs>
    ) 
}
export default TabsLayout