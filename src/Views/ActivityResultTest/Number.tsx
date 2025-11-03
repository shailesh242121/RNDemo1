import React, { Component } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function Number() {
  const navigation = useNavigation();
  const [result, setResult] = React.useState('0');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Callback Check {result}</Text>
      <Text> Number is 0</Text>
      <Pressable
        style={{
          marginTop: 20,
          backgroundColor: 'lightblue',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => {
          console.log('Press Increase Number');
          navigation.navigate('addNumber' as never, {
            onGoBack: refresh,
          });
        }}
      >
        <Text>Increase Number</Text>
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


