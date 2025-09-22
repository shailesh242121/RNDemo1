import {useNavigation} from '@react-navigation/native';
import {Button,View, Text} from 'react-native';
import React from 'react';
import User from '../Model/User';


function HomeScreen({route}:any) {
 const navigation = useNavigation();
  //  const {  userData } = routes;
    const { userData } = route.params;
    const user = userData.user;

  // const user = userData;
  console.log("User data in home screen ", route.params);
  console.log("User data in home screen name ", user.username);
  return (
    <View style={{flex:1,  padding:20}}>
      {user != undefined && <Text>Welcome, {user.username}</Text> } 

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
