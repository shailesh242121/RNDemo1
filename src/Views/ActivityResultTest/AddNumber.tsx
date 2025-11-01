import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, TextInput, View, Text } from 'react-native';
import { AppStyle } from '../../../MyStylesheet';
import { Background } from '@react-navigation/elements';
// import styles from './MyStylesheet';

export function AddNumber() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          backgroundColor: 'white',
          borderRadius: 1,
          color: 'black',
          borderWidth: 1,
          borderColor: 'red',
        }}
        placeholder="Enter a number to add"
        placeholderTextColor={'gray'}
      />
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          marginTop: 20,
          backgroundColor: 'lightgreen',
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Add Number
        </Text>
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
