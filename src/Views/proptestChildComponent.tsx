import { View, Text } from 'react-native';
export default function proptestChildComponent(props: {
  message: string;
  user: { name: string; age: number };
  wow: string;
  callback: (val: string) => string;
}) {
  console.warn('message in child component is :', props.user);

  return (
    <View>
      <Text>PropTest from User {props.message}</Text>
      <Text>Wow value is {props.wow}</Text>
      <Text>Callback says: {props.callback('ashish')}</Text>
      <Text> user props is {props.user.name}</Text>
    </View>
  );
}
