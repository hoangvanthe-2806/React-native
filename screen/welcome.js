import { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { colors, images } from "../constant"

function Welcome(props) {
    const { navigation, router } = props
    // function cua navigate to/back
    const { navigate, goBack } = navigation
    return <ImageBackground
        source={images.welcome}
        style={{ flex: 1 }}>

        <TouchableOpacity onPress={() => {
            navigate('Login')
        }}
        style={{
            alignSelf:'center',
            marginTop:610,
        }}>
            <View style={{
                backgroundColor:colors.primary,
                justifyContent: 'center',
                alignItems:'center',
                height:70,
                width:250,
                borderRadius:15
            }}>
                <Text style={{
                    color:'white',
                    fontWeight:'bold',
                    fontSize:20}}>Get Started</Text>
            </View>
        </TouchableOpacity>
    </ImageBackground>
}
export default Welcome