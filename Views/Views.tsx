
import React  ,{useState} from 'react';
import { View, Text, Button, StyleSheet,Image, ScrollView, TouchableOpacity, Alert, TextInput } from 'react-native';
import CustomButton from './CustomButton';
import { RadioButton } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin:10,
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
   setMargin:{
    marginTop:50
  },

  input: {
    backgroundColor: 'white',
    height: 40,
    margin: 12,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  }, header:{
    fontSize: 20,
    fontWeight: "bold"
  }

});

const styleRB = StyleSheet.create
({
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
})


const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};
function Views() {
  const [selectedValue, setSelectedValue] = useState<string>('option1');
  const [textHide, setTextHide] = React.useState<boolean>(false);
 const [text, setText] = React.useState<string>('');
  function handleSelectedValue(value: string) {
    setSelectedValue(value);
  }

  return (
    <ScrollView>
<Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />

          <Image source={logo} />
  <Text style={styles.header}>Centered Texted Text View ext</Text>

    <TextInput
        style={{height: 40, padding: 5}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>

      <View style={{justifyContent:'center',
         alignItems:'center',
          padding:10, backgroundColor:'black',       }}>
      <Text style={{color:'white', fontSize:20}}>Index</Text>
      </View>
      <CustomButton/>

      <Button title="Login UI" onPress={() => {
        console.log("Go to App clicked")
        showAlert("login Clicked")
      }} />

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
        <Button title='Button 2'disabled onPress={() => { showAlert("clicked disabled")}} color={"#00ff00"}></Button>
      </View>

      { textHide && <Text> Hide the Text Example</Text> }
      <Button title= {textHide? 'Hide' : "show"} onPress={() => hideItem()}/>

<View style={styleRB.radioGroup}>
{/* First radio button for ReactJS */}
<View style={styleRB.radioButton}>
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


