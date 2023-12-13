import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { homeScreen,setting } from '../screen';
import Icon from "react-native-vector-icons/FontAwesome"
const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
      if (!route || !route.name) {
          // Xử lý khi `router` không tồn tại hoặc không có thuộc tính 'name'
          return null; // hoặc có thể trả về giá trị mặc định khác
      }
      let screenName = route.name
      let iconName = 'cogs'
      if (screenName == 'homeScreen') {
          iconName = "align-center";
      } else if (screenName == 'Setting') {
          iconName = "cogs";
      } else if (screenName == 'FoodList') {
          iconName = "pizza-slice";
      }
      return <Icon name={iconName} size={20} color={focused ?'white':'black'} />
  },
  headerShown: false,
  tabBarActiveTintColor: 'white',
  tabBarInactiveTintColor: 'black',
  tabBarInactiveBackgroundColor:'red',
  tabBarActiveBackgroundColor:'red'
})
function MyTab() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="homeScreen" component={homeScreen} />
      <Tab.Screen name="setting" component={setting} />
    </Tab.Navigator>
  );
}
export default MyTab