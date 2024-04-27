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
