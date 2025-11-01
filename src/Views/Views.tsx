import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
  Pressable,
} from 'react-native';
import CustomButton from './CustomButton';
import {
  Card,
  Text as TB,
  Title,
  Paragraph,
  Button as BT,
  ActivityIndicator,
  RadioButton,
} from 'react-native-paper';

import MyContext from './MyContext';
import ChildComponent from './ChildComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  featureContainer: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    padding: 10,
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
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleStyle: {
    color: 'white',
    fontSize: 22,
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setMargin: {
    marginTop: 50,
  },

  input: {
    backgroundColor: 'white',
    height: 40,
    margin: 12,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container_box: {
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center', // Vertically center children
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  input_box: {
    flex: 1, // Allow TextInput to take up available space
    height: 40,
    borderWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 10,
    marginRight: 10, // Add some space between TextInput and Button
    borderRadius: 5,
  },
});

const styleRB = StyleSheet.create({
  radioGroup: {
    flexDirection: 'row', // Arrange radio buttons in a row
    alignItems: 'center', // Align items vertically in the center
    justifyContent: 'space-around', // Space out radio buttons evenly
    marginTop: 20, // Add margin at the top
    borderRadius: 8, // Rounded corners
    backgroundColor: 'white', // White background for the group
    padding: 16, // Padding inside the group
    elevation: 4, // Shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {
      width: 0,
      height: 2, // Shadow offset for iOS
    },
    shadowOpacity: 0.25, // Shadow opacity for iOS
    shadowRadius: 3.84, // Shadow radius for iOS
  },
  radioButton: {
    flexDirection: 'row', // Arrange radio button and label in a row
    alignItems: 'center', // Align items vertically in the center
  },
  radioLabel: {
    marginLeft: 8, // Space between radio button and label
    fontSize: 16, // Font size for the label
    color: '#333', // Dark gray color for the label
  },
});

const pressableStyles = StyleSheet.create({
  baseButton: {
    borderRadius: 5,
    backgroundColor: '#007bff', // Default background
    margin: 10,
  },
  buttonPressed: {
    backgroundColor: '#0056b3', // Darker background when pressed
  },
  buttonDisabled: {
    backgroundColor: '#cccccc', // Grey background when disabled
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};
function Views({ navigation, route }: any) {
  const [loading, setLoading] = useState<boolean>(false);
  const sharedValue = 'Data from Context';
  // const { itemId, otherParam } = route.params;

  const { dummy, userData } = route.params;
  const user = userData;
  // console.log("User details are ", user);

  const [selectedValue, setSelectedValue] = useState<string>('option1');
  const [textHide, setTextHide] = React.useState<boolean>(false);
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string>('');
  function handleSelectedValue(value: string) {
    setSelectedValue(value);
  }

  return (
    <ScrollView>
      <View style={[styles.featureContainer]}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>

      <View style={[styles.featureContainer]}>
        <Card>
          <Card.Content>
            {/* <TB variant="titleLarge">Card Title</TB> */}
            <TB variant="bodyMedium">
              This is a paragraph within the card content.
            </TB>
          </Card.Content>

          {/* <Card.Actions>
            <BT>Cancel</BT>
            <BT>Ok</BT>
          </Card.Actions> */}
        </Card>
      </View>

      <View style={[styles.featureContainer]}>
        <MyContext.Provider value="sharedSSS">
          {/* Your components that need sharedValue go here */}
          <ChildComponent />
        </MyContext.Provider>
      </View>

      <View style={[styles.featureContainer]}>
        <Pressable
          style={({ pressed }) => [
            pressableStyles.baseButton,
            !disabled && pressableStyles.buttonPressed, // Apply pressed style only when not disabled
            disabled && pressableStyles.buttonDisabled, // Apply disabled style
          ]}
          disabled={disabled}
          onPress={() => {
            setLoading(true);
            setDisabled(true);
            setTimeout(() => {
              setDisabled(false);
              setLoading(false);
            }, 2000);
          }}
          android_ripple={{ color: '#973535ff' }}
        >
          {!loading && (
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                textAlignVertical: 'center',
                height: 40,
              }}
            >
              Loading button
            </Text>
          )}
          {loading && (
            <ActivityIndicator
              style={{ height: 40 }}
              color="white"
              animating={true}
              size={'small'}
            />
          )}
        </Pressable>
      </View>

      <View style={[styles.featureContainer]}>
        <Text> I Found the following Detilas </Text>
        <Text>Props 1: {JSON.stringify(dummy)}</Text>
        <Text>Props 2: {JSON.stringify(userData)}</Text>
        <Text> itemId: {JSON.stringify(dummy.itemId)}</Text>
        <Text> otherParam: {JSON.stringify(dummy.otherParam)}</Text>
        <Text> User Name : {JSON.stringify(user.name)}</Text>
        <Text> User Age : {JSON.stringify(user.age)}</Text>
        <Text> User Email : {JSON.stringify(user.email)}</Text>
      </View>

      <View style={[styles.featureContainer]}>
        <Image source={logo} />
      </View>
      <Text style={styles.header}>Centered Texted Text View ext</Text>

      <View style={styles.container_box}>
        <TextInput style={styles.input_box} placeholder="Enter text..." />
        <Button title="Submit" onPress={() => console.log('Button pressed')} />
      </View>

      <TextInput
        style={{ height: 40, padding: 5 }}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          backgroundColor: 'black',
        }}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>Index</Text>
      </View>
      <CustomButton />
      <View style={[styles.featureContainer]}>
        <Button
          title="Login UI"
          onPress={() => {
            console.log('Go to App clicked');
            showAlert('login Clicked');
          }}
        />
      </View>

      <TouchableOpacity style={[styles.button]}>
        <Button
          title="Register UI"
          onPress={() => {
            console.log('Go to App clicked');
            //navigation.navigate('App')
          }}
        />
      </TouchableOpacity>

      <TextInput style={styles.input}></TextInput>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          title="Submit Me"
          onPress={() => {
            console.log('Go to App clicked');
            //navigation.navigate('App')
          }}
        />
        <Button
          title="Button 2"
          disabled
          onPress={() => {
            showAlert('clicked disabled');
          }}
          color={'#00ff00'}
        ></Button>
      </View>

      {textHide && <Text> Hide the Text Example</Text>}
      <Button title={textHide ? 'Hide' : 'show'} onPress={() => hideItem()} />

      <View style={styleRB.radioGroup}>
        {/* First radio button for ReactJS */}
        <View style={styleRB.radioButton}>
          <RadioButton.Android
            value="option1"
            status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
            onPress={() => handleSelectedValue('option1')}
            color="#007BFF" // Custom color for the radio button
          />
          <Text style={styleRB.radioLabel}>ReactJS</Text>
          {/* Second radio button for NextJs */}
          <View style={styleRB.radioButton}>
            <RadioButton.Android
              value="option2"
              status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedValue('option2')}
              color="#007BFF" // Custom color for the radio button
            />
            <Text style={styleRB.radioLabel}>NextJs</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  function hideItem() {
    console.log('Hide the text clicked and state is ', textHide);
    setTextHide(!textHide);
  }

  function showAlert(message: string) {
    Alert.alert(message);
  }
}

export default Views;
