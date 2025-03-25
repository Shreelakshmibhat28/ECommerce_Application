import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';
import { Link } from 'expo-router';

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
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const renderItem = ({ item }: { item: Product }) => (
    <Link href={`/product/${item.id}`} asChild>
      <Pressable>
        <ListItem bottomDivider>
          <Image source={{ uri: item.image }} style={styles.image} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>${item.price}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </Pressable>
    </Link>
  );

  return (
    <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
  );
};

const styles = StyleSheet.create({
  image: { width: 50, height: 50 },
});

export default ProductList;