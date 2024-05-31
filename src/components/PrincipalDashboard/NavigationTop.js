import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import { Platform } from "react-native";
import Dashboard from './Dashboard'; // Check and correct the path
import MenuScreen from './MenuScreen'; // Check and correct the path

// function DashBoard() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#03cafc',
//       }}>
//       <Text style={{fontSize: 20, color: '#ffffff', fontWeight: '800'}}>
//         dashboard is here
//       </Text>
//     </View>
//   );
// }

// function MainMenu() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#c203fc',
//       }}>
//       <Text style={{fontSize: 20, color: '#ffffff', fontWeight: '800'}}>
//         main menu is here
//       </Text>
//     </View>
//   );
// }

const Tab = createMaterialTopTabNavigator();

function Navigation() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: '#080808',
        tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'},
        tabBarStyle: {backgroundColor: 'white', marginTop: insets.top},
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{title: 'Dashboard'}}
      />
      <Tab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{title: 'Main Menu'}}
      />
    </Tab.Navigator>
  );
}

export default function NavigationTop() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
