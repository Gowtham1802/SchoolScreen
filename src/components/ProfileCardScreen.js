import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Custom component for rendering each section
const InfoSection = ({label, value, selected}) => (
  <View style={[styles.infoContainer, selected && styles.selectedSection]}>
    <Text style={[styles.label, selected && styles.selectedLabel]}>
      {label}
    </Text>
    <Text style={[styles.value, selected && styles.selectedValue]}>
      {value}
    </Text>
  </View>
);

const ProfileCardScreen = ({route, navigation}) => {
  const {studentData} = route.params;

  // Function to calculate age based on date of birth
  const calculateAge = dob => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Function to get the picture URI based on selected gender
  const getPictureUri = gender => {
    if (gender === 'Male') {
      return 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1716015895~exp=1716016495~hmac=8a75d1ef9eb00a0173acacf4fd5e54206a62f694f877e41cdbd84f6b56c8d87f';
    } else if (gender === 'Female') {
      return 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1716016890~exp=1716020490~hmac=b82593c7c19116ca7f2e2d447d0484417132a846d0b861c43fd0b6e11708446c&w=996';
    } else {
      return 'https://example.com/default-picture.jpg';
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#344968" barStyle="light-content" />
      <Card style={styles.card}>
        <View style={styles.header}>
          <View style={styles.smallCard}>
            <Image
              source={{
                uri: getPictureUri(studentData.selectedGender),
              }}
              style={styles.image}
            />
            <Title style={styles.title}>{studentData.name}</Title>
          </View>
        </View>
        <Card.Content style={styles.cardContent}>
          <Paragraph style={styles.subTitle}>Basic Info</Paragraph>
          <InfoSection
            label="Class                       :"
            value={studentData.selectedClass}
            selected={false}
          />
          <InfoSection
            label="Section                    :"
            value={studentData.selectedSection}
            selected={false}
          />
          <InfoSection
            label="Mobile Number         :"
            value={studentData.mobileNumber}
            selected={false}
          />
          <InfoSection
            label="Date Of Birth            :"
            value={new Date(studentData.dateOfBirth).toLocaleDateString()}
            selected={false}
          />
          <InfoSection
            label="Age                          :"
            value={calculateAge(studentData.dateOfBirth)}
            selected={false}
          />
          <InfoSection
            label="Selected Gender       :"
            value={studentData.selectedGender}
            selected={false}
          />
          <InfoSection
            label="Father's Name          :"
            value={studentData.fathersName}
            selected={false}
          />
          <InfoSection
            label="Father's Occupation  :"
            value={studentData.fathersOccupation}
            selected={false}
          />
          <InfoSection
            label="Mother's Name         :"
            value={studentData.mothersName}
            selected={false}
          />
          <InfoSection
            label="Mother's Occupation :"
            value={studentData.mothersOccupation}
            selected={false}
          />
          <InfoSection
            label="Address                   :"
            value={studentData.address}
            selected={true}
          />
          <Text style={styles.line}></Text>
          <Paragraph style={styles.subTitle1}>Personal Info</Paragraph>
          <InfoSection
            label="E-Mail                      :"
            value={studentData.email}
            selected={false}
          />
          <InfoSection
            label="Category                  :"
            value={studentData.category}
            selected={false}
          />
          <InfoSection
            label="Religion                    :"
            value={studentData.religion}
            selected={false}
          />
          <InfoSection
            label="Birth Place               :"
            value={studentData.birthPlace}
            selected={false}
          />
          <InfoSection
            label="Cast                         :"
            value={studentData.cast}
            selected={true}
          />
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  card: {
    width: '100%',
    borderRadius: 10,
    elevation: 4,
  },
  header: {
    width: '100%',
    position: 'relative',
  },
  smallCard: {
    backgroundColor: '#344968',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  cardContent: {
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 50,
    borderWidth: 0.2,
    borderColor: '#fff',
    marginBottom: 20,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
    color: '#344968',
    marginTop: 30,
    fontFamily: 'DancingScript-SemiBold',
  },
  subTitle1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
    color: '#344968',
    marginTop: 30,
  },
  infoContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 5,
    alignItems: 'center',
  },
  line: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  selectedSection: {},
  label: {
    flex: 1,
    fontWeight: 'bold',
    paddingRight: 5,
    color: 'black',
  },
  selectedLabel: {},
  value: {
    flex: 1,
    textAlign: 'left',
    paddingLeft: 5,
  },
  selectedValue: {},
});

export default ProfileCardScreen;
