import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native';
import axios from 'axios';
import { Link } from 'expo-router';
import styles from './styles';
import productData from '../data/products.json'; // Assuming you have a local JSON file with product data

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

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(productData);

  // useEffect(() => {
  //   axios
  //     .get<Product[]>('https://fakestoreapi.com/products')
  //     .then((response) => setProducts(response.data))
  //     .catch((error) => console.error('Error fetching products:', error));
  // }, []);

  const renderItem = ({ item }: { item: Product }) => (
    <Link href={`/product/${item.id}`} asChild>
      <Pressable style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardPrice}>${item.price}</Text>
        </View>
      </Pressable>
    </Link>
  );

  return (
    <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
  );
};

export default ProductList;