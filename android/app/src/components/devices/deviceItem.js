import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DeviceItem = ({ device }) => {
  console.warn(device);
  return (
    <View style={styles.container}>
      <Image source={{ uri: device.imageUrl[0] }} style={styles.image} />
      <Text style={styles.name}>{device.name || 'empty'}</Text>
      <View style={styles.colorsContainer}>
        <Text style={styles.colorsLabel}>Colors:</Text>
        {device.colors.length>0 && device.colors.map((color, index) => (
          <View key={index} style={[styles.colorSquare, { backgroundColor: color.toLowerCase() }]} />
        ))}
      </View>
      <Text style={styles.storage}>
        Storage Options: {device.storageOptions.join(', ')}
      </Text>
      <Text style={styles.rating}>
        Rating: {'⭐'.repeat(Math.round(device.rating))}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: '900',
    color: 'black',
  },
  colorsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    color:'black'
  },
  colorsLabel: {
    fontSize: 14,
    marginRight: 5,
    color:'black'
  },
  colorSquare: {
    width: 15,
    height: 15,
    borderRadius: 3,
    marginRight: 5,
  },
  storage: {
    fontSize: 14,
    marginTop: 2,
    color:'black'
  },
  rating: {
    fontSize: 14,
    marginTop: 2,
    fontWeight: '900',
    color: 'black',
  },
});

export default DeviceItem;
