import React from 'react';
import { View, Text, TouchableOpacity,FlatList, Dimensions } from 'react-native';
import { styles } from './style';

const { width } = Dimensions.get('window');
const itemWidth = (width - 72) / 2;

export const PlanSection = ({ title, plans, onSelectPlan }) => (
  <View style={styles.column}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <FlatList
      data={plans}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelectPlan(item)}>
          <View style={[styles.plan, { width: itemWidth }]}>
            <Text><Text style={styles.bold}>Price:</Text> ₹{item.price}</Text>
            <Text><Text style={styles.bold}>Data:</Text> {item.data}</Text>
            <Text><Text style={styles.bold}>Validity:</Text> {item.validity}</Text>
            <Text><Text style={styles.bold}>Voice Calls:</Text> {item.voiceCalls}</Text>
            <Text><Text style={styles.bold}>SMS:</Text> {item.sms || 'N/A'}</Text>
            <Text><Text style={styles.bold}>Note:</Text> {item.specialNote}</Text>
          </View>
        </TouchableOpacity>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.planList}
    />
  </View>
);