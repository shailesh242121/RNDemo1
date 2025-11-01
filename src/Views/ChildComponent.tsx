import React, { useContext } from 'react';
import MyContext from './MyContext';
import { View, Text } from 'react-native';

function ChildComponent() {
  const contextValue = useContext(MyContext);
  return (
    <View>
      <Text>The value from context is: {contextValue}</Text>
    </View>
  );
}
export default ChildComponent;
