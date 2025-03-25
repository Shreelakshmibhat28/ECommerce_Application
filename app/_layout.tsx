import { Stack, Link } from 'expo-router';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { CartProvider } from '../contexts/CartContext';
import styles from './styles';

export default function Layout() {
  return (
    <CartProvider>
      <View style={{ flex: 1 }}>
        <Stack />
        <Link href="/cart" asChild>
          <Pressable style={styles.floatingButton}>
            <Text style={styles.buttonText}>Cart</Text>
          </Pressable>
        </Link>
      </View>
    </CartProvider>
  );
}


