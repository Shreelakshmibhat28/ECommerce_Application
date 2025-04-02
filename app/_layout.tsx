import { Link, usePathname } from 'expo-router';
import { View, Text, Pressable } from 'react-native';
import { CartProvider } from '../contexts/CartContext';
import styles from './styles';
import AppBar from './AppBar';

export default function Layout() {
  const pathname = usePathname();

  return (
    <CartProvider>
     
      <View style={{ flex: 1 }}>
        <AppBar />
        {pathname !== '/cart' && (
          <Link href="/cart" asChild>
            <Pressable style={styles.floatingButton}>
              <Text style={styles.buttonText}>Cart</Text>
            </Pressable>
          </Link>
        )}
      </View>
      
    </CartProvider>
  );
}