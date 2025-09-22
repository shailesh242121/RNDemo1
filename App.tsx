/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, Button, View, Platform } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  createStaticNavigation,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
//import {StackNavigator} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SearchView from './Views/SearchView.tsx';
import Screen1 from './Views/Navigation/Screen1.tsx';
import Screen2 from './Views/Navigation/Screen2.tsx';
import HomeScreen from './Views/Navigation/Home.tsx';
import indexScreen from './Views/index.tsx';
import Views from './Views/Views.tsx';
import Login from './Views/Login/Login.tsx';
import Register from './Views/Login/Register.tsx';
import SectionListBasics from './Views/SectionListBasics.tsx';
import FlexTest from './Views/FlexTest.tsx';
import TodoList from './Views/todoList/todoList.tsx';
import NetworkIndex from './Network/NetworkIndex.tsx';



const RootStackNav = createNativeStackNavigator({
  screens: {
    Index: {
      screen: indexScreen,
      options: {title: 'Index'},
    },
    Views: {
      screen: Views,
    },
     List: {
      screen: SearchView,
    },
    sectionList:{
      screen:SectionListBasics
    },
     Login: {
      screen: Login,
    },
     Reigster: {
      screen: Register,
    },
    FlexDemo:{
      screen: FlexTest,
    },
    Todolist:{
      screen: TodoList,
    },
    NetworkCall:{
      screen: NetworkIndex,
    },
    Home: {
      screen: HomeScreen,
    },

  },
});


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'green',
      }
    })
  }
});
function App() {
//  const isDarkMode = useColorScheme() === 'dark';




const Navigation = createStaticNavigation(RootStackNav);

  return(
    <Navigation />
  //  <HomeScreen/>
    // <NavigationContainer>
    //    <Stack.Navigator initialRouteName="Index">
    //       <Stack.Screen name="Index" component={Index} />
    //       <Stack.Screen name="Screen1" component={Screen1} />
    //     </Stack.Navigator>
    //  </NavigationContainer>
    // <View>
    //   <SearchView />
    // </View>

  //  SearchViewGroup()
        //  IndexView()

        // RootStack()
        // HomeScreenNavigator()

  )

  // function IndexView() {
  //   return (
  //     <View>
  //       <Index />
  //     </View>
  //   )
  // }

  function SearchViewGroup() {
    return (
      <View>
        <SearchView />
      </View>
    );
  }

  type RootStackParamList = {
    Index: undefined;
    Screen1: undefined;
  };

  
  // return (
  //   <SafeAreaProvider>
  //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //     <AppContent />
  //   </SafeAreaProvider>
  // );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
