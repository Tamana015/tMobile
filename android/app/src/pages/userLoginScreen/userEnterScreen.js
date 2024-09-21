import React, { useState, useRef, useContext } from 'react';
import { View, TextInput, Alert, KeyboardAvoidingView, Text, TouchableOpacity, Switch, ScrollView, Modal } from 'react-native';
import styles from './style'; 
import CustomButton from '../../common/button/button';
import Title from '../../common/title/title';
import constants from '../../locales/constants';
import LoadingIndicator from '../../components/LoadingIndicator';
import { loginUser, sendOtp, signupUser } from '../../api/apiService';
import { storeAccessToken } from '../../api/accessToken';

const UserEnterScreen = ({ route, navigation }) => {
  const { userType } = route.params;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '']); 
  const [otpSent, setOtpSent] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(true);
  const [otpIsValid, setOtpIsValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]; 

  const isFormValid = () => {
    if (userType === 'mobile') {
      return phoneNumber.length === 10 && otpSent && otp.every(digit => digit) && termsAccepted;
    } else if (isSignup) {
      return name && email && password && phoneNumber && termsAccepted;
    } else {
      return email && password;
    }
  };

  const handleLogin = async () => {
    if (isFormValid()) {
      setLoading(true); 
      const response = await loginUser({ email: email, password: password});
      console.log(response, '==============');
      setLoading(false);

      if (response.status === 'Success') {
        const userDetails = response.response;
        storeAccessToken(userDetails.accessToken);
        navigation.navigate('Home',{userData:{userDetails}});
      } else {
        Alert.alert('Invalid Credentials', response.message);
      }
    } else {
      Alert.alert('Invalid Credentials', 'Please fill in all fields correctly.');
    }
  };

  const handleSignup = async() => {
    // setLoading(true); 
    // const response = await sendOtp(email);
    // console.log(response.status);
    // setLoading(false);

    // if (response.status === 'Success') {
       setModalVisible(true);
    // } else {
    //   Alert.alert('Invalid Credentials', response.message);
 // }
  };

  const validateOtpAndSignUp = async () => {
    setLoading(true); 
    const response = await signupUser({ name:name, phone:phoneNumber, email:email, password:password});
    console.log(response.status ," --- ");
    setLoading(false);

    if (response.status === 'Success') {
      const userDetails = response.response;
      storeAccessToken(userDetails.accessToken);
      navigation.navigate('Home',{userData:{userDetails}});
    } else {
      Alert.alert('Invalid Credentials', response.message);
    }
  }

  const handleSendOtp = () => {
    if (phoneNumber.length === 10) {
      setIsEditingPhone(false);
      setOtpSent(true);
    } 
  };

  const handleConfirmOtp = async () => {
    const isValidOtp = await validateOtpApiCall(otp.join(''));
    if (isValidOtp) {
      setOtpIsValid(true);
      setModalVisible(false); 
      navigation.navigate('Home'); 
    } else {
      setOtpIsValid(false);
    }
  };

  const validateOtpApiCall = (otp) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(otp === '12345');
      }, 1000);
    });
  };

  const renderCommonInputs = () => (
    <>
      <Title title='Email' />
      <View style={[styles.phoneNumberContainer, !email && styles.invalidInput]}>
        <TextInput
          style={styles.phoneInput}
          placeholder='Enter your email'
          keyboardType='email-address'
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <Title title='Password' />
      <View style={[styles.phoneNumberContainer, !password && styles.invalidInput]}>
        <TextInput
          style={styles.phoneInput}
          placeholder='Enter your password'
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
      </View>
    </>
  );

  const handlePhoneNumberChange = (text) => {
    const formattedText = text.replace(/[^0-9]/g, '');
    if (formattedText.length <= 10) {
      setPhoneNumber(formattedText);
    }
  };

  const handleOtpChange = (text, index) => {
    const formattedText = text.replace(/[^0-9]/g, '').slice(0, 1);
    const newOtp = [...otp];
    
    if (formattedText) {
      newOtp[index] = formattedText;
      setOtp(newOtp);
      if (index < 4) {
        refs[index + 1].current.focus();
      }
    } else {
      newOtp[index] = ''; 
      setOtp(newOtp);
      if (index > 0) {
        refs[index - 1].current.focus();
      }
    }
  };

  const clearPhoneNumber = () => {
    setPhoneNumber('');
    setOtpSent(false);
    setOtp(['', '', '', '', '']);
  };

  const renderSuccessModal = () => (
    <Modal
      visible={isModalVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.successMessage}>Thank you for joining T-Mobile! Hope you enjoyed your journey.</Text>
          <Text style={[styles.successMessage,{fontSize:14, fontWeight:'0'}]}>Verify your account with the OTP below:</Text>
          
          <View style={styles.otpMaincontainer}>
            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={refs[index]}
                  style={[styles.otpInput, !digit && styles.invalidInput]}
                  keyboardType='numeric'
                  maxLength={1}
                  onChangeText={(text) => handleOtpChange(text, index)}
                  value={digit}
                />
              ))}
            </View>
          </View>
          
          <CustomButton 
            title='Confirm OTP' 
            onPress={validateOtpAndSignUp} 
            style={styles.roundedButton}
          />
          
          {!otpIsValid && <Text style={styles.warning}>Invalid OTP. Please try again.</Text>}
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading && <LoadingIndicator />}
    </Modal>
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={[styles.container, { backgroundColor: 'white' }]}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>X</Text>
        </TouchableOpacity>

        <ScrollView style={styles.bottomSection} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <Text style={styles.mobileNumberTitle}>{userType === 'Mobile' ? constants.pleaseEnterMobileNumber : constants.pleaseEnterLoginSignup}</Text>
          <View style={styles.form}>
            {userType === 'mobile' ? (
              <>
                <Title title='Mobile Number' />
                <View style={styles.phoneNumberContainer}>
                  <TextInput
                    style={[styles.phoneInput, !phoneNumber && styles.invalidInput]}
                    placeholder='0000-000-0000'
                    keyboardType='phone-pad'
                    maxLength={10}
                    onChangeText={handlePhoneNumberChange}
                    value={phoneNumber}
                    editable={isEditingPhone}
                  />
                  {isEditingPhone && <TouchableOpacity onPress={clearPhoneNumber} style={styles.clearButton}>
                    <Text style={styles.clearButtonText}>X</Text>
                  </TouchableOpacity>}
                </View>
                {!isEditingPhone && <TouchableOpacity onPress={() => setIsEditingPhone(true)}>
                  <Text style={styles.changeText}>Change mobile number?</Text>
                </TouchableOpacity>}
                {isEditingPhone ? 
                  <CustomButton 
                    title='Send OTP' 
                    onPress={handleSendOtp} 
                    style={styles.roundedButton}
                    disabled={phoneNumber.length !== 10}
                  />
                :
                  <>
                    <Title title='Enter OTP' />
                    <View style={styles.otpMaincontainer}>
                      <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                          <TextInput
                            key={index}
                            ref={refs[index]}
                            style={[styles.otpInput, !digit && styles.invalidInput]}
                            placeholder=''
                            keyboardType='numeric'
                            maxLength={1}
                            onChangeText={(text) => handleOtpChange(text, index)}
                            value={digit}
                          />
                        ))}
                      </View>
                    </View>
                    <CustomButton 
                      title='Confirm OTP' 
                      onPress={handleConfirmOtp} 
                      style={styles.roundedButton}
                    />
                    {!otpIsValid && otpSent && <Text style={styles.warning}>{constants.otpInvalid}</Text>}
                  </>
                }
                <TouchableOpacity onPress={() => setIsSignup(true)}>
                  <Text style={styles.switchText}>If you don't have an account, <Text style={styles.highLight}>Sign Up </Text></Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                {isSignup ? (
                  <>
                    <Title title='Name' />
                    <View style={[styles.phoneNumberContainer, !name && styles.invalidInput]}>
                      <TextInput
                        style={styles.phoneInput}
                        placeholder='Enter your name'
                        onChangeText={setName}
                        value={name}
                      />
                    </View>
                    <Title title='Mobile Number' />
                      <TextInput
                        style={[styles.phoneNumberContainer, !phoneNumber && styles.invalidInput]}
                        placeholder=' Enter your phone'
                        keyboardType='phone-pad'
                        maxLength={10}
                        onChangeText={handlePhoneNumberChange}
                        value={phoneNumber}
                        editable={isEditingPhone}
                      />
                    {renderCommonInputs()}
                    <View style={styles.switchContainer}>
                      <Switch
                        value={termsAccepted}
                        onValueChange={setTermsAccepted}
                      />
                    </View>
                    <CustomButton 
                      title='Sign Up' 
                      onPress={validateOtpAndSignUp} 
                      style={styles.roundedButton}
                      disabled={!isFormValid()} 
                    />
                    <TouchableOpacity onPress={() => setIsSignup(false)}>
                      <Text style={styles.switchText}>Already have an account? <Text style={styles.highLight}>Login</Text></Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    {renderCommonInputs()}
                    <CustomButton 
                      title='Login' 
                      onPress={handleLogin} 
                      style={styles.roundedButton}
                      disabled={!isFormValid()} 
                    />
                    <TouchableOpacity onPress={() => setIsSignup(true)}>
                      <Text style={styles.switchText}>If you don't have an account, <Text style={styles.highLight}>Sign Up </Text></Text>
                    </TouchableOpacity>
                  </>
                )}
              </>
            )}
            <Text style={styles.messages}>{constants.byContiuningIAccept}</Text>
          </View>
        </ScrollView>
      </View>
     {/* {renderSuccessModal()} */}
      {loading && <LoadingIndicator />}
    </KeyboardAvoidingView>
  );
};

export default UserEnterScreen;
