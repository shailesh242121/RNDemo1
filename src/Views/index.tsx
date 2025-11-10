import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import User from './Model/User';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#4980d2ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  opacityStyle: {
    backgroundColor: '#0365f8ff',
    borderRadius: 10,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 5,
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
      title: 'Show Native Bridge Demo',
      action: () => navigation.navigate('NativeBridgeDemo' as never),
    },
    {
      title: 'Show Grid Demo',
      action: () => navigation.navigate('Grid' as never),
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
      },
    },
    {
      title: 'Prop Test Demo',
      action: () => {
        navigation.navigate('PropsTest' as never);
      },
    },
    {
      title: 'Show Number Activity Result Demo',
      action: () => {
        navigation.navigate('Number' as never);
      },
    },
    {
      title: 'Prop Test Demo',
      action: () => {
        navigation.navigate('PropsTest' as never);
      },
    },
    {
      title: 'Show Image Demo',
      action: () => {
        navigation.navigate('image' as never);
      },
    },
    {
      title: 'Show List RTK',
      action: () => {
        navigation.navigate('TodoListRTX' as never);
      },
    },
    {
      title: 'Show Drawer Navigation Demo',
      action: () => {
        navigation.navigate('HomeDrawer' as never);
      },
    },
  ];

  return (
    <ScrollView style={{ gap: 20, flex: 1 }}>
      {actionList.map((item, index) => (
        <Pressable
          key={index}
          onPress={item.action}
          style={styles.opacityStyle}
        >
          <Text style={{ color: 'white' }}>{item.title} </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

export default indexScreen;
