import { StyleSheet } from 'react-native';
import { color } from '../../utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: color.magenta,
  },
  companyName: {
    fontSize: 18,
    fontWeight: '900',
    color: 'black',
    paddingBottom: 40,
  },
  loginImage: {
    width: 200,
    height: 200,
    marginBottom: '20%',
  },
  loginOptionsContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: 'black',
  },
  loginOptionBox: {
    width: '100%',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 2,
    borderColor: color.gray,
  },
  loginOptionText: {
    color: color.magenta,
    fontWeight: '900',
    fontSize: 15,
  },
  orText: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    zIndex: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: 'black',
  },
  phoneInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  emailInput: {  // New style for email input
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: color.gray,
    borderRadius: 10,
    marginBottom: 15,
  },
  mobileNumberTitle: {
    fontSize: 30,
    alignItems: 'center',
    margin: '100',
    fontWeight: '900',
    marginBottom: 20,
  },
  clearButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: '100%',
  },
  clearButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal:10
  },
  otpMaincontainer: {
    marginHorizontal: 34,
  },
  changeOtpText: {
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderColor: color.gray,
    borderWidth: 1,
    borderRadius: 10,
  },
  clearButton: {
    marginLeft: 10,
  },modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
  },
  
  modalContent: {
    width: '80%', // Adjust as needed
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // For Android
  },
  
  successMessage: {
    fontSize: 18,
    fontWeight: 'bold', // Make the title bold
    marginBottom: 10,
    textAlign: 'center',
    color:color.magenta
  },
  otpMaincontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  
  otpContainer: {
    flexDirection: 'row',
  },
  
  otpInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 5,
  },
  
  roundedButton: {
    backgroundColor: '#007bff', // Customize as needed
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  
  warning: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  
  closeButton: {
    marginTop: 15,
    color: '#007bff', // Customize color
    fontWeight: 'bold',
  },
  changeText: {
    color: color.magenta,
    marginBottom: 10,
    marginRight: 10,
    textAlign: 'right',
  },
  warning: {
    color: 'red',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  switchText: {
    marginTop: 0,
    color: 'black',
    textAlign: 'center',
  },
  messages: {
    color: 'black',
    textAlign: 'center',
  },
  highLight:{
    color:color.magenta,
    fontWeight:'500'
  },
  invalidInput: {
    borderColor: color.magenta,
    borderWidth: 2,
  },
});

export default styles;
