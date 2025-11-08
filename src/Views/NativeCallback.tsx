import React from 'react';
import { Text, View, NativeModules, Pressable } from 'react-native';
import AppStyle from '../../MyStylesheet';

function NativeCallback() {
  const [result, setResult] = React.useState('');
  const { CalendarModule } = NativeModules;
  const onPress = () => {
    CalendarModule.showToast('shailesh');
  };

  const getCallback = () => {
    CalendarModule.callbackMethodDemo('shailesh', 'Chauhan', eventId => {
      console.log(`Created a new event with id ${eventId}`);
      setResult(eventId);
    });
  };
  return (
    <View style={AppStyle.container}>
      <Text>Native module Test</Text>
      <Pressable style={AppStyle.button} onPress={onPress}>
        <Text>Call Native Method</Text>
      </Pressable>

      <Text>The message from the callback will appear here</Text>
      <Text> {result} </Text>
      <Pressable style={AppStyle.button} onPress={getCallback}>
        <Text>Call Native Method With Callback Method</Text>
      </Pressable>
    </View>
  );
}

export default NativeCallback;
