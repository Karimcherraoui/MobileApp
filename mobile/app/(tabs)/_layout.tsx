import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
 import Entypo from '@expo/vector-icons/Entypo';


export default function TabsLayout() {
  return(
  
  <Tabs screenOptions={
    {tabBarActiveTintColor:"red",
      headerShown:false,
    }
  }>
    <Tabs.Screen
      name="index"
      options={{               
       title:"Home",
       tabBarIcon:({color})=>(<FontAwesome name="home" size={24} color={color} />)
      }}
    />
    <Tabs.Screen
      name="login"
      options={{
       title:"Login",
         tabBarIcon:({color})=>(<Entypo name="login" size={24}  color={color} />)

      }}
    />
  </Tabs>
  )
}
