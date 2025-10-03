import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

interface ChildProps {
  onAction: (message: string) => void;
}
interface ChildState {}

class ChildComponent extends Component<ChildProps, ChildState> {
  render() {
    return (
      <View>
        <Text>Child Component</Text>
        <Button title="Trigger Parent Action" onPress={() => this.props.onAction("Hello from child!")} />
      </View>
    );
  }
}

export default ChildComponent;