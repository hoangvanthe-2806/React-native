
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function ProductDetail({ route}) {
//   const { name, url, price, specification } = route.params;
    const { name, url, price} = route.params;
    return <ScrollView>
    <View>
        <Image
            source={{ uri: url }}
            style={{ height: 450, width: '100%', resizeMode:'contain' }}
        />
        <Text>Name: {name}</Text>
        <Text>Price: {price}</Text>
        <Text>Specifications:</Text>

        {/* {specification.map((spec, index) => (
            <Text key={index}>{spec}</Text>
        ))} */}
    </View>
</ScrollView>
        
    
};

export default ProductDetail;