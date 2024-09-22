import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity, Alert, TextInput } from "react-native";
import Header from "../../components/headerBar/Header";
import { color } from "../../utils/color";
import NfcManager, { NfcTech } from 'react-native-nfc-manager';
import LoadingIndicator from "../../components/LoadingIndicator";
import { getCart } from "../../api/apiService";

const PersonalCart = () => {
  const route = useRoute();
  const { userData } = route.params;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const [devicePlans,setDevicePlans] = useState([]);
  const [rechargePlans,setMobilePlans] = useState([]);

  const getCartApi = async () => {
    const timestamp = 1726841188837;

const date = new Date(timestamp);

const formattedDate = date.toLocaleString();

const cleanData = (dataString) => {
  const cleanedString = dataString.replace(/\"/g, '');
  console.log(cleanedString)
  return cleanedString;
};


console.log("==================",formattedDate);
    setLoading(true);
    console.error("id is ", userData.userDetails.cart.id);
    const response = await getCart({cartId : userData.userDetails.cart.id})
    console.log("dhjghgdfhjdfhdhjf ",response);
    setDevicePlans(response.devicePlanList);
     setLoading(false);
   // setMobilePlans(response.data.userDetails.cart.rechargePlanList);
    console.log("response for getCrt ",devicePlans);
  }

  console.log(devicePlans, "    => <=");
  const [note, setNote] = useState('');

  const nfcCall = () => {
    NfcManager.start();
    return () => {
     //NfcManager.stop();
    };
  }
  useEffect(() => {
    getCartApi();
    nfcCall();
  }, []);

  const handleOrderPlaced = () => {
    Alert.alert("Congratulations!", "Your cart item order is placed.");
  };

  const handleShareNFC = async () => {
    console.log("enter nfc", userData.userDetails.parentCart.id);
    try {
      // await NfcManager.requestTechnology(NfcTech.Ndef);
      // const cartId = userData.userDetails.parentCart.id;
      // if (!cartId) {
      //   Alert.alert("Error", "User ID is not available.");
      // }
    
      // const ndefMessage = [
      //   {
      //     "id": cartId,
      //     "type": NfcTech.Ndef,
      //     "payload": userId
      //   }
      // ];
      // console.log("exit herer")
      //await NfcManager.setNdefMessage(ndefMessage);
      Alert.alert("NFC Ready", "Shared your Cart via Link sent on your email id !");
    } catch (ex) {
      console.warn(ex);
      Alert.alert("NFC Error", "An error occurred while trying to share via NFC.",ex);
    } finally {
       navigation.navigate('ParentCart',{userData:userData})
    }
  };

  return (
    <View style={styles.container}>
      {loading && <LoadingIndicator/>}
      <Header navigation={navigation} title="YOUR CART" noCart="false" />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.cartSubTitle}>Hey, your cart is ready...</Text>

        {userData.userDetails.name && (
          <Text style={styles.userDetails}>Name: {userData.userDetails.name}</Text>
        )}
        {userData.userDetails.email && (
          <Text style={styles.userDetails}>Email Address: {userData.userDetails.email}</Text>
        )}

        <View style={styles.cartDetails}>
          <Text style={styles.cartTitle}>Devices</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {devicePlans.length > 0 ? devicePlans.map((device, index) => (
              <View key={index} style={styles.card}>
                <Image source={{ uri: device.imageUrl[0] }} style={styles.image} />
                <Text style={styles.name}>{device.name || 'empty'}</Text>
                <View style={styles.colorsContainer}>
                  <Text style={styles.colorsLabel}>Colors:</Text>
                </View>
                <Text style={styles.rating}>
                  Rating: {'⭐'.repeat(Math.round(device.rating))}
                </Text>
              </View>
            )) : (
              <Text>The Device List is empty in Cart, Add some items.</Text>
            )}
          </ScrollView>
        </View>

        <View style={styles.cartDetails}>
          <Text style={styles.cartTitle}>Recharge Plans</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {rechargePlans.length > 0 ? rechargePlans.map((plan, index) => (
              <View key={index} style={styles.card}>
                <Image source={{ uri: plan.imageUrl[0] }} style={styles.image} />
                <Text style={styles.name}>{plan.name || 'empty'}</Text>
              </View>
            )) : (
              <Text style={styles.emptyMessage}>The Recharge List is empty in Cart, Add some items.</Text>
            )}
          </ScrollView>
        </View>

        <TextInput
          style={styles.noteInput}
          placeholder="Add a note..."
          value={note}
          onChangeText={setNote}
        />

      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleShareNFC}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleOrderPlaced}>
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: 200,
    margin: 10,
    padding: 10,
    elevation: 3,
  },
  cartSubTitle: {
    margin: 10,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  userDetails: {
    marginHorizontal: 20,
    fontSize: 14,
  },
  cartDetails: {
    margin: 20,
  },
  cartTitle: {
    fontSize: 18,
    color: color.magenta,
    fontWeight: '700',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
  },
  colorsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorsLabel: {
    fontSize: 14,
    marginRight: 5,
  },
  colorSquare: {
    width: 15,
    height: 15,
    borderRadius: 3,
    marginRight: 5,
  },
  storage: {
    fontSize: 14,
    marginTop: 2,
  },
  rating: {
    fontSize: 14,
    marginTop: 2,
    fontWeight: '700',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: color.magenta,
    padding: 15,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  emptyMessage: {
    marginVertical: 20,
  },
  noteInput: {
    height: 90,
    borderColor: color.magenta,
    borderWidth: 1,
    borderRadius: 5,
    margin: 20,
    paddingHorizontal: 10,
  },
});

export default PersonalCart;
