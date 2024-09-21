import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { color } from '../../utils/color';
import Grid from './grid';

const DashboardGrid = ({ navigation, title, userData, gridItems}) => {
  console.log("user data is ", userData);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.horizontalContainer}>
          {gridItems.map((item, index) => (
            <Grid
              key={index}
              imageSource={item.imageSource}
              title={item.title}
              onPress={() => item?.data ? navigation.navigate(item.screen, {data:item.data, title:item.title, userData:userData}) : navigation.navigate(item.screen)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  card: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.magenta,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    paddingStart: 10,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
});

export default DashboardGrid;
