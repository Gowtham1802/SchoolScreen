import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ScreenA from './src/components/ScreenA';
import ScreenB from './src/components/ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'autoprefixer';
              size = focused ? 25 : 20;
              color = focused ? '#C36E0D' : '#555';
            } else if (route.name === 'About') {
              iconName = 'btc';
              size = focused ? 25 : 20;
              color = focused ? '#a5bf69' : '#555';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#96036a',
          inactiveTintColor: '#555',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#999',
          showLabel: true,
          labelStyle: {fontSize: 14},
        }}
        activeColor="#555"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#dadbd9'}}>
        <Tab.Screen
          name="Home"
          component={ScreenA}
          // options={{ tabBarBadge: 5 }}
        />
        <Tab.Screen
          name="About"
          component={ScreenB}
          // options={{ tabBarBadge: 5 }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
