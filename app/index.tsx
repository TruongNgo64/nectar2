import { useRouter } from 'expo-router';
import { Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default function Home() {

  const router = useRouter();

  const products = [
    { id:1, name:'Organic Bananas', price:'$4.99', image:require('../assets/images/1.jpg') },
    { id:2, name:'Red Apple', price:'$4.99', image:require('../assets/images/2.jpg') },
  ];

  const banner = require('../assets/images/6.jpg');

  return (
    <ScrollView style={{ flex:1, backgroundColor:'#fff' }}>

      {/* SEARCH */}
      <View style={{ padding:15 }}>
        <TextInput
          placeholder="Search Store"
          style={{
            backgroundColor:'#f2f2f2',
            padding:15,
            borderRadius:15
          }}
        />
      </View>

      {/* BANNER */}
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        <Image
          source={banner}
          style={{
            width: WIDTH - 30,
            height:150,
            marginHorizontal:15,
            borderRadius:15
          }}
        />
      </ScrollView>

      {/* EXCLUSIVE */}
      <Text style={{ fontSize:18, fontWeight:'bold', margin:15 }}>
        Exclusive Offer
      </Text>

      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15
      }}>
        {products.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => router.push({
              pathname:'/detail',
              params:{ id:item.id }
            })}
            style={{
              width:'48%',
              backgroundColor:'#fff',
              borderRadius:20,
              padding:15,
              elevation:5
            }}
          >

            <Image source={item.image} style={{
              width:100,
              height:100,
              alignSelf:'center'
            }}/>

            <Text style={{ marginTop:10, fontWeight:'bold' }}>
              {item.name}
            </Text>

            <Text style={{ color:'#888' }}>
              1kg, Price
            </Text>

            <Text style={{ fontWeight:'bold', marginTop:5 }}>
              {item.price}
            </Text>

          </TouchableOpacity>
        ))}
      </View>

      {/* BEST SELLING */}
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        marginTop:25
      }}>
        <Text style={{ fontSize:18, fontWeight:'bold' }}>
          Best Selling
        </Text>
        <Text style={{ color:'#53B175' }}>
          See all
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft:15, marginTop:10 }}>
        {[1,2].map((_, index) => (
          <Image
            key={index}
            source={require('../assets/images/7.jpg')}
            style={{
              width:220,
              height:150,
              borderRadius:20,
              marginRight:15
            }}
          />
        ))}
      </ScrollView>

    </ScrollView>
  );
}