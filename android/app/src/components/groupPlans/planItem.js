import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const PlanItem = ({ item, selectedPlan, setSelectedPlan }) => {
  return (
    <TouchableOpacity 
      onPress={() => setSelectedPlan(item.title)} 
      style={[styles.planContainer, selectedPlan === item.title && styles.selectedPlan]}
    >
      <Text style={styles.planTitle}>{item.title}</Text>
      <Text style={styles.planDetail}>Price: ₹{item.price}</Text>
      <Text style={styles.planDetail}>Data: {item.data}</Text>
      <Text style={styles.planDetail}>Validity: {item.validity}</Text>
      <Text style={styles.planDetail}>Voice Calls: {item.voiceCalls}</Text>
      <Text style={styles.planDetail}>SMS: {item.sms}</Text>
      <Text style={styles.planDetail}>Note: {item.specialNote}</Text>
      <Text style={styles.planDetail}>Data Bonus: {item.dataBonus}</Text>
      <Text style={styles.planDetail}>International Calls: {item.internationalCalls}</Text>
      <Text style={styles.planDetail}>Special Features: {item.specialFeatures}</Text>
    </TouchableOpacity>
  );
};

export default PlanItem;
