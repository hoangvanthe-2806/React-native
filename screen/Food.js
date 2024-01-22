import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Alert,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    ScrollView,
    FlatList
} from "react-native";

import { icons, images, colors, Icons } from "../constant"
import Icon from "react-native-vector-icons/FontAwesome5"

import { useNavigation } from "@react-navigation/native";
//2 cach tao list(1.La tu tao,2.la dung thu vien react native)
function Food(props) {
    const navigation = useNavigation()
    function _getColorFromStatus(status){
        if(status.toLowerCase().trim() =='opening soon'){
            return colors.warning
        }else if(status.toLowerCase().trim() =='opening now'){
            return colors.success
        }else if(status.toLowerCase().trim() =='closing soon'){
            return colors.alert
        }
        return colors.success
    }
    const [foods, setfoods] = useState(
        [
            {
                name: 'Tortilla Española,Try making your own... Real Spanish omelette.',
                uri: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love-1080x700.jpg',
                status: 'Opening soon',
                price: 32.45,
                website: 'https://edition.cm.com',
                socialNetworks: {
                    facebook: 'https://www.facebook.com/profile.php?id=100088445076081',
                    google: '',


                }
            },
            {
                name: 'Paella',
                uri: 'https://www.seriouseats.com/thmb/MZWv-U4kVbTxR-r-MbgAhtn1-ao=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__08__20140818-tomato-sauce-vicky-wasik-3-5a82a74045764203a01410754b129601.jpg',
                status: 'Opening now',
                price: 100.45,
                website: 'https://edition.cm.com',
                socialNetworks: {
                    facebook: 'https://www.facebook.com/profile.php?id=100088445076081',
                    instagram: 'https://www.instagram.com/profile.php?id=100088445076081',
                    google: 'https://www.facebook.com/profile.php?id=100088445076081',
                }


            },
            {
                name: 'Gazpacho',
                uri: 'https://www.foodandwine.com/thmb/dX7pNh_WX83ESqb9VJuvkBwVKwM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Braciole-FT-RECIPE1122-66acf49cef0e4390bec780945709e7f3.jpg',
                status: 'Opening soon',
                price: 32.45,
                website: 'https://edition.cm.com',
                socialNetworks: {

                    instagram: 'https://www.instagram.com/profile.php?id=100088445076081'
                }


            },
            {
                name: 'Gambas al ajillo',
                uri: 'https://i.pinimg.com/736x/0a/24/c5/0a24c59d4b08e7d631cc3d0ac76869a1.jpg',
                status: 'Opening soon',
                price: 45.06,
                website: 'https://edition.cm.com',
                socialNetworks: {
                    facebook: 'https://www.facebook.com/profile.php?id=100088445076081',
                    instagram: 'https://www.instagram.com/profile.php?id=100088445076081'
                }


            },
            {
                name: 'Tostas de tomate y jamón',
                uri: 'https://cdn4.tuscanynowandmore.com/storage/app/media/discover-italy/bacalao-fish.jpg',
                status: 'Opening now',
                price: 33.45,
                website: 'https://edition.cm.com',
                socialNetworks: {
                    facebook: 'https://www.facebook.com/profile.php?id=100088445076081',
                    instagram: 'https://www.instagram.com/profile.php?id=100088445076081',
                    twitter: 'https://www.facebook.com/profile.php?id=100088445076081',
                    google: 'https://www.facebook.com/profile.php?id=100088445076081',
                }


            },
            {
                name: 'Tostasdasas de tomate ssdsy jamón',
                uri: 'https://cdn4.tuscanynowandmore.com/storage/app/media/discover-italy/bacalao-fish.jpg',
                status: 'Opening now',
                price: 33.45,
                website: 'https://edition.cm.com',
                socialNetworks: {
                    facebook: 'https://www.facebook.com/profile.php?id=100088445076081',
                    instagram: 'https://www.instagram.com/profile.php?id=100088445076081'
                }


            },
            {
                name: 'Gazpachocsssf',
                uri: 'https://www.foodandwine.com/thmb/dX7pNh_WX83ESqb9VJuvkBwVKwM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Braciole-FT-RECIPE1122-66acf49cef0e4390bec780945709e7f3.jpg',
                status: 'closing soon',
                price: 32.45,
                website: 'https://edition.cm.com',
                socialNetworks: {
                    facebook: 'https://www.facebook.com/profile.php?id=100088445076081',
                    instagram: 'https://www.instagram.com/profile.php?id=100088445076081'
                }


            },
            {
                name: 'Tortilla Española.',
                uri: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love-1080x700.jpg',
                status: 'closing soon',
                price: 32.45,
                website: 'https://edition.cm.com',
                socialNetworks: {
                    facebook: 'https://www.facebook.com/profile.php?id=100088445076081',
                    instagram: 'https://www.instagram.com/profile.php?id=100088445076081'
                }


            },
        ]
    )
    const [categories, setCategories] = useState([
        {
            name: 'BBQ',
            url: 'https://cdn.tgdd.vn/Files/2022/03/23/1421842/tiec-bbq-la-gi-cach-tu-lam-tiec-bbq-tai-nha-vo-cung-don-gian-202203231023421660.jpg'
        },
        {
            name: 'BreakFirst',
            url: 'https://potatorolls.com/wp-content/uploads/Lumberjack-Breakfast2-1280x720.jpg'
        },
        {
            name: 'Coffe',
            url: 'https://media.cnn.com/api/v1/images/stellar/prod/150929101049-black-coffee-stock.jpg'
        },
        {
            name: 'Noodle',
            url: 'https://static01.nyt.com/images/2022/03/09/dining/09Kenji-Garlic-Noodles-e/merlin_202696338_41f4cf49-3706-44b8-a732-cbcfc7e955dd-superJumbo.jpg'
        },
        {
            name: 'Dinner',
            url: 'https://www.realsimple.com/thmb/fMh6cWLYxsddO3BuSJXanCk1gpI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-dinner-recipes-f768402675e04452b1531360736da8b5.jpg'
        },
        {
            name: 'Dessert',
            url: 'https://hips.hearstapps.com/hmg-prod/images/desserts-for-two-1673973847.jpeg'
        },
        {
            name: 'Bererages',
            url: 'https://f.hubspotusercontent00.net/hubfs/4662006/Beverage_compounds_drinks.jpg'
        },
        {
            name: 'wine',
            url: 'https://media.istockphoto.com/id/615269202/photo/wine-pouring-into-glass.jpg?s=612x612&w=0&k=20&c=tArfjALNJqxwSkWE_pfT0f5klPaG-K7KrU1temBGths='
        },

    ])
    const [searchText, setSearchText] = useState('')
    const filteredFoods = () => foods.filter(eachFood => eachFood.name.toLowerCase().includes(searchText.toLowerCase()))
    return <View style={{ flex: 100, backgroundColor: 'white' }}>

        <View style={{
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        }}>
            <Icon color={colors.inactive} name={'search'} size={20}
                style={{

                    position: 'absolute',
                    top: 18,
                    left: 10
                }} />
            <TextInput
                onChangeText={(text) => setSearchText(text)}
                autoCorrect={false}
                placeholder="search"
                style={{
                    backgroundColor: colors.inactive,
                    color: 'black',
                    height: 35,
                    width: 320,
                    marginHorizontal: 10,
                    marginEnd: 0,
                    marginLeft:20,
                    borderRadius: 5,
                    paddingStart: 30,
                    opacity: 0.8
                }} />
            <Icon style={{ marginEnd: 0,marginLeft:5}} color={colors.inactive} name={'bars'} size={30} />
        </View>

        <View style={{
            height: 100,
        }}>
            <View style={{ backgroundColor: colors.inactive, height: 1 }}></View>
            <FlatList

                horizontal={true}
                data={categories}
                keyExtractor={item => item.name}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => {
                        // alert(`press ${item.name}`)
                        navigation.navigate('DetailFood',{
                            name:item.name,
                            url:item.url,

                        },)
                    }} style={{
                        marginLeft:10,
                        height: 100, width: 100,
                        justifyContent: 'center'
                    }}>
                        <Image source={{
                            // uri: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love-1080x700.jpg',
                            uri: item.url
                        }}
                            style={{
                                height: 50,
                                width: 50,
                                borderRadius: 25,

                            }} />
                        <Text style={{ color: 'black' }}>{item.name}</Text>
                    </TouchableOpacity>
                }

                style={{ flex: 1 }}>

            </FlatList>
            <View style={{ backgroundColor: colors.inactive, height: 1 }}></View>
        </View>
        {/* <ScrollView>
            {foods.map(eachFood=><FoodItems 
            foods={eachFood} key={eachFood.name}/>)} //cach 1
        </ScrollView> */}
        {filteredFoods().length > 0 ? <FlatList                               //cach 2
            data={filteredFoods()}
            renderItem={({ item }) =>
            <TouchableOpacity >
            <View  style={{
                
                flexDirection:'row',
            }}>
                <Image source={{
                    // uri: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love-1080x700.jpg',
                    uri:item.uri
                }}
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius:10,
                        margin:10
                    }} />
                <View style={{
                    width: "100%",
                    flex: 1,
                    margin: 10,
        
        
                }}>
                    <Text style={{
                        fontSize: 15,
                        color: 'black',
                    }} >{item.name}</Text>
                    <View style={{ backgroundColor: 'black', height: 1 }}></View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: colors.inactive }}>Status:</Text>
                        <Text style={{ color: _getColorFromStatus(item.status), }}>{item.status.toUpperCase()}</Text>
                    </View>
                    
                    <Text style={{ color: colors.inactive }}>{item.price}$</Text>
                    {/* <TouchableOpacity style={{height:20,width:20,backgroundColor:'red'}}></TouchableOpacity> */}
                    <Text style={{ color: colors.inactive }}>website:{item.website}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        { item.socialNetworks['facebook']!=undefined&&<Icon name='facebook'
                            size={20}
                            color={colors.inactive} style={{}} />}
                        {item.socialNetworks ['google'] != undefined && <Icon name='google'
                            size={20} color={colors.inactive}
                            style={{ marginStart: 5 }} />}
                        {item.socialNetworks ['instagram'] != undefined && <Icon name='instagram'
                            size={20} color={colors.inactive}
                            style={{ marginStart: 5 }} />}
                        {item.socialNetworks ['twitter'] != undefined && <Icon name='twitter'
                            size={20} color={colors.inactive}
                            style={{ marginStart: 5 }} />}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
            }
            keyExtractor={eachFood => eachFood.name}
        /> : <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ color: colors.inactive, alignSelf: 'center' }}>Not foods found</Text>
        </View>}

    </View>
}
export default Food