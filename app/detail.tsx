import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Detail() {

  const { id } = useLocalSearchParams();

  const [qty, setQty] = useState(1);
  const [fav, setFav] = useState(false);

  const data = {
    1: {
      name:'Organic Bananas',
      price:4.99,
      image:require('../assets/images/1.jpg'),
      desc:'Organic bananas are rich in potassium and fiber. They help improve digestion and boost energy.'
    },
    2: {
      name:'Red Apple',
      price:4.99,
      image:require('../assets/images/2.jpg'),
      desc:'Red apples are sweet, juicy, rich in vitamins and antioxidants. Good for heart and digestion.'
    }
  };

  const item = data[id];

  return (
    <ScrollView style={{ flex:1, backgroundColor:'#fff' }}>

      {/* IMAGE */}
      <Image
        source={item.image}
        style={{
          width:'100%',
          height:300,
          borderBottomLeftRadius:30,
          borderBottomRightRadius:30
        }}
      />

      <View style={{ padding:20 }}>

        {/* NAME + HEART */}
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
        }}>
          <Text style={{ fontSize:24, fontWeight:'bold' }}>
            {item.name}
          </Text>

          <TouchableOpacity onPress={() => setFav(!fav)}>
            <Ionicons
              name={fav ? 'heart' : 'heart-outline'}
              size={26}
              color={fav ? 'red' : 'black'}
            />
          </TouchableOpacity>
        </View>

        {/* PRICE */}
        <Text style={{
          fontSize:20,
          color:'#53B175',
          marginTop:10
        }}>
          ${item.price}
        </Text>

        {/* QUANTITY */}
        <View style={{
          flexDirection:'row',
          alignItems:'center',
          marginTop:20
        }}>

          <TouchableOpacity
            onPress={() => qty > 1 && setQty(qty - 1)}
            style={{
              borderWidth:1,
              borderColor:'#ccc',
              width:40,
              height:40,
              justifyContent:'center',
              alignItems:'center',
              borderRadius:10
            }}
          >
            <Text style={{ fontSize:18 }}>-</Text>
          </TouchableOpacity>

          <Text style={{
            marginHorizontal:20,
            fontSize:18
          }}>
            {qty}
          </Text>

          <TouchableOpacity
            onPress={() => setQty(qty + 1)}
            style={{
              backgroundColor:'#53B175',
              width:40,
              height:40,
              justifyContent:'center',
              alignItems:'center',
              borderRadius:10
            }}
          >
            <Text style={{ color:'#fff', fontSize:18 }}>+</Text>
          </TouchableOpacity>

        </View>

        {/* DESCRIPTION */}
        <Text style={{
          fontSize:18,
          fontWeight:'bold',
          marginTop:20
        }}>
          Product Detail
        </Text>

        <Text style={{
          marginTop:10,
          color:'#666',
          lineHeight:22
        }}>
          {item.desc}
        </Text>

        {/* ADD TO BASKET */}
        <TouchableOpacity style={{
          marginTop:30,
          backgroundColor:'#53B175',
          padding:18,
          borderRadius:15,
          alignItems:'center'
        }}>
          <Text style={{
            color:'#fff',
            fontSize:16,
            fontWeight:'bold'
          }}>
            Add To Basket
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}