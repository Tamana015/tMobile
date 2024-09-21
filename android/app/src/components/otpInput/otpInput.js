import React, { useState, useRef } from 'react';
import { View, TextInput } from 'react-native';
import styles from './style';

const OTPInput = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChangeText = (text, index) => {
    if (text.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (text && index < otp.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (text, index) => {
    if (text.length === 0 && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleInputChange = (text, index) => {
    handleChangeText(text, index);
    handleBackspace(text, index);
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputs.current[index] = ref)}
          style={styles.input}
          maxLength={1}
          keyboardType="number-pad"
          value={digit}
          onChangeText={(text) => handleInputChange(text, index)}
        />
      ))}
    </View>
  );
};

export default OTPInput;
