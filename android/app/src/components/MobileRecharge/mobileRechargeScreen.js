import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import plansData from './plansData';
import { styles } from './style';
import SelectPlanModal from './selectPlanModal';
import { PlanSection } from './planSection';
import { useNavigation } from '@react-navigation/native';
import Header from '../headerBar/Header';

const MobileRechargeScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigation = useNavigation();

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setIsModalVisible(true);
  };

  const handleBackPress = () => {
    navigation.navigate('Home')
  }

  const handleAddToCart = (phoneNumber) => {
    console.log('Plan added to cart:', selectedPlan);
    console.log('Phone number:', phoneNumber);
    setIsModalVisible(false);
    setSelectedPlan(null);
  };

  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} title={'MOBILE RECHARGE'}/>
      
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>PrePaid Plans</Text>
        <View style={styles.divider}></View>
        <PlanSection
          title="Basic Data Plans"
          plans={plansData.plans.prepaid.basicDataPlans}
          onSelectPlan={handleSelectPlan}
        />
        <PlanSection
          title="Jio Phone Plans"
          plans={plansData.plans.prepaid.jioPhonePlans}
          onSelectPlan={handleSelectPlan}
        />
        <PlanSection
          title="Data Add-On Packs"
          plans={plansData.plans.prepaid.dataAddOnPacks}
          onSelectPlan={handleSelectPlan}
        />
        
        <Text style={styles.mainTitle}>PostPaid Plans</Text>
        <View style={styles.divider}></View>
        <PlanSection
          title="Basic Postpaid Plans"
          plans={plansData.plans.postpaid.basicPostpaidPlans}
          onSelectPlan={handleSelectPlan}
        />
        <PlanSection
          title="Premium Postpaid Plans"
          plans={plansData.plans.postpaid.premiumPostpaidPlans}
          onSelectPlan={handleSelectPlan}
        />
      </View>

      <SelectPlanModal
        isVisible={isModalVisible}
        plan={selectedPlan}
        onClose={() => setIsModalVisible(false)}
        onAddToCart={handleAddToCart}
      />
    </ScrollView>
  );
};

export default MobileRechargeScreen;
