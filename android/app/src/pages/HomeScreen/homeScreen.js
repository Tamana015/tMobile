import React, { useState, useEffect } from 'react';
import { ScrollView, Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import HeaderBar from '../../components/headerBar/headerBar';
import companyImage from './companyImage.png';
import phoneImage from './phoneImage.png';
import DashboardGrid from '../../components/dashBoard/dashboard';
import { rechargePlanItems } from './rechargePlanData';
import { color } from '../../utils/color';
import { getGreeting } from '../../utils/helper';
import LoadingIndicator from '../../components/LoadingIndicator';
import { devicesItems } from './devicesData';
import { useRoute } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {

  const route = useRoute();
  const { userData } = route.params;

  console.log('userDetails ', userData);

  const [deviceData, setDeviceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const userName = userData.userDetails.name;
  const greetingMessage = getGreeting('+91', userName);

  useEffect(() => {
    const fetchDeviceData = async () => {
      const data = await devicesItems(); 
      setDeviceData(data);
      console.log('Fetched device data:', data);
      setLoading(false); 
    };

    fetchDeviceData();
  }, []);

  const handleIconPress = () => {
    navigation.navigate('UserProfile',{userData: userData});
  };

  const handleContactUsPress = () => {
    navigation.navigate('Contact');
  };

  const handleCartPress = () => {
    navigation.navigate('PersonalCart',{userData: userData});
  };

  const coverageOptions = [
    { optionId: '1', title: 'Select' },
    { optionId: '2', title: 'Buy/Upgrade' },
    { optionId: '3', title: 'Activate' },
  ];

  return (
    <ScrollView>
      <HeaderBar onIconPress={handleIconPress}  onCartPress={handleCartPress}/>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>{greetingMessage}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={companyImage} style={styles.image} />
      </View>
      <DashboardGrid navigation={navigation} title={'Recharge & Upgrade Plans'} userData={userData.userDetails} gridItems={rechargePlanItems} />
      
      <DashboardGrid
        navigation={navigation}
        title={'Devices'}
        gridItems={deviceData}
        userData={userData.userDetails}
        loading={loading} 
      />

      <View style={styles.checkOutContainer}>
        <Text style={styles.checkOutTitle}>Check out how easy it is to switch to T-Mobile</Text>
        <View style={styles.stepsContainer}>
          {coverageOptions.map((option) => (
            <View key={option.optionId} style={styles.stepContainer}>
              <Text style={styles.stepNumber}>{option.optionId}</Text>
              <Text style={styles.optionText}>{option.title}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.boxContainer}>
        <Text style={styles.boxTitle}>Can't find what you're looking for?</Text>
        <TouchableOpacity style={styles.innerContainer} onPress={handleContactUsPress}>
          <Image source={phoneImage} style={styles.phoneImage} />
          <Text style={styles.contactText}>Contact Us</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  greetingContainer: {
    backgroundColor: color.magenta,
    padding: 10,
    alignItems: 'flex-start',
  },
  greeting: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  boxContainer: {
    backgroundColor: color.magenta,
    padding: 15,
    marginHorizontal: 0,
  },
  boxTitle: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  innerContainer: {
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  contactText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    flex: 1,
  },
  arrow: {
    fontSize: 24,
    color: 'black',
  },
  checkOutContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  checkOutTitle: {
    fontSize: 20,
    color: color.magenta,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 20,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    maxWidth: 400,
  },
  stepContainer: {
    alignItems: 'center',
  },
  stepNumber: {
    fontSize: 24,
    color: color.magenta,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 50,
    marginBottom: 5,
  },
  optionText: {
    fontSize: 14,
    color: 'black',
  },
});

export default HomeScreen;
