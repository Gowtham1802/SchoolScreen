/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import HomeScreen from './src/components/HomeScreen';
import LoginScreen from './src/components/LoginScreen';
import ModalScreen from './src/components/ModalScreen';
import DrawerScreen from './src/components/Drawer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => HomeScreen);
// AppRegistry.registerComponent(appName, () => DrawerScreen);
// AppRegistry.registerComponent(appName, () => LoginScreen);
// AppRegistry.registerComponent(appName, () => ModalScreen);
