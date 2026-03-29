import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { cart } from '../cartData';

export default function Beverages() {

  const drinks = [
    { id:1, name:'Coca Cola', price:'$2.99', image:require('../assets/images/3.jpg') },
    { id:2, name:'Pepsi', price:'$2.49', image:require('../assets/images/13.jpg') },
    { id:3, name:'Orange Juice', price:'$3.99', image:require('../assets/images/14.jpg') },
    { id:4, name:'Apple Juice', price:'$3.49', image:require('../assets/images/15.jpg') },
    { id:5, name:'Mango Juice', price:'$3.79', image:require('../assets/images/16.jpg') },
    { id:6, name:'Milk Tea', price:'$4.19', image:require('../assets/images/17.jpg') },
  ];

  return (
    <ScrollView style={{ flex:1, backgroundColor:'#fff' }}>

      {/* TITLE */}
      <Text style={{
        fontSize:20,
        fontWeight:'bold',
        margin:15
      }}>
        Beverages
      </Text>

      {/* GRID */}
      <View style={{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        paddingHorizontal:15
      }}>

        {drinks.map(item => (
          <View key={item.id} style={{
            width:'48%',
            backgroundColor:'#fff',
            borderRadius:20,
            padding:15,
            marginBottom:15,
            elevation:4
          }}>

            {/* IMAGE */}
            <Image
              source={item.image}
              style={{
                width:100,
                height:100,
                alignSelf:'center'
              }}
            />

            {/* NAME */}
            <Text style={{
              marginTop:10,
              fontWeight:'bold'
            }}>
              {item.name}
            </Text>

            {/* SUB */}
            <Text style={{ color:'#888' }}>
              1L, Price
            </Text>

            {/* PRICE + BUTTON */}
            <View style={{
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems:'center',
              marginTop:10
            }}>

              <Text style={{ fontWeight:'bold' }}>
                {item.price}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  cart.push(item);
                  alert('Added to cart');
                }}
                style={{
                  backgroundColor:'#53B175',
                  width:35,
                  height:35,
                  borderRadius:10,
                  justifyContent:'center',
                  alignItems:'center'
                }}
              >
                <Text style={{
                  color:'#fff',
                  fontSize:18
                }}>
                  +
                </Text>
              </TouchableOpacity>

            </View>

          </View>
        ))}

      </View>

    </ScrollView>
  );
}