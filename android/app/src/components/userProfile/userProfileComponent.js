import React, {useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import Title from '../../common/title/title';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './style';
import { color } from '../../utils/color';
import { addTOGroup } from '../../api/apiService';
import LoadingIndicator from '../LoadingIndicator';

const UserProfileScreen = () => {

  const route = useRoute();
  const { userData } = route.params;

  console.error("userDeatils are :=>", userData);
  const [name, setName] = useState(userData.userDetails.name);
  const [phoneNumber, setPhoneNumber] = useState(userData.userDetails.mobileNumber);
  const [groupMembers, setGroupMembers] = useState(userData.userDetails.groupList || []);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);
  const [newName, setNewName] = useState(name);
  const [loading, setLoading] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupName, setPopupName] = useState('');
  const [popupPhoneNumber, setPopupPhoneNumber] = useState('');

  const navigation = useNavigation();
  const handleEditName = () => setIsEditingName(true);
  const handleUpdateName = () => {
    setName(newName);
    setIsEditingName(false);
  };
  const handleCancelEditName = () => {
    setNewName(name);
    setIsEditingName(false);
  };
  const handleEditPhoneNumber = () => setIsEditingPhoneNumber(true);
  const handleUpdatePhoneNumber = () => {
    setPhoneNumber(newPhoneNumber);
    setIsEditingPhoneNumber(false);
  };
  const handleCancelEditPhoneNumber = () => {
    setNewPhoneNumber(phoneNumber);
    setIsEditingPhoneNumber(false);
  };

  const openPopup = () => setIsPopupVisible(true);
  const closePopup = () => {
    setPopupName('');
    setPopupPhoneNumber('');
    setIsPopupVisible(false);
  };

  const addMember = async() => {
    if (groupMembers.length >= 5) {
      alert("You can only add up to 5 members.");
      return;
    }
    if (popupPhoneNumber.trim()) {
      const phoneExists = groupMembers.some(member => member.phone === popupPhoneNumber);
      if (phoneExists) {
        alert("A member with this phone number already exists.");
        return;
      }
       setLoading(true); 
       const response = await addTOGroup({userId: userData.userDetails.id , mobileNumber:popupPhoneNumber});
       console.log(response);
       setLoading(false);

       if (response.status === 'Success') {
        setGroupMembers([...groupMembers, {phone: popupPhoneNumber }]);
      } else {
      console.error("Group Member is not the member of our community");
      }
      closePopup();
        }

  };

  const removeMember = (index) => {
    setGroupMembers(groupMembers.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log({ name, phoneNumber, groupMembers });
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    loading ? <LoadingIndicator/> :<><ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.profileTitle}>User Account</Text>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.closeButtonText}>×</Text>
      </TouchableOpacity>
      <Image source={require('./assets/userIcon.png')} style={styles.profileImage} />

      <View style={styles.inputContainer}>
        <Title title="User Name" />
        <View style={styles.nameInputContainer}>
          <TextInput
            style={styles.input}
            value={newName}
            onChangeText={setNewName}
            placeholder="Enter your name"
            editable={isEditingName}
          />
          {!isEditingName && (
            <TouchableOpacity style={styles.editButton} onPress={handleEditName}>
              <Text style={styles.editLink}>EDIT</Text>
            </TouchableOpacity>
          )}
        </View>
        {isEditingName && (
          <View style={styles.editButtonsContainer}>
            <Button
              title="Update"
              onPress={handleUpdateName}
              disabled={newName === name}
              color={color.magenta}
            />
            <Button
              title="Cancel"
              onPress={handleCancelEditName}
              color={color.magenta}
            />
          </View>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Title title="Mobile Number" />
        <View style={styles.nameInputContainer}>
          <TextInput
            style={styles.input}
            value={newPhoneNumber}
            onChangeText={setNewPhoneNumber}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            editable={isEditingPhoneNumber}
          />
          {!isEditingPhoneNumber && (
            <TouchableOpacity style={styles.editButton} onPress={handleEditPhoneNumber}>
              <Text style={styles.editLink}>EDIT</Text>
            </TouchableOpacity>
          )}
        </View>
        {isEditingPhoneNumber && (
          <View style={styles.editButtonsContainer}>
            <Button
              title="Update"
              onPress={handleUpdatePhoneNumber}
              disabled={newPhoneNumber === phoneNumber}
              color={color.magenta}
            />
            <Button
              title="Cancel"
              onPress={handleCancelEditPhoneNumber}
              color={color.magenta}
            />
          </View>
        )}
      </View>

      <Title title="Family or Friends" />
      {groupMembers.length > 0 && (
        <View style={styles.membersContainer}>
          {groupMembers.map((member, index) => (
            <View key={index} style={styles.groupMemberContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>{phoneNumber.charAt(0)}</Text>
              </View>
              <View style={styles.memberInfo}>
                <Text style={styles.groupMemberPhone}>{member.phone}</Text>
              </View>
              <TouchableOpacity onPress={() => removeMember(index)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      {groupMembers.length<5 ? <TouchableOpacity onPress={openPopup} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity> : <Text>You can't add more members, Exceed Limit</Text>}         

      <Modal
        visible={isPopupVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closePopup}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Family or Friend</Text>
            <TextInput
              style={styles.modalInput}
              value={popupPhoneNumber}
              onChangeText={setPopupPhoneNumber}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
            />
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={addMember}>
                <Text style={styles.modalButtonText}>Apply</Text>
              </TouchableOpacity>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.modalButton} onPress={closePopup}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
     <View style={styles.modalButtonContainer && styles.accountButtonContainer}>
     <TouchableOpacity style={styles.modalButton} onPress={handleSubmit}>
       <Text style={styles.modalButtonText}>Apply</Text>
     </TouchableOpacity>
     <View style={styles.divider} />
     <TouchableOpacity style={styles.modalButton} onPress={handleCancel}>
       <Text style={styles.modalButtonText}>Cancel</Text>
     </TouchableOpacity>
</View>
</>
  );
};

export default UserProfileScreen;
