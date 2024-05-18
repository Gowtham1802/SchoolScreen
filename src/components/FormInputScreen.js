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
        console.log('StudentData:', studentData);

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
        showsVerticalScrollIndicator={false}
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
            keyboardType="numeric"
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
    </>
  );
};

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
