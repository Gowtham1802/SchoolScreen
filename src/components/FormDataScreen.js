import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesomeIcon';
// // import {faTrash} from '@fortawesome/free-solid-svg-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FormDataScreen = ({navigation}) => {
  const [studentData, setStudentData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getStudentData();
    });

    return unsubscribe;
  }, [navigation]);

  const getStudentData = async () => {
    try {
      const existingStudentData = await AsyncStorage.getItem('studentData');
      if (existingStudentData) {
        setStudentData(JSON.parse(existingStudentData));
      } else {
        setStudentData([]);
      }
    } catch (error) {
      console.error('Error getting student data: ', error);
    }
  };

  const handleViewProfile = student => {
    navigation.navigate('ProfileCardScreen', {studentData: student});
  };

  const renderStudentItem = ({item}) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleViewProfile(item)}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemText}>{item.selectedClass}</Text>
        <Text style={styles.itemText}>{item.mobileNumber}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteStudent(item.userId)}>
        <FontAwesome5 name="trash" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  const handleSearch = () => {
    // Filter student data based on searchQuery
    const filteredData = studentData.filter(student => {
      const name = student.name.toLowerCase();
      const query = searchQuery.toLowerCase();
      return name.includes(query);
    });
    return filteredData;
  };

  const handleDeleteStudent = async userId => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this student?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              const updatedStudentData = studentData.filter(
                student => student.userId !== userId,
              );
              await AsyncStorage.setItem(
                'studentData',
                JSON.stringify(updatedStudentData),
              );
              setStudentData(updatedStudentData);
            } catch (error) {
              console.error('Error deleting student data: ', error);
            }
          },
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student List</Text>
      <TextInput
        style={styles.input}
        placeholder="Search by name"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={handleSearch()} // Render filtered student data
        renderItem={renderStudentItem}
        keyExtractor={item => item.userId}
        contentContainerStyle={
          studentData.length === 0 && {flexGrow: 1, justifyContent: 'center'}
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>No student data found</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  item: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  // deleteButton: {
  //   backgroundColor: 'red',
  //   padding: 10,
  //   borderRadius: 5,
  // },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default FormDataScreen;
