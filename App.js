// import 'react-native-gesture-handler';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {TouchableOpacity, Text} from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//
// import FormScreen from './src/components/FormScreen';
// import DisplayScreen from './src/components/DisplayScreen';
// import FormInputScreen from './src/components/FormInputScreen';
// import FormDataScreen from './src/components/FormDataScreen';
// import ProfileCardScreen from './src/components/ProfileCardScreen';
// import EditInputScreen from './src/components/EditInputScreen';
// import StudentDetailsScreen from './src/components/StudentDetailsScreen';
// import moment from 'moment';
//
// const Stack = createStackNavigator();
//
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="FormDataScreen">
//         <Stack.Screen
//           name="FormInputScreen"
//           component={FormInputScreen}
//           options={({navigation}) => ({
//             headerStyle: {
//               height: 80,
//               backgroundColor: '#344968',
//             },
//             headerTitleStyle: {
//               color: 'white',
//               fontSize: 24,
//             },
//             headerTitleAlign: 'center',
//             headerLeft: () => (
//               <TouchableOpacity
//                 onPress={() => navigation.navigate('FormDataScreen')}>
//                 <FontAwesome5
//                   name="chevron-left"
//                   size={30}
//                   color="white"
//                   style={{marginLeft: 15}}
//                 />
//               </TouchableOpacity>
//             ),
//           })}
//         />
//         <Stack.Screen
//           name="ProfileCardScreen"
//           component={ProfileCardScreen}
//           options={({navigation, route}) => ({
//             headerShown: true,
//             headerStyle: {
//               height: 80,
//               backgroundColor: '#344968',
//             },
//             headerTitleStyle: {
//               color: 'white',
//               fontSize: 24,
//             },
//             headerTitleAlign: 'center',
//             headerLeft: () => (
//               <TouchableOpacity
//                 onPress={() => navigation.navigate('FormDataScreen')}>
//                 <FontAwesome5
//                   name="chevron-left"
//                   size={30}
//                   color="white"
//                   style={{marginLeft: 15}}
//                 />
//               </TouchableOpacity>
//             ),
//             headerRight: () => (
//               <TouchableOpacity
//                 style={{
//                   marginRight: 15,
//                   padding: 8,
//                   borderRadius: 5,
//                 }}
//                 onPress={() =>
//                   navigation.navigate('EditInputScreen', {
//                     studentData: route.params.studentData,
//                   })
//                 }>
//                 <FontAwesome5
//                   name="edit"
//                   size={25}
//                   color="white"
//                   style={{marginLeft: 15}}
//                 />
//               </TouchableOpacity>
//             ),
//           })}
//         />
//         <Stack.Screen
//           name="EditInputScreen"
//           component={EditInputScreen}
//           options={({navigation, route}) => ({
//             headerStyle: {
//               height: 80,
//               backgroundColor: '#344968',
//             },
//             headerTitleStyle: {
//               color: 'white',
//               fontSize: 24,
//             },
//             headerTitleAlign: 'center',
//             headerLeft: () => (
//               <TouchableOpacity
//                 onPress={() =>
//                   navigation.navigate('ProfileCardScreen', {
//                     studentData: route.params.studentData,
//                   })
//                 }>
//                 <FontAwesome5
//                   name="chevron-left"
//                   size={30}
//                   color="white"
//                   style={{marginLeft: 15}}
//                 />
//               </TouchableOpacity>
//             ),
//           })}
//         />
//         <Stack.Screen
//           name="FormDataScreen"
//           component={FormDataScreen}
//           options={({navigation}) => ({
//             headerShown: true,
//             headerStyle: {
//               height: 80,
//               backgroundColor: '#344968',
//             },
//             headerTitleStyle: {
//               color: 'white',
//               fontSize: 24,
//               left: 50,
//             },
//             // headerTitleAlign: 'center',
//             headerRight: () => (
//               <TouchableOpacity
//                 style={{
//                   marginRight: 15,
//                   backgroundColor: 'white',
//                   padding: 8,
//                   borderRadius: 30,
//                   alignItems: 'center',
//                 }}
//                 onPress={() => navigation.navigate('FormInputScreen')}>
//                 <FontAwesome5
//                   name="plus"
//                   size={15}
//                   color="#344968"
//                   // style={{marginLeft: 1}}
//                 />
//               </TouchableOpacity>
//             ),
//           })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
//
// export default App;

// import 'react-native-gesture-handler';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
//
// const App = () => {
//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <NavigationContainer>
//         <Drawer.Navigator initialRouteName="Home">
//           <Drawer.Screen name="Home" component={HomeScreen} />
//           <Drawer.Screen name="About" component={ScreenA} />
//           <Drawer.Screen name="Other" component={ScreenB} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// };
//
// export default App;

// App.js
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {WebView} from 'react-native-webview';
import Animated from 'react-native-reanimated';

import LoginScreen from './src/screens/auth/LoginScreen';
import WelcomeScreen from './src/screens/welcome/WelcomeScreen';
import AccountScreen from './src/screens/setting/AccountScreen';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from './src/utils/Metrics';
import {ThemeProvider} from './src/utils/ThemeContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <WebView source={{uri: 'http://192.168.1.45:82/'}} style={{flex: 1}} />
);

const TrackingScreen = () => (
  <View style={styles.container}>{/* Add your content here */}</View>
);

const ProfileScreen = () => <View style={styles.container}></View>;

const SettingsScreen = () => (
  <View style={styles.container}>
    <AccountScreen />
  </View>
);

const getTabBarIcon = (route, focused, color, size) => {
  let iconName;
  let scale = focused ? 1.3 : 0.9;

  if (route.name === 'Home') {
    iconName = 'home-outline';
  } else if (route.name === 'Tracking') {
    iconName = 'map-marker-outline';
  } else if (route.name === 'Notification') {
    iconName = 'bell-outline';
  } else if (route.name === 'Settings') {
    iconName = 'cog-outline';
  }

  return (
    <Animated.View style={{transform: [{scale}]}}>
      <Icons name={iconName} size={size} color={color} />
    </Animated.View>
  );
};

const DashboardScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          getTabBarIcon(route, focused, color, size),
        tabBarActiveTintColor: '#E43A45',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Tracking"
        component={TrackingScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Notification"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#E43A45'},
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerLeft: () => (
            <TouchableOpacity>
              <Icon
                name="angle-left"
                size={35}
                color="#fff"
                style={{marginLeft: 15}}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={DashboardScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Account"
            component={AccountScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

