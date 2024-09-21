import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { formatDate } from '../../utils/helper';

export const StatementItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemDate}>{formatDate(item.date)}</Text>
      <Text style={styles.itemTitle}>{item.plan.title}</Text>
      <Text style={styles.itemAmount}>₹{item.amount}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  );
};
