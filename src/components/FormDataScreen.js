// FormDataScreen.js

import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TextInput, Button, Alert} from 'react-native';
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
        // student.dateOfBirth.toLowerCase().includes(query.toLowerCase()) ||
        student.mobileNumber.toLowerCase().includes(query.toLowerCase()) ||
        // student.fathersName.toLowerCase().includes(query.toLowerCase()) ||
        // student.fathersOccupation.toLowerCase().includes(query.toLowerCase()) ||
        // student.mothersName.toLowerCase().includes(query.toLowerCase()) ||
        // student.mothersOccupation.toLowerCase().includes(query.toLowerCase()) ||
        student.selectedClass.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
          padding: 5,
        }}
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchQuery}
      />
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View>
              <Text>Name: {item.name}</Text>
              <Text>Date of Birth: {item.dateOfBirth}</Text>
              <Text>Mobile Number: {item.mobileNumber}</Text>
              <Text>Father's Name: {item.fathersName}</Text>
              <Text>Father's Occupation: {item.fathersOccupation}</Text>
              <Text>Mother's Name: {item.mothersName}</Text>
              <Text>Mother's Occupation: {item.mothersOccupation}</Text>
              <Text>Selected Class: {item.selectedClass}</Text>
              <Text>Selected Gender: {item.selectedGender}</Text>
              <Text>Address: {item.address}</Text>
              <Button title="Edit" onPress={() => handleEdit(index)} />
              <Button title="Delete" onPress={() => handleDelete(index)} />
              <Text>------------</Text>
            </View>
          )}
        />
      ) : (
        <Text>No matching data found.</Text>
      )}
    </View>
  );
};

export default FormDataScreen;
