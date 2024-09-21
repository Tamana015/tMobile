import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles';

const MemberSelectionModal = ({ isVisible, onClose, selectedPlan, groupMembers, selectedMembers, toggleMemberSelection, handleAddMembers }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Members for {selectedPlan}</Text>
          <FlatList
            data={groupMembers}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.memberSelection}
                onPress={() => toggleMemberSelection(item.id)}
              >
                <Text style={styles.memberName}>{item.name}</Text>
                <Text style={styles.checkmark}>{selectedMembers[item.id] ? '✓' : ''}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleAddMembers}
          >
            <Text style={styles.confirmButtonText}>CONFIRM PLAN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MemberSelectionModal;
