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
    let sanitizedValue = value;

    // For fields that should only allow text, spaces, and dots
    if (
      [
        'name',
        'fathersName',
        'fathersOccupation',
        'mothersName',
        'mothersOccupation',
      ].includes(key)
    ) {
      // Remove any characters that are not letters, spaces, or dots
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

        navigation.navigate('DataFilterScreen');
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
            borderRadius: 15,
            width: '100%',
            padding: 20,
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
            }}>
            Enter Your Details
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={text => handleChange('name', text)}
            value={formData.name}
          />
          <TextInput
            style={styles.input}
            placeholder="Date of Birth (DD-MM-YYYY)"
            onChangeText={text => handleChange('dateOfBirth', text)}
            value={formData.dateOfBirth}
            keyboardType="numeric"
          />
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
  input: {
    height: 60,
    marginVertical: 10,
    padding: 5,
    width: '100%',
    backgroundColor: '#fff',
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
