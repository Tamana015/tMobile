import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Client } from '@stomp/stompjs';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getParentCart } from '../../api/apiService';
import LoadingIndicator from '../../components/LoadingIndicator';
import Header from '../../components/headerBar/Header';

const SOCKET_URL = 'ws://localhost:8080/ws-message';

const ParentCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(false);

  const route = useRoute();
  const { userData } = route.params;
  const navigation = useNavigation();

  const getPartCartApi = async () => {
    try {
      const response = await getParentCart({ parentCartId: userData.userDetails.cart.id });
      console.log("API Response: ", response);
      setCartItems(response.cartList);
    } catch (error) {
      console.error("Error fetching parent cart: ", error);
    }
  };

  useEffect(() => {
    const stompClient = new Client({
      brokerURL: SOCKET_URL,
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        console.log("Connected to WebSocket!");
        stompClient.subscribe('/topic/cart', (msg) => {
          if (msg.body) {
            const updatedCart = JSON.parse(msg.body);
            setCartItems(updatedCart);
          }
        });
      },
      onDisconnect: () => {
        console.log("Disconnected from WebSocket");
      },
      onWebSocketError: (error) => {
        console.error('WebSocket Error:', error);
      },
      onStompError: (frame) => {
        console.error('Broker reported error:', frame.headers['message']);
        console.error('Additional details:', frame.body);
      },
    });

    setClient(stompClient);
    stompClient.activate();

    return () => {
      stompClient.deactivate();
    };
  }, []);

  useEffect(() => {
    getPartCartApi(); // Call the API once on component mount

    const interval = setInterval(() => {
      getPartCartApi(); // Call the API every 5 seconds
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.itemTitle}>User ID: {item.id}</Text>
      <Text>Devices:</Text>
      <FlatList
        data={item.devicePlanList}
        renderItem={({ item: device }) => (
          <Text style={styles.item}>{device.name || 'Unnamed Device'}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text>Recharge Plans:</Text>
      <FlatList
        data={item.rechargePlanList}
        renderItem={({ item: plan }) => (
          <Text style={styles.item}>{plan.name || 'Unnamed Plan'}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header navigation={navigation} title="YOUR SHARED CART" noCart="false" />
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    elevation: 3,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  item: {
    fontSize: 16,
    padding: 5,
  },
});

export default ParentCart;
