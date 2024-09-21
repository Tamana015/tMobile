import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './style';

const UpgradePlanModal = ({ isVisible, currentPlan, upgradePlan, onClose, onUpgrade }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleUpgrade = () => {
    if (phoneNumber) {
      onUpgrade(phoneNumber);
      setPhoneNumber('');
    } else {
      alert('Please enter a phone number');
    }
  };

  if (!upgradePlan) return null;

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Upgrade Plan Details</Text>
          <Text><Text style={styles.bold}>Current Plan:</Text> {currentPlan.name}</Text>
          <Text><Text style={styles.bold}>Upgrade Plan:</Text> {upgradePlan.name}</Text>
          <Text><Text style={styles.bold}>Extra Benefits:</Text> {upgradePlan.extraBenefits}</Text>
          <Text><Text style={styles.bold}>Additional Cost:</Text> ₹{upgradePlan.extraCost}</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.button} onPress={handleUpgrade}>
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

export default UpgradePlanModal;
