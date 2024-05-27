import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
  StatusBar,
  BackHandler,
  Animated,
  RefreshControl,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ClassPeriod from './ClassPeriod';
import DashboardItem from './DashboardItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

const dashboardItems = [
  // Your dashboard items data here
  {
    label: 'MESSAGE',
    icon: require('../../../assets/Box-Images/notification-bell.png'),
  },
  {
    label: 'ATTENDANCE',
    icon: require('../../../assets/Box-Images/attendance.png'),
  },
  {
    label: 'PORTFOLIO',
    icon: require('../../../assets/Box-Images/portfolio.png'),
  },
  {label: 'HOMEWORK', icon: require('../../../assets/Box-Images/homework.png')},
  {label: 'FEES PAYMENT', icon: require('../../../assets/Box-Images/fees.png')},
  {label: 'NOTES', icon: require('../../../assets/Box-Images/notes.png')},
  {
    label: 'DIARY / EVENTS',
    icon: require('../../../assets/Box-Images/diary.png'),
  },
  {
    label: 'TIME TABLE',
    icon: require('../../../assets/Box-Images/timetable.png'),
  },
  {
    label: 'EXAM MARKS',
    icon: require('../../../assets/Box-Images/exammarks.png'),
  },
  {
    label: 'CALENDAR EVENTS',
    icon: require('../../../assets/Box-Images/calendar.png'),
  },
  {
    label: 'MEAL MENU',
    icon: require('../../../assets/Box-Images/mealmenu.png'),
  },
  {
    label: 'DOCUMENTS',
    icon: require('../../../assets/Box-Images/documents.png'),
  },
  {label: 'CHAT', icon: require('../../../assets/Box-Images/live-chat.png')},
  {
    label: 'TRANSPORT',
    icon: require('../../../assets/Box-Images/transportation.png'),
  },
  {
    label: 'HEALTH CARD',
    icon: require('../../../assets/Box-Images/healthcard.png'),
  },
  {
    label: 'MY LEARNING',
    icon: require('../../../assets/Box-Images/learning.png'),
  },
  {
    label: 'PHOTO AND VIDEOS',
    icon: require('../../../assets/Box-Images/syllabus.png'),
  },
  {
    label: 'LEAVE MODULE',
    icon: require('../../../assets/Box-Images/photo&video.png'),
  },
];

const classData = [
  {id: '1', title1: '9:20Am to 10:00Am', title: 'English-th'},
  {id: '2', title1: '10:00Am to 10:40Am', title: 'Language-th'},
  {id: '4', title1: '11:30Am to 12:10Pm', title: 'Mathematics-th'},
  {id: '5', title1: '12:40Pm to 1:20Pm', title: 'Chemistry-th'},
  {id: '6', title1: '1:20Pm to 2:00Pm', title: 'Physics-th'},
  {id: '7', title1: '2:10Pm to 2:50Pm', title: 'Biology-th'},
  {id: '8', title1: '2:50Pm to 3:30Pm', title: 'Social Science-th'},
];

const customAnimation = {
  0: {
    opacity: 0,
    scale: 0.5,
    rotate: '0deg',
  },
  0.5: {
    opacity: 1,
    scale: 1.2,
    rotate: '180deg',
  },
  1: {
    opacity: 1,
    scale: 1,
    rotate: '360deg',
  },
};

const MainScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const modalAnim = useRef(new Animated.Value(-500)).current;
  const navigation = useNavigation();

  const toggleModal = () => {
    if (isModalVisible) {
      closeModal();
    } else {
      openModal();
    }
  };

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(modalAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalAnim, {
      toValue: -500,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Logout', onPress: confirmLogout, style: 'destructive'},
      ],
      {cancelable: false},
    );
  };

  const confirmLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('SignInScreen');
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        // Prevent default back button behavior
        return true;
      },
    );

    return () => backHandler.remove();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#00004F'} />
      <View style={styles.container}>
        {/* Your header and profile components here */}
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleModal}>
            <Icon name="menu" size={22} color="#fff" style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.schoolName}>SMT SCHOOL</Text>
          <TouchableOpacity>
            <Icon
              name="notifications-outline"
              size={22}
              color="#fff"
              style={styles.bellIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              source={require('../../../assets/Gowtham.jpeg')}
              // resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.userName}>Gowtham T</Text>
            <View style={styles.classContainer}>
              <Text style={styles.classText}>X - A</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.classPeriodsContainer}>
        {/* Your class periods components here */}
        <View style={styles.totalbox}>
          <View style={styles.textbox1}>
            <Text style={styles.text1}>Today Class Period</Text>
            <Text style={styles.text2}>(12 Apr 2024)</Text>
          </View>
          <View style={styles.textbox2}>
            <Text style={styles.text1}>Time Table</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.periodsRow}>
            {classData.map(item => (
              <ClassPeriod
                key={item.id}
                periodName={item.title}
                time={item.title1}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.dashboardContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <FlatList
            data={dashboardItems}
            renderItem={({item, index}) => (
              <Animatable.View
                animation={customAnimation}
                duration={2000}
                useNativeDriver>
                <DashboardItem item={item} style={styles.dashboardbox} />
              </Animatable.View>
            )}
            keyExtractor={item => item.label}
            numColumns={3}
            columnWrapperStyle={styles.row}
            scrollEnabled={false}
          />
          {/* Your footer component here */}
          <View style={styles.footerContainer}>
            <View>
              <Text style={styles.footerTitle}>Start Online Class</Text>
              <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>

            <Image
              source={require('../../../assets/onlineclass.png')}
              style={styles.footerImage}
            />
          </View>
        </ScrollView>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="none"
        transparent={true}
        onRequestClose={toggleModal}>
        {/* Your modal component here */}
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={closeModal}>
          <Animated.View
            style={[
              styles.modalContainer,
              {transform: [{translateX: modalAnim}]},
            ]}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPress={toggleModal}
                style={styles.closeButton}>
                <Icon name="close" size={30} color="#000" />
              </TouchableOpacity>
              <View style={styles.profileSection}>
                <Image
                  style={styles.modalProfileImage}
                  source={require('../../../assets/Gowtham.jpeg')}
                />
                <Text style={styles.profileName}>Gowtham tK</Text>
                <Text style={styles.viewProfile}>View Profile</Text>
              </View>

              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.modalItemsContainer}>
                {dashboardItems.map((item, index) => (
                  <TouchableOpacity key={index} style={styles.modalItem}>
                    <Image source={item.icon} style={styles.modalItemIcon} />
                    <Text style={styles.modalItemText}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              {/* <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}>
                <Text style={styles.logoutText}>Log Out</Text>
                <Icon name="log-out-outline" size={20} color="#000" />
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <View style={styles.iconContainer}>
                  <Text style={styles.buttonText}>LOGOUT</Text>
                  <Icon name="log-out-outline" size={24} color="#fff" />
                </View>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles here
  container: {
    height: 181,
    backgroundColor: '#00004F',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    top: 10,
  },
  menuIcon: {
    marginLeft: 5,
  },
  schoolName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bellIcon: {
    marginRight: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    bottom: 10,
    marginLeft: 8,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 15,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  classContainer: {
    backgroundColor: '#F1C40F',
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
    width: 70,
  },
  classText: {
    color: '#000',
    fontSize: 16,
  },
  classPeriodsContainer: {
    height: 90,
  },
  totalbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbox1: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  textbox2: {
    marginRight: 10,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    color: 'gray',
  },
  scrollView: {
    height: 100,
  },
  periodsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  box: {
    width: 155,
    backgroundColor: '#00004F',
    margin: 3,
    // gap: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  title1: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    color: 'white',
    fontSize: 11,
    textTransform: 'uppercase',
  },
  dashboardContainer: {
    marginTop: 10,
    backgroundColor: '#CCE6FF',
    flex: 1,
    paddingHorizontal: 15,
    // padding: 5,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  dashboardbox: {
    padding: 10,
  },
  footerContainer: {
    width: '96%',
    height: 100,
    left: -24,
    backgroundColor: 'white',
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 5,
    bottom: 4,
  },
  footerTitle: {
    fontSize: 18,
    color: '#00004F',
  },
  footerButton: {
    width: 90,
    backgroundColor: '#516f9c',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  footerButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  footerImage: {
    width: 120,
    height: 100,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  onlineClassImage: {
    width: 70,
    top: 10,
    height: 70,
    right: 30,
    position: 'absolute',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    padding: 20,
    position: 'absolute',
  },
  modalContent: {
    flex: 1,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    top: -10,
  },
  viewProfile: {
    color: '#3498DB',
    top: 20,
    left: -95,
  },
  modalItemsContainer: {
    marginTop: 20,
    maxHeight: '80%',
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalItemIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  modalItemText: {
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#344968', // Button background color (you can change this)
    height: 30, // Button height
    width: '38%', // Button width
    borderRadius: 8, // Rounded corners
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    marginVertical: 10,
    // Android shadow
    elevation: 5,
    // marginLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row', // Arrange icon and text horizontally
    alignItems: 'center', // Center vertically within the row
    gap: 10,
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 13, // Text size
    fontWeight: 'bold', // Text weight
    marginLeft: 10, // Space between icon and text
  },
});

export default MainScreen;
