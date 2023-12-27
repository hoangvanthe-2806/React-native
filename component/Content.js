// import React from 'react';
// import { useState, useEffect } from "react";
// import { useNavigation } from '@react-navigation/native';
// import { FlatList, TouchableOpacity, View, Text, Image } from "react-native";
// import axios from 'axios';


// function Content(props) {

//     // const {navigation,router} =props
//     // // function cua navigate to/back
//     // const {navigate,goBack} =navigation
//     const navigation = useNavigation();
//     // const handleItemClick = () => {
//     //     navigation.navigate('productDetail',{itemId:1}); // Đảm bảo 'ChiTietItem' là tên màn hình bạn muốn chuyển đến
//     //   };
//     // const [product, setproduct] = useState([{
//     //     name: 'Samsung Galaxy1 A05s',
//     //     url: 'https://cdn.tgdd.vn/Products/Images/42/317530/samsung-galaxy-a05s-sliver-thumb-600x600.jpeg',
//     //     price: '4.290.000₫',
//     //     specification: [
//     //         'Chip Snapdragon 680',
//     //         'RAM: 6 GB',
//     //         'Dung lượng: 128 GB',
//     //     ],

//     // },
//     // {
//     //     name: 'Samsung Galaxy2 A05ss',
//     //     url: 'https://cdn.tgdd.vn/Products/Images/42/317530/samsung-galaxy-a05s-sliver-thumb-600x600.jpeg',
//     //     price: '4.290.000₫',
//     //     specification: [
//     //         'Chip Snapdragon 680',
//     //         'RAM: 6 GB',
//     //         'Dung lượng: 128 GB',
//     //     ],

//     // },
//     // {
//     //     name: 'Samsung Galaxy3 A05sss',
//     //     url: 'https://cdn.tgdd.vn/Products/Images/42/317530/samsung-galaxy-a05s-sliver-thumb-600x600.jpeg',
//     //     price: '4.290.000₫',
//     //     specification: [
//     //         'Chip Snapdragon 680',
//     //         'RAM: 6 GB',
//     //         'Dung lượng: 128 GB',
//     //     ],

//     // },
//     // {
//     //     name: 'Samsung Galaxy A05ssss',
//     //     url: 'https://cdn.tgdd.vn/Products/Images/42/317530/samsung-galaxy-a05s-sliver-thumb-600x600.jpeg',
//     //     price: '4.290.000₫',
//     //     specification: [
//     //         'Chip Snapdragon 680',
//     //         'RAM: 6 GB',
//     //         'Dung lượng: 128 GB',
//     //     ],

//     // },
//     // {
//     //     name: 'Samsung Galaxy5 A05sssss',
//     //     url: 'https://cdn.tgdd.vn/Products/Images/42/317530/samsung-galaxy-a05s-sliver-thumb-600x600.jpeg',
//     //     price: '4.290.000₫',
//     //     specification: [
//     //         'Chip Snapdragon 680',
//     //         'RAM: 6 GB',
//     //         'Dung lượng: 128 GB',
//     //     ],

//     // },
//     // {
//     //     name: 'Samsung Galaxy6 A05sssss',
//     //     url: 'https://cdn.tgdd.vn/Products/Images/42/317530/samsung-galaxy-a05s-sliver-thumb-600x600.jpeg',
//     //     price: '4.290.000₫',
//     //     specification: [
//     //         'Chip Snapdragon 680',
//     //         'RAM: 6 GB',
//     //         'Dung lượng: 128 GB',
//     //     ],

//     // },
//     // ])
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
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products')
//             .then(res => res.json())
//             .then(json => setProducts(json))
//     }, []);

//     return <View style={{
//         width: '100%',
//         backgroundColor: "white",
//         flex: 70
//     }}>
//         <FlatList
//             keyExtractor={item => item.name}
//             numColumns={2}
//             data={products}
//             renderItem={({ item, index }) => <TouchableOpacity
//                 onPress={() => {
//                     navigation.navigate('productDetail', {
//                         name: item.title,
//                         url: item.image,
//                         price: item.price,
//                         // specification: item.specification,
//                     });
//                 }}
//                 style={{
//                     flex: 1,
//                     // backgroundColor: index % 2 == 0 ? 'green' : 'red',
//                     //height: 200,
//                     marginLeft: index % 2 == 0 ? 8 : 2,
//                     // height:200,
//                     marginTop: 5,
//                     marginRight: index % 2 == 0 ? 2 : 8,
//                     marginBottom: 5,
//                     borderRadius: 20,
//                     borderWidth: 1,
//                     borderColor: 'black'
//                 }} >

//                 <View style={{
//                     flexDirection: 'row'
//                 }}>

//                     <Image source={{
//                         uri: item.image
//                     }}
//                         style={{
//                             height: 100,
//                             width: 100,
//                             borderRadius: 10,
//                             margin: 10,
//                             resizeMode: 'cover'
//                         }} />
//                     <Text style={{ color: 'red', marginStart: 10 }}>${item.price}</Text>
//                 </View>
//                 <Text style={{ color: 'black' }}>{item.title}</Text>
//                 <View style={{ flex: 1 }}>
//                     <View style={{ height: 30 }}></View>
//                     <TouchableOpacity
//                         onPress={()=>{
//                             const productInfo = {
//                                 name: item.title,
//                                 price: item.price,
//                                 url: item.image,
//                             };
                    
//                             // Thêm sản phẩm vào giỏ hàng
//                             global.mycart.push(productInfo);
//                             //-----------------------
//                             navigation.navigate('Cart',{
//                                 name: item.title,
//                                 url: item.image,
//                                 price: item.price,
//                                 // specification: item.specification,
//                             });
//                         }}
//                         style={{
//                             backgroundColor: 'blue',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             borderWidth: 2,
//                             borderRadius: 15,
//                             height: 20,
//                             position: 'absolute',
//                             bottom: 2,
//                             marginLeft: 50
//                         }}>
//                         <Text style={{
//                             color: 'white',

//                         }}>Add to cart</Text>
//                     </TouchableOpacity>
//                 </View>    

//                 {/* {item.specification.map(specification =>
//                     <Text
//                         key={item.specification}
//                         style={{
//                             color: 'black',
//                             fontSize: 14,
//                             marginHorizontal: 5,

//                         }}>-{specification}</Text>)} */}
//             </TouchableOpacity>}
//         />
//     </View>
// }
// export default Content 


import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity, View, Text, Image } from 'react-native';
import axios from 'axios';

function Content() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const addToCart = (item) => {
    const newItem = {
      name: item.title,
      url: item.image,
      price: item.price,
      quantity: 1,
    };
    global.mycart.push(newItem);
    // Thay đổi dòng sau để truyền dữ liệu giỏ hàng cập nhật
    navigation.navigate('Cart', { updatedCart: [...global.mycart] });
  };

  return (
    <View style={{ width: '100%', backgroundColor: 'white', flex: 70 }}>
      <FlatList
        keyExtractor={(item) => item.name}
        numColumns={2}
        data={products}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('productDetail', {
                name: item.title,
                url: item.image,
                price: item.price,
                description:item.description,
                addToCart: addToCart, // Thêm hàm addToCart vào navigation params
              })
            }
            style={{
              flex: 1,
              marginLeft: index % 2 == 0 ? 8 : 2,
              marginTop: 5,
              marginRight: index % 2 == 0 ? 2 : 8,
              marginBottom: 5,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: 'black',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={{ uri: item.image }}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                  margin: 10,
                  resizeMode: 'cover',
                }}
              />
              <Text style={{ color: 'red', marginStart: 10 }}>
                ${item.price}
              </Text>
            </View>
            <Text style={{ color: 'black' }}>{item.title}</Text>
            <View style={{ flex: 1 }}>
              <View style={{ height: 30 }}></View>
              <TouchableOpacity
                onPress={() => addToCart(item)}
                style={{
                  backgroundColor: 'blue',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderRadius: 15,
                  height: 20,
                  position: 'absolute',
                  bottom: 2,
                  marginLeft: 50,
                }}
              >
                <Text style={{ color: 'white' }}>Add to cart</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Content;