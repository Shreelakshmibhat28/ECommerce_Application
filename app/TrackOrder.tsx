// app/TrackOrder.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { useCart } from '../contexts/CartContext'; 
import { trackOrderstyles } from './styles';

interface OrderStatus {
  id: number;
  status: string;
  updatedAt: string;
}

const TrackOrder: React.FC = () => {
  const { cart } = useCart(); 
  const orderId = cart.length > 0 ? cart[0].id : 1; 
  const [orderStatuses, setOrderStatuses] = useState<OrderStatus[]>([]);

  useEffect(() => {
    const fetchOrderStatus = async () => {
      try {
        const response = await axios.get<OrderStatus[]>(`https://example.com/api/orders/${orderId}/status`);
        setOrderStatuses(response.data);
      } catch (error) {
        console.error('Error fetching order status:', error);
      }
    };

    fetchOrderStatus();
  }, [orderId]);

  const renderItem = ({ item }: { item: OrderStatus }) => (
    <View style={trackOrderstyles.statusItem}>
      <Text style={trackOrderstyles.statusText}>Status: {item.status}</Text>
      <Text style={trackOrderstyles.dateText}>Updated At: {new Date(item.updatedAt).toLocaleString()}</Text>
    </View>
  );

  return (
    <View style={trackOrderstyles.container}>
      <Text style={trackOrderstyles.title}>Order Tracking</Text>
      <FlatList
        data={orderStatuses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};



export default TrackOrder;