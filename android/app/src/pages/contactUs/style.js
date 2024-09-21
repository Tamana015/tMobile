import { StyleSheet } from "react-native";
import { color } from "../../utils/color";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.magenta,
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '40%',
      resizeMode: 'cover',
    },
    backButton: {
      position: 'absolute',
      left: 20,
      top: -40,
      zIndex: 1,
    },
    backButtonText: {
      fontSize: 70,
      fontWeight: '900',
      color: 'black',
    },
    innerContainer: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 20,
      marginTop:'-20%',
      width: '90%',
      maxWidth: 400,
      alignItems: 'center',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
    },
    title: {
      fontSize: 24,
      fontWeight: '900',
      color: 'black',
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 14,
      color: 'black',
      marginBottom: 20,
    },
    message: {
      color: 'black',
      textAlign: 'center',
      marginBottom: 30,
      marginHorizontal: 30,
    },
    contactTitle:{
      fontSize:20,
      color:'black',
      textAlign: 'flex-start',
      fontWeight:'900',
      marginBottom:15
    },
    contactContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      width: '100%',
    },
    squareBox: {
      width: 50,
      height: 50,
      backgroundColor: color.magenta,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      borderRadius: 10,
    },
    initial: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    textContainer: {
      flex: 1,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
    },
    designation: {
      fontSize: 14,
      color: 'gray',
    },
    emailText: {
      fontSize: 12,
      color: color.magenta,
    },
    addressContainer: {
        marginTop: 20,
        alignItems: 'center',
      },
      addressTitle: {
        fontSize: 20,
        fontWeight:'900',
        color: 'black',
        marginBottom: 10,
      },
      address: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
      },
  });
  