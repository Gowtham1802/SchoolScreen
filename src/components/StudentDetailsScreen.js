// import React from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// 
// const StudentDetailsScreen = ({route, navigation}) => {
//   const {student} = route.params;
// 
//   const handleEdit = () => {
//     // Navigate to the FormDataScreen with the selected student data for editing
//     navigation.navigate('FormInputScreen', {studentData: student});
//   };
// 
//   const handleDelete = async index => {
//     // Implement deletion logic here
//     // You can use AsyncStorage to delete the selected student data
//     // After deletion, navigate back to the previous screen
//      try {
//       const updatedData = studentData.filter((_, i) => i !== index);
//       await AsyncStorage.setItem('studentData', JSON.stringify(updatedData));
//       setStudentData(updatedData);
//       setFilteredData(updatedData);
//     } catch (error) {
//       console.error('Error deleting entry: ', error);
//     }
//     
//   };
// 
//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Name: {student.name}</Text>
//       <Text style={styles.label}>Class: {student.selectedClass}</Text>
//       <Text style={styles.label}>Mobile Number: {student.mobileNumber}</Text>
//       {/* Display other details here */}
// 
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={handleEdit}>
//           <Text style={styles.buttonText}>Edit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.button, styles.deleteButton]}
//           onPress={handleDelete}>
//           <Text style={styles.buttonText}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
// 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     width: '48%', // Adjust width as needed
//   },
//   deleteButton: {
//     backgroundColor: '#dc3545',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });
// 
// export default StudentDetailsScreen;
