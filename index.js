/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomeScreen from './src/components/HomeScreen';
import LoginScreen from './src/components/LoginScreen';
import ModalScreen from './src/components/ModalScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => HomeScreen);
// AppRegistry.registerComponent(appName, () => LoginScreen);
// AppRegistry.registerComponent(appName, () => ModalScreen);
