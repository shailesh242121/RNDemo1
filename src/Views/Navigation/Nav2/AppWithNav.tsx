import * as React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { CommonActions, NavigationContainer, useNavigation } from '@react-navigation/native';
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
import HomeScreen from '../Home';
import HomeDrawer from '../../Home/HomeDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();
function MyStack() {
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={AppStore}>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Index" component={indexScreen} />
          <Stack.Screen name="Views" component={Views} />
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
          <Stack.Screen name="Home" component={HomeScreen} options={{
            headerShown: true,
            gestureEnabled: false,
            headerLeft: () => null,
            title: 'Welcome Home!',
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#3e25d1ff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerRight: () => (
              <Button
                onPress={() =>
                // navigation.replace('Login' as never)
                // navigation.navigate('Login' as never)
                {
                  CommonActions.reset({
                    index: 0, // This is the active route's index
                    routes: [
                      { name: 'Login' }, // The only screen in the new stack
                    ],
                  })
                  // navigation.dispatch(CommonActions.reset)
                  // navigation.navigate('Login' as never)
                }
                }
                title="Logout"
                color="#000"
              />
            ),
          }} />
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
          {/* <Stack.Screen name="HomeDrawer" component={HomeDrawer} /> */}
          {/* <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator> */}
        </Stack.Navigator>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default function AppWithNav() {
  const RootStack = createStackNavigator();
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {/* Start with the Auth stack if not logged in */}
        <RootStack.Screen
          name="AuthFlow"
          component={MyStack}
        />

        {/* The main app drawer flow */}
        <RootStack.Screen
          name="HomeDrawer"
          component={HomeDrawer}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
