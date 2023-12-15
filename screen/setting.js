import React, { useState } from "react";

import { Text,ScrollView,Switch, View, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5"
function Setting(props){
  
  const [isEnabledLockApp,setEnabledLockApp]=useState(true)
    
    const[isEnabledChangePassword,setEnabledChangePassword]=useState(true)
    const[isUseFingerprint,setUseFingerprint]=useState(true)

    return (
      <View style={{
        flex: 1,
    }}>
       
        <ScrollView>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',    
                justifyContent: 'center',            
            }}>
                <Text style={{
                    color:'black',
                    fontSize: 15,
                    color: 'red', 
                    paddingStart: 10,
                }}>Common</Text>                
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='globe'
                    style={{ marginStart: 10 }}
                    size={20} color={'black'}
                />
                <Text style={{
                    color:'black',
                    fontSize: 15,
                    color: 'black', 
                    paddingStart: 10,
                }}>Language</Text>                
                <View style={{flex: 1}} />
                <Text style={{
                    color:'black',
                    fontSize: 15,
                    color: 'black', 
                    paddingEnd: 10,
                    opacity: 0.5,
                }}>English</Text> 
                <Icon
                    name='chevron-right'
                    style={{ 
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    size={20} color={'black'}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='cloud'
                    style={{ marginStart: 10 }}
                    size={16} color={'black'}
                />
                <Text style={{
                    color:'black',
                    fontSize: 15,
                    color: 'black', 
                    paddingStart: 10,
                }}>Environment</Text>                
                <View style={{flex: 1}} />
                <Text style={{
                    color:'black',
                    fontSize: 15,
                    color: 'black', 
                    paddingEnd: 10,
                    opacity: 0.5,
                }}>Production</Text> 
                <Icon
                    name='chevron-right'
                    style={{ 
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    size={20} color={'black'}
                />
            </View>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',    
                justifyContent: 'center',            
            }}>
                <Text style={{
                    color:'black',
                    fontSize: 15,
                    color: 'red', 
                    paddingStart: 10,
                }}>Account</Text>                
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='phone'
                    style={{ marginStart: 10 }}
                    size={16} color={'black'}
                />
                <Text style={{
                    color:'black',
                    fontSize: 15,
                    color: 'black', 
                    paddingStart: 10,
                }}>Phone number</Text>                
                <View style={{flex: 1}} />                
                <Icon
                    name='chevron-right'
                    style={{ 
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    size={20} color={'black'}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='envelope'
                    style={{ marginStart: 10 }}
                    size={16} color={'black'}
                />
                <Text style={{
                    color:'black',
                    fontSize: 15,
                    color: 'black', 
                    paddingStart: 10,
                }}>Email</Text>                
                <View style={{flex: 1}} />                
                <Icon
                    name='chevron-right'
                    style={{ 
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    size={20} color={'black'}
                />
            </View>
            <TouchableOpacity style={{
                flexDirection: 'row',
                paddingVertical: 10,                
                alignItems: 'center',
            }} onPress={()=>{
                auth.signOut()
                navigation.dispatch(StackActions.popToTop())
            }}>
                <Icon
                    name='sign-out-alt'
                    style={{ marginStart: 10 }}
                    size={16} color={'black'}
                />
                <Text style={{
                    color:'black',
                    fontSize: 15,
                    color: 'black', 
                    paddingStart: 10,
                }}>Sign out</Text>                
                <View style={{flex: 1}} />                
                <Icon
                    name='chevron-right'
                    style={{ 
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    size={20} color={'black'}
                />
            </TouchableOpacity>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',    
                justifyContent: 'center',            
            }}>
                <Text style={{
                    color:'black',
                    fontSize: 15,
                    color: 'red', 
                    paddingStart: 10,
                }}>Security</Text>                
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='door-closed'
                    style={{ marginStart: 10 }}
                    size={16} color={'black'}
                />
                <Text style={{
                    color:'black',
                    fontSize: 15,
                    color: 'black', 
                    paddingStart: 10,
                }}>Lock app in background</Text>                
                <View style={{flex: 1}} /> 
                <Switch
                    trackColor={{ false: 'black', true:'blue'}}
                    thumbColor={isEnabledLockApp ?  'black' :'blue'}
                    //ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        setEnabledLockApp(!isEnabledLockApp)
                    }}
                    value={isEnabledLockApp}
                    style={{marginEnd: 10}}
                />                               
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='fingerprint'
                    style={{ marginStart: 10 }}
                    size={16} color={'black'}
                />
                <Text style={{
                    color:'black',
                    fontSize: 15,
                    color: 'black', 
                    paddingStart: 10,
                }}>Use fingerprint</Text>                
                <View style={{flex: 1}} /> 
                <Switch
                    trackColor={{ false:'black', true:  'blue'}}
                    thumbColor={isUseFingerprint ? 'black': 'blue'}
                    //ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        setUseFingerprint(!isUseFingerprint)
                    }}
                    value={isUseFingerprint}
                    style={{marginEnd: 10}}
                />                               
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='lock'
                    style={{ marginStart: 10 }}
                    size={16} color={'black'}
                />
                <Text style={{
                    color:'black',
                    fontSize: 15,
                    color: 'black', 
                    paddingStart: 10,
                }}>Change password</Text>                
                <View style={{flex: 1}} /> 
                <Switch
                    trackColor={{ false: "black", true: 'blue'}}
                    thumbColor={isUseFingerprint ? 'black' :'blue'}
                    //ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        setEnabledChangePassword(!isEnabledChangePassword)                        
                    }}
                    value={isEnabledChangePassword}
                    style={{marginEnd: 10}}
                />                               
            </View>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',    
                justifyContent: 'center',            
            }}>
                <Text style={{
                    color:'black',
                    fontSize: 15,
                    color: 'red', 
                    paddingStart: 10,
                }}>Misc</Text>                
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='file-alt'
                    style={{ marginStart: 10 }}
                    size={20} color={'black'}
                />
                <Text style={{
                    color:'black',
                    fontSize: 15,
                    color: 'black', 
                    paddingStart: 10,
                }}>Term of Service</Text>                
                <View style={{flex: 1}} />                
                <Icon
                    name='chevron-right'
                    style={{ 
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    size={20} color={'black'}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='passport'
                    style={{ marginStart: 10 }}
                    size={20} color={'black'}
                />
                <Text style={{
                    color:'black',
                    fontSize: 15,
                    color: 'black', 
                    paddingStart: 10,
                }}>Open source licenses</Text>                
                <View style={{flex: 1}} />                
                <Icon
                    name='chevron-right'
                    style={{ 
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    size={20} color={'black'}
                />
            </View>
        </ScrollView>
    </View>);
}
export default Setting