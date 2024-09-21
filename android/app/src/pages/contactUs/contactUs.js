import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dancingImage from './dancingImage.png';
import { styles } from './style';

const ContactUs = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack(); 
  };

  const handleEmailPress = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  const contactInfo = [
    { name: 'Tamana Thakur', designation: 'Senior Software Engineer', email: 'tamanarajput980@gmail.com' },
    { name: 'Kritika Gupta', designation: 'Software Engineer', email: 'gkritika898@gmail.com' },
    { name: 'Anjali Soni', designation: 'Application Developer', email: 'anjalisoni1311@gmail.com' },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
      <Image
        source={dancingImage}
        style={styles.image}
      />
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>CONTACT US</Text>
        <Text style={styles.subtitle}>AMERICA'S LARGEST 5G NETWORK | T-MOBILE</Text>
        <Text style={styles.message}>Got thoughts or questions? We’d love to hear them! Feel free to reach out and share your feedback on our project. Your input is the sprinkle of magic that makes our work shine!</Text>
        <Text style={styles.contactTitle}>Our Creators</Text>
        {contactInfo.map((contact, index) => (
          <View key={index} style={styles.contactContainer}>
            <View style={styles.squareBox}>
              <Text style={styles.initial}>{contact.name[0]}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{contact.name}</Text>
              <Text style={styles.designation}>{contact.designation}</Text>
              <Text style={styles.emailText} onPress={() => handleEmailPress(contact.email)}>{contact.email}</Text>
            </View>
          </View>
        ))}
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Address</Text>
          <Text style={styles.address}>
            T-Mobile Customer Relations{'\n'}
            PO Box 37380{'\n'}
            Albuquerque, NM 87176-7380{'\n'}{'\n'}
            Please don't send payments to this address.
          </Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default ContactUs;
