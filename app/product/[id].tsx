import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button , TouchableOpacity} from 'react-native';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import { useCart } from '../../contexts/CartContext';
import styles from '../styles';
import { Snackbar } from 'react-native-paper';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetails: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    axios
      .get<Product>(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <Text>Loading...</Text>;
  }

  const handleAddToCart = () => {
    if (product) {
      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1, // Add the quantity property here
      };
      addToCart(cartItem);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={2000} // Dismiss after 2 seconds
        action={{
          label: 'OK',
          onPress: () => setVisible(false),
        }}
      >
        Item is added to cart
      </Snackbar>
    </View>
  );
};



export default ProductDetails;