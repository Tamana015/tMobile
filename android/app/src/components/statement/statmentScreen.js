import React, { useState } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StatementsModalData from './statementData';
import { StatementItem } from './StatementItem';
import { Pagination } from './Pagination';
import { styles } from './styles';
import Header from '../headerBar/Header';

const StatementScreen = () => {
  const navigation = useNavigation();
  const [pageIndex, setPageIndex] = useState(1);
  const itemsPerPage = 5;

  const sortedData = StatementsModalData.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  const currentData = sortedData.slice((pageIndex - 1) * itemsPerPage, pageIndex * itemsPerPage);

  const handleNext = () => {
    if (pageIndex < Math.ceil(sortedData.length / itemsPerPage)) {
      setPageIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (pageIndex > 1) {
      setPageIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="STATEMENTS" />
      <FlatList
        data={currentData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <StatementItem item={item} />
        )}
        ListFooterComponent={() => (
          <Pagination
            pageIndex={pageIndex}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            totalItems={sortedData.length}
            itemsPerPage={itemsPerPage}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default StatementScreen;
