import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import { useCart } from '../../contexts/CartContext';

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
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  image: { width: 200, height: 200, alignSelf: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  price: { fontSize: 18, color: 'green', marginTop: 5 },
  description: { marginTop: 10 },
});

export default ProductDetails;