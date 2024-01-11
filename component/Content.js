

import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity, View, Text, Image,ScrollView,TextInput} from 'react-native';
import axios from 'axios';
import Icon from "react-native-vector-icons/FontAwesome5"
import { icons, images, colors, Icons } from "../constant"

function Content() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((item) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.category.toLowerCase() === searchTerm.toLowerCase()
);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        const uniqueCategories = [...new Set(json.map(item => item.category))];
        setCategories(uniqueCategories);
      });
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
      <ScrollView horizontal>
  {categories.map(category => (
    <TouchableOpacity
      key={category}
      onPress={() => setSearchTerm(category)}
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: searchTerm === category ? 'black' : 'gray',
      }}
    >
      <Text style={{ color: 'black' }}>{category}</Text>
    </TouchableOpacity>
  ))}
</ScrollView>
      
      
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
        <ScrollView>
          <View style={{
            paddingHorizontal: 10,
            marginBottom: 10,
          }}>
            <TextInput
              style={{
                marginLeft:20
              }}
              placeholder="Search products..."
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
            />
          </View>
        </ScrollView>
        <Icon style={{ marginEnd: 20 }} color={colors.inactive} name={'bars'} size={30} />
      </View>
      <FlatList
        horizontal={false}
        keyExtractor={(item) => item.name}
        numColumns={2}
        data={filteredProducts}
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
                  backgroundColor: '#ED6263',
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