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

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  DatePickerAndroid,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DisplayScreen from './DisplayScreen';
import {Picker} from '@react-native-picker/picker';

const FormScreen = ({navigation}) => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    mobileNumber: '',
    fathersName: '',
    fathersOccupation: '',
    mothersName: '',
    mothersOccupation: '',
    selectedClass: '',
    gender: '',
    address: '',
  });

  // Function to handle validation
  const handleValidation = () => {
    const errors = {};

    // Validation logic for each field
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

    if (!formData.gender) {
      errors.gender = 'Gender is required';
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

    // Return errors object
    return errors;
  };

  // Function to handle input change
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const showDatePicker = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date(), // Set default date if needed
        mode: 'spinner', // Choose between 'calendar' or 'spinner' mode
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected date
        const selectedDate = new Date(year, month, day);
        const formattedDate = `${selectedDate.getDate()}/${
          selectedDate.getMonth() + 1
        }/${selectedDate.getFullYear()}`;
        handleInputChange('dateOfBirth', formattedDate);
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Validate the form
    const errors = handleValidation();

    // If there are errors, prevent form submission
    if (Object.keys(errors).length > 0) {
      console.log('Validation errors:', errors);
      return; // Don't proceed with form submission
    }

    // Navigate to the DisplayScreen and pass form data
    navigation.navigate('DisplayScreen', {formData});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.formContainer}>
        {/* Form inputs */}
        {/* Name */}
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={formData.name}
          onChangeText={text => handleInputChange('name', text)}
        />
        <Text style={styles.label}>Class:</Text>
        <Picker
          selectedValue={formData.selectedClass}
          style={styles.input}
          onValueChange={itemValue =>
            handleInputChange('selectedClass', itemValue)
          }>
          <Picker.Item label="Select Class" value="" />
          <Picker.Item label="Class 1" value="Class 1" />
          <Picker.Item label="Class 2" value="Class 2" />
          <Picker.Item label="Class 3" value="Class 3" />
          <Picker.Item label="Class 4" value="Class 4" />
          <Picker.Item label="Class 5" value="Class 5" />
          <Picker.Item label="Class 6" value="Class 6" />
          <Picker.Item label="Class 7" value="Class 7" />
          <Picker.Item label="Class 8" value="Class 8" />
          <Picker.Item label="Class 9" value="Class 9" />
          <Picker.Item label="Class 10" value="Class 10" />
          <Picker.Item label="Class 11" value="Class 11" />
          <Picker.Item label="Class 12" value="Class 12" />
          {/* Add more items as needed */}
        </Picker>
        {/* Date of Birth */}
        <Text style={styles.label}>Date of Birth:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your date of birth"
          value={formData.dateOfBirth}
          onChangeText={text => handleInputChange('dateOfBirth', text)}
        />
        {/* Mobile Number */}
        <Text style={styles.label}>Mobile Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your mobile number"
          value={formData.mobileNumber}
          onChangeText={text => handleInputChange('mobileNumber', text)}
        />
        {/* Gender */}
        <View style={styles.gender}>
          <Text style={styles.label1}>Gender:</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              formData.gender === 'male' && styles.radioButtonSelected,
            ]}
            onPress={() => handleInputChange('gender', 'male')}>
            <Text style={styles.radioText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.radioButton,
              formData.gender === 'female' && styles.radioButtonSelected,
            ]}
            onPress={() => handleInputChange('gender', 'female')}>
            <Text style={styles.radioText}>Female</Text>
          </TouchableOpacity>
        </View>

        {/* Father's Name */}
        <Text style={styles.label}>Father's Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your father's name"
          value={formData.fathersName}
          onChangeText={text => handleInputChange('fathersName', text)}
        />
        {/* Father's Occupation */}
        <Text style={styles.label}>Father's Occupation:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your father's occupation"
          value={formData.fathersOccupation}
          onChangeText={text => handleInputChange('fathersOccupation', text)}
        />
        {/* Mother's Name */}
        <Text style={styles.label}>Mother's Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your mother's name"
          value={formData.mothersName}
          onChangeText={text => handleInputChange('mothersName', text)}
        />
        {/* Mother's Occupation */}
        <Text style={styles.label}>Mother's Occupation:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your mother's occupation"
          value={formData.mothersOccupation}
          onChangeText={text => handleInputChange('mothersOccupation', text)}
        />
        {/* Address */}
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter your address"
          multiline
          value={formData.address}
          onChangeText={text => handleInputChange('address', text)}
        />
        {/* Submit button */}
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0ED2F7',
    paddingBottom: 25,
  },
  formContainer: {
    width: '80%',
    gap: 5,
    // alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  label1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    // alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  radioButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 8,
    marginVertical: 10,
    marginRight: 10,
  },
  gender: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 5,
  },
  radioButtonSelected: {
    backgroundColor: '#0ED2F7',
  },
  radioText: {
    fontWeight: 'bold',
  },
});

export default FormScreen;
