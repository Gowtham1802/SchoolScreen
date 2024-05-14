import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DataFilterScreen({navigation}) {
  const [studentData, setStudentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchClass, setSearchClass] = useState('');
  const [searchMobile, setSearchMobile] = useState('');

  const studentDataRef = useRef([]);

  useEffect(() => {
    loadStudentData();
  }, []);

  const loadStudentData = async () => {
    try {
      const storedStudentData = await AsyncStorage.getItem('studentData');
      if (storedStudentData !== null) {
        const parsedStudentData = JSON.parse(storedStudentData);
        studentDataRef.current = parsedStudentData;
        setStudentData(parsedStudentData);
        setFilteredData(parsedStudentData);
      }
    } catch (error) {
      console.error('Error loading student data: ', error);
    }
  };

  const handleSearch = () => {
    // Filter the data based on search criteria
    const filtered = studentData.filter(student => {
      // Convert both the selected class and student's class to lowercase for case-insensitive comparison
      const selectedClassLower = searchClass.toLowerCase();
      const studentClassLower = student.selectedClass.toLowerCase();

      // Check if the selected class matches the student's class
      return (
        student.name.toLowerCase().includes(searchName.toLowerCase()) &&
        (selectedClassLower === '' ||
          studentClassLower.includes(selectedClassLower)) &&
        student.mobileNumber.toLowerCase().includes(searchMobile.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

  // Function to validate name input
  const validateNameInput = text => {
    // Allow only letters, dots, and spaces
    return /^[a-zA-Z .]*$/.test(text);
  };

  // Function to validate mobile number input
  const validateMobileInput = text => {
    // Allow only numbers and exactly 10 digits
    return /^[0-9]{0,10}$/.test(text);
  };

  const handleItemPress = item => {
    // Navigate to FormDataScreen with selected data
    navigation.navigate('FormDataScreen', {studentData: item});
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={text => {
            if (validateNameInput(text)) {
              setSearchName(text);
            }
          }}
          value={searchName}
        />
        <Picker
          style={styles.input}
          selectedValue={searchClass}
          onValueChange={(itemValue, itemIndex) => setSearchClass(itemValue)}>
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
        <TextInput
          style={styles.input}
          placeholder="Mobile"
          onChangeText={text => {
            if (validateMobileInput(text)) {
              setSearchMobile(text);
            }
          }}
          value={searchMobile}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button} onPress={handleShow}>
        <Text style={styles.buttonText}>Show</Text>
      </TouchableOpacity> */}
      {/* Render the list of data */}
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <View style={styles.itemContainer}>
              <Text style={styles.label}>Name: {item.name}</Text>
              <Text style={styles.label}>Class: {item.selectedClass}</Text>
              <Text style={styles.label}>
                Mobile Number: {item.mobileNumber}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DataFilterScreen;
