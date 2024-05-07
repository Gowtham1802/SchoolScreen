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

const DisplayScreen = ({route}) => {
  const {formData} = route.params;
  const navigation = useNavigation();
  const [displayedData, setDisplayedData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setDisplayedData(formData);
  }, [formData]);

  const removeData = async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data:', error);
    }
  };

  const handleEditField = field => {
    navigation.navigate('FormScreen', {
      fieldToEdit: field,
      currentValue: displayedData[field] || '', // Pass empty string if field is undefined
    });
  };

  const handleDeleteField = field => {
    const updatedData = {...displayedData, [field]: ''};
    setDisplayedData(updatedData);
    removeData('formData', displayedData);
  };

  const handleSearch = () => {
    const results = [];
    if (formData) {
      if (formData.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push(formData.name);
      }
      if (
        formData.selectedClass.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        results.push(formData.selectedClass);
      }
      if (formData.mobileNumber.includes(searchTerm)) {
        results.push(formData.mobileNumber);
      }
    }
    setSearchResults(results);
  };

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

  const formFields = [
    {
      id: generateRandomUserId(5),
      key: 'name',
      label: 'Name',
    },
    {
      id: generateRandomUserId(5),
      key: 'selectedClass',
      label: 'Selected Class',
    },
    {
      id: generateRandomUserId(5),
      key: 'dateOfBirth',
      label: 'Date of Birth',
    },
    {
      id: generateRandomUserId(5),
      key: 'mobileNumber',
      label: 'Mobile Number',
    },
    {
      id: generateRandomUserId(5),
      key: 'gender',
      label: 'Gender',
    },
    {
      id: generateRandomUserId(5),
      key: 'fathersName',
      label: "Father's Name",
    },
    {
      id: generateRandomUserId(5),
      key: 'fathersOccupation',
      label: "Father's Occupation",
    },
    {
      id: generateRandomUserId(5),
      key: 'mothersName',

      label: "Mother's Name",
    },
    {
      id: generateRandomUserId(5),
      key: 'mothersOccupation',
      label: "Mother's Occupation",
    },
    {
      id: generateRandomUserId(5),
      key: 'address',
      label: 'Address',
    },
  ];

  console.log(formFields);

  return (
    <View>
      <View style={styles.container1}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
          />
          <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
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
        {formFields.map((field, index) => (
          <View
            key={index}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{flex: 1, fontSize: 16}}>
              {field.label}: {displayedData[field.key] || 'No value'}{' '}
              {/* Show placeholder if no value */}
            </Text>
            <TouchableOpacity
              onPress={() => handleEditField(field.key)}
              style={styles.editButton}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleDeleteField(field.key)}
              style={styles.deleteButton}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0ED2F7',
    padding: 10,
    gap: 10,
  },
  editButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#007bff',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  deleteButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ff000d',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  icon: {
    color: 'white',
    fontSize: 200,
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
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
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
