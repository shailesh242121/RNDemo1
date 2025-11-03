import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  Pressable,
} from 'react-native';
// import home from '../../resources/images/home.png';
import AppStyle from '../../MyStylesheet';
import { TextInput as TP } from 'react-native-paper';

const stylesA = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    color: 'black',
  },
});

export default function ImagesTest() {
  return (
    <View style={AppStyle.container}>
      <Text>Display Images Here</Text>
      <TP style={[{ marginTop: 30 }]} label="Image URL" mode="flat" />
      <TP style={[{ marginTop: 30 }]} label="Image URL" mode="outlined" />
      <TextInput
        style={[
          {
            borderRadius: 5,
            borderWidth: 1,
            padding: 10,
            borderColor: 'black',
            marginTop: 30,
          },
        ]}
        placeholder="Image URL"
      />
      <Pressable
        style={[
          {
            flexDirection: 'row',
            backgroundColor: '#e5e5e5',
            alignItems: 'center',
            marginTop: 30,
            padding: 10,
          },
        ]}
        onPress={() => {
          Alert.alert('Home Pressed');
        }}
      >
        <Image
          source={require('../../resources/icons/home.jpg')}
          style={stylesA.image}
        />
        <Text style={{ color: 'black', marginLeft: 10, fontSize: 20 }}>
          Home
        </Text>
      </Pressable>
    </View>
  );
}
