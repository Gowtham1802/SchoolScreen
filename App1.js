// App1.js
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/components/app/store';
import PostsList from './src/components/features/posts/PostsList';
import AddPostForm from './src/components/features/posts/AddPostForm';
import ViewPostScreen from './src/components/features/posts/ViewPostScreen';
import EditPostScreen from './src/components/features/posts/EditPostScreen';
import {fetchUsers} from './src/components/features/users/usersSlice';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, View} from 'react-native';

store.dispatch(fetchUsers());

const Stack = createStackNavigator();

const App1 = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PostsList">
          <Stack.Screen
            name="PostsList"
            component={PostsList}
            options={({navigation}) => ({
              title: 'Posts',
              headerRight: () => (
                <View style={{marginRight: 20}}>
                  <Button
                    onPress={() => navigation.navigate('AddPostForm')}
                    title="Add Post"
                  />
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="AddPostForm"
            component={AddPostForm}
            options={{title: 'Add New Post'}}
          />
          <Stack.Screen
            name="ViewPostScreen"
            component={ViewPostScreen}
            options={{title: 'View Post'}}
          />
          <Stack.Screen
            name="EditPostScreen"
            component={EditPostScreen}
            options={{title: 'Edit Post'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App1;
