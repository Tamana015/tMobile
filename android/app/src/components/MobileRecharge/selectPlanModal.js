import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';

const SelectPlanModal = ({ isVisible, plan, onClose, onAddToCart }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAddToCart = () => {
    if (phoneNumber) {
      onAddToCart(phoneNumber);
      setPhoneNumber('');
    } else {
      alert('Please enter a phone number');
    }
  };

  if (!plan) return null;

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Your Selected Plan Details</Text>

          <View style={styles.innerModalBox}>
            <Text><Text style={styles.bold}>Price:</Text> ₹{plan.price}</Text>
            <Text><Text style={styles.bold}>Data:</Text> {plan.data}</Text>
            <Text><Text style={styles.bold}>Validity:</Text> {plan.validity}</Text>
            <Text><Text style={styles.bold}>Voice Calls:</Text> {plan.voiceCalls}</Text>
            <Text><Text style={styles.bold}>SMS:</Text> {plan.sms || 'N/A'}</Text>
            <Text><Text style={styles.bold}>Note:</Text> {plan.specialNote}</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SelectPlanModal;
