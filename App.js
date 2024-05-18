import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import FormScreen from './src/components/FormScreen';
import DisplayScreen from './src/components/DisplayScreen';
import FormInputScreen from './src/components/FormInputScreen';
import FormDataScreen from './src/components/FormDataScreen';
import ProfileCardScreen from './src/components/ProfileCardScreen';
import EditInputScreen from './src/components/EditInputScreen';
import StudentDetailsScreen from './src/components/StudentDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FormDataScreen">
        <Stack.Screen
          name="FormInputScreen"
          component={FormInputScreen}
          options={({navigation}) => ({
            headerStyle: {
              height: 80,
              backgroundColor: '#344968',
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 24,
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('FormDataScreen')}>
                <FontAwesome5
                  name="chevron-left"
                  size={30}
                  color="white"
                  style={{marginLeft: 15}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ProfileCardScreen"
          component={ProfileCardScreen}
          options={({navigation, route}) => ({
            headerShown: true,
            headerStyle: {
              height: 80,
              backgroundColor: '#344968',
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 24,
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('FormDataScreen')}>
                <FontAwesome5
                  name="chevron-left"
                  size={30}
                  color="white"
                  style={{marginLeft: 15}}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{
                  marginRight: 15,
                  padding: 8,
                  borderRadius: 5,
                }}
                onPress={() =>
                  navigation.navigate('EditInputScreen', {
                    studentData: route.params.studentData,
                  })
                }>
                <FontAwesome5
                  name="edit"
                  size={25}
                  color="white"
                  style={{marginLeft: 15}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="EditInputScreen"
          component={EditInputScreen}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 80,
              backgroundColor: '#344968',
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 24,
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProfileCardScreen', {
                    studentData: route.params.studentData,
                  })
                }>
                <FontAwesome5
                  name="chevron-left"
                  size={30}
                  color="white"
                  style={{marginLeft: 15}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="FormDataScreen"
          component={FormDataScreen}
          options={({navigation}) => ({
            headerShown: true,
            headerStyle: {
              height: 80,
              backgroundColor: '#344968',
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 24,
              left: 50,
            },
            // headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity
                style={{
                  marginRight: 15,
                  backgroundColor: 'white',
                  padding: 8,
                  borderRadius: 30,
                  alignItems: 'center',
                }}
                onPress={() => navigation.navigate('FormInputScreen')}>
                <FontAwesome5
                  name="plus"
                  size={15}
                  color="#344968"
                  // style={{marginLeft: 1}}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
