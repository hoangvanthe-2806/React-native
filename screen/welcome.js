import { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';


function Welcome(props){
    const {navigation,router} =props
    // function cua navigate to/back
    const {navigate,goBack}=navigation
    return <View style={{flex:1}}>
        <Text>welcome</Text>
        <TouchableOpacity onPress={()=>{
            navigate('Login')
        }}>
            <Text>go back</Text>
        </TouchableOpacity>
        </View>
}
export default Welcome