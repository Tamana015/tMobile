import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Grid = ({ imageSource, title, onPress }) => (
    <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.optionText}>{title}</Text>
    </TouchableOpacity>
  );
  
const styles = StyleSheet.create({
    optionContainer: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 5,
      },
      image: {
        width: 40,
        height: 40,
        borderRadius: 40,
        marginBottom: 5,
        alignSelf:'center'
      },
      optionText: {
        fontSize: 12,
        color:'black',
        textAlign:'center',
        justifyContent:'center'
      },
});

export default Grid;
