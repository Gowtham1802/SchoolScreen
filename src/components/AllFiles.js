// Drawer Navigation Section 

import ScrollList from "./ScrollList";


// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   ImageBackground,
//   StatusBar,
// } from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';
// import BackgroundImg from '../../assets/background.png';
// import ScrollList from '../../src/components/ScrollList';
// import ScrollList1 from '../../src/components/ScrollList1';
// 
// const Drawer = createDrawerNavigator();
// 
// const HomeContent = () => {
//   return (
//     <View style={styles.mainbody}>
//       <ImageBackground source={BackgroundImg} style={styles.body}>
//         <StatusBar backgroundColor="#00004F" />
//         <View style={styles.container}>
//           <View style={styles.container1}>
//             <Image
//               source={require('../../assets/navigation.png')}
//               style={styles.image1}
//             />
//             <Text style={styles.text}>SMT SCHOOL</Text>
//             <Image
//               source={require('../../assets/notification.png')}
//               style={styles.image1}
//             />
//           </View>
//           <View style={styles.container2}>
//             <View style={styles.imagecontent}>
//               <Image
//                 source={require('../../assets/Gowtham.jpeg')}
//                 style={styles.image}
//               />
//             </View>
//             <View style={styles.textcontent}>
//               <Text style={styles.text1}>Welcome</Text>
//               <Text style={styles.text2}>Gowtham T</Text>
//               <Text style={styles.text3}>X - A</Text>
//             </View>
//           </View>
//         </View>
//       </ImageBackground>
//       <ScrollList />
//       <ScrollList1 />
//     </View>
//   );
// };
// 
// const HomeScreen = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeContent} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };
// 
// const styles = StyleSheet.create({
//   mainbody: {
//     flex: 1,
//   },
//   body: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//   },
//   image1: {
//     width: 22,
//     height: 22,
//   },
//   container1: {
//     width: '100%',
//     marginTop: 15,
//     padding: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   text: {
//     color: 'white',
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
//   text1: {
//     color: 'white',
//     fontSize: 15,
//     fontWeight: 'normal',
//     marginLeft: 10,
//   },
//   text2: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   text3: {
//     width: 70,
//     color: 'black',
//     backgroundColor: '#F6D00B',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     borderRadius: 15,
//     marginLeft: 10,
//     marginTop: 10,
//     padding: 3,
//   },
//   container2: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     marginTop: 20,
//     marginBottom: 30,
//     marginLeft: 20,
//   },
//   image: {
//     width: 110,
//     height: 120,
//     borderRadius: 10,
//     borderWidth: 3,
//     borderColor: 'white',
//   },
//   textcontent: {
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     marginTop: 10,
//     gap: 1,
//   },
// });
// 
// export default HomeScreen;


// Bottom navigation Section & Icons 

// import * as React from 'react';
// import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import ScreenA from './src/components/ScreenA';
// import ScreenB from './src/components/ScreenB';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// 
// const Tab = createBottomTabNavigator();
// 
// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           tabBarIcon: ({focused, size, color}) => {
//             let iconName;
//             if (route.name === 'ScreenA') {
//               iconName = 'autoprefixer';
//             } else if (route.name === 'ScreenB') {
//               iconName = 'btc';
//             }
//             return <FontAwesome5 name={iconName} />;
//           },
//         })}>
//         <Tab.Screen name="Home" component={ScreenA} />
//         <Tab.Screen name="About" component={ScreenB} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// 
// export default App;



// Drawer navigation function here

// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import ScreenA from './src/components/ScreenA';
// import ScreenB from './src/components/ScreenB';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import 'react-native-gesture-handler';
// 
// const Drawer = createDrawerNavigator();
// 
// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={ScreenA} />
//         <Drawer.Screen name="About" component={ScreenB} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
// 
// export default App;




// ScrollList Codes here 



// import React, {useState} from 'react';
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Image,
//   RefreshControl,
// } from 'react-native';
// import Box1 from '../../src/components/Box1';
// import ScrollList from './ScrollList';
// 
// const ScrollList1 = () => {
//   const [refreshing, setRefreshing] = useState(false);
// 
//   const data = [
//     {
//       id: '1',
//       title: 'Message',
//       imageSource: require('../../assets/Box-Images/notification-bell.png'),
//     },
//     {
//       id: '2',
//       title: 'Attendance',
//       imageSource: require('../../assets/Box-Images/attendance.png'),
//     },
//     {
//       id: '3',
//       title: 'Portfolio',
//       imageSource: require('../../assets/Box-Images/portfolio.png'),
//     },
//     {
//       id: '4',
//       title: 'Homework',
//       imageSource: require('../../assets/Box-Images/homework.png'),
//     },
//     {
//       id: '5',
//       title: 'Fees Payment',
//       imageSource: require('../../assets/Box-Images/fees.png'),
//     },
//     {
//       id: '6',
//       title: 'Notes',
//       imageSource: require('../../assets/Box-Images/notes.png'),
//     },
//     {
//       id: '7',
//       title: 'Diary / Events',
//       imageSource: require('../../assets/Box-Images/diary.png'),
//     },
//     {
//       id: '8',
//       title: 'Time Table',
//       imageSource: require('../../assets/Box-Images/timetable.png'),
//     },
//     {
//       id: '9',
//       title: 'Exam Marks',
//       imageSource: require('../../assets/Box-Images/exammarks.png'),
//     },
//     {
//       id: '10',
//       title: 'Calendar Events',
//       imageSource: require('../../assets/Box-Images/calendar.png'),
//     },
//     {
//       id: '11',
//       title: 'Meal Menu',
//       imageSource: require('../../assets/Box-Images/mealmenu.png'),
//     },
//     {
//       id: '12',
//       title: 'Documents',
//       imageSource: require('../../assets/Box-Images/documents.png'),
//     },
//     {
//       id: '13',
//       title: 'Chat',
//       imageSource: require('../../assets/Box-Images/live-chat.png'),
//     },
//     {
//       id: '14',
//       title: 'Transport',
//       imageSource: require('../../assets/Box-Images/transportation.png'),
//     },
//     {
//       id: '15',
//       title: 'Health Card',
//       imageSource: require('../../assets/Box-Images/healthcard.png'),
//     },
//     {
//       id: '16',
//       title: 'My Learning',
//       imageSource: require('../../assets/Box-Images/learning.png'),
//     },
//     {
//       id: '17',
//       title: 'Syllabus',
//       imageSource: require('../../assets/Box-Images/syllabus.png'),
//     },
//     {
//       id: '18',
//       title: 'Photo and Videos',
//       imageSource: require('../../assets/Box-Images/photo&video.png'),
//     },
//   ];
// 
//   const onRefresh = () => {
//     setRefreshing(true);
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 500);
//   };
// 
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         keyExtractor={item => item.id}
//         numColumns={3}
//         showsVerticalScrollIndicator={false}
//         renderItem={({item}) => (
//           <Box1 title={item.title} imageSource={item.imageSource} />
//         )}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }
//       />
// 
//       <View style={styles.box}>
//         <View>
//           <Text style={styles.title}>Start Online Class</Text>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.text}>Continue</Text>
//           </TouchableOpacity>
//         </View>
//         <Image
//           source={require('../../assets/onlineclass.png')}
//           style={styles.image}
//         />
//       </View>
//     </View>
//   );
// };
// 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#CCE6FF',
//   },
//   box: {
//     width: '95%',
//     height: 100,
//     backgroundColor: 'white',
//     margin: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 18,
//     color: '#00004F',
//   },
//   button: {
//     width: 90,
//     backgroundColor: '#516f9c',
//     padding: 5,
//     borderRadius: 5,
//     marginTop: 5,
//     textAlign: 'center',
//   },
//   text: {
//     textAlign: 'center',
//     color: 'white',
//   },
//   image: {
//     width: 120,
//     height: 100,
//   },
// });
// 
// export default ScrollList1;




// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ImageBackground,
//   Image,
//   StatusBar,
//   RefreshControl,
// } from 'react-native';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// // import Icon1 from 'react-native-vector-icons/Entypo';
// import BackgroundImg from '../../assets/background.png';
// // import Box from '../src/Box';
// import ScrollList from '../../src/components/ScrollList';
// import ScrollList1 from '../../src/components/ScrollList1';
// import {green} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// // import {createDrawerNavigator} from '@react-navigation/drawer';
// 
// // const Drawer = createDrawerNavigator();
// 
// const HomeScreen = () => {
//   return (
//     <View style={styles.mainbody}>
//       <ImageBackground source={BackgroundImg} style={styles.body}>
//         <StatusBar backgroundColor="#00004F" />
//         <View style={styles.container}>
//           <View style={styles.container1}>
//             <Image
//               source={require('../../assets/navigation.png')}
//               style={styles.image1}
//             />
//             <Text style={styles.text}>SMT SCHOOL</Text>
//             <Image
//               source={require('../../assets/notification.png')}
//               style={styles.image1}
//             />
//           </View>
//           <View style={styles.container2}>
//             <View style={styles.imagecontent}>
//               <Image
//                 source={require('../../assets/Gowtham.jpeg')}
//                 style={styles.image}
//               />
//             </View>
//             <View style={styles.textcontent}>
//               <Text style={styles.text1}>Welcome</Text>
//               <Text style={styles.text2}>Gowtham T</Text>
//               <Text style={styles.text3}>X - A</Text>
//             </View>
//           </View>
//         </View>
//       </ImageBackground>
//       <ScrollList />
//       <ScrollList1 />
//     </View>
//   );
// };
// 
// const styles = StyleSheet.create({
//   mainbody: {
//     flex: 1,
//   },
//   body: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//   },
//   image1: {
//     width: 22,
//     height: 22,
//   },
//   container1: {
//     width: '100%',
//     marginTop: 15,
//     padding: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   text: {
//     color: 'white',
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
//   text1: {
//     color: 'white',
//     fontSize: 15,
//     fontWeight: 'normal',
//     marginLeft: 10,
//   },
//   text2: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   text3: {
//     width: 70,
//     color: 'black',
//     backgroundColor: '#F6D00B',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     borderRadius: 15,
//     marginLeft: 10,
//     marginTop: 10,
//     padding: 3,
//   },
//   container2: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     marginTop: 20,
//     marginBottom: 30,
//     marginLeft: 20,
//   },
//   image: {
//     width: 110,
//     height: 120,
//     borderRadius: 10,
//     borderWidth: 3,
//     borderColor: 'white',
//   },
//   textcontent: {
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     marginTop: 10,
//     gap: 1,
//   },
// });
// export default HomeScreen;




// import React from 'react';
// import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// 
// const Box1 = ({title, imageSource, navigation}) => {
//   console.log('Props received by Box1:', title, imageSource); // Log props to check if navigation prop is passed correctly
//   return (
//     <TouchableOpacity
//       onPress={() => navigation.navigate('About')}
//       style={styles.container}>
//       <View style={styles.innerContainer}>
//         <Image source={imageSource} style={styles.image} />
//         <Text style={styles.title}>{title}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     width: 105,
//     height: 100,
//     backgroundColor: 'white',
//     margin: 8,
//     padding: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     borderColor: '#00004F',
//     borderWidth: 3,
//     borderLeftColor: 'green',
//   },
//   innerContainer: {
//     alignItems: 'center',
//   },
//   title: {
//     color: '#00004F',
//     fontSize: 10,
//     fontWeight: 'bold',
//     marginTop: 5,
//     textAlign: 'center',
//     textTransform: 'uppercase',
//   },
//   image: {
//     width: 40,
//     height: 40,
//   },
// });
// 
// export default Box1;




// src/LoginScreen.js

// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ImageBackground,
// } from 'react-native';
// // import backgroundImage from '../assets/pexels-irina.jpg';
// import backgroundImage from '../../assets/pexels-irina-iriser.jpg';
// // import backgroundImage from '../assets/pexels-irina-iriser-1.jpg';
// // import backgroundImage from '../assets/pexels-photo-3.jpg';
// 
// const LoginScreen = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
// 
//   const handleSubmit = () => {
//     if (isLogin) {
//       handleLogin();
//     } else {
//       handleSignUp();
//     }
//   };
// 
//   const handleLogin = () => {
//     // Handle login logic here
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };
// 
//   const handleSignUp = () => {
//     // Handle sign-up logic here
//     console.log('Username:', username);
//     console.log('Password:', password);
//     console.log('Confirm Password:', confirmPassword);
//   };
// 
//   return (
//     <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
//       <View style={styles.container}>
//         {/* <Text style={styles.titles}>Click Here To Register..!</Text> */}
//         <Text style={styles.title}>{isLogin ? 'LogIn' : 'Sign Up'}</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//         {!isLogin && (
//           <TextInput
//             style={styles.input}
//             placeholder="Confirm Password"
//             secureTextEntry
//             value={confirmPassword}
//             onChangeText={setConfirmPassword}
//           />
//         )}
//         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//           <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.switchButton}
//           onPress={() => setIsLogin(!isLogin)}>
//           <Text style={styles.switchButtonText}>
//             {isLogin ? 'Create Account' : 'Already have an account? Login'}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };
// 
// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.4)',
//   },
//   // titles: {
//   //   fontSize: 30,
//   //   fontWeight: 'bold',
//   //   color: 'white',
//   //   marginBottom: 10,
//   // },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 20,
//   },
//   input: {
//     width: 300,
//     height: 50,
//     backgroundColor: 'rgba(255,255,255,0.8)',
//     borderRadius: 25,
//     paddingLeft: 20,
//     marginBottom: 20,
//   },
//   button: {
//     width: 300,
//     height: 50,
//     // backgroundColor: '#004500',
//     backgroundColor: '#D14FD1',
//     // backgroundColor: '#567',
//     // backgroundColor: '#F55',
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   switchButton: {
//     marginTop: 20,
//   },
//   switchButtonText: {
//     fontSize: 16,
//     color: 'white',
//     textDecorationLine: 'underline',
//   },
// });
// 
// export default LoginScreen;


// App.js codes


// import * as React from 'react';
// import {View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import ScreenA from './src/components/ScreenA';
// import ScreenB from './src/components/ScreenB';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//
// const Tab = createMaterialBottomTabNavigator();

// function App() {
//   return (
    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={({route}) => ({
    //       tabBarIcon: ({focused, size, color}) => {
    //         let iconName;
    //         if (route.name === 'Home') {
    //           iconName = 'autoprefixer';
    //           size = focused ? 25 : 20;
    //           color = focused ? '#C36E0D' : '#555';
    //         } else if (route.name === 'About') {
    //           iconName = 'btc';
    //           size = focused ? 25 : 20;
    //           color = focused ? '#a5bf69' : '#555';
    //         }
    //         return <FontAwesome5 name={iconName} size={size} color={color} />;
    //       },
    //     })}
    //     tabBarOptions={{
    //       activeTintColor: '#96036a',
    //       inactiveTintColor: '#555',
    //       activeBackgroundColor: '#fff',
    //       inactiveBackgroundColor: '#999',
    //       showLabel: true,
    //       labelStyle: {fontSize: 14},
    //     }}
    //     activeColor="#555"
    //     inactiveColor="#3e2465"
    //     barStyle={{backgroundColor: '#dadbd9'}}>
    //     <Tab.Screen
    //       name="Home"
    //       component={ScreenA}
    //       options={{ tabBarBadge: 5 }}
    //     />
    //     <Tab.Screen
    //       name="About"
    //       component={ScreenB}
    //       options={{ tabBarBadge: 7 }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
//     <View></View>
//   );
// }
// 
// export default App;




// FormScreen here !


// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// 
// const FormScreen = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     dateOfBirth: '',
//     mobileNumber: '',
//     fathersName: '',
//     fathersOccupation: '',
//     mothersName: '',
//     mothersOccupation: '',
//     selectedClass: '',
//     gender: '',
//     address: '',
//   });
// 
//   const [errors, setErrors] = useState({
//     name: '',
//     dateOfBirth: '',
//     mobileNumber: '',
//     fathersName: '',
//     fathersOccupation: '',
//     mothersName: '',
//     mothersOccupation: '',
//     selectedClass: '',
//     gender: '',
//     address: '',
//   });
// 
//   const handleValidation = () => {
//     // Validation logic here
//   };
// 
//   const handleInputChange = (field, value) => {
//     setFormData({
//       ...formData,
//       [field]: value,
//     });
//   };
// 
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Create Account</Text>
//       <View style={styles.formContainer}>
//         <Text style={styles.text}>Name : </Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Name"
//           value={formData.name}
//           onChangeText={text => handleInputChange('name', text)}
//         />
//         <Text style={styles.text}>Class : </Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Class"
//           value={formData.class}
//           onChangeText={text => handleInputChange('class', text)}
//         />
//         <Text style={styles.text1}>Date Of Birth : </Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Date Of Birth"
//           value={formData.dateOfBirth}
//           onChangeText={text => handleInputChange('dateOfBirth', text)}
//         />
//         <View style={styles.radioContainer}>
//           <Text style={styles.label}>Gender:</Text>
//           <TouchableOpacity
//             style={[
//               styles.radioButton,
//               formData.gender === 'male' && styles.radioButtonSelected,
//             ]}
//             onPress={() => handleInputChange('gender', 'male')}>
//             <Text style={styles.radioText}>Male</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.radioButton,
//               formData.gender === 'female' && styles.radioButtonSelected,
//             ]}
//             onPress={() => handleInputChange('gender', 'female')}>
//             <Text style={styles.radioText}>Female</Text>
//           </TouchableOpacity>
//         </View>
//         <Text style={styles.text1}>Mobile Number : </Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Mobile Number"
//           value={formData.mobileNumber}
//           onChangeText={number => handleInputChange('mobileNumber', number)}
//         />
//         <Text style={styles.text1}>Father's Name : </Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Father's Name"
//           value={formData.fathersName}
//           onChangeText={text => handleInputChange('fathersName', text)}
//         />
//         <Text style={styles.text2}>Father's Occupation : </Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Father's Occupation"
//           value={formData.fathersOccupation}
//           onChangeText={text => handleInputChange('fathersOccupation', text)}
//         />
//         <Text style={styles.text1}>Mother's Name : </Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Mother's Name"
//           value={formData.mothersName}
//           onChangeText={text => handleInputChange('mothersName', text)}
//         />
//         <Text style={styles.text2}>Mother's Occupation : </Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Mother's Occupation"
//           value={formData.mothersOccupation}
//           onChangeText={text => handleInputChange('mothersOccupation', text)}
//         />
//         <Text style={styles.text3}>Address : </Text>
//         <TextInput
//           style={[styles.input, styles.textArea]}
//           placeholder="Address"
//           multiline
//           value={formData.address}
//           onChangeText={text => handleInputChange('address', text)}
//         />
//         <Button title="Submit" onPress={handleValidation} />
//       </View>
//     </ScrollView>
//   );
// };
// 
// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#0ED2F7',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   formContainer: {
//     width: '80%',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//     marginRight: '75%',
//     marginBottom: 5,
//   },
//   text1: {
//     fontSize: 20,
//     marginRight: '48%',
//     marginBottom: 5,
//   },
//   text2: {
//     fontSize: 20,
//     marginRight: '30%',
//     marginBottom: 5,
//   },
//   text3: {
//     fontSize: 20,
//     marginRight: '70%',
//     marginBottom: 5,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//   },
//   textArea: {
//     height: 100,
//     textAlignVertical: 'top',
//   },
//   radioContainer: {
//     flexDirection: 'row',
//     // alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//     marginRight: 85,
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   radioButton: {
//     borderWidth: 1,
//     borderColor: '#000',
//     borderRadius: 10,
//     padding: 8,
//     marginRight: 10,
//   },
//   radioButtonSelected: {
//     backgroundColor: '#0ED2F7',
//   },
//   radioText: {
//     fontWeight: 'bold',
//   },
//   label: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     marginRight: 10,
//   },
// });
// 
// export default FormScreen;





// App.js files here !



// import * as React from 'react';
// import {View} from 'react-native';
// import FormScreen from './src/components/FormScreen';
// import {FormScreen, EditFormScreen} from './src/components/FormScreen';
// import {Dropdown} from './src/components/FormScreen';
// import {NavigationContainer} from '@react-navigation/native';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import ScreenA from './src/components/ScreenA';
// import ScreenB from './src/components/ScreenB';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//
// const Tab = createMaterialBottomTabNavigator();

// function App() {
//   return (
    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={({route}) => ({
    //       tabBarIcon: ({focused, size, color}) => {
    //         let iconName;
    //         if (route.name === 'Home') {
    //           iconName = 'autoprefixer';
    //           size = focused ? 25 : 20;
    //           color = focused ? '#C36E0D' : '#555';
    //         } else if (route.name === 'About') {
    //           iconName = 'btc';
    //           size = focused ? 25 : 20;
    //           color = focused ? '#a5bf69' : '#555';
    //         }
    //         return <FontAwesome5 name={iconName} size={size} color={color} />;
    //       },
    //     })}
    //     tabBarOptions={{
    //       activeTintColor: '#96036a',
    //       inactiveTintColor: '#555',
    //       activeBackgroundColor: '#fff',
    //       inactiveBackgroundColor: '#999',
    //       showLabel: true,
    //       labelStyle: {fontSize: 14},
    //     }}
    //     activeColor="#555"
    //     inactiveColor="#3e2465"
    //     barStyle={{backgroundColor: '#dadbd9'}}>
    //     <Tab.Screen
    //       name="Home"
    //       component={ScreenA}
    //       options={{ tabBarBadge: 5 }}
    //     />
    //     <Tab.Screen
    //       name="About"
    //       component={ScreenB}
    //       options={{ tabBarBadge: 7 }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
    
//   );
// }
// 
// export default App;




// Display screen codes here !


// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook
// 
// const DisplayScreen = ({route}) => {
//   const {formData} = route.params;
//   const navigation = useNavigation(); // Initialize navigation object
//   const [displayedData, setDisplayedData] = useState(formData);
// 
//   const handleEditName = () => {
//     // Navigate to the FormScreen for editing name
//     navigation.navigate('FormScreen', {
//       fieldToEdit: 'name',
//       currentValue: formData.name,
//     });
//   };
// 
//   const handleEditMobileNumber = () => {
//     // Navigate to the FormScreen for editing mobile number
//     navigation.navigate('FormScreen', {
//       fieldToEdit: 'mobileNumber',
//       currentValue: formData.mobileNumber,
//     });
//   };
// 
//   const handleDeleteName = () => {
//     // Implement delete logic for the name field
//     const updatedData = {...displayedData, name: ''}; // Set name to an empty string
//     setDisplayedData(updatedData);
//   };
// 
//   const handleDeleteMobileNumber = () => {
//     // Implement delete logic for the mobile number field
//     // Example: set mobileNumber to an empty string
//     const updatedData = {...displayedData, mobileNumber: ''};
//     setDisplayedData(updatedData);
//   };
// 
//   return (
//     <View>
//       <View style={{flexDirection: 'row', alignItems: 'center'}}>
//         <Text style={{flex: 1}}>Name: {displayedData.name}</Text>
//         <TouchableOpacity onPress={handleEditName}>
//           <Text>Edit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleDeleteName}>
//           <Text>Delete</Text>
//         </TouchableOpacity>
//       </View>
// 
//       <View style={{flexDirection: 'row', alignItems: 'center'}}>
//         <Text style={{flex: 1}}>
//           Mobile Number: {displayedData.mobileNumber}
//         </Text>
//         <TouchableOpacity onPress={handleEditMobileNumber}>
//           <Text>Edit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleDeleteMobileNumber}>
//           <Text>Delete</Text>
//         </TouchableOpacity>
//       </View>
// 
//       {/* Add more sections for other form fields */}
//     </View>
//   );
// };
// 
// export default DisplayScreen;




// Display Screen Async codes here !


// import React, {useEffect, useState} from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
// import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook
// 
// const DisplayScreen = ({route}) => {
//   const {formData} = route.params;
//   const navigation = useNavigation(); // Initialize navigation object
//   const [displayedData, setDisplayedData] = useState(formData);
//   const [dataArray, setDataArray] = useState([]); // State to hold the array of data
// 
//   useEffect(() => {
//     // Load form data from local storage when component mounts
//     loadFormData();
//   }, []);
// 
//   const loadFormData = async () => {
//     try {
//       const storedData = await AsyncStorage.getItem('formData');
//       if (storedData !== null) {
//         // If data exists in local storage, set it to displayedData state
//         setDisplayedData(JSON.parse(storedData));
//         // Pass the data to array method here
//         passDataToArray(JSON.parse(storedData));
//       }
//     } catch (error) {
//       console.error('Error loading form data:', error);
//     }
//   };
// 
//   const saveFormData = async data => {
//     try {
//       // Save form data to local storage
//       // await AsyncStorage.setItem('formData', JSON.stringify(data));
//     } catch (error) {
//       console.error('Error saving form data:', error);
//     }
//   };
// 
//   const passDataToArray = data => {
//     // Pass the data to your array method here
//     // For example, if you want to push the data to an array
//     setDataArray(prevArray => [...prevArray, data]);
//   };
// 
//   const handleEditName = () => {
//     // Navigate to the FormScreen for editing name
//     navigation.navigate('FormScreen', {
//       fieldToEdit: 'name',
//       currentValue: formData.name,
//     });
//   };
// 
//   const handleEditMobileNumber = () => {
//     // Navigate to the FormScreen for editing mobile number
//     navigation.navigate('FormScreen', {
//       fieldToEdit: 'mobileNumber',
//       currentValue: formData.mobileNumber,
//     });
//   };
// 
//   const handleDeleteName = () => {
//     // Implement delete logic for the name field
//     const updatedData = {...displayedData, name: ''};
//     setDisplayedData(updatedData);
//     saveFormData(updatedData); // Save updated data to local storage
//   };
// 
//   const handleDeleteMobileNumber = () => {
//     // Implement delete logic for the mobile number field
//     const updatedData = {...displayedData, mobileNumber: ''};
//     setDisplayedData(updatedData);
//     saveFormData(updatedData); // Save updated data to local storage
//   };
// 
//   return (
//     <View>
//       <View style={{flexDirection: 'row', alignItems: 'center'}}>
//         <Text style={{flex: 1}}>Name: {displayedData.name}</Text>
//         <TouchableOpacity onPress={handleEditName}>
//           <Text>Edit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleDeleteName}>
//           <Text>Delete</Text>
//         </TouchableOpacity>
//       </View>
// 
//       <View style={{flexDirection: 'row', alignItems: 'center'}}>
//         <Text style={{flex: 1}}>
//           Mobile Number: {displayedData.mobileNumber}
//         </Text>
//         <TouchableOpacity onPress={handleEditMobileNumber}>
//           <Text>Edit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleDeleteMobileNumber}>
//           <Text>Delete</Text>
//         </TouchableOpacity>
//       </View>
// 
//       {/* Add more sections for other form fields */}
//     </View>
//   );
// };
// 
// export default DisplayScreen;


// DisplayScreen here !

//  <View>
//    <View style={{flexDirection: 'row', alignItems: 'center'}}>
//      <Text style={{flex: 1}}>Name: {displayedData.name}</Text>
//      <TouchableOpacity onPress={handleEditName}>
//        <Text>Edit</Text>
//      </TouchableOpacity>
//      <TouchableOpacity onPress={handleDeleteName}>
//        <Text>Delete</Text>
//      </TouchableOpacity>
//    </View>
// 
//    <View style={{flexDirection: 'row', alignItems: 'center'}}>
//      <Text style={{flex: 1}}>
//        Selected Class: {displayedData.selectedClass}
//      </Text>
//      <TouchableOpacity onPress={handleEditSelectedClass}>
//        <Text>Edit</Text>
//      </TouchableOpacity>
//      <TouchableOpacity onPress={handleDeleteClass}>
//        <Text>Delete</Text>
//      </TouchableOpacity>
//    </View>
// 
//    <View style={{flexDirection: 'row', alignItems: 'center'}}>
//      <Text style={{flex: 1}}>Date of Birth: {displayedData.dateOfBirth}</Text>
//      <TouchableOpacity onPress={handleEditDateOfBirth}>
//        <Text>Edit</Text>
//      </TouchableOpacity>
//      <TouchableOpacity onPress={handleDeleteDateOfBirth}>
//        <Text>Delete</Text>
//      </TouchableOpacity>
//    </View>
// 
//    <View style={{flexDirection: 'row', alignItems: 'center'}}>
//      <Text style={{flex: 1}}>Mobile Number: {displayedData.mobileNumber}</Text>
//      <TouchableOpacity onPress={handleEditMobileNumber}>
//        <Text>Edit</Text>
//      </TouchableOpacity>
//      <TouchableOpacity onPress={handleDeleteMobileNumber}>
//        <Text>Delete</Text>
//      </TouchableOpacity>
//    </View>
// 
//    <View style={{flexDirection: 'row', alignItems: 'center'}}>
//      <Text style={{flex: 1}}>Gender: {displayedData.gender}</Text>
//      <TouchableOpacity onPress={handleEditGender}>
//        <Text>Edit</Text>
//      </TouchableOpacity>
//      <TouchableOpacity onPress={handleDeleteGender}>
//        <Text>Delete</Text>
//      </TouchableOpacity>
//    </View>
// 
//    <View style={{flexDirection: 'row', alignItems: 'center'}}>
//      <Text style={{flex: 1}}>Father's Name: {displayedData.fathersName}</Text>
//      <TouchableOpacity onPress={handleEditFathersName}>
//        <Text>Edit</Text>
//      </TouchableOpacity>
//      <TouchableOpacity onPress={handleDeleteFathersName}>
//        <Text>Delete</Text>
//      </TouchableOpacity>
//    </View>
// 
//    <View style={{flexDirection: 'row', alignItems: 'center'}}>
//      <Text style={{flex: 1}}>
//        Father's Occupation: {displayedData.fathersOccupation}
//      </Text>
//      <TouchableOpacity onPress={handleEditFathersOccupation}>
//        <Text>Edit</Text>
//      </TouchableOpacity>
//      <TouchableOpacity onPress={handleDeleteFathersOccupation}>
//        <Text>Delete</Text>
//      </TouchableOpacity>
//    </View>
// 
//    <View style={{flexDirection: 'row', alignItems: 'center'}}>
//      <Text style={{flex: 1}}>Mother's Name: {displayedData.mothersName}</Text>
//      <TouchableOpacity onPress={handleEditMothersName}>
//        <Text>Edit</Text>
//      </TouchableOpacity>
//      <TouchableOpacity onPress={handleDeleteMothersName}>
//        <Text>Delete</Text>
//      </TouchableOpacity>
//    </View>
// 
//    <View style={{flexDirection: 'row', alignItems: 'center'}}>
//      <Text style={{flex: 1}}>
//        Mother's Occupation: {displayedData.mothersOccupation}
//      </Text>
//      <TouchableOpacity onPress={handleEditMothersOccupation}>
//        <Text>Edit</Text>
//      </TouchableOpacity>
//      <TouchableOpacity onPress={handleDeleteMothersOccupation}>
//        <Text>Delete</Text>
//      </TouchableOpacity>
//    </View>
// 
//    <View style={{flexDirection: 'row', alignItems: 'center'}}>
//      <Text style={{flex: 1}}>Address: {displayedData.address}</Text>
//      <TouchableOpacity onPress={handleEditAddress}>
//        <Text>Edit</Text>
//      </TouchableOpacity>
//      <TouchableOpacity onPress={handleDeleteAddress}>
//        <Text>Delete</Text>
//      </TouchableOpacity>
//    </View>
// 
//    {/* Add more sections for other form fields */}
//  </View>;
// 
// 
// 
// 
// 
// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
// } from 'react-native';
// import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook
// 
// const DisplayScreen = ({route}) => {
//   const {formData} = route.params;
//   const navigation = useNavigation(); // Initialize navigation object
//   const [displayedData, setDisplayedData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
// 
//   // Filter function based on search query
//   const applyFilter = () => {
//     const filteredData = formData.filter(item => {
//       const {name, selectedClass, mobileNumber} = item;
//       return (
//         name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         selectedClass.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         mobileNumber.includes(searchQuery)
//       );
//     });
//     setDisplayedData(filteredData);
//   };
// 
//   // Call applyFilter when searchQuery changes
//   useEffect(() => {
//     applyFilter();
//   }, [searchQuery]);
// 
//   const handleEditField = fieldName => {
//     navigation.navigate('FormScreen', {
//       fieldToEdit: fieldName,
//       currentValue: formData[fieldName],
//     });
//   };
// 
//   const handleDeleteField = fieldName => {
//     const updatedData = {...displayedData, [fieldName]: ''};
//     setDisplayedData(updatedData);
//   };
// 
//   return (
//     <View style={{flex: 1}}>
//       {/* Search input */}
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//           marginBottom: 10,
//           paddingHorizontal: 10,
//         }}
//         placeholder="Search by name, class, or mobile number"
//         value={searchQuery}
//         onChangeText={text => setSearchQuery(text)}
//       />
//       <TouchableOpacity
//         style={{padding: 10, backgroundColor: 'blue', marginVertical: 10}}
//         onPress={applyFilter}>
//         <Text style={{color: 'white', textAlign: 'center'}}>Apply Filter</Text>
//       </TouchableOpacity>
//       <ScrollView>
//         {displayedData.map((item, index) => (
//           <View
//             key={index}
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               marginBottom: 5,
//             }}>
//             {/* Render each field dynamically */}
//             {Object.entries(item).map(([key, value]) => (
//               <View
//                 style={{flexDirection: 'row', alignItems: 'center'}}
//                 key={key}>
//                 <Text style={{flex: 1}}>
//                   {key}: {value}
//                 </Text>
//                 <TouchableOpacity onPress={() => handleEditField(key)}>
//                   <Text>Edit</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => handleDeleteField(key)}>
//                   <Text>Delete</Text>
//                 </TouchableOpacity>
//               </View>
//             ))}
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };
// 
// export default DisplayScreen;





// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
// } from 'react-native';
// import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook
// 
// const DisplayScreen = ({route}) => {
//   const {formData} = route.params;
//   const navigation = useNavigation(); // Initialize navigation object
//   const [displayedData, setDisplayedData] = useState(formData);
//   const [searchQuery, setSearchQuery] = useState('');
// 
//   // Filter function based on search query
//   const applyFilter = () => {
//     const filteredData = formData.filter(item => {
//       const {name, selectedClass, mobileNumber} = item;
//       return (
//         name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         selectedClass.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         mobileNumber.includes(searchQuery)
//       );
//     });
//     setDisplayedData(filteredData);
//   };
// 
//   const handleEditName = () => {
//     // Navigate to the FormScreen for editing name
//     navigation.navigate('FormScreen', {
//       fieldToEdit: 'name',
//       currentValue: formData.name,
//     });
//   };
// 
//   const handleEditDateOfBirth = () => {
//     // Navigate to the FormScreen for editing date of birth
//     navigation.navigate('FormScreen', {
//       fieldToEdit: 'dateOfBirth',
//       currentValue: formData.dateOfBirth,
//     });
//   };
// 
//   const handleEditMobileNumber = () => {
//     // Navigate to the FormScreen for editing mobile number
//     navigation.navigate('FormScreen', {
//       fieldToEdit: 'mobileNumber',
//       currentValue: formData.mobileNumber,
//     });
//   };
// 
//   const handleEditFathersName = () => {
//     // Navigate to the FormScreen for editing father's name
//     navigation.navigate('FormScreen', {
//       fieldToEdit: 'fathersName',
//       currentValue: formData.fathersName,
//     });
//   };
// 
//   const handleEditFathersOccupation = () => {
//     // Navigate to the FormScreen for editing father's occupation
//     navigation.navigate('FormScreen', {
//       fieldToEdit: 'fathersOccupation',
//       currentValue: formData.fathersOccupation,
//     });
//   };
// 
//   const handleEditMothersName = () => {
//     // Navigate to the FormScreen for editing mother's name
//     navigation.navigate('FormScreen', {
//       fieldToEdit: 'mothersName',
//       currentValue: formData.mothersName,
//     });
//   };
// 
//   const handleEditMothersOccupation = () => {
//     // Navigate to the FormScreen for editing mother's occupation
//     navigation.navigate('FormScreen', {
//       fieldToEdit: 'mothersOccupation',
//       currentValue: formData.mothersOccupation,
//     });
//   };
// 
//   const handleEditSelectedClass = () => {
//     // Navigate to the FormScreen for editing selected class
//     navigation.navigate('FormScreen', {
//       fieldToEdit: 'selectedClass',
//       currentValue: formData.selectedClass,
//     });
//   };
// 
//   const handleEditGender = () => {
//     // Navigate to the FormScreen for editing gender
//     navigation.navigate('FormScreen', {
//       fieldToEdit: 'gender',
//       currentValue: formData.gender,
//     });
//   };
// 
//   const handleEditAddress = () => {
//     // Navigate to the FormScreen for editing address
//     navigation.navigate('FormScreen', {
//       fieldToEdit: 'address',
//       currentValue: formData.address,
//     });
//   };
// 
//   const handleDeleteName = () => {
//     // Implement delete logic for the name field
//     const updatedData = {...displayedData, name: ''}; // Set name to an empty string
//     setDisplayedData(updatedData);
//   };
// 
//   const handleDeleteDateOfBirth = () => {
//     // Implement delete logic for the date of birth field
//     const updatedData = {...displayedData, dateOfBirth: ''};
//     setDisplayedData(updatedData);
//   };
// 
//   const handleDeleteMobileNumber = () => {
//     // Implement delete logic for the mobile number field
//     // Example: set mobileNumber to an empty string
//     const updatedData = {...displayedData, mobileNumber: ''};
//     setDisplayedData(updatedData);
//   };
// 
//   const handleDeleteClass = () => {
//     // Implement delete logic for the selected class field
//     const updatedData = {...displayedData, selectedClass: ''};
//     setDisplayedData(updatedData);
//   };
// 
//   const handleDeleteGender = () => {
//     // Implement delete logic for the gender field
//     const updatedData = {...displayedData, gender: ''};
//     setDisplayedData(updatedData);
//   };
// 
//   const handleDeleteFathersName = () => {
//     // Implement delete logic for the father's name field
//     const updatedData = {...displayedData, fathersName: ''};
//     setDisplayedData(updatedData);
//   };
// 
//   const handleDeleteFathersOccupation = () => {
//     // Implement delete logic for the father's occupation field
//     const updatedData = {...displayedData, fathersOccupation: ''};
//     setDisplayedData(updatedData);
//   };
// 
//   const handleDeleteMothersName = () => {
//     // Implement delete logic for the mother's name field
//     const updatedData = {...displayedData, mothersName: ''};
//     setDisplayedData(updatedData);
//   };
// 
//   const handleDeleteMothersOccupation = () => {
//     // Implement delete logic for the mother's occupation field
//     const updatedData = {...displayedData, mothersOccupation: ''};
//     setDisplayedData(updatedData);
//   };
// 
//   const handleDeleteAddress = () => {
//     // Implement delete logic for the address field
//     const updatedData = {...displayedData, address: ''};
//     setDisplayedData(updatedData);
//   };
// 
//   return (
//     <View style={{flex: 1}}>
//       {/* Search input */}
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//           marginBottom: 10,
//           paddingHorizontal: 10,
//         }}
//         placeholder="Search by name, class, or mobile number"
//         value={searchQuery}
//         onChangeText={text => setSearchQuery(text)}
//       />
//       <TouchableOpacity
//         style={{padding: 10, backgroundColor: 'blue', marginVertical: 10}}
//         onPress={applyFilter}>
//         <Text style={{color: 'white', textAlign: 'center'}}>Apply Filter</Text>
//       </TouchableOpacity>
//       <ScrollView>
//         {displayedData.map((item, index) => (
//           <View
//             key={index}
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               marginBottom: 5,
//             }}>
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <Text style={{flex: 1}}>Name: {displayedData.name}</Text>
//               <TouchableOpacity onPress={handleEditName}>
//                 <Text>Edit</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={handleDeleteName}>
//                 <Text>Delete</Text>
//               </TouchableOpacity>
//             </View>
// 
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <Text style={{flex: 1}}>
//                 Selected Class: {displayedData.selectedClass}
//               </Text>
//               <TouchableOpacity onPress={handleEditSelectedClass}>
//                 <Text>Edit</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={handleDeleteClass}>
//                 <Text>Delete</Text>
//               </TouchableOpacity>
//             </View>
// 
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <Text style={{flex: 1}}>
//                 Date of Birth: {displayedData.dateOfBirth}
//               </Text>
//               <TouchableOpacity onPress={handleEditDateOfBirth}>
//                 <Text>Edit</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={handleDeleteDateOfBirth}>
//                 <Text>Delete</Text>
//               </TouchableOpacity>
//             </View>
// 
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <Text style={{flex: 1}}>
//                 Mobile Number: {displayedData.mobileNumber}
//               </Text>
//               <TouchableOpacity onPress={handleEditMobileNumber}>
//                 <Text>Edit</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={handleDeleteMobileNumber}>
//                 <Text>Delete</Text>
//               </TouchableOpacity>
//             </View>
// 
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <Text style={{flex: 1}}>Gender: {displayedData.gender}</Text>
//               <TouchableOpacity onPress={handleEditGender}>
//                 <Text>Edit</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={handleDeleteGender}>
//                 <Text>Delete</Text>
//               </TouchableOpacity>
//             </View>
// 
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <Text style={{flex: 1}}>
//                 Father's Name: {displayedData.fathersName}
//               </Text>
//               <TouchableOpacity onPress={handleEditFathersName}>
//                 <Text>Edit</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={handleDeleteFathersName}>
//                 <Text>Delete</Text>
//               </TouchableOpacity>
//             </View>
// 
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <Text style={{flex: 1}}>
//                 Father's Occupation: {displayedData.fathersOccupation}
//               </Text>
//               <TouchableOpacity onPress={handleEditFathersOccupation}>
//                 <Text>Edit</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={handleDeleteFathersOccupation}>
//                 <Text>Delete</Text>
//               </TouchableOpacity>
//             </View>
// 
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <Text style={{flex: 1}}>
//                 Mother's Name: {displayedData.mothersName}
//               </Text>
//               <TouchableOpacity onPress={handleEditMothersName}>
//                 <Text>Edit</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={handleDeleteMothersName}>
//                 <Text>Delete</Text>
//               </TouchableOpacity>
//             </View>
// 
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <Text style={{flex: 1}}>
//                 Mother's Occupation: {displayedData.mothersOccupation}
//               </Text>
//               <TouchableOpacity onPress={handleEditMothersOccupation}>
//                 <Text>Edit</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={handleDeleteMothersOccupation}>
//                 <Text>Delete</Text>
//               </TouchableOpacity>
//             </View>
// 
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <Text style={{flex: 1}}>Address: {displayedData.address}</Text>
//               <TouchableOpacity onPress={handleEditAddress}>
//                 <Text>Edit</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={handleDeleteAddress}>
//                 <Text>Delete</Text>
//               </TouchableOpacity>
//             </View>
//             {/* Add similar sections for other fields */}
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };
// 
// export default DisplayScreen;


// DisplayScreen AsyncStorage Method codes here !

// import React, {useEffect, useState} from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
// import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook
// 
// const DisplayScreen = ({route}) => {
//   const {formData} = route.params;
//   const navigation = useNavigation(); // Initialize navigation object
//   const [displayedData, setDisplayedData] = useState(formData);
//   const [dataArray, setDataArray] = useState([]); // State to hold the array of data
// 
//   useEffect(() => {
//     // Load form data from local storage when component mounts
//     loadFormData();
//   }, []);
// 
//   const loadFormData = async () => {
//     try {
//       const storedData = await AsyncStorage.getItem('formData');
//       if (storedData !== null) {
//         // If data exists in local storage, set it to displayedData state
//         setDisplayedData(JSON.parse(storedData));
//         // Pass the data to array method here
//         passDataToArray(JSON.parse(storedData));
//       }
//     } catch (error) {
//       console.error('Error loading form data:', error);
//     }
//   };
// 
//   const saveFormData = async data => {
//     try {
//       // Save form data to local storage
//       await AsyncStorage.setItem('formData', JSON.stringify(data));
//     } catch (error) {
//       console.error('Error saving form data:', error);
//     }
//   };
// 
//   const passDataToArray = data => {
//     // Pass the data to your array method here
//     // For example, if you want to push the data to an array
//     setDataArray(prevArray => [...prevArray, data]);
//   };
// 
//   const handleEditName = () => {
//     // Navigate to the FormScreen for editing name
//     navigation.navigate('FormScreen', {
//       fieldToEdit: 'name',
//       currentValue: formData.name,
//     });
//   };
// 
//   const handleEditMobileNumber = () => {
//     // Navigate to the FormScreen for editing mobile number
//     navigation.navigate('FormScreen', {
//       fieldToEdit: 'mobileNumber',
//       currentValue: formData.mobileNumber,
//     });
//   };
// 
//   const handleDeleteName = () => {
//     // Implement delete logic for the name field
//     const updatedData = {...displayedData, name: ''};
//     setDisplayedData(updatedData);
//     saveFormData(updatedData); // Save updated data to local storage
//   };
// 
//   const handleDeleteMobileNumber = () => {
//     // Implement delete logic for the mobile number field
//     const updatedData = {...displayedData, mobileNumber: ''};
//     setDisplayedData(updatedData);
//     saveFormData(updatedData); // Save updated data to local storage
//   };
// 
//   return (
//     <View>
//       <View style={{flexDirection: 'row', alignItems: 'center'}}>
//         <Text style={{flex: 1}}>Name: {displayedData.name}</Text>
//         <TouchableOpacity onPress={handleEditName}>
//           <Text>Edit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleDeleteName}>
//           <Text>Delete</Text>
//         </TouchableOpacity>
//       </View>
// 
//       <View style={{flexDirection: 'row', alignItems: 'center'}}>
//         <Text style={{flex: 1}}>
//           Mobile Number: {displayedData.mobileNumber}
//         </Text>
//         <TouchableOpacity onPress={handleEditMobileNumber}>
//           <Text>Edit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleDeleteMobileNumber}>
//           <Text>Delete</Text>
//         </TouchableOpacity>
//       </View>
// 
//       {/* Add more sections for other form fields */}
//     </View>
//   );
// };
// 
// export default DisplayScreen;




// Full FormScreen Codes Here !

// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   View,
//   Button,
//   TextInput,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   DatePickerAndroid,
// } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import DisplayScreen from './DisplayScreen';
// import {Picker} from '@react-native-picker/picker';
// 
// const FormScreen = ({navigation}) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     dateOfBirth: '',
//     mobileNumber: '',
//     fathersName: '',
//     fathersOccupation: '',
//     mothersName: '',
//     mothersOccupation: '',
//     selectedClass: '',
//     gender: '',
//     address: '',
//   });
// 
//   // Function to handle validation
//   const handleValidation = () => {
//     const errors = {};
// 
//     // Validation logic for each field
//     if (!formData.name) {
//       errors.name = 'Name is required';
//     }
// 
//     if (!formData.dateOfBirth) {
//       errors.dateOfBirth = 'Date of Birth is required';
//     }
// 
//     if (!formData.mobileNumber) {
//       errors.mobileNumber = 'Mobile Number is required';
//     } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
//       errors.mobileNumber = 'Mobile Number must be 10 digits';
//     }
// 
//     if (!formData.gender) {
//       errors.gender = 'Gender is required';
//     }
// 
//     if (!formData.fathersName) {
//       errors.fathersName = "Father's Name is required";
//     }
// 
//     if (!formData.fathersOccupation) {
//       errors.fathersOccupation = "Father's Occupation is required";
//     }
// 
//     if (!formData.mothersName) {
//       errors.mothersName = "Mother's Name is required";
//     }
// 
//     if (!formData.mothersOccupation) {
//       errors.mothersOccupation = "Mother's Occupation is required";
//     }
// 
//     if (!formData.address) {
//       errors.address = 'Address is required';
//     }
// 
//     // Return errors object
//     return errors;
//   };
// 
//   // Function to handle input change
//   const handleInputChange = (field, value) => {
//     setFormData({
//       ...formData,
//       [field]: value,
//     });
//   };
// 
//   const showDatePicker = async () => {
//     try {
//       const {action, year, month, day} = await DatePickerAndroid.open({
//         date: new Date(), // Set default date if needed
//         mode: 'spinner', // Choose between 'calendar' or 'spinner' mode
//       });
//       if (action !== DatePickerAndroid.dismissedAction) {
//         // Selected date
//         const selectedDate = new Date(year, month, day);
//         const formattedDate = `${selectedDate.getDate()}/${
//           selectedDate.getMonth() + 1
//         }/${selectedDate.getFullYear()}`;
//         handleInputChange('dateOfBirth', formattedDate);
//       }
//     } catch ({code, message}) {
//       console.warn('Cannot open date picker', message);
//     }
//   };
// 
//   // Function to handle form submission
//   const handleSubmit = () => {
//     // Validate the form
//     const errors = handleValidation();
// 
//     // If there are errors, prevent form submission
//     if (Object.keys(errors).length > 0) {
//       console.log('Validation errors:', errors);
//       return; // Don't proceed with form submission
//     }
// 
//     // Navigate to the DisplayScreen and pass form data
//     navigation.navigate('DisplayScreen', {formData});
//   };
// 
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Create Account</Text>
//       <View style={styles.formContainer}>
//         {/* Form inputs */}
//         {/* Name */}
//         <Text style={styles.label}>Name:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your name"
//           value={formData.name}
//           onChangeText={text => handleInputChange('name', text)}
//         />
//         <Text style={styles.label}>Class:</Text>
//         <Picker
//           selectedValue={formData.selectedClass}
//           style={styles.input}
//           onValueChange={itemValue =>
//             handleInputChange('selectedClass', itemValue)
//           }>
//           <Picker.Item label="Select Class" value="" />
//           <Picker.Item label="Class 1" value="Class 1" />
//           <Picker.Item label="Class 2" value="Class 2" />
//           <Picker.Item label="Class 3" value="Class 3" />
//           <Picker.Item label="Class 4" value="Class 4" />
//           <Picker.Item label="Class 5" value="Class 5" />
//           <Picker.Item label="Class 6" value="Class 6" />
//           <Picker.Item label="Class 7" value="Class 7" />
//           <Picker.Item label="Class 8" value="Class 8" />
//           <Picker.Item label="Class 9" value="Class 9" />
//           <Picker.Item label="Class 10" value="Class 10" />
//           <Picker.Item label="Class 11" value="Class 11" />
//           <Picker.Item label="Class 12" value="Class 12" />
//           {/* Add more items as needed */}
//         </Picker>
//         {/* Date of Birth */}
//         <Text style={styles.label}>Date of Birth:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your date of birth"
//           value={formData.dateOfBirth}
//           onChangeText={text => handleInputChange('dateOfBirth', text)}
//         />
//         {/* Mobile Number */}
//         <Text style={styles.label}>Mobile Number:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your mobile number"
//           value={formData.mobileNumber}
//           onChangeText={text => handleInputChange('mobileNumber', text)}
//         />
//         {/* Gender */}
//         <View style={styles.gender}>
//           <Text style={styles.label1}>Gender:</Text>
//           <TouchableOpacity
//             style={[
//               styles.radioButton,
//               formData.gender === 'male' && styles.radioButtonSelected,
//             ]}
//             onPress={() => handleInputChange('gender', 'male')}>
//             <Text style={styles.radioText}>Male</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.radioButton,
//               formData.gender === 'female' && styles.radioButtonSelected,
//             ]}
//             onPress={() => handleInputChange('gender', 'female')}>
//             <Text style={styles.radioText}>Female</Text>
//           </TouchableOpacity>
//         </View>
// 
//         {/* Father's Name */}
//         <Text style={styles.label}>Father's Name:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your father's name"
//           value={formData.fathersName}
//           onChangeText={text => handleInputChange('fathersName', text)}
//         />
//         {/* Father's Occupation */}
//         <Text style={styles.label}>Father's Occupation:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your father's occupation"
//           value={formData.fathersOccupation}
//           onChangeText={text => handleInputChange('fathersOccupation', text)}
//         />
//         {/* Mother's Name */}
//         <Text style={styles.label}>Mother's Name:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your mother's name"
//           value={formData.mothersName}
//           onChangeText={text => handleInputChange('mothersName', text)}
//         />
//         {/* Mother's Occupation */}
//         <Text style={styles.label}>Mother's Occupation:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your mother's occupation"
//           value={formData.mothersOccupation}
//           onChangeText={text => handleInputChange('mothersOccupation', text)}
//         />
//         {/* Address */}
//         <Text style={styles.label}>Address:</Text>
//         <TextInput
//           style={[styles.input, styles.textArea]}
//           placeholder="Enter your address"
//           multiline
//           value={formData.address}
//           onChangeText={text => handleInputChange('address', text)}
//         />
//         {/* Submit button */}
//         <Button title="Submit" onPress={handleSubmit} />
//       </View>
//     </ScrollView>
//   );
// };
// 
// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#0ED2F7',
//     paddingBottom: 25,
//   },
//   formContainer: {
//     width: '80%',
//     gap: 5,
//     // alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   label1: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 15,
//     // alignItems: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//   },
//   textArea: {
//     height: 100,
//     textAlignVertical: 'top',
//   },
//   radioButton: {
//     borderWidth: 1,
//     borderColor: '#000',
//     borderRadius: 10,
//     padding: 8,
//     marginVertical: 10,
//     marginRight: 10,
//   },
//   gender: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     gap: 5,
//   },
//   radioButtonSelected: {
//     backgroundColor: '#0ED2F7',
//   },
//   radioText: {
//     fontWeight: 'bold',
//   },
// });
// 
// export default FormScreen;





import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DisplayScreen = ({route}) => {
  const {formData} = route.params;
  const navigation = useNavigation();
  const [displayedData, setDisplayedData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setDisplayedData(formData);
  }, [formData]);

  const removeData = async () => {
    try {
      // Implement the logic to delete all the values
      // For example, you can iterate through formFields and remove each value
      // Here I assume formFields is an array containing keys for AsyncStorage
      const keys = formFields.map(field => field.key);
      await AsyncStorage.multiRemove(keys);
    } catch (error) {
      console.error('Error removing data:', error);
    }
  };

  const handleEditField = () => {
    // Navigate to the FormScreen page
    navigation.navigate('FormScreen');
  };

  const handleDeleteField = () => {
    // Call the removeData function to delete all the values
    removeData();
  };

  const handleSearch = () => {
    const results = [];
    if (formData) {
      if (formData.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push(formData.name);
      }
      if (
        formData.selectedClass.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        results.push(formData.selectedClass);
      }
      if (formData.mobileNumber.includes(searchTerm)) {
        results.push(formData.mobileNumber);
      }
    }
    setSearchResults(results);
  };

  function generateRandomUserId(length) {
    const characters = '0123456789';
    let userId = '';
    for (let i = 0; i < length; i++) {
      userId += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return userId;
  }

  const formFields = [
    {
      id: generateRandomUserId(5),
      key: 'name',
      label: 'Name',
    },
    {
      id: generateRandomUserId(5),
      key: 'selectedClass',
      label: 'Selected Class',
    },
    {
      id: generateRandomUserId(5),
      key: 'dateOfBirth',
      label: 'Date of Birth',
    },
    {
      id: generateRandomUserId(5),
      key: 'mobileNumber',
      label: 'Mobile Number',
    },
    {
      id: generateRandomUserId(5),
      key: 'gender',
      label: 'Gender',
    },
    {
      id: generateRandomUserId(5),
      key: 'fathersName',
      label: "Father's Name",
    },
    {
      id: generateRandomUserId(5),
      key: 'fathersOccupation',
      label: "Father's Occupation",
    },
    {
      id: generateRandomUserId(5),
      key: 'mothersName',
      label: "Mother's Name",
    },
    {
      id: generateRandomUserId(5),
      key: 'mothersOccupation',
      label: "Mother's Occupation",
    },
    {
      id: generateRandomUserId(5),
      key: 'address',
      label: 'Address',
    },
  ];

  return (
    <View>
      <View style={styles.container1}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
          />
          
        </View>
        <View style={styles.resultsContainer}>
          {searchResults.map((result, index) => (
            <Text key={index} style={styles.resultText}>
              {result}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Student List 1</Text>
        {formFields.map((field, index) => (
          <View
            key={index}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{flex: 1, fontSize: 20}}>
              {field.label}: {displayedData[field.key] || 'No value'}{' '}
              {/* Show placeholder if no value */}
            </Text>
          </View>
        ))}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleEditField}
            style={[styles.editDeleteButton, {backgroundColor: '#007bff'}]}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDeleteField}
            style={[styles.editDeleteButton, {backgroundColor: '#ff000d'}]}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b5d8e3',
    // backgroundColor: '#55555555',
    borderWidth: 10,
    borderColor: '#fff',
    padding: 15,
    gap: 10,
  },
  title: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: '#53a6be',
    textAlign: 'center',
  },
  editDeleteButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  container1: {
    backgroundColor: '#fff',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
  },
  resultsContainer: {
    flex: 1,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DisplayScreen;




import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DataFilterScreen({navigation}) {
  const [studentData, setStudentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchClass, setSearchClass] = useState('');
  const [searchMobile, setSearchMobile] = useState('');

  useEffect(() => {
    loadStudentData();
  }, []);

  const loadStudentData = async () => {
    try {
      const storedStudentData = await AsyncStorage.getItem('studentData');
      if (storedStudentData !== null) {
        const parsedStudentData = JSON.parse(storedStudentData);
        setStudentData(parsedStudentData);
        setFilteredData(parsedStudentData); // Initialize filteredData with all studentData
      }
    } catch (error) {
      console.error('Error loading student data: ', error);
    }
  };

  const handleSearch = () => {
    // Filter the data based on search criteria
    const filtered = studentData.filter(student => {
      return (
        student.name.toLowerCase().includes(searchName.toLowerCase()) &&
        student.selectedClass
          .toLowerCase()
          .includes(searchClass.toLowerCase()) &&
        student.mobileNumber.toLowerCase().includes(searchMobile.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

  const handleShowAll = () => {
    // Display all student data
    setFilteredData(studentData);
    setSearchName('');
    setSearchClass('');
    setSearchMobile('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search by Name"
          onChangeText={setSearchName}
          value={searchName}
        />
        <TextInput
          style={styles.input}
          placeholder="Search by Class"
          onChangeText={setSearchClass}
          value={searchClass}
        />
        <TextInput
          style={styles.input}
          placeholder="Search by Mobile Number"
          onChangeText={setSearchMobile}
          value={searchMobile}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleShowAll}>
          <Text style={styles.buttonText}>Show All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.label}>Name: {item.name}</Text>
            <Text style={styles.label}>Class: {item.selectedClass}</Text>
            <Text style={styles.label}>Mobile Number: {item.mobileNumber}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DataFilterScreen;



import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormDataScreen = ({navigation}) => {
  const [studentData, setStudentData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    loadStudentData();
  }, []);

  const loadStudentData = async () => {
    try {
      const storedStudentData = await AsyncStorage.getItem('studentData');
      if (storedStudentData !== null) {
        const parsedStudentData = JSON.parse(storedStudentData);
        setStudentData(parsedStudentData);
        setFilteredData(parsedStudentData);
      }
    } catch (error) {
      console.error('Error loading student data: ', error);
    }
  };

  const handleEdit = index => {
    navigation.navigate('FormInputScreen', {
      studentIndex: index,
      studentData: studentData[index],
    });
  };

  const handleDelete = index => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this entry?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => deleteEntry(index),
        },
      ],
      {cancelable: false},
    );
  };

  const deleteEntry = async index => {
    try {
      const updatedData = studentData.filter((_, i) => i !== index);
      await AsyncStorage.setItem('studentData', JSON.stringify(updatedData));
      setStudentData(updatedData);
      setFilteredData(updatedData);
    } catch (error) {
      console.error('Error deleting entry: ', error);
    }
  };

  const handleSearch = query => {
    setSearchQuery(query);
    const filtered = studentData.filter(student => {
      return (
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.mobileNumber.toLowerCase().includes(query.toLowerCase()) ||
        student.selectedClass.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchQuery}
      />
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={styles.itemContainer}>
              <Text style={styles.label}>Name: {item.name}</Text>
              <Text style={styles.label}>Class: {item.selectedClass}</Text>
              <Text style={styles.label}>
                Mobile Number: {item.mobileNumber}
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleEdit(index)}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button1}
                  onPress={() => handleDelete(index)}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      ) : (
        <Text>No matching data found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '48%', // Adjust width as needed
  },
  button1: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '48%', // Adjust width as needed
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FormDataScreen;




import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DataFilterScreen({navigation}) {
  const [studentData, setStudentData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchClass, setSearchClass] = useState('');
  const [searchMobile, setSearchMobile] = useState('');

  const studentDataRef = useRef([]);

  useEffect(() => {
    loadStudentData();
  }, []);

  const loadStudentData = async () => {
    try {
      const storedStudentData = await AsyncStorage.getItem('studentData');
      if (storedStudentData !== null) {
        const parsedStudentData = JSON.parse(storedStudentData);
        studentDataRef.current = parsedStudentData;
        setFilteredData(parsedStudentData);
      }
    } catch (error) {
      console.error('Error loading student data: ', error);
    }
  };

  // Define a function to update student data
  const updateStudentData = async updatedData => {
    try {
      // Save updated student data to AsyncStorage
      await AsyncStorage.setItem('studentData', JSON.stringify(updatedData));
      // Update the state with the updated student data
      setStudentData(updatedData);
    } catch (error) {
      console.error('Error updating student data: ', error);
    }
  };

  // Pass the updateStudentData function as a prop to the FormInputScreen
  // <FormInputScreen
  //   navigation={navigation}
  //   updateStudentData={updateStudentData}
  // />;

  const handleSearch = () => {
    // Filter the data based on search criteria
    const filtered = studentData.filter(student => {
      return (
        student.name.toLowerCase().includes(searchName.toLowerCase()) &&
        student.selectedClass
          .toLowerCase()
          .includes(searchClass.toLowerCase()) &&
        student.mobileNumber.toLowerCase().includes(searchMobile.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

  // Function to validate name input
  const validateNameInput = text => {
    // Allow only letters, dots, and spaces
    return /^[a-zA-Z .]*$/.test(text);
  };

  // Function to validate mobile number input
  const validateMobileInput = text => {
    // Allow only numbers and exactly 10 digits
    return /^[0-9]{0,10}$/.test(text);
  };

  const handleItemPress = item => {
    // Navigate to FormDataScreen with selected data
    navigation.navigate('FormDataScreen', {studentData: item});
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={text => {
            if (validateNameInput(text) || text === '') {
              setSearchName(text);
            }
          }}
          value={searchName}
        />
        <Picker
          style={styles.input}
          selectedValue={searchClass}
          onChangeText={setSearchClass}
          onValueChange={(itemValue, itemIndex) => setSearchClass(itemValue)}>
          <Picker.Item label="Class" value="" />
          <Picker.Item label="LKG" value="LKG" />
          <Picker.Item label="UKG" value="UKG" />
          <Picker.Item label="I" value="I" />
          <Picker.Item label="II" value="II" />
          <Picker.Item label="III" value="III" />
          <Picker.Item label="IV" value="IV" />
          <Picker.Item label="V" value="V" />
          <Picker.Item label="VI" value="VI" />
          <Picker.Item label="VII" value="VII" />
          <Picker.Item label="VIII" value="VIII" />
          <Picker.Item label="IX" value="IX" />
          <Picker.Item label="X" value="X" />
          <Picker.Item label="XI" value="XI" />
          <Picker.Item label="XII" value="XII" />
          {/* Add other classes as needed */}
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Mobile"
          onChangeText={text => {
            if (validateMobileInput(text) || text === '') {
              setSearchMobile(text);
            }
          }}
          value={searchMobile}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      {/* Render the list of data */}
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <View style={styles.itemContainer}>
              <Text style={styles.label}>Name: {item.name}</Text>
              <Text style={styles.label}>Class: {item.selectedClass}</Text>
              <Text style={styles.label}>
                Mobile Number: {item.mobileNumber}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DataFilterScreen;





import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormDataScreen = ({navigation}) => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedStudentData = await AsyncStorage.getItem('studentData');
        if (storedStudentData) {
          setStudentData(JSON.parse(storedStudentData));
        }
      } catch (error) {
        console.error('Error fetching student data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async index => {
    Alert.alert(
      'Delete Confirmation',
      'Are you sure you want to delete this student?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              const updatedData = [...studentData];
              updatedData.splice(index, 1);
              await AsyncStorage.setItem('studentData', JSON.stringify(updatedData));
              setStudentData(updatedData);
            } catch (error) {
              console.error('Error deleting student data: ', error);
            }
          },
        },
      ],
      {cancelable: false},
    );
  };

  const handleUpdate = index => {
    const selectedStudentData = studentData[index];
    navigation.navigate('FormInputScreen', {studentData: selectedStudentData, studentIndex: index});
  };

  const handleNavigate = student => {
    navigation.navigate('ProfileCardScreen', {student});
  };

  return (
    <View style={styles.container}>
      {studentData.length === 0 ? (
        <Text style={styles.emptyText}>No student data available</Text>
      ) : (
        <FlatList
          data={studentData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity style={styles.itemContainer} onPress={() => handleNavigate(item)}>
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.updateButton} onPress={() => handleUpdate(index)}>
                  <Text style={styles.updateButtonText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(index)}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    elevation: 1,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  updateButton: {
    backgroundColor: '#007AFF',
    padding: 5,
    borderRadius: 5,
  },
  updateButtonText: {
    color: 'white',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
  },
});

export default FormDataScreen;




import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import ProfileCardScreen from './ProfileCardScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormDataScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Use useRef to create a mutable object for studentData
  const studentDataRef = useRef([]);

  useEffect(() => {
    loadStudentData();
  }, []);

  const loadStudentData = async () => {
    try {
      const storedStudentData = await AsyncStorage.getItem('studentData');
      if (storedStudentData !== null) {
        const parsedStudentData = JSON.parse(storedStudentData);
        studentDataRef.current = parsedStudentData;
        setFilteredData(parsedStudentData);
      }
    } catch (error) {
      console.error('Error loading student data: ', error);
    }
  };

  const handleEdit = index => {
    navigation.navigate('FormInputScreen', {
      studentIndex: index,
      studentData: studentDataRef.current[index],
    });
  };

  const handleDelete = index => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this entry?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => deleteEntry(index),
        },
      ],
      {cancelable: false},
    );
  };

  const deleteEntry = async index => {
    try {
      const updatedData = studentDataRef.current.filter((_, i) => i !== index);
      await AsyncStorage.setItem('studentData', JSON.stringify(updatedData));
      studentDataRef.current = updatedData;
      setFilteredData(updatedData);
    } catch (error) {
      console.error('Error deleting entry: ', error);
    }
  };

  const handleSearch = query => {
    setSearchQuery(query);
    const filtered = studentDataRef.current.filter(student => {
      return (
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.mobileNumber.toLowerCase().includes(query.toLowerCase()) ||
        student.selectedClass.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

const handleNavigate = student => {
  navigation.navigate('ProfileCardScreen', {student});
};


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchQuery}
      />
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => handleNavigate(item)}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.selectedClass}</Text>
              <Text style={styles.itemText}>{item.mobileNumber}</Text>
              <View style={styles.buttonContainer}>
                {/* <TouchableOpacity
                  style={styles.updateButton}
                  onPress={() => handleUpdate(index)}>
                  <Text style={styles.updateButtonText}>Update</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDelete(index)}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>No matching data found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: '#53a6be',
    textAlign: 'center',
    borderRadius: 10,
    padding: 5,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  deleteButton: {
    color: '#fff',
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FormDataScreen;



// ProfileCardScreen.js

import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

const ProfileCardScreen = ({route, navigation}) => {

  const {studentData} = route.params;

  const handleEdit = () => {
    navigation.navigate('FormInputScreen', {studentData});
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image
            source={{uri: 'https://example.com/your-image.jpg'}} // Replace with the actual image URL
            style={styles.image}
          />
          <Title style={styles.title}>{studentData.name}</Title>
          <Paragraph style={styles.subTitle}>Basic Info</Paragraph>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Class:</Text>
            <Text style={styles.value}>{studentData.selectedClass}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Mobile Number:</Text>
            <Text style={styles.value}>{studentData.mobileNumber}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Data Of Birth:</Text>
            <Text style={styles.value}>{studentData.dateOfBirth}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Selected Gender:</Text>
            <Text style={styles.value}>{studentData.selectedGender}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Father's Name:</Text>
            <Text style={styles.value}>{studentData.fathersName}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Father's Occupation:</Text>
            <Text style={styles.value}>{studentData.fathersOccupation}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Mother's Name:</Text>
            <Text style={styles.value}>{studentData.mothersName}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Mother's Occupation:</Text>
            <Text style={styles.value}>{studentData.mothersOccupation}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{studentData.address}</Text>
          </View>
          <Paragraph style={styles.subTitle}>Personal Info</Paragraph>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>E-Mail:</Text>
            <Text style={styles.value}>1234@gmail.com</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Category:</Text>
            <Text style={styles.value}>scholarship</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Religion:</Text>
            <Text style={styles.value}>Hindu</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Birth Place:</Text>
            <Text style={styles.value}>Chhattisgarh</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Cast:</Text>
            <Text style={styles.value}>FC</Text>
          </View>
        </Card.Content>
         <TouchableOpacity style={styles.button} onPress={handleEdit}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    borderRadius: 10,
    elevation: 4,
  },
  cardContent: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  infoContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 5,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
  },
  value: {
    flex: 2,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileCardScreen;



// src/ContactList.js
import React from 'react';
import {FlatList, View, Text, Image, StyleSheet, TextInput} from 'react-native';

const contacts = [
  {id: '1', name: 'HARI', class: 'X-A', phone: '8765322467'},
  {id: '2', name: 'JISHA A S', class: 'X-A', phone: '8456725894'},
  {id: '3', name: 'REKHA MENON', class: 'X-A', phone: '9717704366'},
  {id: '4', name: 'VISRUTHI N', class: 'X-A', phone: '7708883394'},
  {id: '5', name: 'AARUN BALAJ', class: 'X-A', phone: '9444835528'},
  {
    id: '6',
    name: 'ABISHEK D',
    class: 'X-A',
    phone: '8667756528',
    image: 'https://example.com/abishek.jpg',
  },
  {
    id: '7',
    name: 'ANKIT KUMAR SINGH',
    class: 'X-A',
    phone: '7869214627',
    image: 'https://example.com/ankit.jpg',
  },
  // Add more contacts as needed
];

const ContactList = () => {
  const renderItem = ({item}) => (
    <View style={styles.contactItem}>
      {item.image ? (
        <Image source={{uri: item.image}} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage} />
      )}
      <View style={styles.contactInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.class}>{item.class}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Name, Admission No, Mobile No..."
      />
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
  },
  contactItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  placeholderImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
  },
  contactInfo: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  class: {
    color: '#777',
  },
  phone: {
    color: '#007AFF',
  },
});

export default ContactList;



App.js

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FormScreen from './src/components/FormScreen';
import DisplayScreen from './src/components/DisplayScreen';
import FormInputScreen from './src/components/FormInputScreen';
import FormDataScreen from './src/components/FormDataScreen';
import DataFilterScreen from './src/components/ProfileCardScreen';
import ProfileCardScreen from './src/components/ProfileCardScreen';
import StudentDetailsScreen from './src/components/StudentDetailsScreen';
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
      <Stack.Navigator initialRouteName="FormDataScreen">
        <Stack.Screen
          name="FormInputScreen"
          component={FormInputScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
        name="ProfileCardScreen" 
        component={ProfileCardScreen} />
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
                onPress={() => navigation.navigate('FormInputScreen' + '')}>
                <Text style={{color: 'white'}}>Add New</Text>
              </TouchableOpacity>
            ),
          })}
        />
        {/* <Stack.Screen
          name="StudentDetailsScreen"
          component={StudentDetailsScreen}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


FormDataScreen.js

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormDataScreen = ({navigation}) => {
  const [studentData, setStudentData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getStudentData();
    });

    return unsubscribe;
  }, [navigation]);

  const getStudentData = async () => {
    try {
      const existingStudentData = await AsyncStorage.getItem('studentData');
      if (existingStudentData) {
        setStudentData(JSON.parse(existingStudentData));
      } else {
        setStudentData([]);
      }
    } catch (error) {
      // console.error('Error getting student data: ', error);
    }
  };

  const handleViewProfile = student => {
    navigation.navigate('ProfileCardScreen', {studentData: student});
  };

  const renderStudentItem = ({item}) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleViewProfile(item)}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemText}>{item.selectedClass}</Text>
        <Text style={styles.itemText}>{item.mobileNumber}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteStudent(item.userId)}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const handleSearch = () => {
    // Filter student data based on searchQuery
    const filteredData = studentData.filter(student => {
      const name = student.name.toLowerCase();
      const query = searchQuery.toLowerCase();
      return name.includes(query);
    });
    return filteredData;
  };

  const handleDeleteStudent = async userId => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this student?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              const updatedStudentData = studentData.filter(
                student => student.userId !== userId,
              );
              await AsyncStorage.setItem(
                'studentData',
                JSON.stringify(updatedStudentData),
              );
              setStudentData(updatedStudentData);
            } catch (error) {
              console.error('Error deleting student data: ', error);
            }
          },
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student List</Text>
      <TextInput
        style={styles.input}
        placeholder="Search by name"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={handleSearch()} // Render filtered student data
        renderItem={renderStudentItem}
        keyExtractor={item => item.userId}
        contentContainerStyle={{flexGrow: 1}}
        ListEmptyComponent={<Text>No student data found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  item: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FormDataScreen;


FormInputScreen.js

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useUpdate} from './UpdateContext'; // Import the useUpdate hook

function generateRandomUserId(length) {
  const characters = '0123456789';
  let userId = '';
  for (let i = 0; i < length; i++) {
    userId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return userId;
}

const FormInputScreen = ({navigation, route}) => {
  // const {setUpdatedStudent} = useUpdate(); // Use the useUpdate hook
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    mobileNumber: '',
    fathersName: '',
    fathersOccupation: '',
    mothersName: '',
    mothersOccupation: '',
    selectedClass: '',
    selectedGender: 'Select a Gender',
    address: '',
  });

  useEffect(() => {
    try {
      const id = route.params?.id;

      if (route.params && route.params.studentData) {
        setFormData(route.params.studentData);
      } else {
        setFormData({
          name: '',
          dateOfBirth: '',
          mobileNumber: '',
          fathersName: '',
          fathersOccupation: '',
          mothersName: '',
          mothersOccupation: '',
          selectedClass: '',
          selectedGender: '',
          address: '',
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [route.params]);

  const handleChange = (key, value) => {
    let sanitizedValue = value;

    if (
      [
        'name',
        'fathersName',
        'fathersOccupation',
        'mothersName',
        'mothersOccupation',
      ].includes(key)
    ) {
      sanitizedValue = value.replace(/[^a-zA-Z .]/g, '');
    }

    setFormData({
      ...formData,
      [key]: sanitizedValue,
    });
  };

  const handleSubmit = async () => {
    const errors = handleValidation();
    if (Object.keys(errors).length === 0) {
      try {
        const userId = generateRandomUserId(4);
        const userData = {...formData, userId};

        const existingStudentData = await AsyncStorage.getItem('studentData');
        let studentData = existingStudentData
          ? JSON.parse(existingStudentData)
          : [];

        // console.log(route.params.studentIndex);
        if (route.params && route.params.studentIndex !== undefined) {
          // If studentIndex is available, update the data at that index
          studentData[route.params.studentIndex] = userData;
        } else {
          // Otherwise, it's a new entry, so push the data
          studentData.push(userData);
        }

        await AsyncStorage.setItem('studentData', JSON.stringify(studentData));

        console.log('FormData:', formData);
        // console.log('UserData:', userData);
        // console.log('StudentData:', studentData);

        const objIndex = studentData.findIndex(
          obj => obj.userData == userData.name,
        );
        //         console.log('Before update objIndex:  ', objIndex);
        //
        //         console.log('Before update: ', studentData);
        if (objIndex !== -1) {
          // Update the form data with the new user data
          studentData[objIndex] = formData;
        }

        Alert.alert('Success', 'Student data has been successfully submitted', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('FormDataScreen');
            },
          },
        ]);
      } catch (error) {
        console.error('Error saving form data: ', error);
      }
    } else {
      Alert.alert('Validation Error', Object.values(errors).join('\n'));
    }
  };

  const handleGetData = async () => {
    try {
      const existingStudentData = await AsyncStorage.getItem('studentData');
      if (existingStudentData) {
        const lastEntry = JSON.parse(existingStudentData).pop();
        if (lastEntry) {
          setFormData(lastEntry);
        }
      } else {
        alert('No data found');
      }
    } catch (error) {
      console.error('Error getting form data: ', error);
    }
  };

  const handleValidation = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.dateOfBirth) {
      errors.dateOfBirth = 'Date of Birth is required';
    }
    if (!formData.mobileNumber) {
      errors.mobileNumber = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = 'Mobile Number must be 10 digits';
    }
    if (!formData.selectedGender) {
      errors.selectedGender = 'Gender is required';
    }
    if (!formData.fathersName) {
      errors.fathersName = "Father's Name is required";
    }
    if (!formData.fathersOccupation) {
      errors.fathersOccupation = "Father's Occupation is required";
    }
    if (!formData.mothersName) {
      errors.mothersName = "Mother's Name is required";
    }
    if (!formData.mothersOccupation) {
      errors.mothersOccupation = "Mother's Occupation is required";
    }
    if (!formData.address) {
      errors.address = 'Address is required';
    }

    return errors;
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1572355286138-8dae8e7ba20d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }}
      style={styles.backgroundImage}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            // backgroundColor: 'rgba(255, 255, 255, 0.5)', // Add opacity to background color
            backgroundColor: 'white',
            borderRadius: 15,
            width: '100%',
            padding: 20,
            gap: 20,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 20,
              backgroundColor: '#018c6a',
              color: '#fff',
              textAlign: 'center',
              padding: 10,
              width: '100%',
              borderRadius: 10,
            }}>
            Enter Your Details
          </Text>
          <Text style={styles.text}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={text => handleChange('name', text)}
            value={formData.name}
          />
          <Text style={styles.text1}>Class</Text>
          <View style={styles.input1}>
            <Picker
              selectedValue={formData.selectedClass}
              onValueChange={(itemValue, itemIndex) =>
                handleChange('selectedClass', itemValue)
              }>
              <Picker.Item label="Select a Class" value="" />
              <Picker.Item label="LKG" value="LKG" />
              <Picker.Item label="UKG" value="UKG" />
              <Picker.Item label="1st" value="1st" />
              <Picker.Item label="2nd" value="2nd" />
              <Picker.Item label="3rd" value="3rd" />
              <Picker.Item label="4th" value="4th" />
              <Picker.Item label="5th" value="5th" />
              <Picker.Item label="6th" value="6th" />
              <Picker.Item label="7th" value="7th" />
              <Picker.Item label="8th" value="8th" />
              <Picker.Item label="9th" value="9th" />
              <Picker.Item label="10th" value="10th" />
              <Picker.Item label="11th" value="11th" />
              <Picker.Item label="12th" value="12th" />
              {/* Add other classes as needed */}
            </Picker>
          </View>
          <Text style={styles.text2}>Gender</Text>
          <View style={styles.input1}>
            <Picker
              selectedValue={formData.selectedGender}
              onValueChange={(itemValue, itemIndex) =>
                handleChange('selectedGender', itemValue)
              }>
              <Picker.Item label="Select a Gender" value="" />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>
          <Text style={styles.text3}>Date Of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="Date of Birth (DD-MM-YYYY)"
            onChangeText={text => handleChange('dateOfBirth', text)}
            value={formData.dateOfBirth}
            keyboardType="numeric"
          />
          <Text style={styles.text4}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            onChangeText={text => {
              // Remove any non-numeric characters from the input
              const numericValue = text.replace(/\D/g, '');
              // Check if the input contains 10 digits or less
              if (numericValue.length <= 10) {
                // Update the mobileNumber state with the sanitized value
                handleChange('mobileNumber', numericValue);
              }
            }}
            value={formData.mobileNumber} // Numeric keyboard
          />
          <Text style={styles.text5}>Father's Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Father's Name"
            onChangeText={text => handleChange('fathersName', text)}
            value={formData.fathersName}
          />
          <Text style={styles.text6}>Father's Occupation</Text>
          <TextInput
            style={styles.input}
            placeholder="Father's Occupation"
            onChangeText={text => handleChange('fathersOccupation', text)}
            value={formData.fathersOccupation}
          />
          <Text style={styles.text7}>Mother's Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Mother's Name"
            onChangeText={text => handleChange('mothersName', text)}
            value={formData.mothersName}
          />
          <Text style={styles.text8}>Mother's Occupation</Text>
          <TextInput
            style={styles.input}
            placeholder="Mother's Occupation"
            onChangeText={text => handleChange('mothersOccupation', text)}
            value={formData.mothersOccupation}
          />

          <Text style={styles.text9}>Address</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Address"
            onChangeText={text => handleChange('address', text)}
            value={formData.address}
            multiline={true}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={[styles.button, {backgroundColor: '#04b58a'}]}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleGetData}
              style={[styles.button, {backgroundColor: '#04b58a'}]}>
              <Text style={styles.buttonText}>Get Data</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    width: 50,
    left: 32,
    top: 112,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text1: {
    position: 'absolute',
    width: 48,
    left: 32,
    top: 213,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text2: {
    position: 'absolute',
    width: 60,
    left: 32,
    top: 312,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text3: {
    position: 'absolute',
    width: 102,
    left: 32,
    top: 413,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text4: {
    position: 'absolute',
    width: 119,
    left: 32,
    top: 512,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text5: {
    position: 'absolute',
    width: 116,
    left: 32,
    top: 612,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text6: {
    position: 'absolute',
    width: 156,
    left: 32,
    top: 712,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text7: {
    position: 'absolute',
    width: 120,
    left: 32,
    top: 812,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text8: {
    position: 'absolute',
    width: 160,
    left: 32,
    top: 912,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text9: {
    position: 'absolute',
    width: 66,
    left: 32,
    top: 1012,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  input: {
    height: 60,
    marginVertical: 10,
    padding: 15,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#018c6a',
  },
  input1: {
    height: 60,
    marginVertical: 10,
    padding: 4,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#018c6a',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {},
  button: {
    backgroundColor: '#53a6be',
    padding: 10,
    borderRadius: 5,
    marginVertical: 3,
    alignItems: 'center',
    width: 250, // Adjust width as needed
  },
  buttonText: {
    color: '#fff',
  },
});

export default FormInputScreen;


ProfilecardScreen.js

// ProfileCardScreen.js

// ProfileCardScreen.js

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileCardScreen = ({route, navigation}) => {
  const {studentData} = route.params;

  const handleEdit = () => {
    navigation.navigate('EditInputScreen', {studentData});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }} // Replace with the actual image URL
            style={styles.image}
          />
          <Title style={styles.title}>{studentData.name}</Title>
          <Paragraph style={styles.subTitle}>Basic Info</Paragraph>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Class:</Text>
            <Text style={styles.value}>{studentData.selectedClass}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Mobile Number:</Text>
            <Text style={styles.value}>{studentData.mobileNumber}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Data Of Birth:</Text>
            <Text style={styles.value}>{studentData.dateOfBirth}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Selected Gender:</Text>
            <Text style={styles.value}>{studentData.selectedGender}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Father's Name:</Text>
            <Text style={styles.value}>{studentData.fathersName}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Father's Occupation:</Text>
            <Text style={styles.value}>{studentData.fathersOccupation}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Mother's Name:</Text>
            <Text style={styles.value}>{studentData.mothersName}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Mother's Occupation:</Text>
            <Text style={styles.value}>{studentData.mothersOccupation}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{studentData.address}</Text>
          </View>
          <Paragraph style={styles.subTitle}>Personal Info</Paragraph>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>E-Mail:</Text>
            <Text style={styles.value}>1234@gmail.com</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Category:</Text>
            <Text style={styles.value}>scholarship</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Religion:</Text>
            <Text style={styles.value}>Hindu</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Birth Place:</Text>
            <Text style={styles.value}>Chhattisgarh</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Cast:</Text>
            <Text style={styles.value}>FC</Text>
          </View>
        </Card.Content>
        <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    borderRadius: 10,
    elevation: 4,
  },
  cardContent: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  infoContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 5,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
  },
  value: {
    flex: 2,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileCardScreen;




import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const EditInputScreen = ({ route, navigation }) => {
  const { studentData } = route.params;

  const [formData, setFormData] = useState({
    ...studentData,
    dateOfBirth: studentData.dateOfBirth ? new Date(studentData.dateOfBirth) : null,
  });
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [age, setAge] = useState('');

  useEffect(() => {
    // Calculate age when component mounts
    if (formData.dateOfBirth) {
      const age = calculateAge(formData.dateOfBirth);
      setAge(age);
    }
  }, []);

  const handleChange = (key, value) => {
    let sanitizedValue = value;

    if (['name', 'fathersName', 'fathersOccupation', 'mothersName', 'mothersOccupation'].includes(key)) {
      sanitizedValue = value.replace(/[^a-zA-Z .]/g, '');
    }

    setFormData({
      ...formData,
      [key]: sanitizedValue,
    });

    if (key === 'dateOfBirth') {
      setAge(calculateAge(value));
    }
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleValidation = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.selectedClass) {
      errors.selectedClass = 'Class is required';
    }
    if (!formData.selectedSection) {
      errors.selectedSection = 'Section is required';
    }
    if (!formData.dateOfBirth) {
      errors.dateOfBirth = 'Date of Birth is required';
    }
    if (!formData.mobileNumber) {
      errors.mobileNumber = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = 'Mobile Number must be 10 digits';
    }
    if (!formData.selectedGender) {
      errors.selectedGender = 'Gender is required';
    }
    if (!formData.fathersName) {
      errors.fathersName = "Father's Name is required";
    }
    if (!formData.fathersOccupation) {
      errors.fathersOccupation = "Father's Occupation is required";
    }
    if (!formData.mothersName) {
      errors.mothersName = "Mother's Name is required";
    }
    if (!formData.mothersOccupation) {
      errors.mothersOccupation = "Mother's Occupation is required";
    }
    if (!formData.address) {
      errors.address = 'Address is required';
    }

    return errors;
  };

  const handleSubmit = async () => {
    const errors = handleValidation();

    if (Object.keys(errors).length === 0) {
      try {
        // Update the student data in AsyncStorage
        const existingStudentData = await AsyncStorage.getItem('studentData');
        let studentData = existingStudentData ? JSON.parse(existingStudentData) : [];

        const updatedStudentData = studentData.map(student => {
          if (student.userId === formData.userId) {
            return formData;
          }
          return student;
        });

        await AsyncStorage.setItem('studentData', JSON.stringify(updatedStudentData));

        Alert.alert('Success', 'Student data has been successfully updated', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('FormDataScreen');
            },
          },
        ]);
      } catch (error) {
        console.error('Error updating form data: ', error);
      }
    } else {
      Alert.alert('Validation Error', Object.values(errors).join('\n'));
    }
  };

  const handleDateConfirm = (selectedDate) => {
    setDatePickerVisibility(false);
    handleChange('dateOfBirth', selectedDate);
  };

  const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      return 'DD/MM/YYYY'; // Return default value for invalid dates
    }

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1572355286138-8dae8e7ba20d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }}
      style={styles.backgroundImage}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 15,
            width: '100%',
            padding: 20,
            gap: 5,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 10,
              backgroundColor: '#018c6a',
              color: '#fff',
              textAlign: 'center',
              padding: 5,
              width: '100%',
              borderRadius: 10,
            }}>
            Enter Update Details
          </Text>
          <Text style={styles.text}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={text => handleChange('name', text)}
            value={formData.name}
          />
          <View style={styles.classContainer}>
            <Text style={styles.text1}>Class</Text>
            <View style={styles.input2}>
              <Picker
                selectedValue={formData.selectedClass}
                onValueChange={(itemValue, itemIndex) =>
                  handleChange('selectedClass', itemValue)
                }>
                <Picker.Item label="Select Class" value="" />
                <Picker.Item label="I" value="I" />
                <Picker.Item label="II" value="II" />
                <Picker.Item label="III" value="III" />
                <Picker.Item label="IV" value="IV" />
                <Picker.Item label="V" value="V" />
                <Picker.Item label="VI" value="VI" />
                <Picker.Item label="VII" value="VII" />
                <Picker.Item label="VIII" value="VIII" />
                <Picker.Item label="IX" value="IX" />
                <Picker.Item label="X" value="X" />
                <Picker.Item label="XI" value="XI" />
                <Picker.Item label="XII" value="XII" />
                {/* Add other classes as needed */}
              </Picker>
            </View>
            <Text style={styles.text10}>Section</Text>
            <View style={styles.input2}>
              <Picker
                selectedValue={formData.selectedSection}
                onValueChange={(itemValue, itemIndex) =>
                  handleChange('selectedSection', itemValue)
                }>
                <Picker.Item label="Select a Section" value="" />
                <Picker.Item label="A" value="A" />
                <Picker.Item label="B" value="B" />
                <Picker.Item label="C" value="C" />
                <Picker.Item label="D" value="D" />
              </Picker>
            </View>
          </View>
          <Text style={styles.text2}>Gender</Text>
          <View style={styles.input1}>
            <Picker
              selectedValue={formData.selectedGender}
              onValueChange={(itemValue, itemIndex) =>
                handleChange('selectedGender', itemValue)
              }>
              <Picker.Item label="Select a Gender" value="" />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.text}>Date of Birth</Text>
            <TouchableOpacity
              style={styles.input}
              onPress={() => setDatePickerVisibility(true)}
            >
              <Text>{formatDate(formData.dateOfBirth)}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              date={formData.dateOfBirth}
              onConfirm={handleDateConfirm}
              onCancel={() => setDatePickerVisibility(false)}
            />
            <Text style={styles.text}>Age</Text>
            <TextInput
              style={styles.input}
              placeholder="Age"
              value={age.toString()}
              editable={false}
            />
          </View>
          <Text style={styles.text4}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            onChangeText={text => {
              // Remove any non-numeric characters from the input
              const numericValue = text.replace(/\D/g, '');
              // Check if the input contains 10 digits or less
              if (numericValue.length <= 10) {
                // Update the mobileNumber state with the sanitized value
                handleChange('mobileNumber', numericValue);
              }
            }}
            value={formData.mobileNumber} // Numeric keyboard
          />
          <Text style={styles.text5}>Father's Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Father's Name"
            onChangeText={text => handleChange('fathersName', text)}
            value={formData.fathersName}
          />
          <Text style={styles.text6}>Father's Occupation</Text>
          <TextInput
            style={styles.input}
            placeholder="Father's Occupation"
            onChangeText={text => handleChange('fathersOccupation', text)}
            value={formData.fathersOccupation}
          />
          <Text style={styles.text7}>Mother's Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Mother's Name"
            onChangeText={text => handleChange('mothersName', text)}
            value={formData.mothersName}
          />
          <Text style={styles.text8}>Mother's Occupation</Text>
          <TextInput
            style={styles.input}
            placeholder="Mother's Occupation"
            onChangeText={text => handleChange('mothersOccupation', text)}
            value={formData.mothersOccupation}
          />

          <Text style={styles.text9}>Address</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Address"
            onChangeText={text => handleChange('address', text)}
            value={formData.address}
            multiline={true}
          />
          {/* Other form fields */}
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.button, { backgroundColor: '#04b58a' }]}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    width: 52,
    left: 32,
    top: 77,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text1: {
    position: 'absolute',
    width: 48,
    left: 12,
    top: -2,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text10: {
    position: 'absolute',
    width: 60,
    left: 172,
    top: -2,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text11: {
    position: 'absolute',
    width: 36,
    left: 232,
    top: -2,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text2: {
    position: 'absolute',
    width: 60,
    left: 32,
    top: 226,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text3: {
    position: 'absolute',
    width: 102,
    left: 12,
    top: -2,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text4: {
    position: 'absolute',
    width: 119,
    left: 32,
    top: 376,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text5: {
    position: 'absolute',
    width: 116,
    left: 32,
    top: 452,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text6: {
    position: 'absolute',
    width: 156,
    left: 32,
    top: 526,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text7: {
    position: 'absolute',
    width: 120,
    left: 32,
    top: 601,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text8: {
    position: 'absolute',
    width: 160,
    left: 32,
    top: 676,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text9: {
    position: 'absolute',
    width: 66,
    left: 32,
    top: 752,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  input: {
    height: 50,
    marginVertical: 10,
    padding: 15,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#018c6a',
  },
  input1: {
    height: 50,
    marginVertical: 10,
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#018c6a',
  },
  input2: {
    height: 50,
    marginVertical: 10,
    textAlign: 'center',
    gap: 10,
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#018c6a',
  },
  input3: {
    height: 50,
    marginVertical: 10,
    padding: 15,
    gap: 10,
    width: '67%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#018c6a',
  },
  input4: {
    height: 50,
    marginVertical: 10,
    gap: 10,
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#018c6a',
  },
  classContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#53a6be',
    padding: 10,
    borderRadius: 5,
    marginVertical: 3,
    alignItems: 'center',
    width: 250, // Adjust width as needed
  },
  buttonText: {
    color: '#fff',
  },
});

export default EditInputScreen;



import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FormDataScreen from './FormDataScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';


const Stack = createStackNavigator();

function generateRandomUserId(length) {
  const characters = '0123456789';
  let userId = '';
  for (let i = 0; i < length; i++) {
    userId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return userId;
}



const FormInputScreen = ({navigation, route}) => {
  // const {setUpdatedStudent} = useUpdate(); // Use the useUpdate hook
  // const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    mobileNumber: '',
    fathersName: '',
    fathersOccupation: '',
    mothersName: '',
    mothersOccupation: '',
    selectedClass: '',
    selectedSection: '',
    selectedGender: 'Select a Gender',
    address: '',
  });
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [age, setAge] = useState('');
  

 useEffect(() => {
   try {
     const id = route.params?.id;

     if (route.params && route.params.studentData) {
       // Ensure dateOfBirth is a Date object
       const studentData = route.params.studentData;
       studentData.dateOfBirth = studentData.dateOfBirth
         ? new Date(studentData.dateOfBirth)
         : new Date();
       setFormData(studentData);
       setAge(calculateAge(studentData.dateOfBirth));
     } else {
       // Initialize form with empty fields
       setFormData({
         name: '',
         dateOfBirth: '', // Empty dateOfBirth
         mobileNumber: '',
         fathersName: '',
         fathersOccupation: '',
         mothersName: '',
         mothersOccupation: '',
         selectedClass: '',
         selectedSection: '',
         selectedGender: '',
         address: '',
       });
     }
   } catch (error) {
     console.error('Error fetching data:', error);
   }
 }, [route.params]);


const formatDate = date => {
  if (!date || date === '') {
    return 'DD/MM/YYYY'; // Return default value if date is empty
  }

  const parsedDate = new Date(date);

  if (!(parsedDate instanceof Date) || isNaN(parsedDate.getTime())) {
    return 'Invalid Date';
  }

  const day = parsedDate.getDate().toString().padStart(2, '0');
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
  const year = parsedDate.getFullYear();
  return `${day}/${month}/${year}`;
};



  const handleChange = (key, value) => {
    let sanitizedValue = value;

    if (
      [
        'name',
        'fathersName',
        'fathersOccupation',
        'mothersName',
        'mothersOccupation',
      ].includes(key)
    ) {
      sanitizedValue = value.replace(/[^a-zA-Z .]/g, '');
    }

    setFormData({
      ...formData,
      [key]: sanitizedValue,
    });
  };

  const handleSubmit = async () => {
    const errors = handleValidation();
    if (Object.keys(errors).length === 0) {
      try {
        const userId = generateRandomUserId(4);
        const userData = {...formData, userId};

        const existingStudentData = await AsyncStorage.getItem('studentData');
        let studentData = existingStudentData
          ? JSON.parse(existingStudentData)
          : [];

        // console.log(route.params.studentIndex);
        if (route.params && route.params.studentIndex !== undefined) {
          // If studentIndex is available, update the data at that index
          studentData[route.params.studentIndex] = userData;
        } else {
          // Otherwise, it's a new entry, so push the data
          studentData.push(userData);
        }

        await AsyncStorage.setItem('studentData', JSON.stringify(studentData));

        console.log('FormData:', formData);
        // console.log('UserData:', userData);
        // console.log('StudentData:', studentData);


        Alert.alert('Success', 'Student data has been successfully submitted', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('FormDataScreen');
            },
          },
        ]);
      } catch (error) {
        console.error('Error saving form data: ', error);
      }
    } else {
      Alert.alert('Validation Error', Object.values(errors).join('\n'));
    }
  };

  const handleGetData = async () => {
    try {
      const existingStudentData = await AsyncStorage.getItem('studentData');
      if (existingStudentData) {
        const lastEntry = JSON.parse(existingStudentData).pop();
        if (lastEntry) {
          setFormData(lastEntry);
          // Calculate age based on the retrieved date of birth
          const age = calculateAge(new Date(lastEntry.dateOfBirth));
          setAge(age);
        }
      } else {
        alert('No data found');
      }
    } catch (error) {
      console.error('Error getting form data: ', error);
    }
  };

  const clearAllData = () => {
    setFormData({
      name: '',
      dateOfBirth: '', // Reset date of birth to a new Date object
      mobileNumber: '',
      fathersName: '',
      fathersOccupation: '',
      mothersName: '',
      mothersOccupation: '',
      selectedClass: '',
      selectedSection: '',
      selectedGender: '',
      address: '',
    });
    setAge('');
  };

  
  const handleDateConfirm = selectedDate => {
    setDatePickerVisibility(false);
    handleChange('dateOfBirth', selectedDate);
    setAge(calculateAge(selectedDate));
    hideDatePicker();
  };

  const handleValidation = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.selectedClass) {
      errors.name = 'Class is required';
    }
     if (!formData.selectedSection) {
       errors.name = 'Section is required';
     }
    if (!formData.dateOfBirth) {
      errors.dateOfBirth = 'Date of Birth is required';
    }
    if (!formData.mobileNumber) {
      errors.mobileNumber = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = 'Mobile Number must be 10 digits';
    }
    if (!formData.selectedGender) {
      errors.selectedGender = 'Gender is required';
    }
    if (!formData.fathersName) {
      errors.fathersName = "Father's Name is required";
    }
    if (!formData.fathersOccupation) {
      errors.fathersOccupation = "Father's Occupation is required";
    }
    if (!formData.mothersName) {
      errors.mothersName = "Mother's Name is required";
    }
    if (!formData.mothersOccupation) {
      errors.mothersOccupation = "Mother's Occupation is required";
    }
    if (!formData.address) {
      errors.address = 'Address is required';
    }

    return errors;
  };


 const calculateAge = dob => {
   const birthDate = new Date(dob);
   const today = new Date();
   let age = today.getFullYear() - birthDate.getFullYear();
   const monthDifference = today.getMonth() - birthDate.getMonth();
   if (
     monthDifference < 0 ||
     (monthDifference === 0 && today.getDate() < birthDate.getDate())
   ) {
     age--;
   }
   return age;
 };

  return (
    <>
      <StatusBar backgroundColor="#344968" barStyle="light-content" />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            // backgroundColor: 'rgba(255, 255, 255, 0.5)',
            backgroundColor: 'white',
            borderRadius: 15,
            width: '100%',
            padding: 20,
            gap: 10,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 10,
              backgroundColor: '#344968',
              color: '#fff',
              textAlign: 'center',
              padding: 5,
              width: '100%',
              borderRadius: 10,
            }}>
            Enter Your Details
          </Text>
          <Text style={styles.text}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={text => handleChange('name', text)}
            value={formData.name}
          />
          <View style={styles.classContainer}>
            <Text style={styles.text1}>Class</Text>
            <View style={styles.input2}>
              <Picker
                selectedValue={formData.selectedClass}
                onValueChange={(itemValue, itemIndex) =>
                  handleChange('selectedClass', itemValue)
                }>
                <Picker.Item label="Select Class" value="" />
                <Picker.Item label="I" value="I" />
                <Picker.Item label="II" value="II" />
                <Picker.Item label="III" value="III" />
                <Picker.Item label="IV" value="IV" />
                <Picker.Item label="V" value="V" />
                <Picker.Item label="VI" value="VI" />
                <Picker.Item label="VII" value="VII" />
                <Picker.Item label="VIII" value="VIII" />
                <Picker.Item label="IX" value="IX" />
                <Picker.Item label="X" value="X" />
                <Picker.Item label="XI" value="XI" />
                <Picker.Item label="XII" value="XII" />
                {/* Add other classes as needed */}
              </Picker>
            </View>
            <Text style={styles.text10}>Section</Text>
            <View style={styles.input2}>
              <Picker
                selectedValue={formData.selectedSection}
                onValueChange={(itemValue, itemIndex) =>
                  handleChange('selectedSection', itemValue)
                }>
                <Picker.Item label="Select a Section" value="" />
                <Picker.Item label="A" value="A" />
                <Picker.Item label="B" value="B" />
                <Picker.Item label="C" value="C" />
                <Picker.Item label="D" value="D" />
              </Picker>
            </View>
          </View>
          <Text style={styles.text2}>Gender</Text>
          <View style={styles.input1}>
            <Picker
              selectedValue={formData.selectedGender}
              onValueChange={(itemValue, itemIndex) =>
                handleChange('selectedGender', itemValue)
              }>
              <Picker.Item label="Select a Gender" value="" />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.text3}>Date of Birth</Text>
            <TouchableOpacity
              style={styles.input3}
              onPress={() => setDatePickerVisibility(true)}>
              <Text>{formatDate(formData.dateOfBirth)}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              date={
                formData.dateOfBirth instanceof Date
                  ? formData.dateOfBirth
                  : new Date()
              }
              onConfirm={handleDateConfirm}
              onCancel={() => setDatePickerVisibility(false)}
            />
            <Text style={styles.text11}>Age</Text>
            <TextInput
              style={styles.input4}
              placeholder="Age"
              value={age.toString()}
              editable={false}
            />
          </View>
          <Text style={styles.text4}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            onChangeText={text => {
              // Remove any non-numeric characters from the input
              const numericValue = text.replace(/\D/g, '');
              // Check if the input contains 10 digits or less
              if (numericValue.length <= 10) {
                // Update the mobileNumber state with the sanitized value
                handleChange('mobileNumber', numericValue);
              }
            }}
            value={formData.mobileNumber} // Numeric keyboard
          />
          <Text style={styles.text5}>Father's Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Father's Name"
            onChangeText={text => handleChange('fathersName', text)}
            value={formData.fathersName}
          />
          <Text style={styles.text6}>Father's Occupation</Text>
          <TextInput
            style={styles.input}
            placeholder="Father's Occupation"
            onChangeText={text => handleChange('fathersOccupation', text)}
            value={formData.fathersOccupation}
          />
          <Text style={styles.text7}>Mother's Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Mother's Name"
            onChangeText={text => handleChange('mothersName', text)}
            value={formData.mothersName}
          />
          <Text style={styles.text8}>Mother's Occupation</Text>
          <TextInput
            style={styles.input}
            placeholder="Mother's Occupation"
            onChangeText={text => handleChange('mothersOccupation', text)}
            value={formData.mothersOccupation}
          />

          <Text style={styles.text9}>Address</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Address"
            onChangeText={text => handleChange('address', text)}
            value={formData.address}
            multiline={true}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={[styles.button, {backgroundColor: '#344968'}]}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={clearAllData}
              style={[styles.button, {backgroundColor: 'red'}]}>
              <Text style={styles.buttonText}>Clear Data</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleGetData}
              style={[styles.button, {backgroundColor: '#344968'}]}>
              <Text style={styles.buttonText}>Get Data</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="FormDataScreen"
          component={FormDataScreen}
          options={{headerShown: false}} // Hide header for FormDataScreen
        />
        <Stack.Screen
          name="FormInputScreen"
          component={FormInputScreen}
          options={({navigation}) => ({
            headerStyle: {
              height: 100, // Adjust the height as needed
              backgroundColor: '#344968',
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 24, // Adjust the font size as needed
            },
            headerTitleAlign: 'center', // Center align the header text
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('FormDataScreen')}>
                <FontAwesome5
                  name="chevron-left"
                  size={40}
                  color="white"
                  style={{marginLeft: 15}}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator> */}
    </>
  );
};

FormInputScreen.navigationOptions = ({navigation}) => ({
  headerStyle: {
    height: 100, // Adjust the height as needed
    backgroundColor: '#344968',
  },
  headerTitleStyle: {
    color: 'white',
    fontSize: 24, // Adjust the font size as needed
  },
  headerTitleAlign: 'center', // Center align the header text
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('FormDataScreen')}>
      <FontAwesome5
        name="chevron-left"
        size={40}
        color="white"
        style={{marginLeft: 15}}
      />
    </TouchableOpacity>
  ),
});

const styles = StyleSheet.create({
  // backgroundImage: {
  //   flex: 1,
  //   resizeMode: 'cover',
  //   justifyContent: 'center',
  // },
  text: {
    position: 'absolute',
    width: 50,
    left: 32,
    top: 82,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text1: {
    position: 'absolute',
    width: 48,
    left: 12,
    top: -2,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text10: {
    position: 'absolute',
    width: 60,
    left: 172,
    top: -2,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text11: {
    position: 'absolute',
    width: 36,
    left: 232,
    top: -2,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text2: {
    position: 'absolute',
    width: 60,
    left: 32,
    top: 242,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text3: {
    position: 'absolute',
    width: 102,
    left: 12,
    top: -2,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text4: {
    position: 'absolute',
    width: 119,
    left: 32,
    top: 402,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text5: {
    position: 'absolute',
    width: 116,
    left: 32,
    top: 482,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text6: {
    position: 'absolute',
    width: 156,
    left: 32,
    top: 562,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text7: {
    position: 'absolute',
    width: 120,
    left: 32,
    top: 642,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text8: {
    position: 'absolute',
    width: 160,
    left: 32,
    top: 722,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  text9: {
    position: 'absolute',
    width: 66,
    left: 32,
    top: 802,
    fontSize: 15,
    backgroundColor: '#fff',
    zIndex: 1,
    textAlign: 'center',
  },
  touch: {
    height: 50,
    marginVertical: 10,
    padding: 15,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDE3EC',
  },
  input: {
    height: 50,
    marginVertical: 10,
    padding: 15,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDE3EC',
  },
  input1: {
    height: 50,
    marginVertical: 10,
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDE3EC',
  },
  input2: {
    height: 50,
    marginVertical: 10,
    textAlign: 'center',
    gap: 10,
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDE3EC',
  },
  input3: {
    height: 50,
    marginVertical: 10,
    padding: 15,
    gap: 10,
    width: '67%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDE3EC',
  },
  input4: {
    height: 50,
    marginVertical: 10,
    gap: 10,
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDE3EC',
  },
  classContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
  button: {
    backgroundColor: '#53a6be',
    padding: 10,
    borderRadius: 5,
    marginVertical: 3,
    textAlign: 'center',
    alignItems: 'center',
    width: 100, // Adjust width as needed
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
});

export default FormInputScreen;



import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FormDataScreen = ({navigation}) => {
  const [studentData, setStudentData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getStudentData();
    });

    return unsubscribe;
  }, [navigation]);

  const getStudentData = async () => {
    try {
      const existingStudentData = await AsyncStorage.getItem('studentData');
      if (existingStudentData) {
        setStudentData(JSON.parse(existingStudentData));
      } else {
        setStudentData([]);
      }
    } catch (error) {
      console.error('Error getting student data: ', error);
    }
  };

  const handleViewProfile = student => {
    navigation.navigate('ProfileCardScreen', {studentData: student});
  };

  const renderStudentItem = ({item}) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleViewProfile(item)}>
        <View style={styles.avatarContainer}>
          {item.avatar ? (
            <Image source={{uri: item.avatar}} style={styles.avatar} />
          ) : (
            <FontAwesome5 name="user-circle" size={40} color="gray" />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemClass}>
            {item.selectedClass} - {item.selectedSection}
          </Text>
          <Text style={styles.itemMobile}>{item.mobileNumber}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteStudent(item.userId)}>
        <FontAwesome5 name="trash" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  const handleSearch = () => {
    const filteredData = studentData.filter(student => {
      const name = student.name.toLowerCase();
      const selectedClass = student.selectedClass.toLowerCase();
      const mobileNumber = student.mobileNumber.toLowerCase();
      const query = searchQuery.toLowerCase();
      return (
        name.includes(query) ||
        selectedClass.includes(query) ||
        mobileNumber.includes(query)
      );
    });
    return filteredData;
  };

  const handleDeleteStudent = async userId => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this student?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              const updatedStudentData = studentData.filter(
                student => student.userId !== userId,
              );
              await AsyncStorage.setItem(
                'studentData',
                JSON.stringify(updatedStudentData),
              );
              setStudentData(updatedStudentData);
            } catch (error) {
              console.error('Error deleting student data: ', error);
            }
          },
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student List</Text>
      <TextInput
        style={styles.input}
        placeholder="Search by name, class, or mobile number"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={handleSearch()}
        renderItem={renderStudentItem}
        keyExtractor={item => item.userId}
        contentContainerStyle={
          studentData.length === 0 && {flexGrow: 1, justifyContent: 'center'}
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>No student data found</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#018c6a',
    borderRadius: 5,
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemClass: {
    fontSize: 14,
    color: 'gray',
  },
  itemMobile: {
    fontSize: 14,
    color: 'blue',
  },
  deleteButton: {
    marginLeft: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default FormDataScreen;

'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'




import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FormScreen from './src/components/FormScreen';
import DisplayScreen from './src/components/DisplayScreen';
import FormInputScreen from './src/components/FormInputScreen';
import FormDataScreen from './src/components/FormDataScreen';
import DataFilterScreen from './src/components/ProfileCardScreen';
import ProfileCardScreen from './src/components/ProfileCardScreen';
import EditInputScreen from './src/components/EditInputScreen';
import StudentDetailsScreen from './src/components/StudentDetailsScreen';
import {TouchableOpacity, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
      <Stack.Navigator initialRouteName="FormDataScreen">
        <Stack.Screen
          name="FormInputScreen"
          component={FormInputScreen}
          options={{
            headerStyle: {
              height: 80, // Adjust the height as needed
              backgroundColor: '#344968',
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 24, // Adjust the font size as needed
            },
            headerTitleAlign: 'center', // Center align the header text
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('FormDataScreen')}>
                <FontAwesome5
                  name="chevron-left"
                  size={40}
                  color="white"
                  style={{marginLeft: 15}}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="ProfileCardScreen"
          component={ProfileCardScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="EditInputScreen"
          component={EditInputScreen}
          options={{
            headerStyle: {
              height: 80, // Adjust the height as needed
              backgroundColor: '#344968',
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 24, // Adjust the font size as needed
            },
            headerTitleAlign: 'center', // Center align the header text
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('ProfileCardScreen')}>
                <FontAwesome5
                  name="chevron-left"
                  size={40}
                  color="white"
                  style={{marginLeft: 15}}
                />
              </TouchableOpacity>
            ),
          }}
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
                onPress={() => navigation.navigate('FormInputScreen' + '')}>
                <Text style={{color: 'white'}}>Add New</Text>
              </TouchableOpacity>
            ),
          })}
        />
        {/* <Stack.Screen
          name="StudentDetailsScreen"
          component={StudentDetailsScreen}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// Completed Full Codes In FormDataScreen.js

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FormDataScreen = ({navigation}) => {
  const [studentData, setStudentData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getStudentData();
    });

    return unsubscribe;
  }, [navigation]);

  const getStudentData = async () => {
    try {
      const existingStudentData = await AsyncStorage.getItem('studentData');
      if (existingStudentData) {
        setStudentData(JSON.parse(existingStudentData));
      } else {
        setStudentData([]);
      }
    } catch (error) {
      console.error('Error getting student data: ', error);
    }
  };

  const handleViewProfile = student => {
    navigation.navigate('ProfileCardScreen', {studentData: student});
  };

  const renderStudentItem = ({item}) => {
    const genderImage =
      item.selectedGender.toLowerCase() === 'male'
        ? 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1716015895~exp=1716016495~hmac=8a75d1ef9eb00a0173acacf4fd5e54206a62f694f877e41cdbd84f6b56c8d87f'
        : 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1716016890~exp=1716020490~hmac=b82593c7c19116ca7f2e2d447d0484417132a846d0b861c43fd0b6e11708446c&w=996';

    return (
      <View style={styles.itemContainer}>
        <StatusBar backgroundColor="#344968" barStyle="light-content" />
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleViewProfile(item)}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: genderImage,
              }}
              style={styles.avatar}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemClass}>
              {item.selectedClass} - {item.selectedSection}
            </Text>
            <Text style={styles.itemMobile}>{item.mobileNumber}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteStudent(item.userId)}>
          <FontAwesome5 name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  const handleSearch = () => {
    const filteredData = studentData.filter(student => {
      const name = student.name.toLowerCase();
      const selectedClass = student.selectedClass.toLowerCase();
      const mobileNumber = student.mobileNumber.toLowerCase();
      const query = searchQuery.toLowerCase();
      return (
        name.includes(query) ||
        selectedClass.includes(query) ||
        mobileNumber.includes(query)
      );
    });
    return filteredData;
  };

  const handleDeleteStudent = async userId => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this student?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              const updatedStudentData = studentData.filter(
                student => student.userId !== userId,
              );
              await AsyncStorage.setItem(
                'studentData',
                JSON.stringify(updatedStudentData),
              );
              setStudentData(updatedStudentData);
            } catch (error) {
              console.error('Error deleting student data: ', error);
            }
          },
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Student List</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Search by name, class, or mobile number"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={handleSearch()}
        renderItem={renderStudentItem}
        keyExtractor={item => item.userId}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          studentData.length === 0 && {flexGrow: 1, justifyContent: 'center'}
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>No student data found</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 60,
    height: 66,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemClass: {
    fontSize: 14,
    color: 'green',
  },
  itemMobile: {
    fontSize: 14,
    color: '#3dad97',
  },
  deleteButton: {
    marginLeft: 20,
    right: 5,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default FormDataScreen;


// FormDataScreen Table Formate Function Codes 


import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FormDataScreen = ({navigation}) => {
  const [studentData, setStudentData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getStudentData();
    });

    return unsubscribe;
  }, [navigation]);

  const getStudentData = async () => {
    try {
      const existingStudentData = await AsyncStorage.getItem('studentData');
      if (existingStudentData) {
        setStudentData(JSON.parse(existingStudentData));
      } else {
        setStudentData([]);
      }
    } catch (error) {
      console.error('Error getting student data: ', error);
    }
  };

  const handleSearch = () => {
    const filteredData = studentData.filter(student => {
      const name = student.name.toLowerCase();
      const selectedClass = student.selectedClass.toLowerCase();
      const mobileNumber = student.mobileNumber.toLowerCase();
      const query = searchQuery.toLowerCase();
      return (
        name.includes(query) ||
        selectedClass.includes(query) ||
        mobileNumber.includes(query)
      );
    });
    return filteredData;
  };

  const handleDeleteStudent = async userId => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this student?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              const updatedStudentData = studentData.filter(
                student => student.userId !== userId,
              );
              await AsyncStorage.setItem(
                'studentData',
                JSON.stringify(updatedStudentData),
              );
              setStudentData(updatedStudentData);
            } catch (error) {
              console.error('Error deleting student data: ', error);
            }
          },
          style: 'destructive',
        },
      ],
    );
  };

  const handleEditStudent = student => {
    navigation.navigate('EditInputScreen', {studentData: student});
  };

  return (
    <ScrollView style={styles.container} nestedScrollEnabled>
      <TextInput
        style={styles.input}
        placeholder="Search by name, class, or mobile number"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <ScrollView horizontal nestedScrollEnabled>
        <View>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, {width: 60}]}>Avatar</Text>
            <Text style={[styles.tableHeaderText, {width: 150}]}>Name</Text>
            <Text style={[styles.tableHeaderText, {width: 120}]}>Class</Text>
            <Text style={[styles.tableHeaderText, {width: 150}]}>
              Mobile Number
            </Text>
            <Text style={[styles.tableHeaderText, {width: 80}]}>Edit</Text>
            <Text style={[styles.tableHeaderText, {width: 80}]}>Delete</Text>
          </View>
          {handleSearch().length === 0 ? (
            <Text style={styles.emptyText}>No student data found</Text>
          ) : (
            handleSearch().map((item, index) => {
              const genderImage =
                item.selectedGender.toLowerCase() === 'male'
                  ? 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1716015895~exp=1716016495~hmac=8a75d1ef9eb00a0173acacf4fd5e54206a62f694f877e41cdbd84f6b56c8d87f'
                  : 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1716016890~exp=1716020490~hmac=b82593c7c19116ca7f2e2d447d0484417132a846d0b861c43fd0b6e11708446c&w=996';
              return (
                <View key={item.userId} style={styles.tableRow}>
                  <View style={[styles.tableCell, {width: 60}]}>
                    <Image source={{uri: genderImage}} style={styles.avatar} />
                  </View>
                  <Text style={[styles.tableCell, {width: 150}]}>
                    {item.name}
                  </Text>
                  <Text style={[styles.tableCell, {width: 120}]}>
                    {item.selectedClass} - {item.selectedSection}
                  </Text>
                  <Text style={[styles.tableCell, {width: 150}]}>
                    {item.mobileNumber}
                  </Text>
                  <TouchableOpacity
                    style={[styles.tableCell, {width: 80}]}
                    onPress={() => handleEditStudent(item)}>
                    <FontAwesome5 name="edit" size={20} color="blue" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.tableCell, {width: 80}]}
                    onPress={() => handleDeleteStudent(item.userId)}>
                    <FontAwesome5 name="trash" size={20} color="red" />
                  </TouchableOpacity>
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#344968',
    paddingVertical: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  tableHeaderText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    // justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    textAlign: 'center',
    // top: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    padding: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 20,
  },
});

export default FormDataScreen;


//part - 2

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FormDataScreen = ({navigation}) => {
  const [studentData, setStudentData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getStudentData();
    });

    return unsubscribe;
  }, [navigation]);

  const getStudentData = async () => {
    try {
      const existingStudentData = await AsyncStorage.getItem('studentData');
      if (existingStudentData) {
        setStudentData(JSON.parse(existingStudentData));
      } else {
        setStudentData([]);
      }
    } catch (error) {
      console.error('Error getting student data: ', error);
    }
  };

  const handleViewProfile = student => {
    navigation.navigate('ProfileCardScreen', {studentData: student});
  };

  const handleSearch = () => {
    const filteredData = studentData.filter(student => {
      const name = student.name.toLowerCase();
      const selectedClass = student.selectedClass.toLowerCase();
      const mobileNumber = student.mobileNumber.toLowerCase();
      const query = searchQuery.toLowerCase();
      return (
        name.includes(query) ||
        selectedClass.includes(query) ||
        mobileNumber.includes(query)
      );
    });
    return filteredData;
  };

  const handleDeleteStudent = async userId => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this student?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              const updatedStudentData = studentData.filter(
                student => student.userId !== userId,
              );
              await AsyncStorage.setItem(
                'studentData',
                JSON.stringify(updatedStudentData),
              );
              setStudentData(updatedStudentData);
            } catch (error) {
              console.error('Error deleting student data: ', error);
            }
          },
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by name, class, or mobile number"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <ScrollView horizontal>
        <View>
          <View style={styles.tableHeader}>
            <Text
              style={[
                styles.tableHeaderText,
                styles.tableColumn,
                {width: 100},
              ]}>
              Avatar
            </Text>
            <Text
              style={[
                styles.tableHeaderText,
                styles.tableColumn,
                {width: 150},
              ]}>
              Name
            </Text>
            <Text
              style={[
                styles.tableHeaderText,
                styles.tableColumn,
                {width: 100},
              ]}>
              Class
            </Text>
            <Text
              style={[
                styles.tableHeaderText,
                styles.tableColumn,
                {width: 150},
              ]}>
              Mobile Number
            </Text>
            <Text
              style={[
                styles.tableHeaderText,
                styles.tableColumn,
                {width: 100},
              ]}>
              Action
            </Text>
          </View>
          {handleSearch().length === 0 ? (
            <Text style={styles.emptyText}>No student data found</Text>
          ) : (
            handleSearch().map((item, index) => {
              const genderImage =
                item.selectedGender.toLowerCase() === 'male'
                  ? 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1716015895~exp=1716016495~hmac=8a75d1ef9eb00a0173acacf4fd5e54206a62f694f877e41cdbd84f6b56c8d87f'
                  : 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1716016890~exp=1716020490~hmac=b82593c7c19116ca7f2e2d447d0484417132a846d0b861c43fd0b6e11708446c&w=996';
              return (
                <View key={item.userId} style={styles.tableRow}>
                  <View style={[styles.tableCell, {width: 100}]}>
                    <Image source={{uri: genderImage}} style={styles.avatar} />
                  </View>
                  <Text
                    style={[
                      styles.tableCell,
                      styles.tableColumn,
                      {width: 150},
                    ]}>
                    {item.name}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      styles.tableColumn,
                      {width: 100},
                    ]}>
                    {item.selectedClass} - {item.selectedSection}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      styles.tableColumn,
                      {width: 150},
                    ]}>
                    {item.mobileNumber}
                  </Text>
                  <TouchableOpacity
                    style={[styles.tableCell, styles.tableColumn, {width: 100}]}
                    onPress={() => handleDeleteStudent(item.userId)}>
                    <FontAwesome5 name="trash" size={20} color="red" />
                  </TouchableOpacity>
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#344968',
    paddingVertical: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  tableHeaderText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableColumn: {
    borderWidth: 1,
    borderColor: 'gray',
    textAlign: 'center',
    paddingVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 20,
  },
});

export default FormDataScreen;


// Default and Alternative FormDataScreen.js Codes


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FormDataScreen = ({ navigation }) => {
  const [studentData, setStudentData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentView, setCurrentView] = useState('default');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getStudentData();
    });

    return unsubscribe;
  }, [navigation]);

  const getStudentData = async () => {
    try {
      const existingStudentData = await AsyncStorage.getItem('studentData');
      if (existingStudentData) {
        setStudentData(JSON.parse(existingStudentData));
      } else {
        setStudentData([]);
      }
    } catch (error) {
      console.error('Error getting student data: ', error);
    }
  };

  const handleSearch = () => {
    const filteredData = studentData.filter(student => {
      const name = student.name.toLowerCase();
      const selectedClass = student.selectedClass.toLowerCase();
      const mobileNumber = student.mobileNumber.toLowerCase();
      const query = searchQuery.toLowerCase();
      return (
        name.includes(query) ||
        selectedClass.includes(query) ||
        mobileNumber.includes(query)
      );
    });
    return filteredData;
  };

  const handleDeleteStudent = async userId => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this student?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              const updatedStudentData = studentData.filter(
                student => student.userId !== userId,
              );
              await AsyncStorage.setItem(
                'studentData',
                JSON.stringify(updatedStudentData),
              );
              setStudentData(updatedStudentData);
            } catch (error) {
              console.error('Error deleting student data: ', error);
            }
          },
          style: 'destructive',
        },
      ],
    );
  };

  const handleEditStudent = student => {
    navigation.navigate('EditInputScreen', { studentData: student });
  };

  const renderDefaultTable = () => {
    return (
      <ScrollView horizontal nestedScrollEnabled>
        <View>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, { width: 60 }]}>Avatar</Text>
            <Text style={[styles.tableHeaderText, { width: 150 }]}>Name</Text>
            <Text style={[styles.tableHeaderText, { width: 120 }]}>Class</Text>
            <Text style={[styles.tableHeaderText, { width: 150 }]}>Mobile Number</Text>
            <Text style={[styles.tableHeaderText, { width: 80 }]}>Edit</Text>
            <Text style={[styles.tableHeaderText, { width: 80 }]}>Delete</Text>
          </View>
          {handleSearch().length === 0 ? (
            <Text style={styles.emptyText}>No student data found</Text>
          ) : (
            handleSearch().map((item, index) => {
              const genderImage =
                item.selectedGender.toLowerCase() === 'male'
                  ? 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1716015895~exp=1716016495~hmac=8a75d1ef9eb00a0173acacf4fd5e54206a62f694f877e41cdbd84f6b56c8d87f'
                  : 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1716016890~exp=1716020490~hmac=b82593c7c19116ca7f2e2d447d0484417132a846d0b861c43fd0b6e11708446c&w=996';
              return (
                <View key={item.userId} style={styles.tableRow}>
                  <View style={[styles.tableCell, { width: 60 }]}>
                    <Image source={{ uri: genderImage }} style={styles.avatar} />
                  </View>
                  <Text style={[styles.tableCell, { width: 150 }]}>{item.name}</Text>
                  <Text style={[styles.tableCell, { width: 120 }]}>{item.selectedClass} - {item.selectedSection}</Text>
                  <Text style={[styles.tableCell, { width: 150 }]}>{item.mobileNumber}</Text>
                  <TouchableOpacity
                    style={[styles.tableCell, { width: 80 }]}
                    onPress={() => handleEditStudent(item)}>
                    <FontAwesome5 name="edit" size={20} color="blue" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.tableCell, { width: 80 }]}
                    onPress={() => handleDeleteStudent(item.userId)}>
                    <FontAwesome5 name="trash" size={20} color="red" />
                  </TouchableOpacity>
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    );
  };

  const renderAlternativeTable = () => {
    return (
      <ScrollView horizontal nestedScrollEnabled>
        <View>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, { width: 100 }]}>Name</Text>
            <Text style={[styles.tableHeaderText, { width: 120 }]}>Class</Text>
            <Text style={[styles.tableHeaderText, { width: 150 }]}>Mobile Number</Text>
            <Text style={[styles.tableHeaderText, { width: 100 }]}>Gender</Text>
            <Text style={[styles.tableHeaderText, { width: 80 }]}>Edit</Text>
            <Text style={[styles.tableHeaderText, { width: 80 }]}>Delete</Text>
          </View>
          {handleSearch().length === 0 ? (
            <Text style={styles.emptyText}>No student data found</Text>
          ) : (
            handleSearch().map((item, index) => {
              return (
                <View key={item.userId} style={styles.tableRow}>
                  <Text style={[styles.tableCell, { width: 100 }]}>{item.name}</Text>
                  <Text style={[styles.tableCell, { width: 120 }]}>{item.selectedClass} - {item.selectedSection}</Text>
                  <Text style={[styles.tableCell, { width: 150 }]}>{item.mobileNumber}</Text>
                  <Text style={[styles.tableCell, { width: 100 }]}>{item.selectedGender}</Text>
                  <TouchableOpacity
                    style={[styles.tableCell, { width: 80 }]}
                    onPress={() => handleEditStudent(item)}>
                    <FontAwesome5 name="edit" size={20} color="blue" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.tableCell, { width: 80 }]}
                    onPress={() => handleDeleteStudent(item.userId)}>
                    <FontAwesome5 name="trash" size={20} color="red" />
                  </TouchableOpacity>
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchView}>
        <TouchableOpacity
          style={[styles.switchButton, currentView === 'default' && styles.activeButton]}
          onPress={() => setCurrentView('default')}>
          <Text style={styles.switchButtonText}>Default View</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.switchButton, currentView === 'alternative' && styles.activeButton]}
          onPress={() => setCurrentView('alternative')}>
          <Text style={styles.switchButtonText}>Alternative View</Text>
        </TouchableOpacity>
      </View>
      {currentView === 'default' ? renderDefaultTable() : renderAlternativeTable()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#344968',
    paddingVertical: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  tableHeaderText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 20,
  },
  switchView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  switchButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: '#344968',
  },
  switchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FormDataScreen;

