import React from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';
import { useCart } from '../contexts/CartContext';
import styles from './styles';
import { localStyles } from './styles';

const CartScreen: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const renderItem = ({ item }: { item: any }) => (
    <View style={localStyles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.imageCart} />
      <View style={localStyles.textContainer}>
        <Text style={localStyles.title}>{item.title}</Text>
        <Text style={localStyles.subtitle}>
          ${item.price} x {item.quantity}
        </Text>
        <Button title="Remove" onPress={() => removeFromCart(item.id)} />
      </View>
    </View>
  );

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <View style={localStyles.container}>
      <FlatList data={cart} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
    </View>
  );
};



export default CartScreen;
