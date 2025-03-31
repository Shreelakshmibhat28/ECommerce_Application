import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { useCart } from '../contexts/CartContext';
import styles from './styles';
import { localStyles } from './styles';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Link } from 'expo-router';
import handlePayment from './BuyProduct';

const CartScreen: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const renderItem = ({ item }: { item: any }) => (
    <View style={localStyles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.imageCart} />
      <View style={localStyles.textContainer}>
        <Text style={localStyles.title}>{item.title}</Text>
        <Text style={localStyles.subtitle}>${item.price} x {item.quantity}</Text>

        {/* Counter for quantity */}
        <View style={localStyles.counterContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
            <Text style={localStyles.counterButton}>➖</Text>
          </TouchableOpacity>

          <Text style={localStyles.counterText}>{item.quantity}</Text>

          <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
            <Text style={localStyles.counterButton}>➕</Text>
          </TouchableOpacity>

          {/* Delete Button */}
          <TouchableOpacity onPress={() => removeFromCart(item.id)} style={localStyles.deleteButton}>
            <MaterialIcons name="delete" size={24} color="#ba1003" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <View style={localStyles.container}>
      <FlatList data={cart} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>

      <Link href="/cart" asChild>
                  <Pressable style={styles.floatingButton} onPress={() => handlePayment(totalPrice, clearCart)}>
                    <Text style={styles.buttonText}>Buy Now</Text>
                  </Pressable>
                </Link>
    </View>
  );
};

export default CartScreen;
