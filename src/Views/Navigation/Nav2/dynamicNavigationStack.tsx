import React from 'react';
import Login from '../../Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../../Login/Register';
import { View, Text } from 'react-native';
// import { rootStackParam } from '../rootStackParam.type';

export const DynamicNavigationStack = () => {
  // const Stack = createNativeStackNavigator<rootStackParam>();
  return (
    <View>
      <Text> Hello</Text>
    </View>
  );
};
