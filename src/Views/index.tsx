import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import User from './Model/User';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  opacityStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
});
function indexScreen() {
  let navigation = useNavigation();

  let user = { name: 'John Doe', age: 30, email: 'abc@test.com' };

  let actionList = [
    {
      title: 'Show View Demo',
      action: () =>
        navigation.navigate('Views' as never, {
          dummy: { itemId: 'test', otherParam: 20, userD: user },
          userData: user,
        }),
    },
    {
      title: 'Show List Demo',
      action: () => navigation.navigate('List' as never),
    },
    {
      title: 'Show Login Demo',
      action: () => navigation.navigate('Login' as never),
    },
    {
      title: 'Show Dynamic Flex Demo',
      action: () => navigation.navigate('FlexDemo' as never),
    },
    {
      title: 'Show Todo list',
      action: () => navigation.navigate('Todolist' as never),
    },
    {
      title: 'Show Network Call Demo',
      action: () => navigation.navigate('NetworkCall' as never),
    },
    {
      title: 'Show Class Component Demo',
      action: () => {
        console.log('navigating to class test');
        navigation.navigate('classDemo' as never);
      },
    },
    {
      title: 'Show Hooks Demo',
      action: () => {
        console.log('navigating to hooks test');
        navigation.navigate('hooksTest' as never);
      },
    },
    {
      title: 'Show Reducer Demo',
      action: () => {
        navigation.navigate('ReducerDemo' as never);
      },
    },
    {
      title: 'Show Product List Project',
      action: () => {
        navigation.navigate('ProductProject' as never);
      },
    },
    {
      title: 'Show Number Activity Result Demo',
      action: () => {
        navigation.navigate('Number' as never);
      }
    },
    {
      title: 'Prop Test Demo',
      action: () => {
        navigation.navigate('PropsTest' as never);
      },
    },
  ];

  return (
    <View style={{ marginTop: 50, flex: 1 }}>
      {actionList.map((item, index) => (
        <TouchableOpacity key={index} style={styles.opacityStyle}>
          <Button title={item.title} onPress={item.action} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default indexScreen;
