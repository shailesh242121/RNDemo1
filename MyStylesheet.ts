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
  container_box: {
    flexDirection: 'column', // Arrange children horizontally
    alignItems: 'flex-start', // Vertically center children
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#e5e5e5',
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
  submit: {
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  deleteText: {
    color: 'white',
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'darkred',
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid', // Optional: 'solid', 'double', 'dotted', 'dashed'
    textDecorationColor: 'red',
    backgroundColor: 'yellow',
    marginRight: 10,
  }
});

export default AppStyle;
