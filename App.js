


// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Content,Footer,Header} from "./component/Content"
import Content from "./component/Content"
import{welcome,productDetail,homeScreen}from "./screen"
import MyTab from './navigation/MyTab';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MyTab' HeaderRight={false}>
        <Stack.Screen name="welcome" component={welcome}/>
        <Stack.Screen name="MyTab" component={MyTab}/>
        <Stack.Screen name="homeScreen" component={homeScreen}/>
        <Stack.Screen name="productDetail" component={productDetail}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

