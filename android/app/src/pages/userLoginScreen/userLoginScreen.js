import React from 'react';
import { View, Text, Animated, Image, TouchableOpacity } from 'react-native';
import styles from './style'; 
import constants from '../../locales/constants';

const UserLoginScreen = ({ navigation }) => {
  const bounceAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.sequence([
      Animated.timing(bounceAnim, {
        toValue: -15,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(bounceAnim, {
        toValue: 10,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(bounceAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [bounceAnim]);

  const handleLoginOption = (userType) => {
    navigation.navigate('UserLoginInput', { userType });
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.companyName, { transform: [{ translateY: bounceAnim }] }]}>
       {constants.welcomeToMessage}
      </Animated.Text>
      <Text style={styles.tagline}>
        {constants.welcomeTagLine}
      </Text>
      <Image
        source={require('C:/Users/tamana.thakur1/Deutsche Telco App/telcoApp/android/app/src/images/login.png')}
        style={styles.loginImage}
      />
      <View style={styles.loginOptionsContainer}>
        <TouchableOpacity
          style={styles.loginOptionBox}
          onPress={() => handleLoginOption('mobile')}
        >
          <Text style={styles.loginOptionText}>{constants.loginByMobileNumber}</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>OR</Text>
        <TouchableOpacity
          style={styles.loginOptionBox}
          onPress={() => handleLoginOption('email')}
        >
          <Text style={styles.loginOptionText}>{constants.loginByEmailAddress}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserLoginScreen;
