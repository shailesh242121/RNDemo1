import { StyleSheet } from 'react-native';
const AppStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10,
    gap: 10,
  },
  inputBox: {
    backgroundColor: 'white',
    borderRadius: 1,
    color: 'black',
    borderWidth: 1,
    borderColor: 'red',
  },

  button: {
    marginTop: 20,
    backgroundColor: 'lightgreen',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppStyle;
