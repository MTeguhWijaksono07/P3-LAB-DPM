import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ItemListScreen from '../screens/ItemListScreen';
import ManagementItemScreen from '../screens/ManagementItemScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ItemList">
      <Stack.Screen name="ItemList" component={ItemListScreen} options={{ title: 'Item List' }} />
      <Stack.Screen name="ManagementItem" component={ManagementItemScreen} options={{ title: 'Management Item' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
