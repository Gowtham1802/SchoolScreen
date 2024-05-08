import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DisplayScreen = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [savedData, setSavedData] = useState([]);

  const handleEditField = () => {
    navigation.navigate('FormScreen');
  };

  const handleDeleteField = () => {
    // Implement deletion logic
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (savedData) => {
    try {
      const value = await AsyncStorage.getItem(savedData);
      const parsedData = data.map(value => JSON.parse(value));
      setSavedData(parsedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const searchInData = () => {
    const results = savedData.filter(item => {
      return Object.values(item).some(value =>
        value.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    });
    setSearchResults(results);
  };

  const renderFields = () => {
    const dataToRender = searchResults.length > 0 ? searchResults : savedData;
    return formFields.map((field, index) => (
      <View key={index} style={styles.fieldRow}>
        <Text style={styles.fieldLabel}>{field.label}:</Text>
        <Text style={styles.fieldValue}>
          {/* Render corresponding value from saved data */}
          {dataToRender.length > 0 ? dataToRender[0][field.key] : ''}
        </Text>
      </View>
    ));
  };

  const formFields = [
    {key: 'name', label: 'Name'},
    {key: 'selectedClass', label: 'Selected Class'},
    {key: 'dateOfBirth', label: 'Date of Birth'},
    {key: 'mobileNumber', label: 'Mobile Number'},
    {key: 'gender', label: 'Gender'},
    {key: 'fathersName', label: "Father's Name"},
    {key: 'fathersOccupation', label: "Father's Occupation"},
    {key: 'mothersName', label: "Mother's Name"},
    {key: 'mothersOccupation', label: "Mother's Occupation"},
    {key: 'address', label: 'Address'},
  ];

  return (
    <View>
      <View style={styles.container1}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
            onEndEditing={searchInData}
          />
        </View>
        <View style={styles.resultsContainer}>
          {searchResults.map((result, index) => (
            <Text key={index} style={styles.resultText}>
              {result}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Student List</Text>
        {renderFields()}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleEditField}
            style={[styles.editDeleteButton, {backgroundColor: '#007bff'}]}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDeleteField}
            style={[styles.editDeleteButton, {backgroundColor: '#ff000d'}]}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b5d8e3',
    borderWidth: 10,
    borderColor: '#fff',
    padding: 15,
    gap: 10,
  },
  title: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: '#53a6be',
    textAlign: 'center',
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  fieldLabel: {
    flex: 1,
    fontSize: 16,
  },
  fieldValue: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  editDeleteButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  container1: {
    backgroundColor: '#fff',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  resultsContainer: {
    flex: 1,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DisplayScreen;
