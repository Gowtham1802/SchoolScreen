import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FormScreen from './src/components/FormScreen';
import DisplayScreen from './src/components/DisplayScreen';
import {TouchableOpacity, Text} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FormScreen"
          component={FormScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Students List"
          component={DisplayScreen}
          options={({navigation}) => ({
            headerShown: true,
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: 15, backgroundColor: 'green', padding: 8, borderRadius: 5,}} // Add some margin to the right
                onPress={() => navigation.navigate('FormScreen')}>
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
