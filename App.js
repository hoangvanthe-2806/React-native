


// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Content,Footer,Header} from "./component/Content"
import Content from "./component/Content"
import{welcome,productDetail,homeScreen}from "./screen"
import MyTab from './navigation/MyTab';
import Login from './screen/Login';
import Register from './screen/Register';




const Stack = createNativeStackNavigator();
//screenOptions={{ headerShown: false }}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='welcome' HeaderRight={false}>
        <Stack.Screen name="welcome" component={welcome}/>
        <Stack.Screen name="MyTab" component={MyTab}/>
        <Stack.Screen name="homeScreen" component={homeScreen}/>
        <Stack.Screen name="productDetail" component={productDetail}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

