
// import React from 'react';
// import { View, Text, Image, ScrollView,TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// function ProductDetail({ route }) {
//     const addToCart = () => {
//         const newItem = {
//           name,
//           url,
//           price,
//           quantity: count,
//         };
//         global.mycart.push(newItem);
//         setCount(1);
//         // Navigate to the cart screen or any other screen you want to show the updated cart
//         navigation.navigate("Cart");
//       };
//     //   const { name, url, price, specification } = route.params;
//     const navigation=useNavigation()
//     const { name, url, price } = route.params;
//     return <ScrollView>
//         <View
//                     style={{
//                         flex: 30,
//                         borderWidth: 2,
//                         borderRadius: 10,
//                         marginHorizontal: 10,
//                     }}
//                 >
//                     <Image
//                         source={{ uri: url }}
//                         style={{ height: 200, width: "100%", resizeMode: "center" }}
//                     />
//                     <Text>Name: {name}</Text>
//                     <Text>Price: ${price}</Text>
//                 </View>
//         <View>
//             <TouchableOpacity
//                 onPress={() => {
//                     navigation.navigate('Cart');
//                 }}
//                 style={{
//                     backgroundColor: 'blue',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     borderWidth: 2,
//                     borderRadius: 15,
//                     height: 20,
//                     marginHorizontal:50
//                 }}>
//                 <Text style={{
//                     color: 'white',

//                 }}>Add to cart</Text>
//             </TouchableOpacity>
//         </View>
//     </ScrollView>


// };

// export default ProductDetail;
//cai nay dang dùng chính
// import React, { useState } from 'react';
// import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// function ProductDetail({ route }) {
//     const navigation = useNavigation();
//     const { name, url, price } = route.params;

//     const addToCart = () => {
//         const newItem = {
//             name,
//             url,
//             price,
//             quantity: count,
//         };
//         global.mycart.push(newItem);
//         setCount(1);
//         navigation.navigate("Cart");
//     };

//     return (
//         <ScrollView>
//             <View style={{ flex: 30, borderWidth: 2, borderRadius: 10, marginHorizontal: 10 }}>
//                 <Image source={{ uri: url }} style={{ height: 200, width: "100%", resizeMode: "center" }} />
//                 <Text>Name: {name}</Text>
//                 <Text>Price: ${price}</Text>
//             </View>
            
//             <View>
//                 <TouchableOpacity
//                     onPress={addToCart}
//                     style={{
//                         backgroundColor: 'blue',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         borderWidth: 2,
//                         borderRadius: 15,
//                         height: 20,
//                         marginHorizontal: 50,
//                     }}
//                 >
//                     <Text style={{ color: 'white' }}>Add to cart</Text>
//                 </TouchableOpacity>
//             </View>
//         </ScrollView>
//     );
// }

// export default ProductDetail;

import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ProductDetail({ route }) {
    const navigation = useNavigation();
    const { name, url, price } = route.params;
    const [count, setCount] = useState(1);

    const addToCart = () => {
        const newItem = {
            name,
            url,
            price,
            quantity: count,
        };
        global.mycart.push(newItem);
        setCount(1);
        navigation.navigate('Cart');
    };

    return (
        <ScrollView>
            <View style={{ flex: 30, borderWidth: 2, borderRadius: 10, marginHorizontal: 10 }}>
                <Image source={{ uri: url }} style={{ height: 200, width: '100%', resizeMode: 'center' }} />
                <Text>Name: {name}</Text>
                <Text>Price: ${price}</Text>
            </View>

            <View>
                <TouchableOpacity
                    onPress={addToCart}
                    style={{
                        backgroundColor: 'blue',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 2,
                        borderRadius: 15,
                        height: 20,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                >
                    <Text style={{ color: 'white' }}>Add to cart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Content')}
                    style={{
                        backgroundColor: 'green',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 2,
                        borderRadius: 15,
                        height: 20,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                >
                    <Text style={{ color: 'white' }}>View Content</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => addToCart}
                    style={{
                        backgroundColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 2,
                        borderRadius: 15,
                        height: 20,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                >
                    <Text style={{ color: 'white' }}>View Cart</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default ProductDetail;