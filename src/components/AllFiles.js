// Drawer Navigation Section 


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
