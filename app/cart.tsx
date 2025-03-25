import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useCart } from '../contexts/CartContext';

const CartScreen: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const renderItem = ({ item }: { item: any }) => (
    <ListItem bottomDivider>
      <Image source={{ uri: item.image }} style={styles.image} />
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle>
          ${item.price} x {item.quantity}
        </ListItem.Subtitle>
        <Button title="Remove" onPress={() => removeFromCart(item.id)} />
      </ListItem.Content>
    </ListItem>
  );

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <View>
      <FlatList data={cart} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: { width: 50, height: 50 },
  total: { fontSize: 18, fontWeight: 'bold', padding: 10, textAlign: 'right' },
});

export default CartScreen;