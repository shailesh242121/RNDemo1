import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  featureContainer: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  featureHeading:{
   fontSize: 18,
   fontStyle:'italic',
   fontWeight:'bold',
   fontFamily:'android'
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
    marginTop: 50
  },

  input: {
    backgroundColor: 'white',
    height: 40,
    margin: 12,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  }, header: {
    fontSize: 20,
    fontWeight: "bold"
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

export const styleRB = StyleSheet.create
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