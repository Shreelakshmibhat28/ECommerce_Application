import { Link } from 'expo-router';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { CartProvider } from '../contexts/CartContext';
import styles from './styles';
import AppBar from './AppBar';

export default function Layout() {
  return (
    <CartProvider>
      
        <View style={{ flex: 1 }}>
          <AppBar /> 
          
          <Link href="/cart" asChild>
            <Pressable style={styles.floatingButton}>
              <Text style={styles.buttonText}>Cart</Text>
            </Pressable>
          </Link>
        </View>
      
    </CartProvider>
  );
}
