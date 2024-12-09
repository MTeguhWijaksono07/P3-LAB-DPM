import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ title, onPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.spacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#007bff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  spacer: {
    width: 50,
  },
});

export default Header;
