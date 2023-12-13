import React from "react";
import {View,Text,TouchableOpacity} from "react-native"
function Setting(props){
    return (<View style={{
      marginTop:20,
      flex:20,
      width:'100%',
      backgroundColor:'yellow',
      justifyContent:'center',
      alignItems:'center'
    }}   >
      <Text style={{
        color:"black",
        backgroundColor:'green'}}>Open up App</Text>
      
    </View>);
}
export default Setting