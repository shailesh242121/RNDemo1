import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Button, View, BackHandler, Text } from 'react-native';
import React, { useCallback } from 'react';
import User from '../Model/User';


function HomeScreen({ route }: any) {
  const navigation = useNavigation();
  //  const {  userData } = routes;
  const { userData } = route.params;
  const user = userData.user;


  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        // Return true to prevent the default back action (e.g., popping the screen).
        // Return false to allow the default back action.

        console.log("Back button pressed in home screen111");
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      // return () => {
      //   BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      // };
    }, [])
  );

  // const user = userData;
  console.log("User data in home screen ", route.params);
  console.log("User data in home screen name ", user.username);
  return (
    <View style={{ flex: 1, padding: 20 }}>
      {user != undefined && <Text>Welcome, {user.username}</Text>}

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
