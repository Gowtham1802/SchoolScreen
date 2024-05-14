import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormDataScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Use useRef to create a mutable object for studentData
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
        setFilteredData(parsedStudentData);
      }
    } catch (error) {
      console.error('Error loading student data: ', error);
    }
  };

  const handleEdit = index => {
    navigation.navigate('FormInputScreen', {
      studentIndex: index,
      studentData: studentDataRef.current[index],
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
      const updatedData = studentDataRef.current.filter((_, i) => i !== index);
      await AsyncStorage.setItem('studentData', JSON.stringify(updatedData));
      studentDataRef.current = updatedData;
      setFilteredData(updatedData);
    } catch (error) {
      console.error('Error deleting entry: ', error);
    }
  };

  const handleSearch = query => {
    setSearchQuery(query);
    const filtered = studentDataRef.current.filter(student => {
      return (
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.mobileNumber.toLowerCase().includes(query.toLowerCase()) ||
        student.selectedClass.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchQuery}
      />
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={styles.itemContainer}>
              <Text style={styles.title}>Student List</Text>
              <Text style={styles.label}>Name: {item.name}</Text>
              <Text style={styles.label}>
                Date of Birth: {item.dateOfBirth}
              </Text>
              <Text style={styles.label}>
                Mobile Number: {item.mobileNumber}
              </Text>
              <Text style={styles.label}>
                Father's Name: {item.fathersName}
              </Text>
              <Text style={styles.label}>
                Father's Occupation: {item.fathersOccupation}
              </Text>
              <Text style={styles.label}>
                Mother's Name: {item.mothersName}
              </Text>
              <Text style={styles.label}>
                Mother's Occupation: {item.mothersOccupation}
              </Text>
              <Text style={styles.label}>
                Selected Class: {item.selectedClass}
              </Text>
              <Text style={styles.label}>
                Selected Gender: {item.selectedGender}
              </Text>
              <Text style={styles.label}>Address: {item.address}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleEdit(index)}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => handleDelete(index)}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text>No matching data found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: '#53a6be',
    textAlign: 'center',
    borderRadius: 10,
    padding: 5,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
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
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  button1: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FormDataScreen;
