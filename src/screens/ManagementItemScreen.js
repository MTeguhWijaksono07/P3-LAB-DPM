import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ManagementItemScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Management Item</Text>
      <Button title="Go to Item List" onPress={() => navigation.navigate('ItemList')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default ManagementItemScreen;
