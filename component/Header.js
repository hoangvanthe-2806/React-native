//rgba(0,0,0,0.2)->inactive
import React from "react";
import {View,Text,TouchableOpacity,Image} from "react-native"
import Swiper from "react-native-swiper";
function Header(props){
    return (<View style={{
      marginTop:20,
      flex:20,
      width:'100%',
      marginBottom:10,
      justifyContent: 'center',
      alignItems: 'center',
      
    }}   >

      <Text style={{
        color: "black",
        backgroundColor: 'green'
      }}>Open up App</Text>
      <View style={{ width: "95%", flex: 1, }}>
        <Swiper showsButtons={true}>
          <View style={{ width: 'auto',borderWidth: 1,borderRadius:15,borderColor:'rgba(0,0,0,0.2)', flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../asset/aass.png')} style={{ width: '90%', height:100, borderRadius: 15, resizeMode: 'contain' }} />
          </View>
          <View style={{ width: 'auto',borderWidth: 1,borderRadius:15,borderColor:'rgba(0,0,0,0.2)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../asset/slide1.jpg')} style={{ width: '90%', height:100, borderRadius: 15, resizeMode: 'contain' }} />
          </View>
        </Swiper>
      </View>


    </View>);
}
export default Header
