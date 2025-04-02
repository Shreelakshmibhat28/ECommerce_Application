import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';



const AppBar = ()  => {
  return (
    <>
    <StatusBar backgroundColor= "#401b29" barStyle="light-content" />

    <Stack
      screenOptions={{
       
        headerStyle: { backgroundColor: '#401b29'},
        headerTintColor: '#fff',
        headerTitleStyle: { fontSize: 18, fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="cart" options={{ title: "Shopping Cart" }} />
      <Stack.Screen name="product/[id]" options={{ title: "Product Details" }} />
     
    </Stack>
    </>
  );
}

export default AppBar;