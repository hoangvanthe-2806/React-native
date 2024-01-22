import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { homeScreen,setting ,Cart,User, Food} from '../screen';
import Icon from "react-native-vector-icons/FontAwesome"
import React, { useState, useEffect } from "react";


// const [searchText, setSearchText] = useState('')
// const filteredFoods = () => foods.filter(eachFood => eachFood.name.toLowerCase().includes(searchText.toLowerCase()))
const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
      if (!route || !route.name) {
          // Xử lý khi `router` không tồn tại hoặc không có thuộc tính 'name'
          return null; // hoặc có thể trả về giá trị mặc định khác
      }
      let screenName = route.name
      let iconName = 'cogs'
      if (screenName == 'home') {
          iconName = "align-center";
      } else if (screenName == 'Setting') {
          iconName = "cogs";
      } else if (screenName == 'Cart') {
          iconName = "cart-plus";
      }
      else if (screenName == 'User') {
        iconName = "user";
    }
      return <Icon name={iconName} size={20} color={focused ?'white':'black'} />
  },
  headerShown: false,
  tabBarActiveTintColor: 'white',
  tabBarInactiveTintColor: 'black',
  tabBarInactiveBackgroundColor:'#ED6263',
  tabBarActiveBackgroundColor:'#ED6263'
})
function MyTab() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="home" component={homeScreen} />
      <Tab.Screen name="Food" component={Food} />
      <Tab.Screen name="Cart" component={Cart}/>
      <Tab.Screen name="setting" component={setting} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}
export default MyTab