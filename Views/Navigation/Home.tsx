import {useNavigation} from '@react-navigation/native';
import {Button,View, Text} from 'react-native';


function HomeScreen() {
 const navigation = useNavigation();

  return (
    <View style={{flex:1,  padding:20}}>

      <Text>Welcome User</Text>

    {/* <Button 
      title="Screen 1"
      onPress={() =>
       navigation.navigate('Profile'as never)
      }
    /> */}

    {/* <Button
    title='Screen 2'
    onPress={() =>
     navigation.navigate('Screen2' as never)
    }
  ></Button> */}
  </View>
  );
}

export default HomeScreen;
