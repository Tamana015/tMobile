import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import IconContainer from '../../common/iconContainer/iconContainer';
import cartIcon from './assets/cartIcon.png';

export default Header = ({ navigation , title, noCart}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.iconsContainer}>
                {noCart!='false' && <TouchableOpacity onPress={() => onIconPress('cart')}>
                    <IconContainer icon={cartIcon} />
                </TouchableOpacity>
                }          
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButtonContainer}>
                   <Text style={styles.closeButton}>{"✕"}</Text>
                 </TouchableOpacity>
            </View>
      </View>
  );
};
