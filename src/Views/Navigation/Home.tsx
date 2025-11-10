import { useNavigation } from '@react-navigation/native';
import { Button, View, Text, Alert, BackHandler } from 'react-native';
import React, { useEffect } from 'react';
import User from '../Model/User';


function HomeScreen({ route }: any) {

  useEffect(() => {
    const backAction = () => {
      // Prompt the user before exiting the app
      Alert.alert('Hold on!', 'Are you sure you want to exit the app?', [
        { text: 'Cancel', onPress: () => null, style: 'cancel' },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true; // Prevent default behavior
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove(); // Cleanup
  }, []);
  const navigation = useNavigation();
  //  const {  userData } = routes;
  const { userData } = route.params;
  const user = userData.user;

  // const user = userData;
  console.log("User data in home screen ", route.params);
  console.log("User data in home screen name ", user.username);
  return (
    <View style={{ flex: 1, padding: 20 }}>
      {user != undefined && <Text>Welcome, {user.username}</Text>}
    </View>
  );
}

export default HomeScreen;
