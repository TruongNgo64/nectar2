import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { addToCart } from '../cartData';

export default function Explore() {

  const router = useRouter();

  const categories = [
    { id:1, name:'Fresh Fruit', image:require('../assets/images/8.jpg') },
    { id:2, name:'Cooking Oil', image:require('../assets/images/9.jpg') },
    { id:3, name:'Meat & Fish', image:require('../assets/images/5.jpg') },
    { id:4, name:'Bakery & Snack', image:require('../assets/images/10.jpg') },
    { id:5, name:'Dairy', image:require('../assets/images/11.jpg') },
    { id:6, name:'Beverages', image:require('../assets/images/12.jpg') },
  ];

  return (
    <ScrollView style={{ flex:1, backgroundColor:'#fff' }}>

      {/* TITLE */}
      <Text style={{
        fontSize:20,
        fontWeight:'bold',
        margin:15
      }}>
        Find Products
      </Text>

      {/* SEARCH */}
      <View style={{ paddingHorizontal:15 }}>
        <TextInput
          placeholder="Search Store"
          style={{
            backgroundColor:'#f2f2f2',
            padding:15,
            borderRadius:15
          }}
        />
      </View>

      {/* GRID */}
      <View style={{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        paddingHorizontal:15,
        marginTop:15
      }}>

        {categories.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              if(item.name === 'Beverages'){
                router.push('/beverages');
              }
            }}
            style={{
              width:'48%',
              backgroundColor:'#f9f9f9',
              borderRadius:20,
              padding:15,
              marginBottom:15,
              alignItems:'center'
            }}
          >

            <Image
              source={item.image}
              style={{
                width:80,
                height:80
              }}
            />

            <Text style={{
              marginTop:10,
              fontWeight:'bold'
            }}>
              {item.name}
            </Text>

          </TouchableOpacity>
        ))}

      </View>

    </ScrollView>
  );
}