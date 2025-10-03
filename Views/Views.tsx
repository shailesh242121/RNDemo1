
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Image, ScrollView, TouchableOpacity, Alert, TextInput } from 'react-native';
import CustomButton from './CustomButton';
import { RadioButton } from 'react-native-paper';
import { styles, styleRB } from './styles';
//  const { ToastModule } = ReactNative.NativeModules;




const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};
function Views({ navigation, route }: any) {
  const [textToSearch, setTextToSearch] = React.useState<string>('');

  // const { itemId, otherParam } = route.params;

  const { dummy, userData } = route.params;
  const user = userData;
  // console.log("User details are ", user);

  const [selectedValue, setSelectedValue] = useState<string>('option1');
  const [textHide, setTextHide] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string>('');
  function handleSelectedValue(value: string) {
    setSelectedValue(value);
  }

  // function showToastFromNative() {
  //    ToastModule.showMessage("Hello from React Native!", (error:Error, message:string) => {
  //       if (error) {
  //           console.error(error);
  //       } else {
  //           console.log(message);
  //       }
  //   });
  // }

  return (
    <ScrollView>

      <View style={[styles.featureContainer]}>
        <Text style={[styles.featureHeading]}> Image from URL</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />

      </View>
      <View style={[styles.featureContainer]}>
        <Text style={[styles.featureHeading]}> Props from previous Screen</Text>
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
        <Text style={[styles.featureHeading]}>Activity Indicator</Text>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="#0000ff" />
        <ActivityIndicator size="large" color="#00ff00" />
      </View>



      <Text style={styles.header}>Centered Texted Text View ext</Text>

      <View style={styles.container_box}>
        <TextInput
          style={styles.input_box}
          onChangeText={setTextToSearch}
          value={textToSearch}
          placeholder="Enter text1..."
        />
        <Button
          title="Submit"
          onPress={() => console.log('Button pressed')}
        />

        <View style={{ borderStyle: 'solid', borderColor: 'black', borderRadius: '10' }}>
          You have entered :{textToSearch}
        </View>
      </View>

      <View style={[styles.featureContainer]}>
        <Text style={[styles.featureHeading]}>Text with spaces will be a pizza slice</Text>

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
      </View>

      <View style={[styles.featureContainer]}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10, backgroundColor: 'black',
        }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Index</Text>
        </View>

        <View style={[styles.featureContainer]}>
          <Text style={[styles.featureHeading]}>Include example</Text>
          <CustomButton />
        </View>

        <View style={[styles.featureContainer]}>
          <Button title="Click me show Alert" onPress={() => {
            console.log("Go to App clicked")
            showAlert("login Clicked")
          }} />
        </View>
      </View>

      <TouchableOpacity style={[styles.button]} >
        <Button title="Register UI" onPress={() => {
          console.log("Go to App clicked")
          //navigation.navigate('App')
        }} />
      </TouchableOpacity>

      <TextInput style={styles.input}></TextInput>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          title="Submit Me"
          onPress={() => {
            console.log("Go to App clicked");
            //navigation.navigate('App')
          }}
        />
        <Button title='Button 2' disabled onPress={() => { showAlert("clicked disabled") }} color={"#00ff00"}></Button>
      </View>
      <View style={[styles.featureContainer]}>
        <Text style={[styles.featureHeading]}>Show Hide Demo</Text>
        {textHide && <Text> Hide the Text Example</Text>}
        <Button title={textHide ? 'Click to Hide' : "Click to show show"} onPress={() => hideItem()} />
      </View>
      <View style={[styles.featureContainer]}>
        <Text style={[styles.featureHeading]}>Radio button example</Text>
        {/* First radio button for ReactJS */}
        <View style={[styleRB.radioGroup, styleRB.radioButton]}>
          <RadioButton.Android
            value="option1"
            status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
            onPress={() => handleSelectedValue('option1')}
            color="#007BFF" // Custom color for the radio button
          />
          <Text style={styleRB.radioLabel}>
            ReactJS
          </Text>
          {/* Second radio button for NextJs */}
          <View style={styleRB.radioButton}>
            <RadioButton.Android
              value="option2"
              status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedValue('option2')}
              color="#007BFF" // Custom color for the radio button
            />
            <Text style={styleRB.radioLabel}>
              NextJs
            </Text>
          </View>


        </View>
      </View>




    </ScrollView>
  );

  function hideItem() {
    console.log("Hide the text clicked and state is ", textHide);
    setTextHide(!textHide);
  }

  function showAlert(message: string) {
    Alert.alert(message);
  }
}

export default Views;


