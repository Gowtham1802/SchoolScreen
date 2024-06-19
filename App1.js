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



// // App.js
// 
// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './src/components/app/store';
// import TodoApp from './src/TodoApp';
// 
// const App = () => {
//     return (
//         <Provider store={store}>
//             <TodoApp />
//         </Provider>
//     );
// };
// 
// export default App;



// import React from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// 
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.gridItem}>
//         <View style={styles.iconContainer}>
//           <View style={styles.calendarIcon}>
//             <Text style={styles.calendarDate}>28</Text>
//           </View>
//         </View>
//         <Text style={styles.gridText}>CALENDAR EVENTS</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#e0f7fa',
//   },
//   gridItem: {
//     backgroundColor: '#fff',
//     width: 150,
//     height: 150,
//     padding: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderLeftWidth: 10,
//     borderBottomWidth: 10,
//     // borderRightWidth: 10,
//     // borderTopWidth: 10,
//     borderColor: '#1e3d59',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//   },
//   iconContainer: {
//     position: 'absolute',
//     top: 10,
//     alignItems: 'center',
//   },
//   calendarIcon: {
//     width: 50,
//     height: 50,
//     backgroundColor: '#1e3d59',
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   calendarDate: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   gridText: {
//     marginTop: 60,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: '#1e3d59',
//   },
// });
// 
// export default App;