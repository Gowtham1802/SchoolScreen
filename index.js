/**
 * @format
 */

import {NativeModules} from 'react-native';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import HomeScreen from './src/components/dashboard/HomeScreen';
import LoginScreen from './src/components/LoginScreen';
import SignInScreen from './src/components/dashboard/SignInScreen';
import CalendarEvents from './src/components/dashboard/calenderEvents';
import ModalScreen from './src/components/ModalScreen';
import DrawerScreen from './src/components/Drawer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => App1);
// AppRegistry.registerComponent(appName, () => App2);
// AppRegistry.registerComponent(appName, () => App3);
// AppRegistry.registerComponent(appName, () => App4);
// AppRegistry.registerComponent(appName, () => HomeScreen);
// AppRegistry.registerComponent(appName, () => CalendarEvents);
// AppRegistry.registerComponent(appName, () => SignInScreen);
// AppRegistry.registerComponent(appName, () => DrawerScreen);
// AppRegistry.registerComponent(appName, () => LoginScreen);
// AppRegistry.registerComponent(appName, () => ModalScreen);
