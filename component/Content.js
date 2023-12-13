import React from 'react';
import { useState,useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity, View, Text, Image } from "react-native";
import axios from 'axios';


function Content(props) {
    // const {navigation,router} =props
    // // function cua navigate to/back
    // const {navigate,goBack} =navigation
    const navigation = useNavigation();
    // const handleItemClick = () => {
    //     navigation.navigate('productDetail',{itemId:1}); // Đảm bảo 'ChiTietItem' là tên màn hình bạn muốn chuyển đến
    //   };
    // const [product, setproduct] = useState([{
    //     name: 'Samsung Galaxy1 A05s',
    //     url: 'https://cdn.tgdd.vn/Products/Images/42/317530/samsung-galaxy-a05s-sliver-thumb-600x600.jpeg',
    //     price: '4.290.000₫',
    //     specification: [
    //         'Chip Snapdragon 680',
    //         'RAM: 6 GB',
    //         'Dung lượng: 128 GB',
    //     ],

    // },
    // {
    //     name: 'Samsung Galaxy2 A05ss',
    //     url: 'https://cdn.tgdd.vn/Products/Images/42/317530/samsung-galaxy-a05s-sliver-thumb-600x600.jpeg',
    //     price: '4.290.000₫',
    //     specification: [
    //         'Chip Snapdragon 680',
    //         'RAM: 6 GB',
    //         'Dung lượng: 128 GB',
    //     ],

    // },
    // {
    //     name: 'Samsung Galaxy3 A05sss',
    //     url: 'https://cdn.tgdd.vn/Products/Images/42/317530/samsung-galaxy-a05s-sliver-thumb-600x600.jpeg',
    //     price: '4.290.000₫',
    //     specification: [
    //         'Chip Snapdragon 680',
    //         'RAM: 6 GB',
    //         'Dung lượng: 128 GB',
    //     ],

    // },
    // {
    //     name: 'Samsung Galaxy A05ssss',
    //     url: 'https://cdn.tgdd.vn/Products/Images/42/317530/samsung-galaxy-a05s-sliver-thumb-600x600.jpeg',
    //     price: '4.290.000₫',
    //     specification: [
    //         'Chip Snapdragon 680',
    //         'RAM: 6 GB',
    //         'Dung lượng: 128 GB',
    //     ],

    // },
    // {
    //     name: 'Samsung Galaxy5 A05sssss',
    //     url: 'https://cdn.tgdd.vn/Products/Images/42/317530/samsung-galaxy-a05s-sliver-thumb-600x600.jpeg',
    //     price: '4.290.000₫',
    //     specification: [
    //         'Chip Snapdragon 680',
    //         'RAM: 6 GB',
    //         'Dung lượng: 128 GB',
    //     ],

    // },
    // {
    //     name: 'Samsung Galaxy6 A05sssss',
    //     url: 'https://cdn.tgdd.vn/Products/Images/42/317530/samsung-galaxy-a05s-sliver-thumb-600x600.jpeg',
    //     price: '4.290.000₫',
    //     specification: [
    //         'Chip Snapdragon 680',
    //         'RAM: 6 GB',
    //         'Dung lượng: 128 GB',
    //     ],

    // },
    // ])
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, []);

    return <View style={{
        width: '100%',
        backgroundColor: "white",
        flex: 70
    }}>
        <FlatList
            keyExtractor={item=>item.name}
            numColumns={2}
            data={products}
            renderItem={({ item, index }) => <TouchableOpacity
            onPress={() => {
                navigation.navigate('productDetail', {
                    name: item.title,
                    url: item.image,
                    price: item.price,
                    // specification: item.specification,
                  });
            }}
                style={{
                    flex: 1,
                    // backgroundColor: index % 2 == 0 ? 'green' : 'red',
                    //height: 200,
                    marginLeft: index % 2 == 0 ? 8 : 2,
                    // height:200,
                    marginTop: 5,
                    marginRight: index % 2 == 0 ? 2 : 8,
                    marginBottom: 5,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: 'black'
                }} >

                <Image source={{
                    uri: item.image
                }}
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: 10,
                        margin: 10,
                        resizeMode: 'cover'
                    }} />
                <Text style={{ color: 'black' }}>{item.title}</Text>
                
                <Text style={{ color: 'red', marginStart: 10 }}>${item.price}</Text>
                {/* {item.specification.map(specification =>
                    <Text
                        key={item.specification}
                        style={{
                            color: 'black',
                            fontSize: 14,
                            marginHorizontal: 5,

                        }}>-{specification}</Text>)} */}
            </TouchableOpacity>}
        />
    </View>
}
export default Content 
