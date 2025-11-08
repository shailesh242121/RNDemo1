/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';
// import DynamicNavigationStack from './src/Views/Navigation/Nav2/dynamicNavigationStack';

import AppWithNav from './src/Views/Navigation/Nav2/AppWithNav';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppWithNav);
// AppRegistry.registerComponent(appName, () => DynamicNavigationStack());
