import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FormScreen from './src/components/FormScreen';
import DisplayScreen from './src/components/DisplayScreen';
import FormInputScreen from './src/components/FormInputScreen';
import FormDataScreen from './src/components/FormDataScreen';
import {TouchableOpacity, Text} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Students List">
    //     <Stack.Screen
    //       name="FormScreen"
    //       component={FormScreen}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Students List"
    //       component={DisplayScreen}
    //       options={({navigation}) => ({
    //         headerShown: true,
    //         headerRight: () => (
    //           <TouchableOpacity
    //             style={{
    //               marginRight: 10,
    //               backgroundColor: 'green',
    //               padding: 8,
    //               borderRadius: 5,
    //             }}
    //             onPress={() => navigation.navigate('FormScreen')}>
    //             <Text style={{color: 'white'}}>Add New</Text>
    //           </TouchableOpacity>
    //         ),
    //       })}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Students List">
        <Stack.Screen
          name="FormInputScreen"
          component={FormInputScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FormDataScreen"
          component={FormDataScreen}
          options={({navigation}) => ({
            headerShown: true,
            headerRight: () => (
              <TouchableOpacity
                style={{
                  marginRight: 10,
                  backgroundColor: 'green',
                  padding: 8,
                  borderRadius: 5,
                }}
                onPress={() => navigation.navigate('FormInputScreen')}>
                <Text style={{color: 'white'}}>Add New</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
