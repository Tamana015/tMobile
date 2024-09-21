import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export const Pagination = ({ pageIndex, handleNext, handlePrevious, totalItems, itemsPerPage }) => {
  return (
    <View style={styles.pagination}>
      <TouchableOpacity onPress={handlePrevious} disabled={pageIndex === 1}>
        <Text style={[styles.paginationButton, pageIndex === 1 && styles.disabledButton]}>Newer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNext} disabled={pageIndex >= Math.ceil(totalItems / itemsPerPage)}>
        <Text style={[styles.paginationButton, pageIndex >= Math.ceil(totalItems / itemsPerPage) && styles.disabledButton]}>Older</Text>
      </TouchableOpacity>
    </View>
  );
};
