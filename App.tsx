/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './index.tsx';
import SearchView from './Views/SearchView.tsx';

function App() {
//  const isDarkMode = useColorScheme() === 'dark';

  return(
    // <NavigationContainer>
    //   <RootStack />
    //  </NavigationContainer>
    <View>
      <SearchView />
    </View>


        //  IndexView()
          // SearchView()

  )

  function IndexView() {
    return (
      <View>
        <Index />
      </View>
    )
  }

  function SearchViewGroup() {
    return (
      <View>
        <SearchView />
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="Index" component={Index} />  
      <Stack.Screen name="App" component={AppContent} />
    </Stack.Navigator>
  );
}
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
