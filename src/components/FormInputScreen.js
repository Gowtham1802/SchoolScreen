// FormInputScreen.js

import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormInputScreen = ({navigation, route}) => {
  const [formData, setFormData] = useState({
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

  useEffect(() => {
    if (route.params && route.params.studentData) {
      setFormData(route.params.studentData);
    }
  }, [route.params]);

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const existingStudentData = await AsyncStorage.getItem('studentData');
      let studentData = existingStudentData
        ? JSON.parse(existingStudentData)
        : [];

      if (route.params && route.params.studentIndex !== undefined) {
        // If updating existing data, replace the data at the specified index
        studentData[route.params.studentIndex] = formData;
      } else {
        // If adding new data, push it to the array
        studentData.push(formData);
      }

      await AsyncStorage.setItem('studentData', JSON.stringify(studentData));
      navigation.navigate('FormDataScreen');
    } catch (error) {
      console.error('Error saving form data: ', error);
    }
  };

  const handleGetData = async () => {
    try {
      const existingStudentData = await AsyncStorage.getItem('studentData');
      alert(existingStudentData ? existingStudentData : 'No data found');
    } catch (error) {
      console.error('Error getting form data: ', error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Enter your details:</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            padding: 5,
          }}
          placeholder="Name"
          onChangeText={text => handleChange('name', text)}
          value={formData.name}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            padding: 5,
          }}
          placeholder="Date of Birth"
          onChangeText={text => handleChange('dateOfBirth', text)}
          value={formData.dateOfBirth}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            padding: 5,
          }}
          placeholder="Mobile Number"
          onChangeText={text => handleChange('mobileNumber', text)}
          value={formData.mobileNumber}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            padding: 5,
          }}
          placeholder="Father's Name"
          onChangeText={text => handleChange('fathersName', text)}
          value={formData.fathersName}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            padding: 5,
          }}
          placeholder="Father's Occupation"
          onChangeText={text => handleChange('fathersOccupation', text)}
          value={formData.fathersOccupation}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            padding: 5,
          }}
          placeholder="Mother's Name"
          onChangeText={text => handleChange('mothersName', text)}
          value={formData.mothersName}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            padding: 5,
          }}
          placeholder="Mother's Occupation"
          onChangeText={text => handleChange('mothersOccupation', text)}
          value={formData.mothersOccupation}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            padding: 5,
          }}
          placeholder="Selected Class"
          onChangeText={text => handleChange('selectedClass', text)}
          value={formData.selectedClass}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            padding: 5,
          }}
          placeholder="Selected Gender"
          onChangeText={text => handleChange('selectedGender', text)}
          value={formData.selectedGender}
        />
        <TextInput
          style={{
            height: 80,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            padding: 5,
          }}
          placeholder="Address"
          onChangeText={text => handleChange('address', text)}
          value={formData.address}
          multiline={true}
        />
        <Button title="Submit" onPress={handleSubmit} />
        <Button title="Get Data" onPress={handleGetData} />
      </View>
    </ScrollView>
  );
};

export default FormInputScreen;
