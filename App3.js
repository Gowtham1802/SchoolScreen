// import React, {useEffect, useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import SignInScreen from './src/components/dashboard/SignInScreen';
// import MainScreen from './src/components/dashboard/MainScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// 
// const Stack = createStackNavigator();
// 
// const App3 = () => {
//   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(true); // New state to handle loading
// 
//   useEffect(() => {
//     checkLoginStatus();
//   }, []);
// 
//   const checkLoginStatus = async () => {
//     try {
//       const userToken = await AsyncStorage.getItem('userToken');
//       if (userToken) {
//         setIsUserLoggedIn(true);
//       }
//       setIsLoading(false); // Loading is complete
//     } catch (error) {
//       console.error('Error checking login status:', error);
//       setIsLoading(false); // Loading is complete even if there's an error
//     }
//   };
// 
//   if (isLoading) {
//     // Render a loading screen or nothing while checking login status
//     return null;
//   }
// 
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName={isUserLoggedIn ? 'MainScreen' : 'SignInScreen'}>
//         <Stack.Screen
//           name="SignInScreen"
//           component={SignInScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="MainScreen"
//           component={MainScreen}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// 
// export default App3;



import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './src/components/redux/store1';
import SignInScreen from './src/components/dashboard/SignInScreen';
import MainScreen from './src/components/dashboard/MainScreen';
import {fetchProfile} from './src/components/redux/profileSlice';

const Stack = createStackNavigator();

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          dispatch(fetchProfile());
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginStatus();
  }, [dispatch]);

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isUserLoggedIn ? 'MainScreen' : 'SignInScreen'}>
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App3 = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

export default App3;

