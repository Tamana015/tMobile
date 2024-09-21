import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './style';

const CustomButton = ({ title, onPress, disabled }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        !disabled && styles.buttonDisabled,
        pressed && styles.buttonPressed
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
