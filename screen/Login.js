import React,{useState,useEffect} from "react";
import {Text,View,Image,ImageBackground,TouchableOpacity, Alert, TextInput,KeyboardAvoidingView,Keyboard} from "react-native";
import {icons,images,colors} from "../constant"

import {isValidEmail,isValidPassword} from "../utilies/Validadtions"
function Login(props){
    const[keyboardDidShow,setkeyboardDidShow]=useState(false)
    //state for validating
    const[errorEmail,seterrorEmail]=useState('')
    const[errorPassword,seterrorPassword]=useState('')
    //state to store email/pass
    const[email,setEmail]=useState('admin@gmail.com')
    const[password,setPassword]=useState('123')
    const isValidationOK = () => email.length>0 && password.length>0 && isValidEmail(email)==true && isValidPassword(password)==true

    useEffect(()=>{
        Keyboard.addListener('keyboardDidShow',()=>{
            
            setkeyboardDidShow(true)
        })
        Keyboard.addListener('keyboardDidHide',() =>{
            setkeyboardDidShow(false);
        })
    })
    const{navigation,router}=props
    const{navigate,goBack}=navigation
    return <View style={{
        backgroundColor: 'white',
        flex: 100,
    }}>
        <View style={{
            height: 200,
            flexDirection: 'row',
            
            justifyContent: 'space-around',
            alignItems: 'center',
            flex:30
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
                    tintColor: colors.primary
                }} />
            
        </View>

        <View style={{
            marginHorizontal: 15,
            
            flex:25
        }}>
            <Text style={{
                color: colors.primary,
                fontSize: 18,
            }}>Email:</Text>

            <TextInput
                onChangeText={(text)=>{
                    if(isValidEmail(text)==false){
                        seterrorEmail('Email is not in correct format')
                    }
                    else{
                        seterrorEmail('')
                    }
                    seterrorEmail(isValidEmail(text) == true?'':'Email not in correct format')
                    setEmail(text)
                }}
                placeholder="example@gmail.com"
                value={email}
                placeholderTextColor={colors.placeholder}
                style={{
                    color: 'black',
                }} />
                <View style={{height:1,backgroundColor:colors.primary,width:'100%'}} />
                <Text style={{
                    color:colors.primary
                    
                 }}>{errorEmail}</Text>
            <Text style={{
                color: colors.primary,
                fontSize: 18,
            }}>Password:</Text>

            <TextInput
                onChangeText={(text)=>{
                    seterrorPassword(isValidPassword(text)==true?'':'Password be must least 3 characters')
                    setPassword(text)
                }}
                secureTextEntry={true}
                value={password}
                placeholder="Enter your password"
                placeholderTextColor={colors.placeholder}
                style={{
                    color: 'black',

                }} />
                 <View style={{height:1,backgroundColor:colors.primary,width:'100%'}} />
                 <Text style={{
                    color:colors.primary
                    
                 }}>{errorPassword}</Text>
        </View>
        {keyboardDidShow==false && <View style={{
            
            flex:20,
            justifyContent:'flex-end',
            
            marginTop:20
        }}>
            <TouchableOpacity
                disabled ={isValidationOK()==false}
                
                onPress={() => {
                    // alert(`Email=${email},password=${password}`)
                    navigate('MyTab')
                }}
                style={{
            
                    backgroundColor: isValidationOK()==true?colors.primary:colors.inactive,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 30,
                }}>
                <Text style={{
                    color: 'white',
                    padding: 8,
                    fontSize: 20,
                }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    alert('press register'),
                    navigate('Register')
                }}>
                <Text
                    style={{
                        padding: 10,
                        color: colors.primary,
                        alignSelf: 'center'
                    }}
                >New User?Register now</Text>
            </TouchableOpacity>
        </View>}
        {keyboardDidShow==false && <View style={{

            flex: 25,
            justifyContent: "center",
            alignItems: 'center',
            

        }}>
            <View style={{
                flexDirection: 'row',
            }}>
                <Text style={{
                    color: colors.primary
                }}>-----------------</Text>
                <Text style={{
                    color: colors.primary
                }}>User other methods?</Text>
                <Text style={{
                    color: colors.primary
                }}>------------------</Text>
                
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent:'space-around',
                width: '30%',
                marginTop:5
            }}>
                <TouchableOpacity onPress={()=>{alert('Facebook!!')}}>
                <Image  source={icons.facebook}
                    style={{
                        height: 30,
                        width: 30,
                        
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{alert('Google!!')}}>
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
export  default Login
///////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import {
//   Text,
//   View,
//   Image,
//   ImageBackground,
//   TouchableOpacity,
//   Alert,
//   TextInput,
//   KeyboardAvoidingView,
//   Keyboard,
// } from "react-native";
// import { LoginManager, AccessToken } from "react-native-fbsdk";
// import { GoogleSignin, statusCodes } from "react-native-google-signin";
// import PushNotification from "react-native-push-notification";
// import { icons, images, colors } from "../constant"
// import { isValidEmail, isValidPassword } from "../utilities/Validadtions";

// function Login(props) {
//   const [keyboardDidShow, setkeyboardDidShow] = useState(false);
//   const [errorEmail, seterrorEmail] = useState("");
//   const [errorPassword, seterrorPassword] = useState("");
//   const [email, setEmail] = useState("admin@gmail.com");
//   const [password, setPassword] = useState("123");

//   useEffect(() => {
//     Keyboard.addListener("keyboardDidShow", () => {
//       setkeyboardDidShow(true);
//     });
//     Keyboard.addListener("keyboardDidHide", () => {
//       setkeyboardDidShow(false);
//     });
//   }, []);

//   useEffect(() => {
//     GoogleSignin.configure({
//       webClientId: "YOUR_WEB_CLIENT_ID",
//     });
//   }, []);

//   const isValidationOK = () =>
//     email.length > 0 &&
//     password.length > 0 &&
//     isValidEmail(email) === true &&
//     isValidPassword(password) === true;

//   const handleFacebookLogin = async () => {
//     try {
//       const result = await LoginManager.logInWithPermissions([
//         "public_profile",
//         "email",
//       ]);

//       if (result.isCancelled) {
//         console.log("Login cancelled");
//       } else {
//         const data = await AccessToken.getCurrentAccessToken();
//         console.log("Facebook Access Token:", data.accessToken.toString());

//         PushNotification.localNotification({
//           title: "Facebook Notification",
//           message: "Hello from Facebook!",
//         });
//       }
//     } catch (error) {
//       console.log("Error in Facebook login:", error);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();

//       PushNotification.localNotification({
//         title: "Google Notification",
//         message: "Hello from Google!",
//       });
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         console.log("Google Sign In cancelled");
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         console.log("Google Sign In in progress");
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         console.log("Google Play Services not available");
//       } else {
//         console.log("Error in Google login:", error);
//       }
//     }
//   };

//   const { navigation, router } = props;
//   const { navigate, goBack } = navigation;

//   return (
//     <View
//       style={{
//         backgroundColor: "white",
//         flex: 100,
//       }}
//     >
//       <View
//         style={{
//           height: 200,
//           flexDirection: "row",
//           justifyContent: "space-around",
//           alignItems: "center",
//           flex: 30,
//         }}
//       >
//         <Text
//           style={{
//             color: "black",
//             fontSize: 20,
//             fontWeight: "bold",
//             width: "50%",
//           }}
//         >
//           Already have an account?
//         </Text>
//         <Image
//           source={images.computer}
//           style={{
//             alignSelf: "center",
//             height: 120,
//             width: 120,
//             tintColor: colors.primary,
//           }}
//         />
//       </View>

//       <View
//         style={{
//           marginHorizontal: 15,
//           flex: 25,
//         }}
//       >
//         <Text
//           style={{
//             color: colors.primary,
//             fontSize: 18,
//           }}
//         >
//           Email:
//         </Text>

//         <TextInput
//           onChangeText={(text) => {
//             if (isValidEmail(text) === false) {
//               seterrorEmail("Email is not in correct format");
//             } else {
//               seterrorEmail("");
//             }
//             seterrorEmail(isValidEmail(text) === true ? "" : "Email not in correct format");
//             setEmail(text);
//           }}
//           placeholder="example@gmail.com"
//           value={email}
//           placeholderTextColor={colors.placeholder}
//           style={{
//             color: "black",
//           }}
//         />
//         <View style={{ height: 1, backgroundColor: colors.primary, width: "100%" }} />
//         <Text style={{
//           color: colors.primary
//         }}>{errorEmail}</Text>
//         <Text
//           style={{
//             color: colors.primary,
//             fontSize: 18,
//           }}
//         >
//           Password:
//         </Text>

//         <TextInput
//           onChangeText={(text) => {
//             seterrorPassword(isValidPassword(text) === true ? "" : "Password must be at least 3 characters");
//             setPassword(text);
//           }}
//           secureTextEntry={true}
//           value={password}
//           placeholder="Enter your password"
//           placeholderTextColor={colors.placeholder}
//           style={{
//             color: "black",
//           }}
//         />
//         <View style={{ height: 1, backgroundColor: colors.primary, width: "100%" }} />
//         <Text style={{
//           color: colors.primary
//         }}>{errorPassword}</Text>
//       </View>

//       {keyboardDidShow === false && (
//         <View
//           style={{
//             flex: 20,
//             justifyContent: "flex-end",
//             marginTop: 20,
//           }}
//         >
//           <TouchableOpacity
//             disabled={isValidationOK() === false}
//             onPress={() => {
//               navigate("MyTab");
//             }}
//             style={{
//               backgroundColor: isValidationOK() === true ? colors.primary : colors.inactive,
//               borderRadius: 15,
//               justifyContent: "center",
//               alignItems: "center",
//               marginHorizontal: 30,
//             }}
//           >
//             <Text
//               style={{
//                 color: "white",
//                 padding: 8,
//                 fontSize: 20,
//               }}
//             >
//               Login
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => {
//               alert("press register");
//               navigate("Register");
//             }}
//           >
//             <Text style={{
//               padding: 10,
//               color: colors.primary,
//               alignSelf: 'center'
//             }}
//             >New User? Register now</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//       {keyboardDidShow === false && (
//         <View
//           style={{
//             flex: 25,
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <View style={{
//             flexDirection: 'row',
//           }}>
//             <Text style={{
//               color: colors.primary
//             }}>-----------------</Text>
//             <Text style={{
//               color: colors.primary
//             }}>Use other methods?</Text>
//             <Text style={{
//               color: colors.primary
//             }}>------------------</Text>
//           </View>
//           <View style={{
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//             width: '30%',
//             marginTop: 5
//           }}>
//             <TouchableOpacity onPress={handleFacebookLogin}>
//               <Image source={icons.facebook}
//                 style={{
//                   height: 30,
//                   width: 30,
//                 }} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handleGoogleLogin}>
//               <Image source={icons.google}
//                 style={{
//                   height: 30,
//                   width: 30,
//                 }} />
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}
//     </View>
//   );
// }

// export default Login;