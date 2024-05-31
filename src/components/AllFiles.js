// Drawer Navigation Section 

import ScrollList from "./otherDashboard/ScrollList";


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



import * as React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import Box1 from './otherDashboard/Box1';

const ScrollList1 = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  // console.log(navigation);

  const data = [
    {
      id: '1',
      title: 'Message',
      imageSource: require('../../assets/Box-Images/notification-bell.png'),
    },
    {
      id: '2',
      title: 'Attendance',
      imageSource: require('../../assets/Box-Images/attendance.png'),
    },
    {
      id: '3',
      title: 'Portfolio',
      imageSource: require('../../assets/Box-Images/portfolio.png'),
    },
    {
      id: '4',
      title: 'Homework',
      imageSource: require('../../assets/Box-Images/homework.png'),
    },
    {
      id: '5',
      title: 'Fees Payment',
      imageSource: require('../../assets/Box-Images/fees.png'),
    },
    {
      id: '6',
      title: 'Notes',
      imageSource: require('../../assets/Box-Images/notes.png'),
    },
    {
      id: '7',
      title: 'Diary / Events',
      imageSource: require('../../assets/Box-Images/diary.png'),
    },
    {
      id: '8',
      title: 'Time Table',
      imageSource: require('../../assets/Box-Images/timetable.png'),
    },
    {
      id: '9',
      title: 'Exam Marks',
      imageSource: require('../../assets/Box-Images/exammarks.png'),
    },
    {
      id: '10',
      title: 'Calendar Events',
      imageSource: require('../../assets/Box-Images/calendar.png'),
    },
    {
      id: '11',
      title: 'Meal Menu',
      imageSource: require('../../assets/Box-Images/mealmenu.png'),
    },
    {
      id: '12',
      title: 'Documents',
      imageSource: require('../../assets/Box-Images/documents.png'),
    },
    {
      id: '13',
      title: 'Chat',
      imageSource: require('../../assets/Box-Images/live-chat.png'),
    },
    {
      id: '14',
      title: 'Transport',
      imageSource: require('../../assets/Box-Images/transportation.png'),
    },
    {
      id: '15',
      title: 'Health Card',
      imageSource: require('../../assets/Box-Images/healthcard.png'),
    },
    {
      id: '16',
      title: 'My Learning',
      imageSource: require('../../assets/Box-Images/learning.png'),
    },
    {
      id: '17',
      title: 'Syllabus',
      imageSource: require('../../assets/Box-Images/syllabus.png'),
    },
    {
      id: '18',
      title: 'Photo and Videos',
      imageSource: require('../../assets/Box-Images/photo&video.png'),
    },
  ];

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Box1
            title={item.title}
            imageSource={item.imageSource}
            navigation={navigation}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <View style={styles.box}>
        <View>
          <Text style={styles.title}>Start Online Class</Text>
          <TouchableOpacity
            // Navigate to ScreenA
            style={styles.button}>
            <Text style={styles.text}>Continue</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/onlineclass.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCE6FF',
  },
  box: {
    width: '90%',
    height: 100,
    backgroundColor: 'white',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    color: '#00004F',
  },
  button: {
    width: 90,
    backgroundColor: '#516f9c',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
  image: {
    width: 120,
    height: 100,
  },
});

export default ScrollList1;



//Photo Adjust Codes for ProfileCardScreen.js


import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';

// Custom component for rendering each section
const InfoSection = ({label, value, selected}) => (
  <View style={[styles.infoContainer, selected && styles.selectedSection]}>
    <Text style={[styles.label, selected && styles.selectedLabel]}>
      {label}
    </Text>
    <Text style={[styles.value, selected && styles.selectedValue]}>
      {value}
    </Text>
  </View>
);

const ProfileCardScreen = ({route, navigation}) => {
  const {studentData} = route.params;

  // Function to calculate age based on date of birth
  const calculateAge = dob => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Function to get the picture URI based on selected gender
  const getPictureUri = gender => {
    if (gender === 'Male') {
      return 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1716015895~exp=1716016495~hmac=8a75d1ef9eb00a0173acacf4fd5e54206a62f694f877e41cdbd84f6b56c8d87f';
    } else if (gender === 'Female') {
      return 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1716016890~exp=1716020490~hmac=b82593c7c19116ca7f2e2d447d0484417132a846d0b861c43fd0b6e11708446c&w=996';
    } else {
      return 'https://example.com/default-picture.jpg';
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#344968" barStyle="light-content" />
      <Card style={styles.card}>
        <View style={styles.header}>
          <View style={styles.smallCard}>
            <Image
              source={{
                uri: getPictureUri(studentData.selectedGender),
              }}
              style={styles.image}
            />
            <View style={styles.mainTitle}>
              <Title style={styles.title}>{studentData.name}</Title>
              <Title style={styles.title1}>
                {studentData.selectedClass} - {studentData.selectedSection}
              </Title>
            </View>
          </View>
        </View>
        <Card.Content style={styles.cardContent}>
          <Paragraph style={styles.subTitle}>Basic Info</Paragraph>
          <InfoSection
            label="Class                       :"
            value={studentData.selectedClass}
            selected={false}
          />
          <InfoSection
            label="Section                    :"
            value={studentData.selectedSection}
            selected={false}
          />
          <InfoSection
            label="Mobile Number         :"
            value={studentData.mobileNumber}
            selected={false}
          />
          <InfoSection
            label="Date Of Birth            :"
            value={new Date(studentData.dateOfBirth).toLocaleDateString()}
            selected={false}
          />
          <InfoSection
            label="Age                          :"
            value={calculateAge(studentData.dateOfBirth)}
            selected={false}
          />
          <InfoSection
            label="Selected Gender       :"
            value={studentData.selectedGender}
            selected={false}
          />
          <InfoSection
            label="Father's Name          :"
            value={studentData.fathersName}
            selected={false}
          />
          <InfoSection
            label="Father's Occupation  :"
            value={studentData.fathersOccupation}
            selected={false}
          />
          <InfoSection
            label="Mother's Name         :"
            value={studentData.mothersName}
            selected={false}
          />
          <InfoSection
            label="Mother's Occupation :"
            value={studentData.mothersOccupation}
            selected={false}
          />
          <InfoSection
            label="Address                   :"
            value={studentData.address}
            selected={true}
          />
          {/* <Text style={styles.line}></Text>
          <Paragraph style={styles.subTitle1}>Personal Info</Paragraph>
          <InfoSection
            label="E-Mail                      :"
            value={studentData.email}
            selected={false}
          />
          <InfoSection
            label="Category                  :"
            value={studentData.category}
            selected={false}
          />
          <InfoSection
            label="Religion                    :"
            value={studentData.religion}
            selected={false}
          />
          <InfoSection
            label="Birth Place               :"
            value={studentData.birthPlace}
            selected={false}
          />
          <InfoSection
            label="Cast                         :"
            value={studentData.cast}
            selected={true}
          /> */}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  card: {
    width: '100%',
    borderRadius: 10,
    elevation: 4,
  },
  header: {
    width: '100%',
    position: 'relative',
  },
  smallCard: {
    backgroundColor: '#344968',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  cardContent: {
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 0.2,
    borderColor: '#fff',
    marginBottom: 10,
    top: 5,
    left: 20,
    backgroundColor: 'black',
  },
  mainTitle: {
    // gap: 10,
    top: 8,
    left: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },
  title1: {
    fontSize: 20,
    // fontWeight: 'bold',
    marginBottom: 1,
    color: '#ffffff',
    bottom: 18,
    left: 3,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
    color: '#344968',
    marginTop: 30,
    fontFamily: 'DancingScript-SemiBold',
  },
  subTitle1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
    color: '#344968',
    marginTop: 30,
  },
  infoContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 5,
    alignItems: 'center',
  },
  line: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  selectedSection: {},
  label: {
    flex: 1,
    fontWeight: 'bold',
    paddingRight: 5,
    color: 'black',
  },
  selectedLabel: {},
  value: {
    flex: 1,
    textAlign: 'left',
    paddingLeft: 5,
  },
  selectedValue: {},
});

export default ProfileCardScreen;




// Animation setup here !


// 1. Pulsating Animation
// javascript
// Copy code
const pulsate = {
  0: {
    opacity: 0.5,
    scale: 0.8,
  },
  0.5: {
    opacity: 1,
    scale: 1.2,
  },
  1: {
    opacity: 0.5,
    scale: 0.8,
  },
};
// 2. Swing Animation
// javascript
// Copy code
const swing = {
  0: {
    rotate: '0deg',
  },
  0.25: {
    rotate: '30deg',
  },
  0.5: {
    rotate: '-30deg',
  },
  0.75: {
    rotate: '30deg',
  },
  1: {
    rotate: '0deg',
  },
};
// 3. Bounce Animation
// javascript
// Copy code
const bounce = {
  0: {
    translateY: 0,
  },
  0.25: {
    translateY: -20,
  },
  0.5: {
    translateY: 0,
  },
  0.75: {
    translateY: -10,
  },
  1: {
    translateY: 0,
  },
};
// 4. Fade In and Out
// javascript
// Copy code
const fadeInOut = {
  0: {
    opacity: 0,
  },
  0.5: {
    opacity: 1,
  },
  1: {
    opacity: 0,
  },
};
// 5. Rotate and Zoom
// javascript
// Copy code
const rotateZoom = {
  0: {
    scale: 0.5,
    rotate: '0deg',
  },
  0.5: {
    scale: 1.5,
    rotate: '180deg',
  },
  1: {
    scale: 1,
    rotate: '360deg',
  },
};
// 6. Slide In from Left
// javascript
// Copy code
const slideInLeft = {
  0: {
    translateX: -200,
  },
  1: {
    translateX: 0,
  },
};
// 7. Slide In from Right
// javascript
// Copy code
const slideInRight = {
  0: {
    translateX: 200,
  },
  1: {
    translateX: 0,
  },
};
// 8. Shake Animation
// javascript
// Copy code
const shake = {
  0: {
    translateX: 0,
  },
  0.25: {
    translateX: -10,
  },
  0.5: {
    translateX: 10,
  },
  0.75: {
    translateX: -10,
  },
  1: {
    translateX: 0,
  },
};
// You can use any of these animations in your CalendarEvents component by replacing the customAnimation object with any of the above animation objects.
// 
// Example Usage
// Here’s how you can apply the pulsate animation:
// 
// javascript
// Copy code
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CalendarEvents = () => {
  const pulsate = {
    0: {
      opacity: 0.5,
      scale: 0.8,
    },
    0.5: {
      opacity: 1,
      scale: 1.2,
    },
    1: {
      opacity: 0.5,
      scale: 0.8,
    },
  };

  return (
    <Animatable.View
      style={styles.container}
      animation={pulsate}
      duration={2000}
      iterationCount="infinite"
      useNativeDriver
    >
      <View style={styles.calendarIconContainer}>
        <Icon name="calendar" size={40} color="#003366" />
        <Text style={styles.dateText}>28</Text>
      </View>
      <Text style={styles.labelText}>CALENDAR EVENTS</Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: '#003366',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    margin: 10,
  },
  calendarIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginLeft: 5,
  },
  labelText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#003366',
  },
});

export default CalendarEvents;




import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const SignInScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [instituteCode, setInstituteCode] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handlePasswordChange = text => {
    setPassword(text);
    // validatePassword(text);
  };

  // const validatePassword = password => {
  //   const passwordRegex =
  //     /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  //   setIsPasswordValid(passwordRegex.test(password));
  // };

  const handleLogin = async () => {
    if (!instituteCode || !username || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (!isPasswordValid) {
      Alert.alert('Error', 'Password does not meet the requirements');
      return;
    }

    try {
      const response = await axios.post(
        'http://schoolapi.netcampus.in/api/app/login',
        {
          instituteCode,
          username,
          password,
        },
      );

      if (response.data.success) {
        // Replace 'Dashboard' with your actual dashboard screen name
        navigation.navigate('Api');
      } else {
        Alert.alert('Error', response.data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#003366" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.background}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/SignIn/signin2.jpeg')}
              style={styles.logo}
            />
          </View>
          <View style={styles.logoContainer1}>
            <Image
              source={require('../../../assets/SignIn/signin1.jpeg')}
              style={styles.logo1}
            />
          </View>

          <Text style={styles.signInText}>SIGN IN</Text>
          <Text style={styles.subText}>Get started to avail more features</Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Icon name="school" size={20} color="#003366" />
              <TextInput
                style={styles.input}
                placeholder="Institute Code"
                placeholderTextColor="#003366"
                value={instituteCode}
                onChangeText={setInstituteCode}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Icon name="account" size={20} color="#003366" />
              <TextInput
                style={styles.input}
                placeholder="User Name"
                placeholderTextColor="#003366"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Icon name="lock" size={20} color="#003366" />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#003366"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={handlePasswordChange}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Text>
                  <Icon
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={20}
                    color="#003366"
                  />
                </Text>
              </TouchableOpacity>
            </View>
            {/* {!isPasswordValid && password.length > 0 && (
              <Text style={styles.passwordError}>
                Password must contain at least one capital letter, one number,
                one special character, and be at least 8 characters long.
              </Text>
            )} */}
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    // flexGrow: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  background: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    // marginBottom: 20,
  },
  logoContainer1: {
    alignItems: 'center',
    // marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 60,
    top: 40,
  },
  logo1: {
    width: 360,
    height: 260,
    top: 90,
  },
  signInText: {
    fontSize: 30,
    color: '#003366',
    fontWeight: 'bold',
    top: 100,
  },
  subText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#003366',
    top: 110,
  },
  inputContainer: {
    width: '80%',
    top: 130,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 12,
    gap: 5,
  },
  input: {
    flex: 1,
    height: 45,
    color: '#003366',
  },
  loginButton: {
    backgroundColor: '#003366',
    width: '80%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 140,
    marginBottom: 10,
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  passwordError: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

export default SignInScreen;





import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
  StatusBar,
  BackHandler,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import ClassPeriod from './ClassPeriod';
import DashboardItem from './DashboardItem';
import * as Animatable from 'react-native-animatable';

const dashboardItems = [
  {
    label: 'MESSAGE',
    icon: require('../../../assets/Box-Images/notification-bell.png'),
  },
  {
    label: 'ATTENDANCE',
    icon: require('../../../assets/Box-Images/attendance.png'),
  },
  {
    label: 'PORTFOLIO',
    icon: require('../../../assets/Box-Images/portfolio.png'),
  },
  { label: 'HOMEWORK', icon: require('../../../assets/Box-Images/homework.png') },
  { label: 'FEES PAYMENT', icon: require('../../../assets/Box-Images/fees.png') },
  { label: 'NOTES', icon: require('../../../assets/Box-Images/notes.png') },
  {
    label: 'DIARY / EVENTS',
    icon: require('../../../assets/Box-Images/diary.png'),
  },
  {
    label: 'TIME TABLE',
    icon: require('../../../assets/Box-Images/timetable.png'),
  },
  {
    label: 'EXAM MARKS',
    icon: require('../../../assets/Box-Images/exammarks.png'),
  },
  {
    label: 'CALENDAR EVENTS',
    icon: require('../../../assets/Box-Images/calendar.png'),
  },
  {
    label: 'MEAL MENU',
    icon: require('../../../assets/Box-Images/mealmenu.png'),
  },
  {
    label: 'DOCUMENTS',
    icon: require('../../../assets/Box-Images/documents.png'),
  },
  { label: 'CHAT', icon: require('../../../assets/Box-Images/live-chat.png') },
  {
    label: 'TRANSPORT',
    icon: require('../../../assets/Box-Images/transportation.png'),
  },
  {
    label: 'HEALTH CARD',
    icon: require('../../../assets/Box-Images/healthcard.png'),
  },
  {
    label: 'MY LEARNING',
    icon: require('../../../assets/Box-Images/learning.png'),
  },
  {
    label: 'PHOTO AND VIDEOS',
    icon: require('../../../assets/Box-Images/syllabus.png'),
  },
  {
    label: 'LEAVE MODULE',
    icon: require('../../../assets/Box-Images/photo&video.png'),
  },
];

const classData = [
  {id: '1', title1: '9:20Am to 10:00Am', title: 'English-th'},
  {id: '2', title1: '10:00Am to 10:40Am', title: 'Language-th'},
  {id: '4', title1: '11:30Am to 12:10Pm', title: 'Mathematics-th'},
  {id: '5', title1: '12:40Pm to 1:20Pm', title: 'Chemistry-th'},
  {id: '6', title1: '1:20Pm to 2:00Pm', title: 'Physics-th'},
  {id: '7', title1: '2:10Pm to 2:50Pm', title: 'Biology-th'},
  {id: '8', title1: '2:50Pm to 3:30Pm', title: 'Social Science-th'},
];

const MainScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const modalAnim = useRef(new Animated.Value(-500)).current; // start off screen to the left
  const navigation = useNavigation();

  const toggleModal = () => {
    if (isModalVisible) {
      closeModal();
    } else {
      openModal();
    }
  };

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(modalAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalAnim, {
      toValue: -500,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const handleLogout = () => {
    closeModal();
    navigation.goBack();
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (isModalVisible) {
          closeModal();
          return true; // prevent default back button behavior
        }
        return false;
      },
    );

    return () => backHandler.remove();
  }, [isModalVisible]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Prevent default back button behavior
      return true;
    });

    return () => backHandler.remove();
  }, []);


  const customAnimation = {
    0: {
      opacity: 0,
      scale: 0.5,
      rotate: '0deg',
    },
    0.5: {
      opacity: 1,
      scale: 1.2,
      rotate: '180deg',
    },
    1: {
      opacity: 1,
      scale: 1,
      rotate: '360deg',
    },
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };


  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#00004F'} />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleModal}>
            <Icon name="menu" size={22} color="#fff" style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.schoolName}>SMT SCHOOL</Text>
          <TouchableOpacity>
            <Icon
              name="notifications-outline"
              size={22}
              color="#fff"
              style={styles.bellIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={require('../../../assets/Gowtham.jpeg')}
            // resizeMode="contain"
          />
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.userName}>Gowtham T</Text>
            <View style={styles.classContainer}>
              <Text style={styles.classText}>X - A</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.classPeriodsContainer}>
        <View style={styles.totalbox}>
          <View style={styles.textbox1}>
            <Text style={styles.text1}>Today Class Period</Text>
            <Text style={styles.text2}>(12 Apr 2024)</Text>
          </View>
          <View style={styles.textbox2}>
            <Text style={styles.text1}>Time Table</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.periodsRow}>
            {classData.map(item => (
              <ClassPeriod
                key={item.id}
                periodName={item.title}
                time={item.title1}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.dashboardContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={dashboardItems}
            renderItem={({item}) => (
              <DashboardItem item={item} style={styles.dashboardbox} />
            )}
            keyExtractor={item => item.label}
            numColumns={3}
            columnWrapperStyle={styles.row}
            scrollEnabled={false} // Prevent FlatList from scrolling independently
          />
          <View style={styles.footerContainer}>
            <View>
              <Text style={styles.footerTitle}>Start Online Class</Text>
              <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>

            <Image
              source={require('../../../assets/onlineclass.png')}
              style={styles.footerImage}
            />
          </View>
        </ScrollView>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="none"
        transparent={true}
        onRequestClose={toggleModal}>
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={closeModal}>
          <Animated.View
            style={[
              styles.modalContainer,
              {transform: [{translateX: modalAnim}]},
            ]}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPress={toggleModal}
                style={styles.closeButton}>
                <Icon name="close" size={30} color="#000" />
              </TouchableOpacity>
              <View style={styles.profileSection}>
                <Image
                  style={styles.modalProfileImage}
                  source={require('../../../assets/Gowtham.jpeg')}
                />
                <Text style={styles.profileName}>PRAVEEN K</Text>
                <Text style={styles.viewProfile}>View Profile</Text>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.modalItemsContainer}>
                {dashboardItems.map((item, index) => (
                  <TouchableOpacity key={index} style={styles.modalItem}>
                    <Image source={item.icon} style={styles.modalItemIcon} />
                    <Text style={styles.modalItemText}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}>
                <Text style={styles.logoutText}>Log Out</Text>
                <Icon name="log-out-outline" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 181,
    backgroundColor: '#00004F',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    top: 10,
  },
  menuIcon: {
    marginLeft: 5,
  },
  schoolName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bellIcon: {
    marginRight: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    left: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 20,
    borderWidth: 3,
    borderColor: '#fff',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  classContainer: {
    backgroundColor: '#F1C40F',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
    width: 80,
  },
  classText: {
    color: '#000',
    fontSize: 16,
  },
  classPeriodsContainer: {
    height: 90,
  },
  totalbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbox1: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  textbox2: {
    marginRight: 10,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    color: 'gray',
  },
  scrollView: {
    height: 100,
  },
  periodsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  box: {
    width: 155,
    backgroundColor: '#00004F',
    margin: 3,
    // gap: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  title1: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    color: 'white',
    fontSize: 11,
    textTransform: 'uppercase',
  },
  dashboardContainer: {
    marginTop: 10,
    backgroundColor: '#CCE6FF',
    flex: 1,
    paddingHorizontal: 15,
    // padding: 5,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  dashboardbox: {
    padding: 10,
  },
  footerContainer: {
    width: '96%',
    height: 100,
    left: -24,
    backgroundColor: 'white',
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 5,
    bottom: 4,
  },
  footerTitle: {
    fontSize: 18,
    color: '#00004F',
  },
  footerButton: {
    width: 90,
    backgroundColor: '#516f9c',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  footerButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  footerImage: {
    width: 120,
    height: 100,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  onlineClassImage: {
    width: 70,
    top: 10,
    height: 70,
    right: 30,
    position: 'absolute',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    padding: 20,
    position: 'absolute',
  },
  modalContent: {
    flex: 1,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    top: -10,
  },
  viewProfile: {
    color: '#3498DB',
    top: 20,
    left: -95,
  },
  modalItemsContainer: {
    marginTop: 20,
    maxHeight: '80%',
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalItemIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  modalItemText: {
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
});

export default MainScreen;




import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
  StatusBar,
  BackHandler,
  Animated,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ClassPeriod from './ClassPeriod';
import DashboardItem from './DashboardItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

const dashboardItems = [
  // Your dashboard items data here
  {
    label: 'MESSAGE',
    icon: require('../../../assets/Box-Images/notification-bell.png'),
  },
  {
    label: 'ATTENDANCE',
    icon: require('../../../assets/Box-Images/attendance.png'),
  },
  {
    label: 'PORTFOLIO',
    icon: require('../../../assets/Box-Images/portfolio.png'),
  },
  {label: 'HOMEWORK', icon: require('../../../assets/Box-Images/homework.png')},
  {label: 'FEES PAYMENT', icon: require('../../../assets/Box-Images/fees.png')},
  {label: 'NOTES', icon: require('../../../assets/Box-Images/notes.png')},
  {
    label: 'DIARY / EVENTS',
    icon: require('../../../assets/Box-Images/diary.png'),
  },
  {
    label: 'TIME TABLE',
    icon: require('../../../assets/Box-Images/timetable.png'),
  },
  {
    label: 'EXAM MARKS',
    icon: require('../../../assets/Box-Images/exammarks.png'),
  },
  {
    label: 'CALENDAR EVENTS',
    icon: require('../../../assets/Box-Images/calendar.png'),
  },
  {
    label: 'MEAL MENU',
    icon: require('../../../assets/Box-Images/mealmenu.png'),
  },
  {
    label: 'DOCUMENTS',
    icon: require('../../../assets/Box-Images/documents.png'),
  },
  {label: 'CHAT', icon: require('../../../assets/Box-Images/live-chat.png')},
  {
    label: 'TRANSPORT',
    icon: require('../../../assets/Box-Images/transportation.png'),
  },
  {
    label: 'HEALTH CARD',
    icon: require('../../../assets/Box-Images/healthcard.png'),
  },
  {
    label: 'MY LEARNING',
    icon: require('../../../assets/Box-Images/learning.png'),
  },
  {
    label: 'PHOTO AND VIDEOS',
    icon: require('../../../assets/Box-Images/syllabus.png'),
  },
  {
    label: 'LEAVE MODULE',
    icon: require('../../../assets/Box-Images/photo&video.png'),
  },
];

const classData = [
  {id: '1', title1: '9:20Am to 10:00Am', title: 'English-th'},
  {id: '2', title1: '10:00Am to 10:40Am', title: 'Language-th'},
  {id: '4', title1: '11:30Am to 12:10Pm', title: 'Mathematics-th'},
  {id: '5', title1: '12:40Pm to 1:20Pm', title: 'Chemistry-th'},
  {id: '6', title1: '1:20Pm to 2:00Pm', title: 'Physics-th'},
  {id: '7', title1: '2:10Pm to 2:50Pm', title: 'Biology-th'},
  {id: '8', title1: '2:50Pm to 3:30Pm', title: 'Social Science-th'},
];



const customAnimation = {
  0: {
    opacity: 0,
    scale: 0.5,
    rotate: '0deg',
  },
  0.5: {
    opacity: 1,
    scale: 1.2,
    rotate: '180deg',
  },
  1: {
    opacity: 1,
    scale: 1,
    rotate: '360deg',
  },
};

const MainScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const modalAnim = useRef(new Animated.Value(-500)).current;
  const navigation = useNavigation();

  const toggleModal = () => {
    if (isModalVisible) {
      closeModal();
    } else {
      openModal();
    }
  };

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(modalAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalAnim, {
      toValue: -500,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const handleLogout = async () => {
    closeModal();
    try {
      await AsyncStorage.removeItem('userData');
      navigation.navigate('SignInScreen');
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  };


  
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        // Prevent default back button behavior
        return true;
      },
    );

    return () => backHandler.remove();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#00004F'} />
      <View style={styles.container}>
        {/* Your header and profile components here */}
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleModal}>
            <Icon name="menu" size={22} color="#fff" style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.schoolName}>SMT SCHOOL</Text>
          <TouchableOpacity>
            <Icon
              name="notifications-outline"
              size={22}
              color="#fff"
              style={styles.bellIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              source={require('../../../assets/Gowtham.jpeg')}
              // resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.userName}>Gowtham T</Text>
            <View style={styles.classContainer}>
              <Text style={styles.classText}>X - A</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.classPeriodsContainer}>
        {/* Your class periods components here */}
        <View style={styles.totalbox}>
          <View style={styles.textbox1}>
            <Text style={styles.text1}>Today Class Period</Text>
            <Text style={styles.text2}>(12 Apr 2024)</Text>
          </View>
          <View style={styles.textbox2}>
            <Text style={styles.text1}>Time Table</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.periodsRow}>
            {classData.map(item => (
              <ClassPeriod
                key={item.id}
                periodName={item.title}
                time={item.title1}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.dashboardContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <FlatList
            data={dashboardItems}
            renderItem={({item, index}) => (
              <Animatable.View
                animation={customAnimation}
                duration={2000}
                useNativeDriver>
                <DashboardItem item={item} style={styles.dashboardbox} />
              </Animatable.View>
            )}
            keyExtractor={item => item.label}
            numColumns={3}
            columnWrapperStyle={styles.row}
            scrollEnabled={false}
          />
          {/* Your footer component here */}
          <View style={styles.footerContainer}>
            <View>
              <Text style={styles.footerTitle}>Start Online Class</Text>
              <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>

            <Image
              source={require('../../../assets/onlineclass.png')}
              style={styles.footerImage}
            />
          </View>
        </ScrollView>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="none"
        transparent={true}
        onRequestClose={toggleModal}>
        {/* Your modal component here */}
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={closeModal}>
          <Animated.View
            style={[
              styles.modalContainer,
              {transform: [{translateX: modalAnim}]},
            ]}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPress={toggleModal}
                style={styles.closeButton}>
                <Icon name="close" size={30} color="#000" />
              </TouchableOpacity>
              <View style={styles.profileSection}>
                <Image
                  style={styles.modalProfileImage}
                  source={require('../../../assets/Gowtham.jpeg')}
                />
                <Text style={styles.profileName}>Gowtham tK</Text>
                <Text style={styles.viewProfile}>View Profile</Text>
              </View>
              
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.modalItemsContainer}>
                {dashboardItems.map((item, index) => (
                  <TouchableOpacity key={index} style={styles.modalItem}>
                    <Image source={item.icon} style={styles.modalItemIcon} />
                    <Text style={styles.modalItemText}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              {/* <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}>
                <Text style={styles.logoutText}>Log Out</Text>
                <Icon name="log-out-outline" size={20} color="#000" />
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <View style={styles.iconContainer}>
                  <Text style={styles.buttonText}>LOGOUT</Text>
                  <Icon name="log-out-outline" size={24} color="#fff" />
                </View>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles here
  container: {
    height: 181,
    backgroundColor: '#00004F',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    top: 10,
  },
  menuIcon: {
    marginLeft: 5,
  },
  schoolName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bellIcon: {
    marginRight: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    bottom: 10,
    marginLeft: 8,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 15,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  classContainer: {
    backgroundColor: '#F1C40F',
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
    width: 70,
  },
  classText: {
    color: '#000',
    fontSize: 16,
  },
  classPeriodsContainer: {
    height: 90,
  },
  totalbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbox1: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  textbox2: {
    marginRight: 10,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    color: 'gray',
  },
  scrollView: {
    height: 100,
  },
  periodsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  box: {
    width: 155,
    backgroundColor: '#00004F',
    margin: 3,
    // gap: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  title1: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    color: 'white',
    fontSize: 11,
    textTransform: 'uppercase',
  },
  dashboardContainer: {
    marginTop: 10,
    backgroundColor: '#CCE6FF',
    flex: 1,
    paddingHorizontal: 15,
    // padding: 5,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  dashboardbox: {
    padding: 10,
  },
  footerContainer: {
    width: '96%',
    height: 100,
    left: -24,
    backgroundColor: 'white',
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 5,
    bottom: 4,
  },
  footerTitle: {
    fontSize: 18,
    color: '#00004F',
  },
  footerButton: {
    width: 90,
    backgroundColor: '#516f9c',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  footerButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  footerImage: {
    width: 120,
    height: 100,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  onlineClassImage: {
    width: 70,
    top: 10,
    height: 70,
    right: 30,
    position: 'absolute',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    padding: 20,
    position: 'absolute',
  },
  modalContent: {
    flex: 1,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    top: -10,
  },
  viewProfile: {
    color: '#3498DB',
    top: 20,
    left: -95,
  },
  modalItemsContainer: {
    marginTop: 20,
    maxHeight: '80%',
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalItemIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  modalItemText: {
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#344968', // Button background color (you can change this)
    height: 30, // Button height
    width: '38%', // Button width
    borderRadius: 8, // Rounded corners
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    marginVertical: 10,
    // Android shadow
    elevation: 5,
    // marginLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row', // Arrange icon and text horizontally
    alignItems: 'center', // Center vertically within the row
    gap: 10,
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 13, // Text size
    fontWeight: 'bold', // Text weight
    marginLeft: 10, // Space between icon and text
  },
});

export default MainScreen;




// MainScreen.js

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
  StatusBar,
  BackHandler,
  Animated,
  RefreshControl,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ClassPeriod from './ClassPeriod';
import DashboardItem from './DashboardItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

const dashboardItems = [
  // Your dashboard items data here
  {
    label: 'MESSAGE',
    icon: require('../../../assets/Box-Images/notification-bell.png'),
  },
  {
    label: 'ATTENDANCE',
    icon: require('../../../assets/Box-Images/attendance.png'),
  },
  {
    label: 'PORTFOLIO',
    icon: require('../../../assets/Box-Images/portfolio.png'),
  },
  {label: 'HOMEWORK', icon: require('../../../assets/Box-Images/homework.png')},
  {label: 'FEES PAYMENT', icon: require('../../../assets/Box-Images/fees.png')},
  {label: 'NOTES', icon: require('../../../assets/Box-Images/notes.png')},
  {
    label: 'DIARY / EVENTS',
    icon: require('../../../assets/Box-Images/diary.png'),
  },
  {
    label: 'TIME TABLE',
    icon: require('../../../assets/Box-Images/timetable.png'),
  },
  {
    label: 'EXAM MARKS',
    icon: require('../../../assets/Box-Images/exammarks.png'),
  },
  {
    label: 'CALENDAR EVENTS',
    icon: require('../../../assets/Box-Images/calendar.png'),
  },
  {
    label: 'MEAL MENU',
    icon: require('../../../assets/Box-Images/mealmenu.png'),
  },
  {
    label: 'DOCUMENTS',
    icon: require('../../../assets/Box-Images/documents.png'),
  },
  {label: 'CHAT', icon: require('../../../assets/Box-Images/live-chat.png')},
  {
    label: 'TRANSPORT',
    icon: require('../../../assets/Box-Images/transportation.png'),
  },
  {
    label: 'HEALTH CARD',
    icon: require('../../../assets/Box-Images/healthcard.png'),
  },
  {
    label: 'MY LEARNING',
    icon: require('../../../assets/Box-Images/learning.png'),
  },
  {
    label: 'PHOTO AND VIDEOS',
    icon: require('../../../assets/Box-Images/syllabus.png'),
  },
  {
    label: 'LEAVE MODULE',
    icon: require('../../../assets/Box-Images/photo&video.png'),
  },
];

const classData = [
  {id: '1', title1: '9:20Am to 10:00Am', title: 'English-th'},
  {id: '2', title1: '10:00Am to 10:40Am', title: 'Language-th'},
  {id: '4', title1: '11:30Am to 12:10Pm', title: 'Mathematics-th'},
  {id: '5', title1: '12:40Pm to 1:20Pm', title: 'Chemistry-th'},
  {id: '6', title1: '1:20Pm to 2:00Pm', title: 'Physics-th'},
  {id: '7', title1: '2:10Pm to 2:50Pm', title: 'Biology-th'},
  {id: '8', title1: '2:50Pm to 3:30Pm', title: 'Social Science-th'},
];

const customAnimation = {
  0: {
    opacity: 0,
    scale: 0.5,
    rotate: '0deg',
  },
  0.5: {
    opacity: 1,
    scale: 1.2,
    rotate: '180deg',
  },
  1: {
    opacity: 1,
    scale: 1,
    rotate: '360deg',
  },
};

const MainScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const modalAnim = useRef(new Animated.Value(-500)).current;
  const navigation = useNavigation();

  const toggleModal = () => {
    if (isModalVisible) {
      closeModal();
    } else {
      openModal();
    }
  };

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(modalAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalAnim, {
      toValue: -500,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Logout', onPress: confirmLogout, style: 'destructive'},
      ],
      {cancelable: false},
    );
  };

  const confirmLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('SignInScreen');
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  };

  const handleDashboardItemPress = async item => {
    try {
      const response = await fetch('https://your-api-endpoint.com/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({label: item.label}),
      });
      const result = await response.json();
      console.log(result);
      // Handle the API response here
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        // Prevent default back button behavior
        return true;
      },
    );

    return () => backHandler.remove();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#00004F'} />
      <View style={styles.container}>
        {/* Your header and profile components here */}
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleModal}>
            <Icon name="menu" size={22} color="#fff" style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.schoolName}>SMT SCHOOL</Text>
          <TouchableOpacity>
            <Icon
              name="notifications-outline"
              size={22}
              color="#fff"
              style={styles.bellIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              source={require('../../../assets/Gowtham.jpeg')}
            />
          </View>
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.userName}>Gowtham T</Text>
            <View style={styles.classContainer}>
              <Text style={styles.classText}>X - A</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.classPeriodsContainer}>
        <Text style={styles.classPeriodsTitle}>Class Periods</Text>
        <FlatList
          data={classData}
          renderItem={({item}) => (
            <ClassPeriod title={item.title} title1={item.title1} />
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.classPeriodsList}
        />
      </View>
      <View style={styles.dashboardContainer}>
        <FlatList
          data={dashboardItems}
          renderItem={({item}) => (
            <DashboardItem item={item} onPress={handleDashboardItemPress} />
          )}
          keyExtractor={item => item.label}
          numColumns={3}
          columnWrapperStyle={styles.dashboardRow}
          contentContainerStyle={styles.dashboardList}
        />
      </View>
      <Modal visible={isModalVisible} transparent animationType="none">
        <Animated.View
          style={[
            styles.modalContainer,
            {transform: [{translateY: modalAnim}]},
          ]}>
          <Text style={styles.modalTitle}>Modal Title</Text>
          <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
            <Text style={styles.modalButtonText}>Close Modal</Text>
          </TouchableOpacity>
        </Animated.View>
      </Modal>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Animatable.View
          animation={customAnimation}
          style={styles.footer}></Animatable.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles here
  container: {
    backgroundColor: '#00004F',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  menuIcon: {
    marginLeft: 10,
  },
  schoolName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  bellIcon: {
    marginRight: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginLeft: 10,
  },
  imageContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  welcomeText: {
    fontSize: 16,
    color: '#fff',
  },
  userName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  classContainer: {
    backgroundColor: '#ffbb00',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
  },
  classText: {
    fontSize: 14,
    color: '#00004F',
    fontWeight: 'bold',
  },
  classPeriodsContainer: {
    padding: 10,
  },
  classPeriodsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00004F',
    marginBottom: 10,
  },
  classPeriodsList: {
    paddingHorizontal: 10,
  },
  dashboardContainer: {
    flex: 1,
    padding: 10,
  },
  dashboardRow: {
    justifyContent: 'space-between',
  },
  dashboardList: {
    paddingBottom: 30,
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 50,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#00004F',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footer: {
    height: 100,
  },
});

export default MainScreen;



// All Codes Here....!


import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [instituteCode, setInstituteCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const handleLogin = async () => {
    if (!instituteCode || !username || !password) {
      Alert.alert('Incomplete fields', 'Please fill in all fields.');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('token', instituteCode);
    formData.append('uname', username);
    formData.append('upwd', password);
    formData.append('newversion', '1');

    try {
      const response = await fetch(
        'http://schoolapi.netcampus.in/api/app/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        },
      );

      const responseText = await response.text();

      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('JSON Parse Error:', parseError);
        Alert.alert(
          'Error',
          'Server returned invalid response. Please try again later.',
        );
        return;
      }

      if (result.user && navigation) {
        try {
          await AsyncStorage.setItem('userToken', JSON.stringify(result));
          setInstituteCode('');
          setUsername('');
          setPassword('');

          console.log(result);

          navigation.navigate('MainScreen', {
            user: result.user,
            tenant: result.tenant,
            menuarry: result.menuarry,
          });
        } catch (error) {
          console.error('Error storing user data:', error);
        }
      } else {
        Alert.alert(
          'Login failed',
          result.error || 'Invalid credentials. Please check and try again.',
        );
      }
    } catch (error) {
      console.error('Login Error:', error);
      Alert.alert('Error', 'Failed to login. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const clearAsyncStorageAndRefresh = async () => {
      try {
        await AsyncStorage.clear();
        // Force component re-render by changing state
        setInstituteCode('');
        setUsername('');
        setPassword('');
      } catch (error) {
        console.error('Error clearing async storage:', error);
      }
    };

    const unsubscribe = navigation.addListener(
      'focus',
      clearAsyncStorageAndRefresh,
    );

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#003366" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.background}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/SignIn/signin2.jpeg')}
              style={styles.logo}
            />
          </View>
          <View style={styles.logoContainer1}>
            <Image
              source={require('../../../assets/SignIn/signin1.jpeg')}
              style={styles.logo1}
            />
          </View>

          <Text style={styles.signInText}>SIGN IN</Text>
          <Text style={styles.subText}>Get started to avail more features</Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Icon name="school" size={20} color="#003366" />
              <TextInput
                style={styles.input}
                placeholder="Institute Code"
                placeholderTextColor="#003366"
                value={instituteCode}
                onChangeText={setInstituteCode}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Icon name="account" size={20} color="#003366" />
              <TextInput
                style={styles.input}
                placeholder="User Name"
                placeholderTextColor="#003366"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Icon name="lock" size={20} color="#003366" />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#003366"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={handlePasswordChange}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Text>
                  <Icon
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={20}
                    color="#003366"
                  />
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            disabled={loading}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.loginButtonText}>LOGIN</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    // flexGrow: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  background: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    // marginBottom: 20,
  },
  logoContainer1: {
    alignItems: 'center',
    // marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 60,
    top: 40,
  },
  logo1: {
    width: 360,
    height: 260,
    top: 90,
  },
  signInText: {
    fontSize: 30,
    color: '#003366',
    fontWeight: 'bold',
    top: 100,
  },
  subText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#003366',
    top: 110,
  },
  inputContainer: {
    width: '80%',
    top: 130,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 12,
    gap: 5,
  },
  input: {
    flex: 1,
    height: 45,
    color: '#003366',
  },
  loginButton: {
    backgroundColor: '#003366',
    width: '80%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 140,
    marginBottom: 10,
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;




import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
  StatusBar,
  BackHandler,
  Animated,
  RefreshControl,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ClassPeriod from './ClassPeriod';
import DashboardItem from './DashboardItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

const dashboardItems = [
  // Your dashboard items data here
  {
    label: 'MESSAGE',
    icon: require('../../../assets/Box-Images/notification-bell.png'),
  },
  {
    label: 'ATTENDANCE',
    icon: require('../../../assets/Box-Images/attendance.png'),
  },
  {
    label: 'PORTFOLIO',
    icon: require('../../../assets/Box-Images/portfolio.png'),
  },
  {label: 'HOMEWORK', icon: require('../../../assets/Box-Images/homework.png')},
  {label: 'FEES PAYMENT', icon: require('../../../assets/Box-Images/fees.png')},
  {label: 'NOTES', icon: require('../../../assets/Box-Images/notes.png')},
  {
    label: 'DIARY / EVENTS',
    icon: require('../../../assets/Box-Images/diary.png'),
  },
  {
    label: 'TIME TABLE',
    icon: require('../../../assets/Box-Images/timetable.png'),
  },
  {
    label: 'EXAM MARKS',
    icon: require('../../../assets/Box-Images/exammarks.png'),
  },
  {
    label: 'CALENDAR EVENTS',
    icon: require('../../../assets/Box-Images/calendar.png'),
  },
  {
    label: 'MEAL MENU',
    icon: require('../../../assets/Box-Images/mealmenu.png'),
  },
  {
    label: 'DOCUMENTS',
    icon: require('../../../assets/Box-Images/documents.png'),
  },
  {label: 'CHAT', icon: require('../../../assets/Box-Images/live-chat.png')},
  {
    label: 'TRANSPORT',
    icon: require('../../../assets/Box-Images/transportation.png'),
  },
  {
    label: 'HEALTH CARD',
    icon: require('../../../assets/Box-Images/healthcard.png'),
  },
  {
    label: 'MY LEARNING',
    icon: require('../../../assets/Box-Images/learning.png'),
  },
  {
    label: 'PHOTO AND VIDEOS',
    icon: require('../../../assets/Box-Images/syllabus.png'),
  },
  {
    label: 'LEAVE MODULE',
    icon: require('../../../assets/Box-Images/photo&video.png'),
  },
];

const classData = [
  {id: '1', title1: '9:20Am to 10:00Am', title: 'English-th'},
  {id: '2', title1: '10:00Am to 10:40Am', title: 'Language-th'},
  {id: '4', title1: '11:30Am to 12:10Pm', title: 'Mathematics-th'},
  {id: '5', title1: '12:40Pm to 1:20Pm', title: 'Chemistry-th'},
  {id: '6', title1: '1:20Pm to 2:00Pm', title: 'Physics-th'},
  {id: '7', title1: '2:10Pm to 2:50Pm', title: 'Biology-th'},
  {id: '8', title1: '2:50Pm to 3:30Pm', title: 'Social Science-th'},
];

const customAnimation = {
  0: {
    opacity: 0,
    scale: 0.5,
    rotate: '0deg',
  },
  0.5: {
    opacity: 1,
    scale: 1.2,
    rotate: '180deg',
  },
  1: {
    opacity: 1,
    scale: 1,
    rotate: '360deg',
  },
};

const MainScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const modalAnim = useRef(new Animated.Value(-500)).current;
  const navigation = useNavigation();

  const toggleModal = () => {
    if (isModalVisible) {
      closeModal();
    } else {
      openModal();
    }
  };

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(modalAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalAnim, {
      toValue: -500,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Logout', onPress: confirmLogout, style: 'destructive'},
      ],
      {cancelable: false},
    );
  };

  const confirmLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('SignInScreen');
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        // Prevent default back button behavior
        return true;
      },
    );

    return () => backHandler.remove();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#00004F'} />
      <View style={styles.container}>
        {/* Your header and profile components here */}
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleModal}>
            <Icon name="menu" size={22} color="#fff" style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.schoolName}>SMT SCHOOL</Text>
          <TouchableOpacity>
            <Icon
              name="notifications-outline"
              size={22}
              color="#fff"
              style={styles.bellIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              source={require('../../../assets/Gowtham.jpeg')}
              // resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.userName}>Gowtham T</Text>
            <View style={styles.classContainer}>
              <Text style={styles.classText}>X - A</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.classPeriodsContainer}>
        {/* Your class periods components here */}
        <View style={styles.totalbox}>
          <View style={styles.textbox1}>
            <Text style={styles.text1}>Today Class Period</Text>
            <Text style={styles.text2}>(12 Apr 2024)</Text>
          </View>
          <View style={styles.textbox2}>
            <Text style={styles.text1}>Time Table</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.periodsRow}>
            {classData.map(item => (
              <ClassPeriod
                key={item.id}
                periodName={item.title}
                time={item.title1}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.dashboardContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <FlatList
            data={dashboardItems}
            renderItem={({item, index}) => (
              <Animatable.View
                animation={customAnimation}
                duration={2000}
                useNativeDriver>
                <DashboardItem item={item} style={styles.dashboardbox} />
              </Animatable.View>
            )}
            keyExtractor={item => item.label}
            numColumns={3}
            columnWrapperStyle={styles.row}
            scrollEnabled={false}
          />
          {/* Your footer component here */}
          <View style={styles.footerContainer}>
            <View>
              <Text style={styles.footerTitle}>Start Online Class</Text>
              <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>

            <Image
              source={require('../../../assets/onlineclass.png')}
              style={styles.footerImage}
            />
          </View>
        </ScrollView>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="none"
        transparent={true}
        onRequestClose={toggleModal}>
        {/* Your modal component here */}
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={closeModal}>
          <Animated.View
            style={[
              styles.modalContainer,
              {transform: [{translateX: modalAnim}]},
            ]}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPress={toggleModal}
                style={styles.closeButton}>
                <Icon name="close" size={30} color="#000" />
              </TouchableOpacity>
              <View style={styles.profileSection}>
                <Image
                  style={styles.modalProfileImage}
                  source={require('../../../assets/Gowtham.jpeg')}
                />
                <Text style={styles.profileName}>Gowtham tK</Text>
                <Text style={styles.viewProfile}>View Profile</Text>
              </View>

              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.modalItemsContainer}>
                {dashboardItems.map((item, index) => (
                  <TouchableOpacity key={index} style={styles.modalItem}>
                    <Image source={item.icon} style={styles.modalItemIcon} />
                    <Text style={styles.modalItemText}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              {/* <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}>
                <Text style={styles.logoutText}>Log Out</Text>
                <Icon name="log-out-outline" size={20} color="#000" />
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <View style={styles.iconContainer}>
                  <Text style={styles.buttonText}>LOGOUT</Text>
                  <Icon name="log-out-outline" size={24} color="#fff" />
                </View>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles here
  container: {
    height: 181,
    backgroundColor: '#00004F',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    top: 10,
  },
  menuIcon: {
    marginLeft: 5,
  },
  schoolName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bellIcon: {
    marginRight: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    bottom: 10,
    marginLeft: 8,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 15,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  classContainer: {
    backgroundColor: '#F1C40F',
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
    width: 70,
  },
  classText: {
    color: '#000',
    fontSize: 16,
  },
  classPeriodsContainer: {
    height: 90,
  },
  totalbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbox1: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  textbox2: {
    marginRight: 10,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    color: 'gray',
  },
  scrollView: {
    height: 100,
  },
  periodsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  box: {
    width: 155,
    backgroundColor: '#00004F',
    margin: 3,
    // gap: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  title1: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    color: 'white',
    fontSize: 11,
    textTransform: 'uppercase',
  },
  dashboardContainer: {
    marginTop: 10,
    backgroundColor: '#CCE6FF',
    flex: 1,
    paddingHorizontal: 15,
    // padding: 5,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  dashboardbox: {
    padding: 10,
  },
  footerContainer: {
    width: '96%',
    height: 100,
    left: -24,
    backgroundColor: 'white',
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 5,
    bottom: 4,
  },
  footerTitle: {
    fontSize: 18,
    color: '#00004F',
  },
  footerButton: {
    width: 90,
    backgroundColor: '#516f9c',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  footerButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  footerImage: {
    width: 120,
    height: 100,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  onlineClassImage: {
    width: 70,
    top: 10,
    height: 70,
    right: 30,
    position: 'absolute',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    padding: 20,
    position: 'absolute',
  },
  modalContent: {
    flex: 1,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    top: -10,
  },
  viewProfile: {
    color: '#3498DB',
    top: 20,
    left: -95,
  },
  modalItemsContainer: {
    marginTop: 20,
    maxHeight: '80%',
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalItemIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  modalItemText: {
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#344968', // Button background color (you can change this)
    height: 30, // Button height
    width: '38%', // Button width
    borderRadius: 8, // Rounded corners
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    marginVertical: 10,
    // Android shadow
    elevation: 5,
    // marginLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row', // Arrange icon and text horizontally
    alignItems: 'center', // Center vertically within the row
    gap: 10,
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 13, // Text size
    fontWeight: 'bold', // Text weight
    marginLeft: 10, // Space between icon and text
  },
});

export default MainScreen;



// DashboardItem.js

import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const DashboardItem = ({item, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onPress(item)}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 103,
    height: 89,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#00004F',
    top: 7,
    left: -5,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  label: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DashboardItem;




import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ClassPeriod = ({periodName, time}) => {
  return (
    <View style={styles.periodContainer}>
      <Text style={styles.title1}>{periodName}</Text>
      <Text style={styles.title}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  periodContainer: {
    backgroundColor: '#00004F',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    marginRight: 5,
    width: 147,
    height: 58,
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 5,
    top: -7,
    paddingHorizontal: 10,
  },
  title1: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    color: 'white',
    fontSize: 11,
    textTransform: 'uppercase',
  },
});

export default ClassPeriod;





// Dashboardpage Api method here 



import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const DashboardItem = () => {
  const [dashboardItems, setDashboardItems] = useState([]);

  useEffect(() => {
    const fetchDashboardItems = async () => {
      try {
        const userId = await AsyncStorage.getItem('userToken');
        const {User_id} = JSON.parse(userId);

        const response = await axios.post(
          'http://schoolapi.netcampus.in/api/app/getAppmenuDetails',
          {
            tid: 1, // Assuming this is the tenant ID
            User_id: User_id, // Use the User_id obtained from AsyncStorage
          },
        );

        const {data} = response;

        // Check if the response data is an array
        if (Array.isArray(data)) {
          setDashboardItems(data);
        } else {
          console.error('Invalid response data:', data);
          Alert.alert('Error', 'Invalid response data received from server.');
        }
      } catch (error) {
        console.error('API Error:', error.response); // Log the response details for debugging
        Alert.alert(
          'Error',
          'Failed to fetch dashboard items. Please try again later.',
        );
      }
    };

    fetchDashboardItems();

    // Cleanup function
    return () => {
      // Perform any cleanup if needed
      // For example, unsubscribe from listeners or clear timeouts/intervals
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <View style={styles.container}>
      {dashboardItems.map((item, index) => (
        <View style={styles.itemContainer} key={index}>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 103,
    height: 89,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#00004F',
  },
  label: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DashboardItem;




import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
  StatusBar,
  BackHandler,
  Animated,
  RefreshControl,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ClassPeriod from './ClassPeriod';
import DashboardItem from './DashboardItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';

const dashboardItems = [
  // Your dashboard items data here
  {
    label: 'MESSAGE',
    icon: require('../../../assets/Box-Images/notification-bell.png'),
  },
  {
    label: 'ATTENDANCE',
    icon: require('../../../assets/Box-Images/attendance.png'),
  },
  {
    label: 'PORTFOLIO',
    icon: require('../../../assets/Box-Images/portfolio.png'),
  },
  {label: 'HOMEWORK', icon: require('../../../assets/Box-Images/homework.png')},
  {label: 'FEES PAYMENT', icon: require('../../../assets/Box-Images/fees.png')},
  {label: 'NOTES', icon: require('../../../assets/Box-Images/notes.png')},
  {
    label: 'DIARY / EVENTS',
    icon: require('../../../assets/Box-Images/diary.png'),
  },
  {
    label: 'TIME TABLE',
    icon: require('../../../assets/Box-Images/timetable.png'),
  },
  {
    label: 'EXAM MARKS',
    icon: require('../../../assets/Box-Images/exammarks.png'),
  },
  {
    label: 'CALENDAR EVENTS',
    icon: require('../../../assets/Box-Images/calendar.png'),
  },
  {
    label: 'MEAL MENU',
    icon: require('../../../assets/Box-Images/mealmenu.png'),
  },
  {
    label: 'DOCUMENTS',
    icon: require('../../../assets/Box-Images/documents.png'),
  },
  {label: 'CHAT', icon: require('../../../assets/Box-Images/live-chat.png')},
  {
    label: 'TRANSPORT',
    icon: require('../../../assets/Box-Images/transportation.png'),
  },
  {
    label: 'HEALTH CARD',
    icon: require('../../../assets/Box-Images/healthcard.png'),
  },
  {
    label: 'MY LEARNING',
    icon: require('../../../assets/Box-Images/learning.png'),
  },
  {
    label: 'PHOTO AND VIDEOS',
    icon: require('../../../assets/Box-Images/syllabus.png'),
  },
  {
    label: 'LEAVE MODULE',
    icon: require('../../../assets/Box-Images/photo&video.png'),
  },
];

const classData = [
  {id: '1', title1: '9:20Am to 10:00Am', title: 'English-th'},
  {id: '2', title1: '10:00Am to 10:40Am', title: 'Language-th'},
  {id: '4', title1: '11:30Am to 12:10Pm', title: 'Mathematics-th'},
  {id: '5', title1: '12:40Pm to 1:20Pm', title: 'Chemistry-th'},
  {id: '6', title1: '1:20Pm to 2:00Pm', title: 'Physics-th'},
  {id: '7', title1: '2:10Pm to 2:50Pm', title: 'Biology-th'},
  {id: '8', title1: '2:50Pm to 3:30Pm', title: 'Social Science-th'},
];

const customAnimation = {
  0: {
    opacity: 0,
    scale: 0.5,
    rotate: '0deg',
  },
  0.5: {
    opacity: 1,
    scale: 1.2,
    rotate: '180deg',
  },
  1: {
    opacity: 1,
    scale: 1,
    rotate: '360deg',
  },
};

const MainScreen = () => {
  const [dashboardItems, setDashboardItems] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const modalAnim = useRef(new Animated.Value(-500)).current;

  const toggleModal = () => {
    if (isModalVisible) {
      closeModal();
    } else {
      openModal();
    }
  };

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(modalAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalAnim, {
      toValue: -500,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Logout', onPress: confirmLogout, style: 'destructive'},
      ],
      {cancelable: false},
    );
  };

  const confirmLogout = async () => {
    try {
      await AsyncStorage.clear();
      // Navigate to the SignInScreen or any other screen as needed
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  };

  useEffect(() => {
    const fetchDashboardItems = async () => {
      try {
        const userId = await AsyncStorage.getItem('userToken');
        const {User_id} = JSON.parse(userId);

        const response = await axios.post(
          'http://Schoolapi.netcampus.in/api/app/getAppmenuDetails',
          {
            tid: 1,
            User_id: User_id,
          },
          {
            params: {
              tid: 1,
              User_id: 995,
            },
          },
        );

        const {data} = response;

        if (data && data.menuarry && Array.isArray(data.menuarry)) {
          setDashboardItems(data.menuarry);
        } else {
          console.error('Invalid response data:', data);
          Alert.alert('Error', 'Invalid response data received from server.');
        }
      } catch (error) {
        console.error('API Error:', error.message);
        Alert.alert(
          'Error',
          'Failed to fetch dashboard items. Please try again later.',
        );
      }
    };

    fetchDashboardItems();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const userId = await AsyncStorage.getItem('userToken');
      const {User_id} = JSON.parse(userId);

      const response = await axios.post(
        'http://Schoolapi.netcampus.in/api/app/getAppmenuDetails',
        {
          tid: 1,
          User_id: User_id,
        },
        {
          params: {
            tid: 1,
            User_id: 995,
          },
        },
      );

      const {data} = response;

      if (data && data.menuarry && Array.isArray(data.menuarry)) {
        setDashboardItems(data.menuarry);
      } else {
        console.error('Invalid response data:', data);
        Alert.alert('Error', 'Invalid response data received from server.');
      }
    } catch (error) {
      console.error('API Error:', error.message);
      Alert.alert(
        'Error',
        'Failed to fetch dashboard items. Please try again later.',
      );
    } finally {
      setRefreshing(false);
    }
  };


  return (
    <View style={styles.container}>
      {/* Your header and profile components here */}
      {/* Replace with your header component */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleModal}>
          <Icon name="menu" size={22} color="#fff" style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.schoolName}>SMT SCHOOL</Text>
        <TouchableOpacity>
          <Icon
            name="notifications-outline"
            size={22}
            color="#fff"
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      </View>
      {/* Replace with your profile component */}
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.profileImage}
            source={require('../../../assets/Gowtham.jpeg')}
            // resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.userName}>Gowtham T</Text>
          <View style={styles.classContainer}>
            <Text style={styles.classText}>X - A</Text>
          </View>
        </View>
      </View>

      {/* Your dashboard items */}
      <ScrollView
        style={styles.dashboardContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {dashboardItems.map((item, index) => (
          <Animatable.View
            key={index}
            animation="fadeInUp"
            duration={1000}
            delay={100 * index}
            useNativeDriver>
            <TouchableOpacity style={styles.dashboardItem}>
              {/* You can customize the dashboard item UI */}
              <Text style={styles.dashboardItemText}>
                {item.navigationname}
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        ))}
      </ScrollView>

      {/* Your footer component here */}
      {/* Replace with your footer component */}
      <View style={styles.footerContainer}>
        <Text style={styles.footerTitle}>Start Online Class</Text>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Continue</Text>
        </TouchableOpacity>
        <Image
          source={require('../../../assets/onlineclass.png')}
          style={styles.footerImage}
        />
      </View>

      {/* Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Icon name="close" size={30} color="#000" />
          </TouchableOpacity>
          <View style={styles.profileSection}>
            <Image
              style={styles.modalProfileImage}
              source={require('../../../assets/Gowtham.jpeg')}
            />
            <Text style={styles.profileName}>Gowtham T</Text>
            <Text style={styles.viewProfile}>View Profile</Text>
          </View>
          {/* Add your dashboard items in the modal */}
          <ScrollView style={styles.modalItemsContainer}>
            {dashboardItems.map((item, index) => (
              <TouchableOpacity key={index} style={styles.modalItem}>
                <Text>{item.navigationname}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>LOGOUT</Text>
            <Icon name="log-out-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  // Your styles here
  container: {
    height: 181,
    backgroundColor: '#00004F',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    top: 10,
  },
  menuIcon: {
    marginLeft: 5,
  },
  schoolName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bellIcon: {
    marginRight: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    bottom: 10,
    marginLeft: 8,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 15,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  classContainer: {
    backgroundColor: '#F1C40F',
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
    width: 70,
  },
  classText: {
    color: '#000',
    fontSize: 16,
  },
  classPeriodsContainer: {
    height: 90,
  },
  totalbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbox1: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  textbox2: {
    marginRight: 10,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    color: 'gray',
  },
  scrollView: {
    height: 100,
  },
  periodsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  box: {
    width: 155,
    backgroundColor: '#00004F',
    margin: 3,
    // gap: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  title1: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    color: 'white',
    fontSize: 11,
    textTransform: 'uppercase',
  },
  dashboardContainer: {
    marginTop: 10,
    backgroundColor: '#CCE6FF',
    flex: 1,
    paddingHorizontal: 15,
    // padding: 5,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  dashboardbox: {
    padding: 10,
  },
  footerContainer: {
    width: '96%',
    height: 100,
    left: -24,
    backgroundColor: 'white',
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 5,
    bottom: 4,
  },
  footerTitle: {
    fontSize: 18,
    color: '#00004F',
  },
  footerButton: {
    width: 90,
    backgroundColor: '#516f9c',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  footerButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  footerImage: {
    width: 120,
    height: 100,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  onlineClassImage: {
    width: 70,
    top: 10,
    height: 70,
    right: 30,
    position: 'absolute',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    padding: 20,
    position: 'absolute',
  },
  modalContent: {
    flex: 1,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    top: -10,
  },
  viewProfile: {
    color: '#3498DB',
    top: 20,
    left: -95,
  },
  modalItemsContainer: {
    marginTop: 20,
    maxHeight: '80%',
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalItemIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  modalItemText: {
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#344968', // Button background color (you can change this)
    height: 30, // Button height
    width: '38%', // Button width
    borderRadius: 8, // Rounded corners
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    marginVertical: 10,
    // Android shadow
    elevation: 5,
    // marginLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row', // Arrange icon and text horizontally
    alignItems: 'center', // Center vertically within the row
    gap: 10,
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 13, // Text size
    fontWeight: 'bold', // Text weight
    marginLeft: 10, // Space between icon and text
  },
});

export default MainScreen;




import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
  StatusBar,
  BackHandler,
  Animated,
  RefreshControl,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ClassPeriod from './ClassPeriod';
import DashboardItem from './DashboardItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';

const staticDashboardItems = [
  {
    label: 'MESSAGE',
    icon: require('../../../assets/Box-Images/notification-bell.png'),
  },
  {
    label: 'ATTENDANCE',
    icon: require('../../../assets/Box-Images/attendance.png'),
  },
  {
    label: 'PORTFOLIO',
    icon: require('../../../assets/Box-Images/portfolio.png'),
  },
  {label: 'HOMEWORK', icon: require('../../../assets/Box-Images/homework.png')},
  {label: 'FEES PAYMENT', icon: require('../../../assets/Box-Images/fees.png')},
  {label: 'NOTES', icon: require('../../../assets/Box-Images/notes.png')},
  {
    label: 'DIARY / EVENTS',
    icon: require('../../../assets/Box-Images/diary.png'),
  },
  {
    label: 'TIME TABLE',
    icon: require('../../../assets/Box-Images/timetable.png'),
  },
  {
    label: 'EXAM MARKS',
    icon: require('../../../assets/Box-Images/exammarks.png'),
  },
  {
    label: 'CALENDAR EVENTS',
    icon: require('../../../assets/Box-Images/calendar.png'),
  },
  {
    label: 'MEAL MENU',
    icon: require('../../../assets/Box-Images/mealmenu.png'),
  },
  {
    label: 'DOCUMENTS',
    icon: require('../../../assets/Box-Images/documents.png'),
  },
  {label: 'CHAT', icon: require('../../../assets/Box-Images/live-chat.png')},
  {
    label: 'TRANSPORT',
    icon: require('../../../assets/Box-Images/transportation.png'),
  },
  {
    label: 'HEALTH CARD',
    icon: require('../../../assets/Box-Images/healthcard.png'),
  },
  {
    label: 'MY LEARNING',
    icon: require('../../../assets/Box-Images/learning.png'),
  },
  {
    label: 'PHOTO AND VIDEOS',
    icon: require('../../../assets/Box-Images/syllabus.png'),
  },
  {
    label: 'LEAVE MODULE',
    icon: require('../../../assets/Box-Images/photo&video.png'),
  },
];

const classData = [
  {id: '1', title1: '9:20Am to 10:00Am', title: 'English-th'},
  {id: '2', title1: '10:00Am to 10:40Am', title: 'Language-th'},
  {id: '4', title1: '11:30Am to 12:10Pm', title: 'Mathematics-th'},
  {id: '5', title1: '12:40Pm to 1:20Pm', title: 'Chemistry-th'},
  {id: '6', title1: '1:20Pm to 2:00Pm', title: 'Physics-th'},
  {id: '7', title1: '2:10Pm to 2:50Pm', title: 'Biology-th'},
  {id: '8', title1: '2:50Pm to 3:30Pm', title: 'Social Science-th'},
];

const MainScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [dashboardItems, setDashboardItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const modalAnim = useRef(new Animated.Value(-500)).current;
  const navigation = useNavigation();

  const toggleModal = () => {
    if (isModalVisible) {
      closeModal();
    } else {
      openModal();
    }
  };

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(modalAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalAnim, {
      toValue: -500,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Logout', onPress: confirmLogout, style: 'destructive'},
      ],
      {cancelable: false},
    );
  };

  const confirmLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('SignInScreen');
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );

    return () => backHandler.remove();
  }, []);

  const fetchDashboardItems = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (!userToken) {
        console.error('User token not found.');
        return;
      }
      const userData = JSON.parse(userToken);
      const {User_id} = userData;

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tid: 1,
          User_id: User_id,
        }),
      };

      const response = await fetch(
        'http://Schoolapi.netcampus.in/api/app/getAppmenuDetails',
        requestOptions,
      );

      const data = await response.json();

      if (data && data.menuarry && Array.isArray(data.menuarry)) {
        const processedItems = data.menuarry.map(item => {
          if (item.modulename === item.label) {
            return {
              ...item,
              displayName: item.label,
              icon: getIconForModule(item.modulename),
            };
          }
          return item;
        });

        const mergedDashboardItems = [
          ...processedItems,
          ...staticDashboardItems,
        ];
        setDashboardItems(mergedDashboardItems);
      } else {
        console.error('Invalid response data:', data);
        Alert.alert('Error', 'Invalid response data received from server.');
      }
    } catch (error) {
      console.error('API Error:', error.message);
      Alert.alert(
        'Error',
        'Failed to fetch dashboard items. Please try again later.',
      );
    }
  };

  const getIconForModule = moduleName => {
    switch (moduleName) {
      case 'MESSAGE':
        return require('../../../assets/Box-Images/notification-bell.png');
      case 'ATTENDANCE':
        return require('../../../assets/Box-Images/attendance.png');
      case 'PORTFOLIO':
        return require('../../../assets/Box-Images/portfolio.png');
      case 'HOMEWORK':
        return require('../../../assets/Box-Images/homework.png');
      case 'FEES PAYMENT':
        return require('../../../assets/Box-Images/fees.png');
      case 'NOTES':
        return require('../../../assets/Box-Images/notes.png');
      case 'DIARY / EVENTS':
        return require('../../../assets/Box-Images/diary.png');
      case 'TIME TABLE':
        return require('../../../assets/Box-Images/timetable.png');
      case 'EXAM MARKS':
        return require('../../../assets/Box-Images/exammarks.png');
      case 'CALENDAR EVENTS':
        return require('../../../assets/Box-Images/calendar.png');
      case 'MEAL MENU':
        return require('../../../assets/Box-Images/mealmenu.png');
      case 'DOCUMENTS':
        return require('../../../assets/Box-Images/documents.png');
      case 'CHAT':
        return require('../../../assets/Box-Images/live-chat.png');
      case 'TRANSPORT':
        return require('../../../assets/Box-Images/transportation.png');
      case 'HEALTH CARD':
        return require('../../../assets/Box-Images/healthcard.png');
      case 'MY LEARNING':
        return require('../../../assets/Box-Images/learning.png');
      case 'PHOTO AND VIDEOS':
        return require('../../../assets/Box-Images/syllabus.png');
      case 'LEAVE MODULE':
        return require('../../../assets/Box-Images/photo&video.png');
      default:
        return require('../../../assets/Box-Images/photo&video.png');
    }
  };

  useEffect(() => {
    fetchDashboardItems();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchDashboardItems();
    setRefreshing(false);
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={item.icon} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.displayName}</Text>
    </View>
  );

  const renderItem2 = ({item}) => (
    <View style={styles.classContainer}>
      <View style={styles.classSubContainer}>
        <Text style={styles.title1}>{item.title1}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.horizontalLine} />
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2477B2" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Good Morning, John!</Text>
        <TouchableOpacity onPress={toggleModal}>
          <Icon name="menu" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <FlatList
          data={dashboardItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}
        />
        <View style={styles.classListContainer}>
          <FlatList
            data={classData}
            renderItem={renderItem2}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.overlay} onPress={closeModal} />
          <Animatable.View
            animation="slideInUp"
            style={[
              styles.modalContent,
              {transform: [{translateY: modalAnim}]},
            ]}>
            <TouchableOpacity onPress={handleLogout} style={styles.modalItem}>
              <Icon name="log-out-outline" size={24} color="#333" />
              <Text style={styles.modalItemText}>Logout</Text>
            </TouchableOpacity>
            {/* Add more modal items as needed */}
          </Animatable.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#2477B2',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollViewContainer: {
    paddingVertical: 16,
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  itemImage: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  itemText: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
  },
  classListContainer: {
    padding: 16,
  },
  classContainer: {
    marginBottom: 12,
  },
  classSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title1: {
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 16,
    color: '#333',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  modalItemText: {
    marginLeft: 16,
    fontSize: 16,
    color: '#333',
  },
});

export default MainScreen;


import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
  StatusBar,
  BackHandler,
  Animated,
  RefreshControl,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ClassPeriod from './ClassPeriod';
import DashboardItem from './DashboardItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';

const staticDashboardItems = [
  // Your dashboard items data here
  {
    label: 'MESSAGE',
    icon: require('../../../assets/Box-Images/notification-bell.png'),
  },
  {
    label: 'ATTENDANCE',
    icon: require('../../../assets/Box-Images/attendance.png'),
  },
  {
    label: 'PORTFOLIO',
    icon: require('../../../assets/Box-Images/portfolio.png'),
  },
  {label: 'HOMEWORK', icon: require('../../../assets/Box-Images/homework.png')},
  {label: 'FEES PAYMENT', icon: require('../../../assets/Box-Images/fees.png')},
  {label: 'NOTES', icon: require('../../../assets/Box-Images/notes.png')},
  {
    label: 'DIARY / EVENTS',
    icon: require('../../../assets/Box-Images/diary.png'),
  },
  {
    label: 'TIME TABLE',
    icon: require('../../../assets/Box-Images/timetable.png'),
  },
  {
    label: 'EXAM MARKS',
    icon: require('../../../assets/Box-Images/exammarks.png'),
  },
  {
    label: 'CALENDAR EVENTS',
    icon: require('../../../assets/Box-Images/calendar.png'),
  },
  {
    label: 'MEAL MENU',
    icon: require('../../../assets/Box-Images/mealmenu.png'),
  },
  {
    label: 'DOCUMENTS',
    icon: require('../../../assets/Box-Images/documents.png'),
  },
  {label: 'CHAT', icon: require('../../../assets/Box-Images/live-chat.png')},
  {
    label: 'TRANSPORT',
    icon: require('../../../assets/Box-Images/transportation.png'),
  },
  {
    label: 'HEALTH CARD',
    icon: require('../../../assets/Box-Images/healthcard.png'),
  },
  {
    label: 'MY LEARNING',
    icon: require('../../../assets/Box-Images/learning.png'),
  },
  {
    label: 'PHOTO AND VIDEOS',
    icon: require('../../../assets/Box-Images/syllabus.png'),
  },
  {
    label: 'LEAVE MODULE',
    icon: require('../../../assets/Box-Images/photo&video.png'),
  },
];

const classData = [
  {id: '1', title1: '9:20Am to 10:00Am', title: 'English-th'},
  {id: '2', title1: '10:00Am to 10:40Am', title: 'Language-th'},
  {id: '4', title1: '11:30Am to 12:10Pm', title: 'Mathematics-th'},
  {id: '5', title1: '12:40Pm to 1:20Pm', title: 'Chemistry-th'},
  {id: '6', title1: '1:20Pm to 2:00Pm', title: 'Physics-th'},
  {id: '7', title1: '2:10Pm to 2:50Pm', title: 'Biology-th'},
  {id: '8', title1: '2:50Pm to 3:30Pm', title: 'Social Science-th'},
];

const customAnimation = {
  0: {
    opacity: 0,
    scale: 0.5,
    rotate: '0deg',
  },
  0.5: {
    opacity: 1,
    scale: 1.2,
    rotate: '180deg',
  },
  1: {
    opacity: 1,
    scale: 1,
    rotate: '360deg',
  },
};

const MainScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [dashboardItems, setDashboardItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const modalAnim = useRef(new Animated.Value(-500)).current;
  const navigation = useNavigation();

  const toggleModal = () => {
    if (isModalVisible) {
      closeModal();
    } else {
      openModal();
    }
  };

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(modalAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalAnim, {
      toValue: -500,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Logout', onPress: confirmLogout, style: 'destructive'},
      ],
      {cancelable: false},
    );
  };

  const confirmLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('SignInScreen');
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        // Prevent default back button behavior
        return true;
      },
    );

    return () => backHandler.remove();
  }, []);

  const fetchDashboardItems = async () => {
    try {
      // Get user ID from AsyncStorage
      const userId = await AsyncStorage.getItem('userToken');
      if (!userId) {
        console.error('User token not found.');
        return;
      }
      const {User_id} = JSON.parse(userId);

      // Prepare request data
      const requestData = {
        tid: 1,
        User_id: User_id,
      };

      // Send POST request to API
      const response = await axios.post(
        'http://Schoolapi.netcampus.in/api/app/getAppmenuDetails',
        requestData,
      );
      const data = response.data;

      if (data && data.menuarry && Array.isArray(data.menuarry)) {
        setDashboardItems(data.menuarry);
      } else {
        console.error('Invalid response data:', data);
        Alert.alert('Error', 'Invalid response data received from server.');
      }
    } catch (error) {
      console.error('API Error:', error.message);
      Alert.alert(
        'Error',
        'Failed to fetch dashboard items. Please try again later.',
      );
    }
  };


  useEffect(() => {
    fetchDashboardItems();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchDashboardItems();
    setRefreshing(false);
  };

  const renderItem = ({ item }) => (
    <Animatable.View animation="fadeInUp" duration={1500} delay={1000}>
      <View style={styles.item}>
        <Image source={item.icon} style={styles.icon} />
        <Text style={styles.label}>{item.label}</Text>
      </View>
    </Animatable.View>
  );


  // const onRefresh = () => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 500);
  // };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#00004F'} />
      <View style={styles.container}>
        {/* Your header and profile components here */}
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleModal}>
            <Icon name="menu" size={22} color="#fff" style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.schoolName}>SMT SCHOOL</Text>
          <TouchableOpacity>
            <Icon
              name="notifications-outline"
              size={22}
              color="#fff"
              style={styles.bellIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              source={require('../../../assets/Gowtham.jpeg')}
              // resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.userName}>Gowtham T</Text>
            <View style={styles.classContainer}>
              <Text style={styles.classText}>X - A</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.classPeriodsContainer}>
        {/* Your class periods components here */}
        <View style={styles.totalbox}>
          <View style={styles.textbox1}>
            <Text style={styles.text1}>Today Class Period</Text>
            <Text style={styles.text2}>(12 Apr 2024)</Text>
          </View>
          <View style={styles.textbox2}>
            <Text style={styles.text1}>Time Table</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.periodsRow}>
            {classData.map(item => (
              <ClassPeriod
                key={item.id}
                periodName={item.title}
                time={item.title1}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.dashboardContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <FlatList
            data={[...dashboardItems, ...staticDashboardItems]}
            renderItem={renderItem}
            keyExtractor={item => item.label}
            numColumns={3}
            contentContainerStyle={styles.list}
          />
          {/* Your footer component here */}
          <View style={styles.footerContainer}>
            <View>
              <Text style={styles.footerTitle}>Start Online Class</Text>
              <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>

            <Image
              source={require('../../../assets/onlineclass.png')}
              style={styles.footerImage}
            />
          </View>
        </ScrollView>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="none"
        transparent={true}
        onRequestClose={toggleModal}>
        {/* Your modal component here */}
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={closeModal}>
          <Animated.View
            style={[
              styles.modalContainer,
              {transform: [{translateX: modalAnim}]},
            ]}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPress={toggleModal}
                style={styles.closeButton}>
                <Icon name="close" size={30} color="#000" />
              </TouchableOpacity>
              <View style={styles.profileSection}>
                <Image
                  style={styles.modalProfileImage}
                  source={require('../../../assets/Gowtham.jpeg')}
                />
                <Text style={styles.profileName}>Gowtham tK</Text>
                <Text style={styles.viewProfile}>View Profile</Text>
              </View>

              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.modalItemsContainer}>
                {dashboardItems.map((item, index) => (
                  <TouchableOpacity key={index} style={styles.modalItem}>
                    <Image source={item.icon} style={styles.modalItemIcon} />
                    <Text style={styles.modalItemText}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              {/* <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}>
                <Text style={styles.logoutText}>Log Out</Text>
                <Icon name="log-out-outline" size={20} color="#000" />
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <View style={styles.iconContainer}>
                  <Text style={styles.buttonText}>LOGOUT</Text>
                  <Icon name="log-out-outline" size={24} color="#fff" />
                </View>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles here
  container: {
    height: 181,
    backgroundColor: '#00004F',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    top: 10,
  },
  menuIcon: {
    marginLeft: 5,
  },
  schoolName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bellIcon: {
    marginRight: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    bottom: 10,
    marginLeft: 8,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 15,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  classContainer: {
    backgroundColor: '#F1C40F',
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
    width: 70,
  },
  classText: {
    color: '#000',
    fontSize: 16,
  },
  classPeriodsContainer: {
    height: 90,
  },
  totalbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbox1: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  textbox2: {
    marginRight: 10,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    color: 'gray',
  },
  scrollView: {
    height: 100,
  },
  periodsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  box: {
    width: 155,
    backgroundColor: '#00004F',
    margin: 3,
    // gap: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  title1: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    color: 'white',
    fontSize: 11,
    textTransform: 'uppercase',
  },
  dashboardContainer: {
    marginTop: 10,
    backgroundColor: '#CCE6FF',
    flex: 1,
    paddingHorizontal: 15,
    // padding: 5,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  dashboardbox: {
    padding: 10,
  },
  footerContainer: {
    width: '96%',
    height: 100,
    left: -24,
    backgroundColor: 'white',
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 5,
    bottom: 4,
  },
  footerTitle: {
    fontSize: 18,
    color: '#00004F',
  },
  footerButton: {
    width: 90,
    backgroundColor: '#516f9c',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  footerButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  footerImage: {
    width: 120,
    height: 100,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  onlineClassImage: {
    width: 70,
    top: 10,
    height: 70,
    right: 30,
    position: 'absolute',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    padding: 20,
    position: 'absolute',
  },
  modalContent: {
    flex: 1,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    top: -10,
  },
  viewProfile: {
    color: '#3498DB',
    top: 20,
    left: -95,
  },
  modalItemsContainer: {
    marginTop: 20,
    maxHeight: '80%',
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalItemIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  modalItemText: {
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#344968', // Button background color (you can change this)
    height: 30, // Button height
    width: '38%', // Button width
    borderRadius: 8, // Rounded corners
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    marginVertical: 10,
    // Android shadow
    elevation: 5,
    // marginLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row', // Arrange icon and text horizontally
    alignItems: 'center', // Center vertically within the row
    gap: 10,
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 13, // Text size
    fontWeight: 'bold', // Text weight
    marginLeft: 10, // Space between icon and text
  },
});

export default MainScreen;





const DashboardScreen = () => {
  const [dashboardItems, setDashboardItems] = useState([]);

  useEffect(() => {
    const fetchDashboardItems = async () => {
      try {
        const userId = await AsyncStorage.getItem('userToken');
        if (!userId) {
          console.error('User token not found.');
          // Handle the case where user token is not found, maybe redirect to login screen
          return;
        }
        const { User_id } = JSON.parse(userId);

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            tid: 1,
            User_id: User_id,
          }),
        };

        const response = await fetch(
          'http://Schoolapi.netcampus.in/api/app/getAppmenuDetails',
          requestOptions,
        );

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();

        if (data && data.menuarry && Array.isArray(data.menuarry)) {
          const processedItems = data.menuarry.map(item => ({
            ...item,
            displayName: item.modulename,
            icon: getIconForModule(item.modulename),
          }));

          setDashboardItems(processedItems);
        } else {
          console.error('Invalid response data:', data);
          Alert.alert('Error', 'Invalid response data received from server.');
        }
      } catch (error) {
        console.error('API Error:', error.message);
        Alert.alert('Error', 'Failed to fetch dashboard items. Please try again later.');
      }
    };

    fetchDashboardItems();
  }, []);

  const getIconForModule = moduleName => {
    switch (moduleName) {
      case 'MESSAGE':
        return require('../../../assets/Box-Images/notification-bell.png');
      case 'ATTENDANCE':
        return require('../../../assets/Box-Images/attendance.png');
      case 'PORTFOLIO':
        return require('../../../assets/Box-Images/portfolio.png');
      case 'HOMEWORK':
        return require('../../../assets/Box-Images/homework.png');
      case 'FEES PAYMENT':
        return require('../../../assets/Box-Images/fees.png');
      case 'NOTES':
        return require('../../../assets/Box-Images/notes.png');
      case 'DIARY / EVENTS':
        return require('../../../assets/Box-Images/diary.png');
      case 'TIME TABLE':
        return require('../../../assets/Box-Images/timetable.png');
      case 'EXAM MARKS':
        return require('../../../assets/Box-Images/exammarks.png');
      case 'CALENDAR EVENTS':
        return require('../../../assets/Box-Images/calendar.png');
      case 'MEAL MENU':
        return require('../../../assets/Box-Images/mealmenu.png');
      case 'DOCUMENTS':
        return require('../../../assets/Box-Images/documents.png');
      case 'CHAT':
        return require('../../../assets/Box-Images/live-chat.png');
      case 'TRANSPORT':
        return require('../../../assets/Box-Images/transportation.png');
      case 'HEALTH CARD':
        return require('../../../assets/Box-Images/healthcard.png');
      case 'MY LEARNING':
        return require('../../../assets/Box-Images/learning.png');
      case 'PHOTO AND VIDEOS':
        return require('../../../assets/Box-Images/syllabus.png');
      case 'LEAVE MODULE':
        return require('../../../assets/Box-Images/photo&video.png');
      default:
        return require('../../../assets/Box-Images/photo&video.png');
    }
  };

  const renderItem = ({ item }) => (
    <Animatable.View animation="fadeInUp" duration={1500} delay={1000}>
      <View style={styles.itemContainer}>
        <DashboardItem item={item} />
        {getIconForModule}
        <Image source={item.icon} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.displayName}</Text>
      </View>
    </Animatable.View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dashboardItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    paddingVertical: 16,
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  itemImage: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  itemText: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default DashboardScreen;





import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
  StatusBar,
  BackHandler,
  Animated,
  RefreshControl,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ClassPeriod from './ClassPeriod';
import DashboardItem from './DashboardItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';

const staticDashboardItems = [
  // Your dashboard items data here
  {
    label: 'MESSAGE',
    icon: require('../../../assets/Box-Images/notification-bell.png'),
  },
  {
    label: 'ATTENDANCE',
    icon: require('../../../assets/Box-Images/attendance.png'),
  },
  {
    label: 'PORTFOLIO',
    icon: require('../../../assets/Box-Images/portfolio.png'),
  },
  {label: 'HOMEWORK', icon: require('../../../assets/Box-Images/homework.png')},
  {label: 'FEES PAYMENT', icon: require('../../../assets/Box-Images/fees.png')},
  {label: 'NOTES', icon: require('../../../assets/Box-Images/notes.png')},
  {
    label: 'DIARY / EVENTS',
    icon: require('../../../assets/Box-Images/diary.png'),
  },
  {
    label: 'TIME TABLE',
    icon: require('../../../assets/Box-Images/timetable.png'),
  },
  {
    label: 'EXAM MARKS',
    icon: require('../../../assets/Box-Images/exammarks.png'),
  },
  {
    label: 'CALENDAR EVENTS',
    icon: require('../../../assets/Box-Images/calendar.png'),
  },
  {
    label: 'MEAL MENU',
    icon: require('../../../assets/Box-Images/mealmenu.png'),
  },
  {
    label: 'DOCUMENTS',
    icon: require('../../../assets/Box-Images/documents.png'),
  },
  {label: 'CHAT', icon: require('../../../assets/Box-Images/live-chat.png')},
  {
    label: 'TRANSPORT',
    icon: require('../../../assets/Box-Images/transportation.png'),
  },
  {
    label: 'HEALTH CARD',
    icon: require('../../../assets/Box-Images/healthcard.png'),
  },
  {
    label: 'MY LEARNING',
    icon: require('../../../assets/Box-Images/learning.png'),
  },
  {
    label: 'PHOTO AND VIDEOS',
    icon: require('../../../assets/Box-Images/syllabus.png'),
  },
  {
    label: 'LEAVE MODULE',
    icon: require('../../../assets/Box-Images/photo&video.png'),
  },
];

const classData = [
  {id: '1', title1: '9:20Am to 10:00Am', title: 'English-th'},
  {id: '2', title1: '10:00Am to 10:40Am', title: 'Language-th'},
  {id: '4', title1: '11:30Am to 12:10Pm', title: 'Mathematics-th'},
  {id: '5', title1: '12:40Pm to 1:20Pm', title: 'Chemistry-th'},
  {id: '6', title1: '1:20Pm to 2:00Pm', title: 'Physics-th'},
  {id: '7', title1: '2:10Pm to 2:50Pm', title: 'Biology-th'},
  {id: '8', title1: '2:50Pm to 3:30Pm', title: 'Social Science-th'},
];


const MainScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [dashboardItems, setDashboardItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const modalAnim = useRef(new Animated.Value(-500)).current;
  const navigation = useNavigation();

  const toggleModal = () => {
    if (isModalVisible) {
      closeModal();
    } else {
      openModal();
    }
  };

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(modalAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalAnim, {
      toValue: -500,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Logout', onPress: confirmLogout, style: 'destructive'},
      ],
      {cancelable: false},
    );
  };

  const confirmLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('SignInScreen');
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        // Prevent default back button behavior
        return true;
      },
    );

    return () => backHandler.remove();
  }, []);

  const fetchDashboardItems = async () => {
    try {
      const userId = await AsyncStorage.getItem('userToken');
      if (!userId) {
        console.error('User token not found.');
        // Handle the case where user token is not found, maybe redirect to login screen
        return;
      }
      const {User_id} = JSON.parse(userId);

      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
          tid: 1,
          User_id: User_id,
        }),
      };

      const response = await fetch(
        'http://Schoolapi.netcampus.in/api/app/getAppmenuDetails?tid=1&User_id=995',
        requestOptions,
      );
      const data = await response.json();

      console.log('Data here : ',data);

      if (data && data.menuarry && Array.isArray(data.menuarry)) {
        // Merge fetched menu items with static items
        const mergedDashboardItems = [
          ...data.menuarry
        ];
        setDashboardItems(mergedDashboardItems);
      } else {
        console.error('Invalid response data:', data);
        Alert.alert('Error', 'Invalid response data received from server.');
      }
    } catch (error) {
      console.error('API Error:', error.message);
      Alert.alert(
        'Error',
        'Failed to fetch dashboard items. Please try again later.',
      );
    }
  };

  useEffect(() => {
    fetchDashboardItems();
  }, []);



  const onRefresh = async () => {
    setRefreshing(true);
    await fetchDashboardItems();
    setRefreshing(false);
  };

  const renderItem = ({item}) => (
    <Animatable.View animation="fadeInUp" duration={1500} delay={1000}>
      <View style={styles.item}>
        <DashboardItem item={item} />
      </View>
    </Animatable.View>
  );

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#00004F'} />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleModal}>
            <Icon name="menu" size={22} color="#fff" style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.schoolName}>SMT SCHOOL</Text>
          <TouchableOpacity>
            <Icon
              name="notifications-outline"
              size={22}
              color="#fff"
              style={styles.bellIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              source={require('../../../assets/Gowtham.jpeg')}
            />
          </View>
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.userName}>Gowtham T</Text>
            <View style={styles.classContainer}>
              <Text style={styles.classText}>X - A</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.classPeriodsContainer}>
        <View style={styles.totalbox}>
          <View style={styles.textbox1}>
            <Text style={styles.text1}>Today Class Period</Text>
            <Text style={styles.text2}>(12 Apr 2024)</Text>
          </View>
          <View style={styles.textbox2}>
            <Text style={styles.text1}>Time Table</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.periodsRow}>
            {classData.map(item => (
              <ClassPeriod
                key={item.id}
                periodName={item.title}
                time={item.title1}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.dashboardContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <FlatList
            data={dashboardItems}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            contentContainerStyle={styles.list}
          />
          <View style={styles.footerContainer}>
            <View>
              <Text style={styles.footerTitle}>Start Online Class</Text>
              <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require('../../../assets/onlineclass.png')}
              style={styles.footerImage}
            />
          </View>
        </ScrollView>
      </View>
      <Modal
        visible={isModalVisible}
        animationType="none"
        transparent={true}
        onRequestClose={toggleModal}>
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={closeModal}>
          <Animated.View
            style={[
              styles.modalContainer,
              {transform: [{translateX: modalAnim}]},
            ]}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPress={toggleModal}
                style={styles.closeButton}>
                <Icon name="close" size={30} color="#000" />
              </TouchableOpacity>
              <View style={styles.profileSection}>
                <Image
                  style={styles.modalProfileImage}
                  source={require('../../../assets/Gowtham.jpeg')}
                />
                <Text style={styles.profileName}>Gowtham tK</Text>
                <Text style={styles.viewProfile}>View Profile</Text>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.modalItemsContainer}>
                {dashboardItems.map((item, index) => (
                  <TouchableOpacity key={index} style={styles.modalItem}>
                    <Image source={item.icon} style={styles.icon} />
                    <Text style={styles.modalItemText}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <View style={styles.iconContainer}>
                  <Text style={styles.buttonText}>LOGOUT</Text>
                  <Icon name="log-out-outline" size={24} color="#fff" />
                </View>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles here
  container: {
    height: 181,
    backgroundColor: '#00004F',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    top: 10,
  },
  menuIcon: {
    marginLeft: 5,
  },
  schoolName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bellIcon: {
    marginRight: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    bottom: 10,
    marginLeft: 8,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 15,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  classContainer: {
    backgroundColor: '#F1C40F',
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
    width: 70,
  },
  classText: {
    color: '#000',
    fontSize: 16,
  },
  classPeriodsContainer: {
    height: 90,
  },
  totalbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbox1: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  textbox2: {
    marginRight: 10,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    color: 'gray',
  },
  scrollView: {
    height: 100,
  },
  periodsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  box: {
    width: 155,
    backgroundColor: '#00004F',
    margin: 3,
    // gap: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  title1: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    color: 'white',
    fontSize: 11,
    textTransform: 'uppercase',
  },
  dashboardContainer: {
    marginTop: 10,
    backgroundColor: '#CCE6FF',
    flex: 1,
    paddingHorizontal: 15,
    // padding: 5,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  dashboardbox: {
    padding: 10,
  },
  footerContainer: {
    width: '96%',
    height: 100,
    left: -24,
    backgroundColor: 'white',
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 5,
    bottom: 4,
  },
  footerTitle: {
    fontSize: 18,
    color: '#00004F',
  },
  footerButton: {
    width: 90,
    backgroundColor: '#516f9c',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  footerButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  footerImage: {
    width: 120,
    height: 100,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  onlineClassImage: {
    width: 70,
    top: 10,
    height: 70,
    right: 30,
    position: 'absolute',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    padding: 20,
    position: 'absolute',
  },
  modalContent: {
    flex: 1,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    top: -10,
  },
  viewProfile: {
    color: '#00004F',
    top: 20,
    left: -95,
  },
  modalItemsContainer: {
    marginTop: 20,
    maxHeight: '80%',
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalItemIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  modalItemText: {
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#344968', // Button background color (you can change this)
    height: 30, // Button height
    width: '38%', // Button width
    borderRadius: 8, // Rounded corners
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    marginVertical: 10,
    // Android shadow
    elevation: 5,
    // marginLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row', // Arrange icon and text horizontally
    alignItems: 'center', // Center vertically within the row
    gap: 10,
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 13, // Text size
    fontWeight: 'bold', // Text weight
    marginLeft: 10, // Space between icon and text
  },
});

export default MainScreen;




import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, Modal, StatusBar, BackHandler, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import ClassPeriod from './time_table';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Api = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [profile, setProfile] = useState(null);
  const [menuarry, setMenuarry] = useState([]);
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: async () => {
            try {
              await AsyncStorage.clear();
              navigation.navigate('SignIn');
            } catch (error) {
              console.error('Error clearing async storage:', error);
            }
          }
        }
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    const fetchMenuarry = async () => {
      try {
        var response = await fetch('http://Schoolapi.netcampus.in/api/app/getAppmenuDetails?tid=1&User_id=995', {
          method: "POST",
        });
        const data = await response.json();

        if (response.ok) {
          setMenuarry(data.menuarry);
        } else {
          console.error('Error fetching data:');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchProfile = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        const parsedToken = JSON.parse(userToken);
        const token = parsedToken.token;

        const response = await fetch('http://Schoolapi.netcampus.in/api/app/profile?token=1^995^3');
        const text = await response.text();

        if (response.ok) {
          const result = JSON.parse(text);
          setProfile(result);
        } else {
          console.error('Error fetching profile:', text);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchMenuarry();
    fetchProfile();

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () => backHandler.remove();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={getIcon(item.modulename)} style={styles.icon} />
      <Text style={styles.label}>{item.modulename}</Text>
    </TouchableOpacity>
  );

  const getIcon = (modulename) => {
    switch (modulename) {
      case 'Message':
        return require('../assets/Message.png');
      case 'Attendance':
        return require('../assets/Attendance.png');
      case 'Portfolio':
        return require('../assets/Portfolio.png');
      case 'Homework':
        return require('../assets/Homework.png');
      case 'Fees Payment':
        return require('../assets/Fees.png');
      case 'Notes':
        return require('../assets/Notes.png');
      case 'Diary / Events':
        return require('../assets/Diary   Events.png');
      case 'Time Table':
        return require('../assets/TimeTable.png');
      case 'Exam Marks':
        return require('../assets/ExamMarks.png');
      case 'Calendar Events':
        return require('../assets/CalendarEvents.png');
      case 'Meal Menu':
        return require('../assets/MealMenu.png');
      case 'Documents':
        return require('../assets/documents.png');
      case 'Chat':
        return require('../assets/chat.png');
      case 'Transport':
        return require('../assets/transport.png');
      case 'Health Card':
        return require('../assets/HealthCard.png');
      case 'My Learning':
        return require('../assets/MyLearning.png');
      case 'Photo And Videos':
        return require('../assets/Photo.png');
      case 'Leave Module':
        return require('../assets/leave.png');
      default:
        return require('../assets/attendance.png');
    }
  };

  if (!profile) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const classDetail = profile.classDetail;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#092085'} />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleModal}>
            <Icon name="menu" size={22} color="#fff" style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.schoolName}>SMT SCHOOL</Text>
          <TouchableOpacity>
            <Icon name="notifications-outline" size={22} color="#fff" style={styles.bellIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: profile.user.photo }}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.userName}>{profile.user.firstname}</Text>
            <View style={styles.classContainer}>
              <Text style={styles.classText}>
                {classDetail && classDetail.semester && classDetail.division
                  ? ${classDetail.semester} - ${classDetail.division}
                  : 'N/A'}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.classPeriodsContainer}>
        <Text style={styles.sectionTitle}>Today Class Period</Text>
        <Text style={styles.subsectionTitle}>(24 May 2024)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          <View style={styles.periodsRow}>
            <ClassPeriod periodName="ENGLISH-TH" time="9:20 AM to 10:00 AM" />
            <ClassPeriod periodName="LANGUAGE-TH" time="10:00 AM to 10:40 AM" />
            <ClassPeriod periodName="HINDI-TH" time="10:50 AM to 11:30 AM" />
            <ClassPeriod periodName="HINDI-TH" time="10:50 AM to 11:30 AM" />
            <ClassPeriod periodName="HINDI-TH" time="10:50 AM to 11:30 AM" />
          </View>
        </ScrollView>
      </View>
      <View style={styles.dashboardContainer}>
        <FlatList
          data={menuarry}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          columnWrapperStyle={styles.row}
          // scrollEnabled={false}
        />
        <View style={styles.startOnlineClassContainer}>
          <Text style={styles.startOnlineClassText}>Start Online Class</Text>
          <Image source={require('../assets/online-class.png')} style={styles.onlineClassImage} />
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="none"
        transparent={false}
        onRequestClose={toggleModal}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalContainer}
          onPress={toggleModal}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Icon name="close" size={30} color="#000" />
            </TouchableOpacity>
            <View style={styles.profileSection}>
              <Image style={styles.modalProfileImage} source={{ uri: profile.user.photo }} />
              <Text style={styles.profileName}>{profile.user.firstname}</Text>
              <Text style={styles.viewProfile}>View Profile</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.modalItemsContainer}>
              {menuarry.map((item, index) => (
                <View key={index} style={styles.menuItem}>
                  <Image source={getIcon(item.modulename)} style={styles.menuItemIcon} />
                  <Text style={styles.menuItemText}>{item.modulename}</Text>
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutText}>Logout</Text>
              <Icon name="log-out-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 181,
    backgroundColor: '#092085',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    top: 10,
  },
  menuIcon: {
    marginLeft: 5,
  },
  schoolName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bellIcon: {
    marginRight: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    left: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 20,
    borderWidth: 3,
    borderColor: '#fff',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  classContainer: {
    backgroundColor: '#F1C40F',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
    width: 80,
  },
  classText: {
    color: '#000',
    fontSize: 16,
  },
  classPeriodsContainer: {
    height: 90,
  },
  sectionTitle: {
    color: '#000',
    fontSize: 14,
    left: 20,
    fontWeight: 'bold',
  },
  subsectionTitle: {
    fontSize: 13,
    position: 'absolute',
    left: 150,
  },
  scrollView: {
    height: 100,
  },
  periodsRow: {
    flexDirection: 'row',
    left: 10,
    top: -10,
  },
  dashboardContainer: {
    marginTop: 10,
    backgroundColor: '#c4ccf2',
    flex: 1,
    paddingHorizontal: 15,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  startOnlineClassContainer: {
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
    bottom: 35,
    width: '95%',
    left: 10,
    borderRadius: 5,
    height: 90,
  },
  startOnlineClassText: {
    color: '#000',
    fontSize: 18,
    marginBottom: 10,
    left: -70,
    top: 17,
    fontWeight: 'bold',
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498DB',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    left: -88,
    top: 13,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  onlineClassImage: {
    width: 70,
    top: 10,
    height: 70,
    right: 30,
    position: 'absolute',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    top: -10,
  },
  viewProfile: {
    color: '#3498DB',
    top: 20,
    left: -95,
  },
  modalItemsContainer: {
    marginTop: 20,
    maxHeight: '80%',
  },
  menuItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  menuItemIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  menuItemText: {
    fontSize: 12,
    textAlign: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 103,
    height: 89,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#092085',
    top: 7,
    left: -5,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  label: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Api;


//Api change functionality here 

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
  StatusBar,
  BackHandler,
  Alert,
  Animated,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ClassPeriod from './ClassPeriod';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

const MainScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [profile, setProfile] = useState(null);
  const [timetable, setTimetable] = useState([]);
  const [menuarry, setMenuarry] = useState([]);
  const navigation = useNavigation();

  const classData = [
    {id: '1', title1: '9:20Am to 10:00Am', title: 'English-th'},
    {id: '2', title1: '10:00Am to 10:40Am', title: 'Language-th'},
    {id: '4', title1: '11:30Am to 12:10Pm', title: 'Mathematics-th'},
    {id: '5', title1: '12:40Pm to 1:20Pm', title: 'Chemistry-th'},
    {id: '6', title1: '1:20Pm to 2:00Pm', title: 'Physics-th'},
    {id: '7', title1: '2:10Pm to 2:50Pm', title: 'Biology-th'},
    {id: '8', title1: '2:50Pm to 3:30Pm', title: 'Social Science-th'},
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            try {
              await AsyncStorage.clear();
              navigation.navigate('SignInScreen');
            } catch (error) {
              console.error('Error clearing async storage:', error);
            }
          },
        },
      ],
      {cancelable: false},
    );
  };

  const fetchMenuarry = async () => {
    try {
      var response = await fetch(
        'http://Schoolapi.netcampus.in/api/app/getAppmenuDetails?tid=1&User_id=995',
        {
          method: 'POST',
        },
      );

      const data = await response.json();

      if (response.ok) {
        setMenuarry(data.menuarry);
      } else {
        console.error('Error fetching data:');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Example function to store user profiles with dynamic IDs
  const storeUserProfiles = async () => {
    const profiles = [
      {name: 'Alice', tid: 'tid1', userid: 'userid1', roleid: 'roleid1'},
      {name: 'Bob', tid: 'tid2', userid: 'userid2', roleid: 'roleid2'},
      {name: 'Charlie', tid: 'tid3', userid: 'userid3', roleid: 'roleid3'},
      // Add more profiles as needed
    ];

    try {
      await AsyncStorage.setItem('userProfiles', JSON.stringify(profiles));
    } catch (error) {
      console.error('Error storing user profiles:', error);
    }
  };

  // Call this function once to store the profiles
  storeUserProfiles();

  const getUserProfileByName = async name => {
    try {
      const profiles = await AsyncStorage.getItem('userProfiles');
      if (profiles !== null) {
        const parsedProfiles = JSON.parse(profiles);
        const profile = parsedProfiles.find(profile => profile.name === name);
        if (profile) {
          return profile;
        } else {
          throw new Error('Profile not found for the given name');
        }
      } else {
        throw new Error('User profiles not found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error retrieving user profile:', error);
      throw error;
    }
  };

  // Function to call the API with the constructed URL
  const fetchProfile = async name => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const parsedToken = JSON.parse(userToken);
      const token = parsedToken.token;

      const profile = await getUserProfileByName(name);
      const {tid, userid, roleid} = profile;

      // Fetch the actual IDs from AsyncStorage based on variable names
      const tidValue = await AsyncStorage.getItem(tid);
      const useridValue = await AsyncStorage.getItem(userid);
      const roleidValue = await AsyncStorage.getItem(roleid);

      if (!tidValue || !useridValue || !roleidValue) {
        throw new Error('One or more IDs not found in AsyncStorage');
      }

      // Construct the URL with the fetched values
      const apiUrl = `http://Schoolapi.netcampus.in/api/app/profile?token=${tidValue}^${useridValue}^${roleidValue}`;

      // Make the API call
      const response = await fetch(apiUrl);

      // Fetch response text
      const text = await response.text();

      if (response.ok) {
        const result = JSON.parse(text);
        // Assuming you have a setProfile method to update state
        console.log('Profile fetched:', result);
        // Update your state or handle the result as needed
        // setProfile(result); // Uncomment if using a state setter
      } else {
        console.error('Error fetching profile:', text);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };


  const fetchtimetable = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const parsedToken = JSON.parse(userToken);
      const token = parsedToken.token;

      const response = await fetch(
        'http://Schoolapi.netcampus.in/api/app/mytimetable?token=1^995^3',
      );
      const text = await response.text();

      if (response.ok) {
        const result = JSON.parse(text);
        setTimetable(result.data);
      } else {
        console.error('Error fetching timetable:', text);
      }
    } catch (error) {
      console.error('Error fetching timetable:', error);
    }
  };

  useEffect(() => {
    fetchMenuarry();
    fetchProfile('Alice');
    fetchtimetable();

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );

    return () => backHandler.remove();
  }, []);

  const renderItem = ({item}) => (
    <Animatable.View animation="fadeInUp" duration={1500} delay={500}>
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={getIcon(item.modulename)} style={styles.icon} />
        <Text style={styles.label}>{item.modulename}</Text>
      </TouchableOpacity>
    </Animatable.View>
  );

  const getIcon = modulename => {
    switch (modulename) {
      case 'Message':
        return require('../../../assets/Box-Images/notification-bell.png');
      case 'Attendance':
        return require('../../../assets/Box-Images/attendance.png');
      case 'Portfolio':
        return require('../../../assets/Box-Images/portfolio.png');
      case 'Homework':
        return require('../../../assets/Box-Images/homework.png');
      case 'Fees Payment':
        return require('../../../assets/Box-Images/fees.png');
      case 'Notes':
        return require('../../../assets/Box-Images/notes.png');
      case 'Diary / Events':
        return require('../../../assets/Box-Images/diary.png');
      case 'Time Table':
        return require('../../../assets/Box-Images/timetable.png');
      case 'Exam Marks':
        return require('../../../assets/Box-Images/exammarks.png');
      case 'Calendar Events':
        return require('../../../assets/Box-Images/calendar.png');
      case 'Meal Menu':
        return require('../../../assets/Box-Images/mealmenu.png');
      case 'Documents':
        return require('../../../assets/Box-Images/documents.png');
      case 'Chat':
        return require('../../../assets/Box-Images/live-chat.png');
      case 'Transport':
        return require('../../../assets/Box-Images/transportation.png');
      case 'Health Card':
        return require('../../../assets/Box-Images/healthcard.png');
      case 'My Learning':
        return require('../../../assets/Box-Images/learning.png');
      case 'Photo And Videos':
        return require('../../../assets/Box-Images/photo&video.png');
      case 'Leave Module':
        return require('../../../assets/Box-Images/syllabus.png');
      default:
        return require('../../../assets/Box-Images/photo&video.png');
    }
  };

  // Function to get the current date and the day of the week
  const getCurrentDate = () => {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();
    const month = date.toLocaleString('default', {month: 'long'});
    const year = date.getFullYear();

    const currentDate = `${dayOfMonth} ${month} ${year}`;

    return {currentDate, dayOfWeek};
  };

  const {currentDate, dayOfWeek} = getCurrentDate();

  const todayTimetable = timetable.filter(
    item => item.day_of_week === dayOfWeek,
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await getIcon();
    setRefreshing(false);
  };

  if (!profile) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const classDetail = profile.classDetail;

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#00004F'} />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleModal}>
            <Icon name="menu" size={22} color="#fff" style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.schoolName}>SMT SCHOOL</Text>
          <TouchableOpacity>
            <Icon
              name="notifications-outline"
              size={22}
              color="#fff"
              style={styles.bellIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={{uri: profile.user.photo}}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.userName}>{profile.user.firstname}</Text>
            <View style={styles.classContainer}>
              <Text style={styles.classText}>
                {classDetail && classDetail.semester && classDetail.division
                  ? `${classDetail.semester} - ${classDetail.division}`
                  : ''}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.classPeriodsContainer}>
        <View style={styles.totalbox}>
          <View style={styles.textbox1}>
            <Text style={styles.text1}>Today Class Period</Text>
            <Text style={styles.text2}>({currentDate})</Text>
          </View>
          <View style={styles.textbox2}>
            <Text style={styles.text1}>Time Table</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.periodsRow}>
            {todayTimetable.map((item, index) => (
              <ClassPeriod
                key={index}
                periodName={item.subject}
                time={`${item.from_time} to ${item.to_time}`}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.dashboardContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <FlatList
            data={menuarry}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            columnWrapperStyle={styles.row}
            scrollEnabled={false}
          />
          <View style={styles.footerContainer}>
            <View>
              <Text style={styles.footerTitle}>Start Online Class</Text>
              <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require('../../../assets/onlineclass.png')}
              style={styles.footerImage}
            />
          </View>
        </ScrollView>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="none"
        transparent={false}
        onRequestClose={toggleModal}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalContainer}
          onPress={toggleModal}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Icon name="close" size={30} color="#000" />
            </TouchableOpacity>
            <View style={styles.profileSection}>
              <Image
                style={styles.modalProfileImage}
                source={{uri: profile.user.photo}}
              />
              <Text style={styles.profileName}>{profile.user.firstname}</Text>
              <TouchableOpacity>
                <Text style={styles.viewProfile}>View Profile</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.line}></Text>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.modalItemsContainer}>
              {menuarry.map((item, index) => (
                <TouchableOpacity>
                  <View key={index} style={styles.menuItem}>
                    <Image
                      source={getIcon(item.modulename)}
                      style={styles.menuItemIcon}
                    />
                    <Text style={styles.menuItemText}>{item.modulename}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
              <View style={styles.iconContainer}>
                <Text style={styles.buttonText}>LOGOUT</Text>
                <Icon name="log-out-outline" size={24} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 181,
    backgroundColor: '#00004F',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    top: 10,
  },
  menuIcon: {
    marginLeft: 5,
  },
  schoolName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bellIcon: {
    marginRight: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 70,
    left: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 20,
    bottom: 10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
    bottom: 14,
    right: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    bottom: 14,
    right: 10,
  },
  classContainer: {
    backgroundColor: '#F1C40F',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
    width: 80,
    bottom: 14,
    right: 10,
  },
  totalbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbox1: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  textbox2: {
    marginRight: 10,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    color: 'gray',
  },
  classText: {
    color: '#000',
    fontSize: 16,
  },
  classPeriodsContainer: {
    height: 90,
  },
  scrollView: {
    height: 100,
  },
  periodsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  dashboardContainer: {
    marginTop: 10,
    backgroundColor: '#CCE6FF',
    flex: 1,
    paddingHorizontal: 15,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  footerContainer: {
    width: '96%',
    height: 100,
    left: -24,
    backgroundColor: 'white',
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 5,
    bottom: 4,
  },
  footerTitle: {
    fontSize: 18,
    color: '#00004F',
  },
  footerButton: {
    width: 90,
    backgroundColor: '#516f9c',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  footerButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  footerImage: {
    width: 120,
    height: 100,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    bottom: 10,
    left: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalProfileImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#344968',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    top: -18,
    color: '#344968',
  },
  viewProfile: {
    color: 'black',
    top: 10,
    right: 144,
    fontSize: 15,
    fontWeight: 'bold',
  },
  line: {
    width: '95%',
    color: 'gray',
    height: 3,
    top: 0,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  modalItemsContainer: {
    marginTop: 20,
    maxHeight: '80%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  menuItemIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  menuItemText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#344968',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 103,
    height: 89,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#092085',
    top: 7,
    left: -5,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  label: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#344968',
    height: 30,
    width: '38%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
    bottom: -10,
    // Android shadow
    elevation: 5,
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default MainScreen;



// Principal Dasboard Page Here...


import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3fa043" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.schoolName}>SMT SCHOOL</Text>
          <Icon name="bell" size={30} color="#fff" />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
            style={styles.profileImage}
          />
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.userName}>DR. PRADOSH P</Text>
          <Text style={styles.userRole}>Academic & Principal</Text>
        </View>
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>DASHBOARD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>MAIN MENU</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.attendanceChart}>
          <Text style={styles.attendanceTitle}>Attendance Chart</Text>
          <View style={styles.legend}>
            <Text style={styles.legendItem}><View style={[styles.legendColor, { backgroundColor: 'green' }]} /> Completed</Text>
            <Text style={styles.legendItem}><View style={[styles.legendColor, { backgroundColor: 'red' }]} /> Not Marked</Text>
          </View>
          <View style={styles.chart}>
            {/* Render the attendance chart here, for simplicity it's just text */}
            <Text>Attendance Data Here</Text>
          </View>
        </View>
        <View style={styles.infoBoxes}>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>STUDENT</Text>
            <Text style={styles.infoText}>Present: 26</Text>
            <Text style={styles.infoText}>Strength: 206</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>STAFF</Text>
            <Text style={styles.infoText}>Present: 37</Text>
            <Text style={styles.infoText}>Total: 39</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ENQUIRY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ADMISSION</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#3fa043',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  schoolName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#3fa043',
  },
  welcomeText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3fa043',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3fa043',
  },
  userRole: {
    fontSize: 16,
    color: '#3fa043',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
  tabButton: {
    padding: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3fa043',
  },
  attendanceChart: {
    width: '90%',
    marginTop: 20,
    alignItems: 'center',
  },
  attendanceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3fa043',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  chart: {
    width: '100%',
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#3fa043',
    borderRadius: 5,
  },
  infoBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  infoBox: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#3fa043',
    borderRadius: 5,
    width: '40%',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3fa043',
  },
  infoText: {
    fontSize: 14,
    color: '#3fa043',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#3fa043',
    borderRadius: 5,
    width: '40%',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MainScreen;



// Principal Dasboard Page Above.....X.....


// Principal Dasboard Update Code Page  Below...!




import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [sectionsData, setSectionsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://Schoolapi.netcampus.in/api/app/GetPrnsDashboard?token=1&Flag=PD&Userid&frm_Date=23-01-2024&to_Date&ay_id=',
        );
        const result = await response.json();
        console.log('result', result);

        setAttendanceData(result.table1);
        setSectionsData(result.table0);

        // Store data in AsyncStorage
        await AsyncStorage.setItem(
          'attendanceData',
          JSON.stringify(result.table1),
        );
        await AsyncStorage.setItem(
          'sectionsData',
          JSON.stringify(result.table0),
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const groupedData = attendanceData.reduce((acc, curr) => {
    const existingClass = acc.find(item => item.std === curr.class_name);
    if (existingClass) {
      existingClass.sections.push({
        section: curr.div_name,
        p_value: parseInt(curr.p, 10),
        a_value: parseInt(curr.a, 10),
        count: parseInt(curr.count, 10),
      });
    } else {
      acc.push({
        std: curr.class_name,
        sections: [
          {
            section: curr.div_name,
            p_value: parseInt(curr.p, 10),
            a_value: parseInt(curr.a, 10),
            count: parseInt(curr.count, 10),
          },
        ],
      });
    }
    return acc;
  }, []);

  const sections = [
    {key: 'student', label: 'STUDENT', backgroundColor: '#0d1133'},
    {key: 'staff', label: 'STAFF', backgroundColor: '#28349c'},
    {key: 'enquiry', label: 'ENQUIRY', backgroundColor: '#d14160'},
    {key: 'admission', label: 'ADMISSION', backgroundColor: '#5c5c0c'},
    {key: 'feeCollection', label: 'FEE COLLECTION', backgroundColor: '#535ef5'},
    {key: 'outstanding', label: 'OUTSTANDING', backgroundColor: '#cc0202'},
    {key: 'transport', label: 'TRANSPORT', backgroundColor: '#ff9e03'},
  ];

  return (
    <ScrollView style={styles.container}>
      <AttendanceChart attendanceData={groupedData} />
      <View style={styles.sectionContainer}>
        <View style={styles.rowContainer}>
          {sections.slice(0, 2).map((section, index) => (
            <TouchableOpacity style={styles.section} key={section.key}>
              <Text
                style={[
                  styles[`text${index + 1}`],
                  {backgroundColor: section.backgroundColor},
                ]}>
                {section.label}
              </Text>
              <View style={styles.container1}>
                <View style={styles.subcontainer}>
                  <Text style={styles.text8}>Present</Text>
                  <Text style={styles.text8}>Strength</Text>
                </View>
                <View style={styles.subcontainer1}>
                  <Text style={styles.text9}>0</Text>
                  <Text style={styles.text9}>200</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.rowContainer}>
          {sections.slice(2, 4).map((section, index) => (
            <TouchableOpacity style={styles.section} key={section.key}>
              <Text
                style={[
                  styles[`text${index + 3}`],
                  {backgroundColor: section.backgroundColor},
                ]}>
                {section.label}
              </Text>
              <View style={styles.container1}>
                <View style={styles.subcontainer}>
                  <Text style={styles.text8}>Present</Text>
                  <Text style={styles.text8}>Strength</Text>
                </View>
                <View style={styles.subcontainer1}>
                  <Text style={styles.text9}>0</Text>
                  <Text style={styles.text9}>200</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.rowContainer}>
          {sections.slice(4, 6).map((section, index) => (
            <TouchableOpacity style={styles.section} key={section.key}>
              <Text
                style={[
                  styles[`text${index + 5}`],
                  {backgroundColor: section.backgroundColor},
                ]}>
                {section.label}
              </Text>
              <View style={styles.container1}>
                <View style={styles.subcontainer}>
                  <Text style={styles.text8}>Present</Text>
                  <Text style={styles.text8}>Strength</Text>
                </View>
                <View style={styles.subcontainer1}>
                  <Text style={styles.text9}>0</Text>
                  <Text style={styles.text9}>200</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.view3}>
          <TouchableOpacity>
            <Text
              style={[
                styles.text7,
                {backgroundColor: sections[6].backgroundColor},
              ]}>
              {sections[6].label}
            </Text>
            <View style={styles.container1}>
              <View style={styles.subcontainer}>
                <Text style={styles.text8}>Present</Text>
                <Text style={styles.text8}>Strength</Text>
              </View>
              <View style={styles.subcontainer1}>
                <Text style={styles.text9}>0</Text>
                <Text style={styles.text9}>200</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const AttendanceChart = ({attendanceData}) => {
  const getSectionColor = (count, p_value, a_value) => {
    const sum = p_value + a_value;
    if (count === sum) {
      return styles.completed;
    } else if (sum > 0) {
      return styles.notMarked;
    } else {
      return styles.notStarted;
    }
  };

  return (
    <View style={styles.chartContainer}>
      <Text style={styles.chartHeader}>Attendance Chart</Text>
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, {backgroundColor: '#008000'}]} />
          <Text style={styles.legendText}>Completed</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, {backgroundColor: '#f5b642'}]} />
          <Text style={styles.legendText}>Not Marked</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, {backgroundColor: '#FF0000'}]} />
          <Text style={styles.legendText}>Not Started</Text>
        </View>
      </View>
      <View style={styles.table}>
        <View style={styles.row1}>
          <Text style={styles.cell}>STD</Text>
          <Text style={styles.cellHeader}>SECTION</Text>
        </View>
        {attendanceData.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.std}</Text>
            <View style={styles.sections}>
              {item.sections.map((section, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.sectionCell,
                    getSectionColor(
                      section?.count,
                      section?.p_value,
                      section?.a_value,
                    ),
                  ]}>
                  <Text style={styles.sectionText}>{section?.section}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f2e6',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    paddingBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  section: {
    width: '45%',
    marginVertical: 10,
  },
  text1: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text2: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text3: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text4: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text5: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text6: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text7: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text8: {
    textAlign: 'center',
    color: '#080808',
  },
  text9: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#080808',
  },
  container1: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subcontainer: {
    borderWidth: 1,
    borderColor: '#dbd8e6',
    backgroundColor: '#fff',
    width: '50%',
    padding: 11,
    borderBottomLeftRadius: 5,
  },
  subcontainer1: {
    borderWidth: 1,
    borderColor: '#dbd8e6',
    backgroundColor: '#fff',
    width: '50%',
    padding: 11,
    borderBottomRightRadius: 5,
  },
  view3: {
    top: 30,
    width: '45%',
    left: '27%',
  },
  chartContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  chartHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  legend: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  legendColor: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
  },
  table: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: '#000000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRightWidth: 1,
    // borderBottomWidth: 1,
    height: 24,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    height: 30,
  },
  cellHeader: {
    left: 110,
  },
  cell: {
    borderColor: '#000000',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    textAlign: 'center',
    width: 60,
  },
  sections: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sectionCell: {
    width: '25%',
    borderColor: '#000000',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    textAlign: 'center',
    alignItems: 'center',
    height: 24,
  },
  completed: {
    backgroundColor: '#008000',
  },
  notMarked: {
    backgroundColor: '#f5b642',
  },
  notStarted: {
    backgroundColor: '#FF0000',
  },
  sectionText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Dashboard;


// Principal Dasboard Update Code Page Above...!





import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [sectionsData, setSectionsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://Schoolapi.netcampus.in/api/app/GetPrnsDashboard?token=1&Flag=PD&Userid&frm_Date=23-01-2024&to_Date&ay_id=',
        );
        const result = await response.json();
        console.log('result', result);

        setAttendanceData(result.table1);
        setSectionsData(result.table0);

        // Store data in AsyncStorage
        await AsyncStorage.setItem(
          'attendanceData',
          JSON.stringify(result.table1),
        );
        await AsyncStorage.setItem(
          'sectionsData',
          JSON.stringify(result.table0),
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const groupedData = attendanceData.reduce((acc, curr) => {
    const existingClass = acc.find(item => item.std === curr.class_name);
    if (existingClass) {
      existingClass.sections.push({
        section: curr.div_name,
        p_value: parseInt(curr.p, 10),
        a_value: parseInt(curr.a, 10),
        count: parseInt(curr.count, 10),
      });
    } else {
      acc.push({
        std: curr.class_name,
        sections: [
          {
            section: curr.div_name,
            p_value: parseInt(curr.p, 10),
            a_value: parseInt(curr.a, 10),
            count: parseInt(curr.count, 10),
          },
        ],
      });
    }
    return acc;
  }, []);

  const sections = [
    {key: 'student', label: 'STUDENT', backgroundColor: '#0d1133'},
    {key: 'staff', label: 'STAFF', backgroundColor: '#28349c'},
    {key: 'enquiry', label: 'ENQUIRY', backgroundColor: '#d14160'},
    {key: 'admission', label: 'ADMISSION', backgroundColor: '#5c5c0c'},
    {key: 'feeCollection', label: 'FEE COLLECTION', backgroundColor: '#535ef5'},
    {key: 'outstanding', label: 'OUTSTANDING', backgroundColor: '#cc0202'},
    {key: 'transport', label: 'TRANSPORT', backgroundColor: '#ff9e03'},
  ];

  return (
    <ScrollView style={styles.container}>
      <AttendanceChart attendanceData={groupedData} />
      <View style={styles.sectionContainer}>
        <View style={styles.rowContainer}>
          {sections.slice(0, 2).map((section, index) => (
            <TouchableOpacity style={styles.section} key={section.key}>
              <Text
                style={[
                  styles[`text${index + 1}`],
                  {backgroundColor: section.backgroundColor},
                ]}>
                {section.label}
              </Text>
              <View style={styles.container1}>
                <View style={styles.subcontainer}>
                  <Text style={styles.text8}>Present</Text>
                  <Text style={styles.text8}>Strength</Text>
                </View>
                <View style={styles.subcontainer1}>
                  <Text style={styles.text9}>0</Text>
                  <Text style={styles.text9}>200</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.rowContainer}>
          {sections.slice(2, 4).map((section, index) => (
            <TouchableOpacity style={styles.section} key={section.key}>
              <Text
                style={[
                  styles[`text${index + 3}`],
                  {backgroundColor: section.backgroundColor},
                ]}>
                {section.label}
              </Text>
              <View style={styles.container1}>
                <View style={styles.subcontainer}>
                  <Text style={styles.text8}>Present</Text>
                  <Text style={styles.text8}>Strength</Text>
                </View>
                <View style={styles.subcontainer1}>
                  <Text style={styles.text9}>0</Text>
                  <Text style={styles.text9}>200</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.rowContainer}>
          {sections.slice(4, 6).map((section, index) => (
            <TouchableOpacity style={styles.section} key={section.key}>
              <Text
                style={[
                  styles[`text${index + 5}`],
                  {backgroundColor: section.backgroundColor},
                ]}>
                {section.label}
              </Text>
              <View style={styles.container1}>
                <View style={styles.subcontainer}>
                  <Text style={styles.text8}>Present</Text>
                  <Text style={styles.text8}>Strength</Text>
                </View>
                <View style={styles.subcontainer1}>
                  <Text style={styles.text9}>0</Text>
                  <Text style={styles.text9}>200</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.view3}>
          <TouchableOpacity>
            <Text
              style={[
                styles.text7,
                {backgroundColor: sections[6].backgroundColor},
              ]}>
              {sections[6].label}
            </Text>
            <View style={styles.container1}>
              <View style={styles.subcontainer}>
                <Text style={styles.text8}>Present</Text>
                <Text style={styles.text8}>Strength</Text>
              </View>
              <View style={styles.subcontainer1}>
                <Text style={styles.text9}>0</Text>
                <Text style={styles.text9}>200</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const AttendanceChart = ({attendanceData}) => {
  const getSectionColor = (count, p_value, a_value) => {
    const sum = p_value + a_value;
    if (count === sum) {
      return styles.completed;
    } else if (sum > 0) {
      return styles.notMarked;
    } else {
      return styles.notStarted;
    }
  };

  return (
    <View style={styles.chartContainer}>
      <Text style={styles.chartHeader}>Attendance Chart</Text>
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, {backgroundColor: '#008000'}]} />
          <Text style={styles.legendText}>Completed</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, {backgroundColor: '#F1C40F'}]} />
          <Text style={styles.legendText}>Not Marked</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, {backgroundColor: '#FF0000'}]} />
          <Text style={styles.legendText}>Not Started</Text>
        </View>
      </View>
      <View style={styles.table}>
        <View style={styles.row1}>
          <Text style={styles.cell}>STD</Text>
          <Text style={styles.cellHeader}>SECTION</Text>
        </View>
        {attendanceData.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.std}</Text>
            <View style={styles.sections}>
              {item.sections.map((section, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.sectionCell,
                    getSectionColor(
                      section?.count,
                      section?.p_value,
                      section?.a_value,
                    ),
                  ]}>
                  <Text style={styles.sectionText}>{section?.section}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f2e6',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    marginBottom: 260,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  section: {
    width: '45%',
    marginVertical: 10,
  },
  text1: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text2: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text3: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text4: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text5: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text6: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text7: {
    top: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  text8: {
    textAlign: 'center',
    color: '#080808',
  },
  text9: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#080808',
  },
  container1: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subcontainer: {
    borderWidth: 1,
    borderColor: '#dbd8e6',
    backgroundColor: '#fff',
    width: '50%',
    padding: 11,
    borderBottomLeftRadius: 5,
  },
  subcontainer1: {
    borderWidth: 1,
    borderColor: '#dbd8e6',
    backgroundColor: '#fff',
    width: '50%',
    padding: 11,
    borderBottomRightRadius: 5,
  },
  view3: {
    top: 30,
    width: '45%',
    left: '27%',
  },
  chartContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  chartHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  legend: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  legendColor: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
  },
  table: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: '#000000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRightWidth: 1,
    // borderBottomWidth: 1,
    height: 24,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    height: 30,
  },
  cellHeader: {
    left: 110,
  },
  cell: {
    borderColor: '#000000',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    textAlign: 'center',
    width: 60,
  },
  sections: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sectionCell: {
    width: '25%',
    borderColor: '#000000',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    textAlign: 'center',
    alignItems: 'center',
    height: 24,
  },
  completed: {
    backgroundColor: '#008000',
  },
  notMarked: {
    backgroundColor: '#F1C40F',
  },
  notStarted: {
    backgroundColor: '#FF0000',
  },
  sectionText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Dashboard;
