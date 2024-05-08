import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SavedData = []; // Move outside the component to maintain its state
const FormScreen = ({navigation, route}) => {
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

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
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

  // FormScreen.js
  // Assuming you have a function to save data to SavedData with an identifier

  const saveDataToSavedData = async (id, data) => {
    try {
      await AsyncStorage.setItem(`SavedData_${id}`, JSON.stringify(data));
      // Navigation code in some other component
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Call this function when saving data in FormScreen
  // Pass a unique ID along with the data

  // Assuming you have some way to generate a unique ID, like a timestamp
  const uniqueId = Date.now().toString();
  saveDataToSavedData(uniqueId, formData);

  // Navigate to DisplayScreen with the uniqueId
  navigation.navigate('Student List', {id: uniqueId});

  // DisplayScreen.js
  // Retrieve the ID from route.params
  // const {id} = route.params;

  // Use the ID to retrieve the data from SavedData
  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = route.params?.id; // Use optional chaining
        if (id) {
          const data = await AsyncStorage.getItem(`SavedData_${id}`);
          if (data !== null) {
            setDisplayedData(JSON.parse(data));
          }
        } else {
          console.log('No ID found in route params');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      navigation.navigate('Student List', {id: uniqueId});

    };

    fetchData();
  }, [route.params?.id]); // Include route.params.id in the dependency array

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

  // With this setup, each time you navigate to DisplayScreen, it will fetch the corresponding data based on the provided ID and display it.

  const handleSubmit = async () => {
    const errors = handleValidation();
    if (Object.keys(errors).length > 0) {
      console.log('Validation errors:', errors);
      return;
    }

    // Generate random user ID
    const userId = generateRandomUserId(4);

    // Create an object with form data and user ID
    const userData = {
      userId: userId,
      formData: formData,
    };

    // Add the userData object to SavedData array
    SavedData.push(userData);

    // Log SavedData array to console
    console.log('Saved Data:', SavedData);

    // Save form data in AsyncStorage
    await setData('formData', formData);
    navigation.navigate('Students List', {formData});
  };

  const handleDOBChange = text => {
    // You can add more validation logic here if needed
    setFormData({
      ...formData,
      dateOfBirth: text,
    });
  };

  const handleMobileNumberChange = text => {
    // You can add more validation logic here if needed
    setFormData({
      ...formData,
      mobileNumber: text,
    });
  };

  const setData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const getData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.formContainer}>
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
          </View>
        ))}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Date of Birth:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your DOB (DD-MM-YYYY)"
            value={formData.dateOfBirth}
            onChangeText={handleDOBChange}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Mobile Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            value={formData.mobileNumber}
            onChangeText={handleMobileNumberChange}
            keyboardType="numeric" // Ensure numeric keyboard on mobile devices
          />
        </View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={[styles.button, {backgroundColor: '#53a6be'}]}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            const savedData = await getData('formData');
            if (savedData) {
              setFormData(savedData);
            }
            console.log(formData, 'formData');
          }}
          style={[styles.button, {backgroundColor: '#53a6be'}]}>
          <Text style={styles.buttonText}>Get Data</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#b5d8e3',
    paddingBottom: 20,
  },
  formContainer: {
    width: '80%',
    gap: 5,
  },
  title: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: '#53a6be',
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
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
  },
  buttonText: {
    color: '#fff',
  },
});

export default FormScreen;
