// FormInputScreen.js

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import the generateRandomUserId function
function generateRandomUserId(length) {
  const characters = '0123456789';
  let userId = '';
  for (let i = 0; i < length; i++) {
    userId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return userId;
}

const FormInputScreen = ({navigation, route}) => {
  const [formData, setFormData] = useState({
    // Add a userId field to the form data

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
      const id = route.params?.id; // Use optional chaining

      if (route.params && route.params.studentData) {
        setFormData(route.params.studentData);
      } else {
        // Clear form data when adding new entry
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
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async () => {
    const errors = handleValidation();
    if (Object.keys(errors).length === 0) {
      try {
        // Generate a random userId
        const userId = generateRandomUserId(4);

        // Set the generated userId to the form data
        const userData = {...formData, userId};

        // Update the form data directly
        // setFormData(userData);

        // Get existing student data from AsyncStorage
        const existingStudentData = await AsyncStorage.getItem('studentData');
        let studentData = existingStudentData
          ? JSON.parse(existingStudentData)
          : [];

        if (route.params && route.params.studentIndex !== undefined) {
          // If updating existing data, replace the data at the specified index
          studentData[route.params.studentIndex] = userData;
        } else {
          // If adding new data, push it to the array
          studentData.push(userData);
        }

        // Save updated student data to AsyncStorage
        await AsyncStorage.setItem('studentData', JSON.stringify(studentData));

        console.log('FormData:', formData);
        console.log('UserData:', userData);
        console.log('StudentData:', studentData);

        navigation.navigate('FormDataScreen');
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
        const lastEntry = JSON.parse(existingStudentData).pop(); // Get the last entered data
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
    // Add validations for other fields...
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
          backgroundColor: '#b5d8e3',
          borderRadius: 15,
          width: '100%',
          padding: 20,
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            backgroundColor: '#53a6be',
            textAlign: 'center',
            borderRadius: 15,
            padding: 10,
            width: '100%',
          }}>
          Enter your details:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={text => handleChange('name', text)}
          value={formData.name}
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          onChangeText={text => handleChange('dateOfBirth', text)}
          value={formData.dateOfBirth}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          onChangeText={text => handleChange('mobileNumber', text)}
          value={formData.mobileNumber}
          keyboardType="numeric" // Numeric keyboard
        />
        <TextInput
          style={styles.input}
          placeholder="Father's Name"
          onChangeText={text => handleChange('fathersName', text)}
          value={formData.fathersName}
        />
        <TextInput
          style={styles.input}
          placeholder="Father's Occupation"
          onChangeText={text => handleChange('fathersOccupation', text)}
          value={formData.fathersOccupation}
        />
        <TextInput
          style={styles.input}
          placeholder="Mother's Name"
          onChangeText={text => handleChange('mothersName', text)}
          value={formData.mothersName}
        />
        <TextInput
          style={styles.input}
          placeholder="Mother's Occupation"
          onChangeText={text => handleChange('mothersOccupation', text)}
          value={formData.mothersOccupation}
        />
        <Picker
          selectedValue={formData.selectedClass}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) =>
            handleChange('selectedClass', itemValue)
          }>
          <Picker.Item label="Select a Class" value="" />
          <Picker.Item label="LKG" value="Class 1" />
          <Picker.Item label="UKG" value="Class 2" />
          <Picker.Item label="1st standard" value="Class 3" />
          <Picker.Item label="2nd standard" value="Class 4" />
          <Picker.Item label="3rd standard" value="Class 5" />
          <Picker.Item label="4th standard" value="Class 6" />
          <Picker.Item label="5th standard" value="Class 7" />
          <Picker.Item label="6th standard" value="Class 8" />
          <Picker.Item label="7th standard" value="Class 9" />
          <Picker.Item label="9th standard" value="Class 10" />
          <Picker.Item label="10th standard" value="Class 11" />
          <Picker.Item label="11th standard" value="Class 12" />
          <Picker.Item label="12th standard" value="Class 13" />
          {/* Add more class options as needed */}
        </Picker>
        <Picker
          selectedValue={formData.selectedGender}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) =>
            handleChange('selectedGender', itemValue)
          }>
          <Picker.Item label="Select a Gender" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>

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
            style={[styles.button, {backgroundColor: '#53a6be'}]}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleGetData}
            style={[styles.button, {backgroundColor: '#53a6be'}]}>
            <Text style={styles.buttonText}>Get Data</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginBottom: 30,
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

export default FormInputScreen;
