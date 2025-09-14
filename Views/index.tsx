import React from "react";
import { View, Text, Button,StyleSheet,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

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
  opacityStyle:{
    padding:10,
    marginTop:30,

  }
});
function indexScreen() {
  let navigation = useNavigation();


  return (
    <View>
    

      <TouchableOpacity style={styles.opacityStyle} >
        <Button title="Show View Demo" onPress={() => {
          navigation.navigate('Views' as never)
        }} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.opacityStyle} >
        <Button title="Show List Demo" onPress={() => {
          navigation.navigate('List' as never)
        }} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.opacityStyle} >
        <Button title="Show Login Demo" onPress={() => {
          navigation.navigate('Login' as never)
        }} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.opacityStyle} >
        <Button title="Show Dynamic Flex Demo" onPress={() => {
          navigation.navigate('FlexDemo' as never)
        }} />
      </TouchableOpacity>
    
    </View>
  )
}

function getButtons(title: string) {
  return (
    
      <Button title="heloo"></Button>
  
  )
}
export default indexScreen;