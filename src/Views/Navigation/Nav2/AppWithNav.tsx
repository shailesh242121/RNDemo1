import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  RootStackParamList,
  ScreenProps,
  profileType,
} from './rootStackPropList.type';
import MyFlatListScreen from '../../todoList/MyFlatListScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppStyles from '../../../../MyStylesheet';
import indexScreen from '../../index';
import Views from '../../Views';
import SearchView from '../../SearchView';
import SectionListBasics from '../../SectionListBasics';
import Login from '../../Login/Login';
import Register from '../../Login/Register';
import FlexTest from '../../FlexTest';
import TodoList from '../../todoList/todoList';
import NetworkIndex from '../../../../Network/NetworkIndex';
import ClassTest from '../../../../ClassTest';
import ProductHome from '../../Project/ProductProject/ProductHome';
import HooksTest from '../../Login/hooks';
import ReducerDemo from '../../ReducerDemo';
import Number from '../../ActivityResultTest/Number';
import AddNumber from '../../ActivityResultTest/AddNumber';
import Proptest from '../../proptest';
import ImagesTest from '../../ImagesTest';
import { AddNumbers, Login as LG } from './ScreenConstant';
import NativeCallback from '../../NativeCallback';
import TodoListRTK from '../../RTK_Todo/TodoListRTK';
import { Provider } from 'react-redux';
import { AppStore } from '../../Store';
import App from '../../../../App';

const Stack = createStackNavigator<RootStackParamList>();

function MyStack() {
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    // <View>
    //   <Text>Hello</Text>
    // </View>
    //  {/* </GestureHandlerRootView> */}
    // <GestureHandlerRootView style={{ flex: 1 }}>
    <Provider store={AppStore}>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={indexScreen} />
        <Stack.Screen name="Views" component={Views} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="List"
          component={SearchView}
          initialParams={{ initialColor: '#ff0062ff', listType: 'List' }}
        />
        <Stack.Screen
          name="Grid"
          component={SearchView}
          initialParams={{ initialColor: '#0033ffff', listType: 'Grid' }}
        />
        <Stack.Screen name="sectionList" component={SectionListBasics} />
        <Stack.Screen name={LG} component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="FlexDemo" component={FlexTest} />
        <Stack.Screen name="Todolist" component={TodoList} />
        <Stack.Screen name="NetworkCall" component={NetworkIndex} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ClassDemo" component={ClassTest} />
        <Stack.Screen name="ProductProject" component={ProductHome} />
        <Stack.Screen name="hooksTest" component={HooksTest} />
        <Stack.Screen name="ReducerDemo" component={ReducerDemo} />
        <Stack.Screen name="Number" component={Number} />
        <Stack.Screen name={AddNumbers} component={AddNumber} />
        <Stack.Screen name="PropsTest" component={Proptest} />
        <Stack.Screen name="image" component={ImagesTest} />
        <Stack.Screen name="NativeBridgeDemo" component={NativeCallback} />
        <Stack.Screen name="TodoListRTX" component={TodoListRTK} />
        {/*
       <Stack.Screen
          name={SCREEN_CONSTANTS.LIST}
          component={MyFlatListScreen}
          initialParams={{ listType: 'List', initialColor: '#00ff00' }}
        />
        <Stack.Screen
          name={SCREEN_CONSTANTS.GRID}
          component={MyFlatListScreen}
          initialParams={{ listType: 'Grid', initialColor: '#7617d5ff' }}
        /> */}
      </Stack.Navigator>
    </Provider>
    // </GestureHandlerRootView>
  );
}
//     hooksTest: {
//       screen: require('./src/Views/Login/hooks').default,
//     },
//     ReducerDemo: {
//       screen: require('./src/Views/ReducerDemo').default,
//     },
//     Number: {
//       screen: require('./src/Views/ActivityResultTest/Number').default,
//     },
//     addNumber: {
//       screen: require('./src/Views/ActivityResultTest/AddNumber').default,
//     },
//     PropsTest: {
//       screen: require('./src/Views/proptest').default,
//     },
//     image: {
//       screen: require('./src/Views/ImagesTest').default,
//     },
//     DynamicNavigationStack: {
//       screen: require('./src/Views/Navigation/Nav2/dynamicNavigationStack')
//         .default,
//     },

function HomeScreen() {
  // const { navigation } = props;
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen123</Text>
      {getButtonWithActionName('Profile', () =>
        navigation.navigate('Profile' as never),
      )}
      {getButtonWithActionName(SCREEN_CONSTANTS.LIST, () =>
        navigation.navigate(SCREEN_CONSTANTS.LIST as never),
      )}
      {getButtonWithActionName(SCREEN_CONSTANTS.GRID, () =>
        navigation.navigate(SCREEN_CONSTANTS.GRID as never),
      )}

      {/* <Button onPress={() => navigation.navigate('Profile' as never)}>
        Go to Profile
      </Button> */}
    </View>
  );
}

function getButtonWithActionName(title: string, action: () => void) {
  return (
    <View style={[AppStyles.button]}>
      <Button onPress={action} title={`Go to ${title}`} />
    </View>
  );
}

function ProfileScreen() {
  // console.log('Profile props:', props);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      {/* <Text>Name: {props.route.params.name}</Text>
      <Text>Age: {props.route.params.age}</Text> */}
    </View>
  );
}

export default function AppWithNav() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
