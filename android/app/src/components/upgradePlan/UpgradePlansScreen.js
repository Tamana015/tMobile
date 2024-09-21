import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import UpgradePlanModal from './UpgradePlanModal';
import { styles } from './style';
import plansData from './plansData';
import { useNavigation } from '@react-navigation/native';
import Header from '../headerBar/Header';

const UpgradePlansScreen = () => {
  const [selectedUpgradePlan, setSelectedUpgradePlan] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const currentPlan = { name: "Basic Plan", benefits: "500MB data, 50 mins", cost: 100 }; // Replace with actual current plan data

  const handleSelectUpgradePlan = (plan) => {
    setSelectedUpgradePlan(plan);
    setIsModalVisible(true);
  };

  const handleUpgrade = (phoneNumber) => {
    console.log('Upgraded plan added to cart:', selectedUpgradePlan);
    console.log('Phone number:', phoneNumber);
    setIsModalVisible(false);
    setSelectedUpgradePlan(null);
  };

  const handleBackButton = () =>
  {
    navigation.navigate('Home');
  }

  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} title={'UPGRADE PLANS'}/>

      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Current Plan</Text>
        <View style={styles.divider}></View>
        <Text><Text style={styles.bold}>Plan:</Text> {currentPlan.name}</Text>
        <Text><Text style={styles.bold}>Benefits:</Text> {currentPlan.benefits}</Text>
        <Text><Text style={styles.bold}>Cost:</Text> ₹{currentPlan.cost}</Text>

        <Text style={styles.mainTitle}>Available Upgrade Plans</Text>
        <View style={styles.divider}></View>
        {plansData.upgradePlans.map((plan) => (
          <View key={plan.id} style={styles.plan}>
            <Text><Text style={styles.bold}>Plan:</Text> {plan.name}</Text>
            <Text><Text style={styles.bold}>Extra Benefits:</Text> {plan.extraBenefits}</Text>
            <Text><Text style={styles.bold}>Additional Cost:</Text> ₹{plan.extraCost}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSelectUpgradePlan(plan)}
            >
              <Text style={styles.buttonText}>Upgrade</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <UpgradePlanModal
        isVisible={isModalVisible}
        currentPlan={currentPlan}
        upgradePlan={selectedUpgradePlan}
        onClose={() => setIsModalVisible(false)}
        onUpgrade={handleUpgrade}
      />
    </ScrollView>
  );
};

export default UpgradePlansScreen;
