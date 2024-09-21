import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Client } from '@stomp/stompjs';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { getParentCart } from '../../api/apiService';
import LoadingIndicator from '../../components/LoadingIndicator';

const SOCKET_URL = 'ws://localhost:8080/ws-message';
const API_URL = 'https://example.com/api/cart'; 

const ParentCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [client, setClient] = useState(null);
  const [loading, setLoading]= useState(false);

  const navigation = useNavigation();

  const getPartCartApi = async() => {
    setLoading(true);
    console.error("id is ", userData.userDetails.cart.id);
    const response = await getParentCart({parentCartId : userData.userDetails.cart.id})
    console.log("dhjghgdfhjdfhdhjf ",response);
    setCartItems(response.devicePlanList);
    setLoading(false);
  }
  useEffect(() => {
      getPartCartApi();
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

  const fetchCartData = async () => {
    try {
      const response = await axios.get(API_URL);
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const addItemToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    notifyCartUpdate(updatedCart);
  };

  const notifyCartUpdate = (updatedCart) => {
    if (client && client.connected) {
      client.publish({
        destination: '/topic/cart',
        body: JSON.stringify(updatedCart),
      });
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <View style={styles.container}>
      {loading && <LoadingIndicator/>}
       <Header navigation={navigation} title="YOUR CART" noCart="false" />
      <Button title="Add Item" onPress={() => addItemToCart("New Item")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    padding: 10,
  },
});

export default ParentCart;
