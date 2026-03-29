import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown:false }}>

      <Tabs.Screen name="index" options={{
        title:'Shop',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="storefront-outline" size={size} color={color}/>
        )
      }}/>

      <Tabs.Screen name="explore" options={{
        title:'Explore',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="search-outline" size={size} color={color}/>
        )
      }}/>

    <Tabs.Screen name="beverages" options={{ href: null }} />

      <Tabs.Screen name="cart" options={{
        title:'Cart',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="cart-outline" size={size} color={color}/>
        )
      }}/>

      <Tabs.Screen name="favourite" options={{
        title:'Favourite',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="heart-outline" size={size} color={color}/>
        )
      }}/>

      <Tabs.Screen name="account" options={{
        title:'Account',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="person-outline" size={size} color={color}/>
        )
      }}/>
      <Tabs.Screen name="detail" options={{ href: null }} />

    </Tabs>
  );
}