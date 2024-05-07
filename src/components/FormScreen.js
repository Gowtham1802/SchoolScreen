import React, {useEffect, useState} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  useEffect(() => {
    // Load data from AsyncStorage when component mounts
    getData('formData').then(savedData => {
      if (savedData) {
        setFormData(savedData);
      }
    });
  }, []);

  // Function to handle validation
  const handleValidation = () => {
    const errors = {};

    // Validation logic for each field
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

  // Function to handle form submission
  const handleSubmit = async () => {
    // Validate the form
    const errors = handleValidation();

    // If there are errors, prevent form submission
    if (Object.keys(errors).length > 0) {
      console.log('Validation errors:', errors);
      return; // Don't proceed with form submission
    }

    // Save form data to AsyncStorage
    await setData('formData', formData);

    // Navigate to the DisplayScreen and pass form data
    navigation.navigate('Students List', {formData});
  };

  // Function to save data to AsyncStorage
  const setData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Form fields array
  const formFields = [
    {
      label: 'Name:',
      field: 'name',
      type: 'input',
      placeholder: 'Enter your name',
    },
    {
      label: 'Class:',
      field: 'selectedClass',
      type: 'picker',
      options: [
        'Class 1',
        'Class 2',
        'Class 3',
        'Class 4',
        'Class 5',
        'Class 6',
        'Class 7',
        'Class 8',
        'Class 9',
        'Class 10',
        'Class 11',
        'Class 12',
      ],
    },
    {
      label: 'Date of Birth:',
      field: 'dateOfBirth',
      type: 'input',
      placeholder: 'Enter your date of birth (DD-MM-YYYY)',
    },
    {
      label: 'Mobile Number:',
      field: 'mobileNumber',
      type: 'input',
      placeholder: 'Enter your mobile number',
    },
    {
      label: 'Gender:',
      field: 'selectedGender',
      type: 'picker1',
      options: ['male', 'female'],
    },
    {
      label: "Father's Name:",
      field: 'fathersName',
      type: 'input',
      placeholder: "Enter your father's name",
    },
    {
      label: "Father's Occupation:",
      field: 'fathersOccupation',
      type: 'input',
      placeholder: "Enter your father's occupation",
    },
    {
      label: "Mother's Name:",
      field: 'mothersName',
      type: 'input',
      placeholder: "Enter your mother's name",
    },
    {
      label: "Mother's Occupation:",
      field: 'mothersOccupation',
      type: 'input',
      placeholder: "Enter your mother's occupation",
    },
    {
      label: 'Address:',
      field: 'address',
      type: 'textarea',
      placeholder: 'Enter your address',
    },
  ];

  // Function to load data from AsyncStorage
  const getData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      console.log(' AsyncStorage', value);

      if (value !== null) {
        // Data found, parse and return
        return JSON.parse(value);
      } else {
        console.log('No data found for key:', key);
        return null;
      }
    } catch (error) {
      console.error('Error loading data:', error);
      return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.formContainer}>
        {/* Iterate over formFields array */}
        {formFields.map((field, index) => (
          <View key={index}>
            <Text style={styles.label}>{field.label}</Text>
            {field.type === 'input' && (
              <TextInput
                style={styles.input}
                placeholder={field.placeholder}
                value={formData[field.field]}
                onChangeText={text => handleInputChange(field.field, text)}
              />
            )}
            {field.type === 'picker' && (
              <Picker
                selectedValue={formData[field.field]}
                style={styles.input}
                onValueChange={itemValue =>
                  handleInputChange(field.field, itemValue)
                }>
                <Picker.Item label="Select Class" value="" />
                {field.options.map((option, idx) => (
                  <Picker.Item key={idx} label={option} value={option} />
                ))}
              </Picker>
            )}
            {field.type === 'textarea' && (
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder={field.placeholder}
                multiline
                value={formData[field.field]}
                onChangeText={text => handleInputChange(field.field, text)}
              />
            )}
            {field.type === 'picker1' && (
              <Picker
                selectedValue={formData[field.field]}
                style={styles.input}
                onValueChange={itemValue =>
                  handleInputChange(field.field, itemValue)
                }>
                <Picker.Item label="Select Gender" value="" />
                {field.options.map((option, idx) => (
                  <Picker.Item key={idx} label={option} value={option} />
                ))}
              </Picker>
            )}
            {field.type === 'radio' && (
              <View style={styles.gender}>
                {field.options.map((option, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={[
                      styles.radioButton,
                      formData[field.field] === option &&
                        styles.radioButtonSelected,
                    ]}
                    onPress={() => handleInputChange(field.field, option)}>
                    <Text style={styles.radioText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        ))}
        {/* Submit button */}
        <Button title="Submit" onPress={handleSubmit} />
        <Button
          title="Get Data"
          onPress={async () => {
            const savedData = await getData('formData');
            if (savedData) {
              setFormData(savedData);
            }
            console.log(formData, 'formData');
          }}
        />
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
    paddingBottom: 20,
  },
  formContainer: {
    width: '80%',
    gap: 5,
    // alignItems: 'center',
  },
  title: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginTop: 10,
  },
  label1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    // alignItems: 'center',
  },
  input: {
    width: '100%',
    // height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default FormScreen;
