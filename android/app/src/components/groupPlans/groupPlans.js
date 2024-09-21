import React, { useState } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import PlanItem from './planItem';
import MemberSelectionModal from './memberSelectionModal';
import AllRechargePlans from './allRechargePlans';
import Header from '../headerBar/Header';

const groupMembers = [
  { id: '1', name: 'Alice', preferences: ['Basic', 'Standard'] },
  { id: '2', name: 'Bob', preferences: ['Standard', 'Premium'] },
  { id: '3', name: 'Charlie', preferences: ['Basic', 'Premium'] },
];

export default function GroupPlans({ navigation }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState({});

  const toggleMemberSelection = (id) => {
    setSelectedMembers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddMembers = () => {
    setModalVisible(false);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'GROUP PLANS'} />
      <FlatList
        data={AllRechargePlans}
        renderItem={({ item }) => (
          <PlanItem 
            item={item} 
            selectedPlan={selectedPlan} 
            setSelectedPlan={setSelectedPlan} 
          />
        )}
        keyExtractor={(item) => item.id}
      />
      {selectedPlan && (
        <TouchableOpacity
          style={[styles.addButton, { opacity: selectedPlan ? 1 : 0.5, marginTop: 5 }]}
          onPress={() => setModalVisible(true)}
          disabled={!selectedPlan}
        >
          <Text style={styles.addButtonText}>SELECT MEMBERS</Text>
        </TouchableOpacity>
      )}
      <MemberSelectionModal 
        isVisible={isModalVisible} 
        onClose={() => setModalVisible(false)} 
        selectedPlan={selectedPlan} 
        groupMembers={groupMembers} 
        selectedMembers={selectedMembers} 
        toggleMemberSelection={toggleMemberSelection} 
        handleAddMembers={handleAddMembers} 
      />
    </SafeAreaView>
  );
}
