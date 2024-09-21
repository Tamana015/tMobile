import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import DeviceItem from './deviceItem';
import Header from '../headerBar/Header';
import { useNavigation, useRoute } from '@react-navigation/native';

const DeviceScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { data ,title, userData} = route.params; 

  console.error("we find out the userdata in last page ", userData);

  const renderItem = ({ item, index }) => {
    const isLastItem = index === data.length - 1;
    const isSingleInRow = data.length % 2 === 1 && isLastItem;

    return (
      <View style={[styles.itemContainer, isSingleInRow && styles.singleItemContainer]}>
        <TouchableOpacity onPress={() => navigation.navigate('DeviceDetail', { device: item, userData:userData })}>
          <DeviceItem device={item} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={title} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  row: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    flex: 1,
    margin: 5,
  },
  singleItemContainer: {
    flex: 0.5,
  },
});

export default DeviceScreen;
