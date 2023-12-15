// // import React from "react";
// // import { View,Text,FlatList,ScrollView ,Image,TouchableOpacity} from "react-native";
// // import { useState } from "react";

// // global.mycart=[]
// // function Cart({ route}){
// //     const { name, price, url } = route.params;
// //  // const { name, url, price} = route.params;
// //     return  <ScrollView>
// //         <View style={{ flex: 100 }}>
// //             <View style={{ flex: 30, borderWidth: 2, borderRadius: 10, marginHorizontal: 10 }}>
// //                 <Image source={{ uri: url }} style={{ height: 200, width: '100%', resizeMode: 'center' }} />
// //                 <Text>Name: {name}</Text>
// //                 <Text>Price: ${price}</Text>
// //             </View>

// //             <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
// //                 {/* Nút tăng giảm số lượng sản phẩm */}
// //             </View>

// //             <View style={{ flex: 50 }}>
// //                 {/* Hiển thị danh sách sản phẩm trong giỏ hàng */}
// //                 <FlatList
// //                     data={global.mycart}
// //                     keyExtractor={(item, index) => index.toString()}
// //                     renderItem={({ item }) => (
// //                         <View>
// //                             <Text>Name: {item.name}</Text>
// //                             <Text>Price: ${item.price}</Text>
// //                             <Image source={{ uri: item.url }} style={{ height: 50, width: 50, resizeMode: 'cover' }} />
// //                             {/* Các thông tin khác của sản phẩm */}
// //                         </View>
// //                     )}
// //                 />
// //             </View>
// //         </View>
// //     </ScrollView>
// // }
// // export default Cart


// import React, { useState } from "react";
// import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from "react-native";

// global.mycart = [];

// function Cart({ route, navigation }) {
//     const { name, url, price } = route.params;
//     const [count, setCount] = useState(1);

//     const addToCart = () => {
//         const newItem = {
//             name,
//             url,
//             price,
//             quantity: count,
//         };
//         global.mycart.push(newItem);
//         setCount(1);
//         // Navigate to the cart screen or any other screen you want to show the updated cart
//         navigation.navigate("Cart");
//     };

//     return (
//         <ScrollView>
//             <View style={{ flex: 100 }}>
//                 {/* <View
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
//                 </View> */}
                
//                 <TouchableOpacity
//                     style={{
//                         backgroundColor: "green",
//                         height: 40,
//                         width: "50%",
//                         justifyContent: "center",
//                         borderRadius: 10,
//                         alignItems: "center",
//                         alignSelf: "center",
//                     }}
//                     onPress={addToCart}
//                 >
//                     {/* <Text style={{ color: "white", fontSize: 20 }}>Add to Cart</Text> */}
//                 </TouchableOpacity>
//                 <View style={{ flex: 50 }}>
//                     <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>Cart</Text>

//                     {global.mycart.length > 0 ? (
//                         <FlatList
//                             data={global.mycart}
//                             keyExtractor={(item, index) => index.toString()}
//                             renderItem={({ item }) => (
//                                 <View>
//                                     <Image source={{ uri: item.url }} style={{ height: 50, width: 50, resizeMode: 'cover' }} />
//                                     <Text>{item.name} - ${item.price} - Quantity: {item.quantity}</Text>
//                                 </View>
//                             )}
//                         />
//                     ) : (
//                         <Text>Your cart is empty.</Text>
//                     )}
//                 </View>
//             </View>
//         </ScrollView>
//     );
// }

// export default Cart;


import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from "react-native";

global.mycart = [];

function Cart({ route, navigation }) {
    const { updatedCart } = route.params || { updatedCart: [] };
    const [cartItems, setCartItems] = useState(updatedCart);

    const increaseQuantity = (index) => {
        const updatedItems = [...cartItems];
        updatedItems[index].quantity++;
        updatedItems[index].totalPrice = updatedItems[index].quantity * updatedItems[index].price; // Update the total price
        setCartItems(updatedItems);
        global.mycart = updatedItems;
    };

    const decreaseQuantity = (index) => {
        const updatedItems = [...cartItems];
        if (updatedItems[index].quantity > 1) {
            updatedItems[index].quantity--;
            updatedItems[index].totalPrice = updatedItems[index].quantity * updatedItems[index].price; // Update the total price
            setCartItems(updatedItems);
            global.mycart = updatedItems;
        }
    };

    const removeItem = (index) => {
        const updatedItems = [...cartItems];
        updatedItems.splice(index, 1);
        setCartItems(updatedItems);
        global.mycart = updatedItems;
    };

    return (
        <ScrollView>
            <View style={{ flex: 100 }}>
                <View style={{ flex: 30 }}>
                    {cartItems.map((item, index) => (
                        <View key={index} style={{ borderWidth: 2, borderRadius: 10, marginHorizontal: 10 }}>
                            <Image source={{ uri: item.url }} style={{ height: 200, width: "100%", resizeMode: "center" }} />
                            <Text>Name: {item.name}</Text>
                            <Text>Price: ${item.price}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => decreaseQuantity(index)}>
                                    <Text style={{ fontSize: 20, color: 'blue', marginHorizontal: 10 }}>-</Text>
                                </TouchableOpacity>
                                <Text>Quantity: {item.quantity}</Text>
                                <TouchableOpacity onPress={() => increaseQuantity(index)}>
                                    <Text style={{ fontSize: 20, color: 'blue', marginHorizontal: 10 }}>+</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => removeItem(index)}>
                                    <Text style={{ fontSize: 16, color: 'red', marginHorizontal: 10 }}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                            <Text>Total: ${item.totalPrice}</Text>
                        </View>
                    ))}
                </View>
                <View style={{ flex: 50 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>Cart</Text>

                    {cartItems.length > 0 ? (
                        <FlatList
                            data={cartItems}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => (
                                <View>
                                    <Image source={{ uri: item.url }} style={{ height: 50, width: 50, resizeMode: 'cover' }} />
                                    <Text>{item.name} - ${item.price} - Quantity: {item.quantity}</Text>
                                    <Text>Total: ${item.totalPrice}</Text>
                                    <TouchableOpacity onPress={() => removeItem(index)}>
                                        <Text style={{ fontSize: 16, color: 'red' }}>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    ) : (
                        <Text>Your cart is empty.</Text>
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

export default Cart;