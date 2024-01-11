import React, { useState, useEffect } from "react";
import { Text, View, Image, ImageBackground, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Keyboard } from "react-native";
import { icons, images, colors } from "../constant"

import { isValidEmail, isValidPassword } from "../utilies/Validadtions"

function Register(props) {
    const [keyboardDidShow, setkeyboardDidShow] = useState(false)
    //state for validating
    const [errorEmail, seterrorEmail] = useState('')
    const [errorPassword, seterrorPassword] = useState('')
    //state to store email/pass
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isValidationOK = () => email.length > 0 && password.length > 0 && isValidEmail(email) == true && isValidPassword(password) == true

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {

            setkeyboardDidShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setkeyboardDidShow(false);
        })
    })
    const{navigation,router}=props
    const{navigate,goback}=navigation
    return <View style={{
        backgroundColor: colors.primary,
        flex: 100,
    }}>
        <View style={{
            height: 200,
            flexDirection: 'row',

            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 25
        }}>
            <Text style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
                width: "50%",

            }}>Already have an account?</Text>
            <Image source={images.computer}
                style={{
                    alignSelf: 'center',
                    height: 120,
                    width: 120,
                    tintColor: 'white'
                }} />

        </View>

        <View style={{

            backgroundColor: 'white',
            flex: 45,
            marginHorizontal:10,
            padding:10,
            borderRadius:20
        }}>
            <View style={{
                marginHorizontal: 15
            }}>
                <Text style={{
                    color: colors.primary,
                    fontSize: 18,
                }}>Email:</Text>

                <TextInput
                    onChangeText={(text) => {
                        // if(isValidEmail(text)==false){
                        //     seterrorEmail('Email is not in correct format')
                        // }
                        // else{
                        //     seterrorEmail('')
                        // }
                        seterrorEmail(isValidEmail(text) == true ? '' : 'Email not in correct format')
                        setEmail(text)
                    }}
                    placeholder="example@gmail.com"
                    placeholderTextColor={colors.placeholder}
                    style={{
                        color: 'black',
                    }} />
                <View style={{ height: 1, backgroundColor: colors.primary, width: '100%' }} />
                <Text style={{
                    color: colors.primary

                }}>{errorEmail}</Text>
                <Text style={{
                    color: colors.primary,
                    fontSize: 18,
                }}>Password:</Text>

                <TextInput
                    onChangeText={(text) => {
                        seterrorPassword(isValidPassword(text) == true ? '' : 'Password be must least 3 characters')
                        setPassword(text)
                    }}
                    secureTextEntry={true}
                    placeholder="Enter your password"
                    placeholderTextColor={colors.placeholder}
                    style={{
                        color: 'black',

                    }} />
                <View style={{ height: 1, backgroundColor: colors.primary, width: '100%' }} />
                <Text style={{
                    color: colors.primary

                }}>{errorPassword}</Text>
                <Text style={{
                    color: colors.primary,
                    fontSize: 18,
                }}>Retype password:</Text>

                <TextInput
                    
                    onChangeText={(text) => {
                        seterrorPassword(isValidPassword(text) == true ? '' : 'Password be must least 3 characters')
                        setPassword(text)
                    }}
                    secureTextEntry={true}
                    placeholder="Re-Enter your password"
                    placeholderTextColor={colors.placeholder}
                    style={{
                        color: 'black',

                    }} />
                <View style={{ height: 1, backgroundColor: colors.primary, width: '100%' }} />
                <Text style={{
                    color: colors.primary

                }}>{errorPassword}</Text>
                {keyboardDidShow == false && <View style={{


                    justifyContent: 'flex-end',

                    marginTop: 20
                }}>
                    
                    <TouchableOpacity
                        disabled={isValidationOK() == false}
                        onPress={() => {
                            // alert(`Email=${email},password=${password}`)
                            navigate("Login")
                        }}
                        style={{

                            backgroundColor: isValidationOK() == true ? colors.primary : colors.inactive,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: 30,
                        }}>
                        <Text style={{
                            color: 'white',
                            padding: 8,
                            fontSize: 20,
                        }}>Register</Text>
                    </TouchableOpacity>

                </View>}
            </View>
        </View>


        {keyboardDidShow == false && <View style={{

            flex: 20,
            justifyContent: "center",
            alignItems: 'center',


        }}>
            <View style={{
                flexDirection: 'row',
            }}>
                <Text style={{
                    color: 'white'
                }}>-----------------</Text>
                <Text style={{
                    color: 'white'
                }}>User other methods?</Text>
                <Text style={{
                    color: 'white'
                }}>------------------</Text>
                
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '30%',
                marginTop: 5
            }}>
                
                <TouchableOpacity onPress={() => { alert('Facebook!!') }}>
                    <Image source={icons.facebook}
                        style={{
                            height: 30,
                            width: 30,

                        }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { alert('Google!!') }}>
                    <Image source={icons.google}
                        style={{
                            height: 30,
                            width: 30,

                        }} />
                </TouchableOpacity>
            </View>
        </View>}
    </View>
    
    
}
export default Register