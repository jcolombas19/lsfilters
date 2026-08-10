import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import CameraScreen from "../screens/Camera/CameraScreen";
import Profile from "../screens/Galery/Profile";

const Stack = createNativeStackNavigator();

const AppNavigation = () =>{

    return <Stack.Navigator
        initialRouteName='Home'
    >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

    </Stack.Navigator>
 }


 const Tab = createBottomTabNavigator();

 function Home() {

    return  <Tab.Navigator
            initialRouteName="Profile"            
           
        >
            <Tab.Screen name={"Profile"} component={Profile} options={{ headerShown: false,} }
            />
            <Tab.Screen name={"Camara"} component={CameraScreen} options={{ headerShown: false }}
            />
        </Tab.Navigator>
 }

  export default AppNavigation;
