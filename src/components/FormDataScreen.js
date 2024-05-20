import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';

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

  const renderStudentItem = ({item}) => {
    const genderImage =
      item.selectedGender.toLowerCase() === 'male'
        ? 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1716015895~exp=1716016495~hmac=8a75d1ef9eb00a0173acacf4fd5e54206a62f694f877e41cdbd84f6b56c8d87f'
        : 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1716016890~exp=1716020490~hmac=b82593c7c19116ca7f2e2d447d0484417132a846d0b861c43fd0b6e11708446c&w=996';

    return (
      <View style={styles.itemContainer}>
        <StatusBar backgroundColor="#344968" barStyle="light-content" />
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleViewProfile(item)}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: genderImage,
              }}
              style={styles.avatar}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemClass}>
              {item.selectedClass} - {item.selectedSection}
            </Text>
            <Text style={styles.itemMobile}>{item.mobileNumber}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteStudent(item.userId)}>
          <FontAwesome5 name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  const handleSearch = () => {
    const filteredData = studentData.filter(student => {
      const name = student.name.toLowerCase();
      const selectedClass = student.selectedClass.toLowerCase();
      const mobileNumber = student.mobileNumber.toLowerCase();
      const query = searchQuery.toLowerCase();
      return (
        name.includes(query) ||
        selectedClass.includes(query) ||
        mobileNumber.includes(query)
      );
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
      {/* <Text style={styles.header}>Student List</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Search by name, class, or mobile number"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={handleSearch()}
        renderItem={renderStudentItem}
        keyExtractor={item => item.userId}
        showsVerticalScrollIndicator={false}
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
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 60,
    height: 66,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemClass: {
    fontSize: 14,
    color: 'green',
  },
  itemMobile: {
    fontSize: 14,
    color: '#3dad97',
  },
  deleteButton: {
    marginLeft: 20,
    right: 5,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default FormDataScreen;
