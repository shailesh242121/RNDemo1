import React, { Component } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  addNumber: { onGoBack?: (number?: string) => void };
};

export default function Number() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [result, setResult] = React.useState('0');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Callback Check Result from ActivityStarted</Text>
      <Text> Number is {result}</Text>
      <Pressable
        style={{
          marginTop: 20,
          backgroundColor: 'lightblue',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => {
          console.log('Press Increase Number');
          navigation.navigate('addNumber', {
            onGoBack: refresh,
          });
        }}
      >
        <Text>Get Result from new Screen</Text>
      </Pressable>
    </View>
  );

  function refresh(number?: string) {
    setResult(number || '0');
    if (number !== undefined) {
      console.log('Number returned:', number);
    } else {
      console.log('No number returned');
    }
  }
}
