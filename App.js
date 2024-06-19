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

import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {StyleSheet, View, Text, Modal, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';

// Import your screens
import LoginScreen from './src/screens/auth/LoginScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <WebView source={{uri: 'http://192.168.1.45:82/'}} />
    </View>
  );
};

const AnotherScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Another Screen</Text>
    </View>
  );
};

// Custom Drawer Content with Logout Confirmation Modal
const CustomDrawerContent = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(false);
    navigation.replace('Login');
  };

  return (
    <>
      <DrawerContentScrollView>
        <DrawerItem
          label="Dashboard"
          onPress={() => navigation.navigate('Dashboard')}
        />
        <DrawerItem
          label="Another"
          onPress={() => navigation.navigate('Another')}
        />
        <DrawerItem label="Logout" onPress={() => setModalVisible(true)} />
      </DrawerContentScrollView>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Logout</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to logout?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleLogout}>
                <Text style={styles.modalButtonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Another" component={AnotherScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  modalButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
});

export default App;
