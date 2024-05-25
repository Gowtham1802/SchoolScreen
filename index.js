/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import App1 from './App1';
import HomeScreen from './src/components/HomeScreen';
import LoginScreen from './src/components/LoginScreen';
import SignInScreen from './src/components/SignInScreen';
import ModalScreen from './src/components/ModalScreen';
import DrawerScreen from './src/components/Drawer';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => App1);
// AppRegistry.registerComponent(appName, () => HomeScreen);
AppRegistry.registerComponent(appName, () => SignInScreen);
// AppRegistry.registerComponent(appName, () => DrawerScreen);
// AppRegistry.registerComponent(appName, () => LoginScreen);
// AppRegistry.registerComponent(appName, () => ModalScreen);
