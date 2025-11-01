import React, { Component } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
export default function Number() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Callback Check</Text>
      <Text> Number is 0</Text>
      <Pressable
        style={{
          marginTop: 20,
          backgroundColor: 'lightblue',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => {
          navigation.navigate('addNumber' as never);
        }}
      >
        <Text>Increase Number</Text>
      </Pressable>
    </View>
  );
}
