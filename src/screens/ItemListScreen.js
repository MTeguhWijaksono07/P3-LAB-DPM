import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Button from '../components/Button';

const ItemListScreen = ({ navigation }) => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item List</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Manage Items" onPress={() => navigation.navigate('ManagementItem')} />
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
    marginBottom: 20,
  },
  item: {
    padding: 15,
    backgroundColor: '#f1f1f1',
    marginVertical: 5,
    width: '90%',
    alignItems: 'center',
  },
});

export default ItemListScreen;
