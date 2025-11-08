import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
// import home from '../../resources/images/home.png';
import AppStyle from '../../MyStylesheet';
import { TextInput as TP } from 'react-native-paper';
// import AppStyle from '../../MyStylesheet';
import { FaBeer } from 'react-icons/fa';
import {
  GestureDetector,
  GestureHandlerRootView,
  Gesture,
} from 'react-native-gesture-handler';

const stylesA = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    color: 'black',
  },
});

export default function ImagesTest() {
  const [tabResult, setTabResult] = React.useState('');
  const tapGesture = Gesture.Tap()
    .onStart(() => {
      console.log('Tap gesture started!');
      setTabResult(tabResult + '\n' + 'Tap gesture started!');
    })
    .onEnd((_event, success) => {
      if (success) {
        setTabResult(tabResult + '\n' + 'Tap gesture ended successfully!');
        console.log('Tap gesture ended successfully!');
      } else {
        setTabResult(tabResult + '\n' + 'Tap gesture failed or was cancelled.');
        console.log('Tap gesture failed or was cancelled.');
      }
    });

  return (
    <ScrollView style={AppStyle.container}>
      <GestureHandlerRootView style={AppStyle.container}>
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
            source={require('react-icons/fa').FaBeer}
            style={stylesA.image}
          />
          <Text style={{ color: 'black', marginLeft: 10, fontSize: 20 }}>
            Home
          </Text>
        </Pressable>

        <GestureDetector gesture={tapGesture}>
          <View style={AppStyle.inputBox}>
            <Text style={AppStyle.text}>Tap me!</Text>
          </View>
        </GestureDetector>
      </GestureHandlerRootView>

      <ScrollView
        style={{
          backgroundColor: '#e5e5e5',
          borderRadius: 5,
          borderColor: 'black',
          height: 200,
          borderWidth: 1,
          padding: 10,
          marginBottom: 50,
        }}
      >
        <Text>{tabResult}</Text>
      </ScrollView>
    </ScrollView>
  );

  // return (
  //   <View style={AppStyle.container}>
  //     <Text>Display Images Here</Text>
  //     <TP style={[{ marginTop: 30 }]} label="Image URL" mode="flat" />
  //     <TP style={[{ marginTop: 30 }]} label="Image URL" mode="outlined" />
  //     <TextInput
  //       style={[
  //         {
  //           borderRadius: 5,
  //           borderWidth: 1,
  //           padding: 10,
  //           borderColor: 'black',
  //           marginTop: 30,
  //         },
  //       ]}
  //       placeholder="Image URL"
  //     />
  //     <Pressable
  //       style={[
  //         {
  //           flexDirection: 'row',
  //           backgroundColor: '#e5e5e5',
  //           alignItems: 'center',
  //           marginTop: 30,
  //           padding: 10,
  //         },
  //       ]}
  //       onPress={() => {
  //         Alert.alert('Home Pressed');
  //       }}
  //     >
  //       <Image
  //         source={require('../../resources/icons/home.jpg')}
  //         style={stylesA.image}
  //       />
  //       <Text style={{ color: 'black', marginLeft: 10, fontSize: 20 }}>
  //         Home
  //       </Text>
  //     </Pressable>

  //     <Pressable
  //       style={[
  //         {
  //           flexDirection: 'row',
  //           backgroundColor: '#e5e5e5',
  //           alignItems: 'center',
  //           marginTop: 30,
  //           padding: 10,
  //         },
  //       ]}
  //       onPress={() => {
  //         Alert.alert('Home Pressed');
  //       }}
  //     >
  //       <Image
  //         source={require('react-icons/fa').FaBeer}
  //         style={stylesA.image}
  //       />
  //       <Text style={{ color: 'black', marginLeft: 10, fontSize: 20 }}>
  //         Home
  //       </Text>
  //     </Pressable>
  //   </View>
  // );
}
