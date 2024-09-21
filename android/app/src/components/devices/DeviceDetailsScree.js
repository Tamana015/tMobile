import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { color } from '../../utils/color';
import LoadingIndicator from '../LoadingIndicator';
import { addToCartApi } from '../../api/apiService';

const DeviceDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { device , userData} = route.params;
  const [loading,setLoading ] = useState(false);


  console.error("userData in last oag eis ",userData);

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
      setLoading(true); 
      const response = await addToCartApi({ cartId:3, itemId: 1, itemType:'DevicePlan'});
      console.log(response, '==============');
      setLoading(false);

      if (response.status === 'Success') {
        navigation.goBack();
      } else {
        Alert.alert('Invalid Credentials', response.message);
      }
  };

  return (
    <View style={styles.container}>
      {loading && <LoadingIndicator/>}
      <Image source={{ uri: device.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{device.name}</Text>
      <Text style={styles.colors}>Colors: {device.colors.join(', ')}</Text>
      <Text style={styles.storage}>Storage Options: {device.storageOptions.join(', ')}</Text>
      <Text style={styles.rating}>Rating: {'⭐'.repeat(Math.round(device.rating))}</Text>
      
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleAddToCart} style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.button, styles.cancelButton]}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  colors: {
    fontSize: 16,
  },
  storage: {
    fontSize: 16,
  },
  rating: {
    fontSize: 16,
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    fontSize: 24,
    marginHorizontal: 20,
  },
  quantity: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: color.magenta,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: color.magenta,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DeviceDetailScreen;
