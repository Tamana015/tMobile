import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import constants from '../../locales/constants';

const { width, height } = Dimensions.get('window');

const CompanyLogoScreen = () => {
  const dotAnim1 = useRef(new Animated.Value(0)).current;
  const dotAnim2 = useRef(new Animated.Value(0)).current;
  const dotAnim3 = useRef(new Animated.Value(0)).current;
  const dotAnim4 = useRef(new Animated.Value(0)).current;
  const letterAnim = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('UserLogin');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(dotAnim1, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(dotAnim2, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(dotAnim3, {
          toValue: 1,
          duration: 1400,
          useNativeDriver: true,
        }),
        Animated.timing(dotAnim4, {
          toValue: 1,
          duration: 1600,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(letterAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const getDotStyle = (animation) => ({
    opacity: animation,
    transform: [
      { scale: animation },
    ],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.square, styles.dot, { position: 'absolute', left: width / 2 - 95, top: height / 2 - 50, ...getDotStyle(dotAnim1) }]}
      />
      <Animated.View
        style={[styles.square, styles.dot, { position: 'absolute', left: width / 2 - 29, top: height / 2 - 50, ...getDotStyle(dotAnim2) }]}
      />
      <Animated.View
        style={[styles.square, styles.dot, { position: 'absolute', left: width / 2 + 20, top: height / 2 - 50, ...getDotStyle(dotAnim3) }]}
      />
      <Animated.View
        style={[styles.square, styles.dot, { position: 'absolute', left: width / 2 + 69, top: height / 2 - 50, ...getDotStyle(dotAnim4) }]}
      />
      <Animated.View
        style={[styles.letterT, { position: 'absolute', left: width / 3 - 80, top: height / 3 - 50, opacity: letterAnim, transform: [{ scale: letterAnim }] }]}
      >
        <Text style={styles.text}>𝐓</Text>
      </Animated.View>
      <View style={styles.divider} />
      <Animated.Text
        style={[styles.companyName, { opacity: letterAnim }]}
      >
        {constants.parentCompanyName}
      </Animated.Text>
    </View>
  );
};

export default CompanyLogoScreen;
