// ProfileCardScreen.js

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ProfileCardScreen = ({route, navigation}) => {
  const {studentData} = route.params;

  const handleEdit = () => {
    navigation.navigate('EditInputScreen', {studentData});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }} // Replace with the actual image URL
            style={styles.image}
          />
          <Title style={styles.title}>{studentData.name}</Title>
          <Paragraph style={styles.subTitle}>Basic Info</Paragraph>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Class:</Text>
            <Text style={styles.value}>{studentData.selectedClass}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Mobile Number:</Text>
            <Text style={styles.value}>{studentData.mobileNumber}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Data Of Birth:</Text>
            <Text style={styles.value}>{studentData.dateOfBirth}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Selected Gender:</Text>
            <Text style={styles.value}>{studentData.selectedGender}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Father's Name:</Text>
            <Text style={styles.value}>{studentData.fathersName}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Father's Occupation:</Text>
            <Text style={styles.value}>{studentData.fathersOccupation}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Mother's Name:</Text>
            <Text style={styles.value}>{studentData.mothersName}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Mother's Occupation:</Text>
            <Text style={styles.value}>{studentData.mothersOccupation}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{studentData.address}</Text>
          </View>
          <Paragraph style={styles.subTitle}>Personal Info</Paragraph>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>E-Mail:</Text>
            <Text style={styles.value}>1234@gmail.com</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Category:</Text>
            <Text style={styles.value}>scholarship</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Religion:</Text>
            <Text style={styles.value}>Hindu</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Birth Place:</Text>
            <Text style={styles.value}>Chhattisgarh</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Cast:</Text>
            <Text style={styles.value}>FC</Text>
          </View>
        </Card.Content>
        <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <Text style={styles.buttonText}>
            <FontAwesome5 name="edit" size={30} color="red" />
          </Text>
        </TouchableOpacity>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // backgroundColor: 'black',
  },
  card: {
    width: '100%',
    borderRadius: 10,
    elevation: 4,
  },
  cardContent: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  infoContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 5,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
  },
  value: {
    flex: 2,
  },
  button: {
    // backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileCardScreen;
