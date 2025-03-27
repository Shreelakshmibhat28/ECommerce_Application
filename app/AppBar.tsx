import { Stack } from 'expo-router';



const AppBar = ()  => {
  return (
    
    <Stack
      screenOptions={{
       
        headerStyle: { backgroundColor: 'blue' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontSize: 18, fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="cart" options={{ title: "Shopping Cart" }} />
      <Stack.Screen name="product/[id]" options={{ title: "Product Details" }} />
    </Stack>
    
  );
}

export default AppBar;
