import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserLoginScreen from '../pages/userLoginScreen/userLoginScreen';
import CompanyLogoScreen from '../pages/companyLogoScreen/companyLogoScreen';
import UserProfileScreen from '../components/userProfile/userProfileComponent';
import HomeScreen from '../pages/HomeScreen/homeScreen';
import ContactUs from '../pages/contactUs/contactUs';
import MobileRechargeScreen from '../components/MobileRecharge/mobileRechargeScreen';
import UpgradePlansScreen from '../components/upgradePlan/UpgradePlansScreen';
import groupPlans from '../components/groupPlans/groupPlans';
import StatementScreen from '../components/statement/statmentScreen';
import DeviceScreen from '../components/devices/deviceScreen';
import DeviceDetailScreen from '../components/devices/DeviceDetailsScree';
import UserEnterScreen from '../pages/userLoginScreen/userEnterScreen';
import PersonalCart from '../cart/personalCart/personalCart';
import ParentCart from '../cart/parentCart/parentCart';

const Stack = createNativeStackNavigator();

const NavigationHandle = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="CompanyLogo" component={CompanyLogoScreen} />
          <Stack.Screen name="UserLogin" component={UserLoginScreen} />
          <Stack.Screen name="UserLoginInput" component={UserEnterScreen}/>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
          <Stack.Screen name="Contact" component={ContactUs}/>
          <Stack.Screen name ="MobileRecharge" component={MobileRechargeScreen}/>
          <Stack.Screen name="UpgradePlan" component={UpgradePlansScreen}/>
          <Stack.Screen name="GroupPlan" component={groupPlans}/>
          <Stack.Screen name="Statement" component={StatementScreen}/>
          <Stack.Screen  name="Device" component={DeviceScreen}/>
          <Stack.Screen name="DeviceDetail" component={DeviceDetailScreen} />
          <Stack.Screen name="PersonalCart" component={PersonalCart}/>
          <Stack.Screen name="ParentCart" component={ParentCart}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationHandle;
