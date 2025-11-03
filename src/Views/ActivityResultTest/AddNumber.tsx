import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, TextInput, View, Text } from 'react-native';
import AppStyle from '../../../MyStylesheet';
import { Background } from '@react-navigation/elements';
import React from 'react';
// import styles from './MyStylesheet';

export function AddNumber(props: { navigation: any; route: any }) {
  const navigation = useNavigation();
  const [result, setResult] = React.useState('');
  console.warn('AddNumber props:', props);
  return (
    <View style={styles.container}>
      <TextInput
        style={AppStyle.inputBox}
        placeholder="Enter a number to add"
        placeholderTextColor={'gray'}
        value={result}
        keyboardType="numeric"
        onChangeText={setResult}
      />
      <Pressable
        onPress={() => {
          props.route.params.onGoBack(result);
          navigation.goBack();
        }}
        style={AppStyle.button}
      >
        <Text style={AppStyle.text}>Add Number</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
  },
});

export default AddNumber;
