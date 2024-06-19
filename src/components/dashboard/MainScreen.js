import React, {useEffect, useState} from 'react';
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
  Alert,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ClassPeriod from './ClassPeriod';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchProfile,
  fetchTimetable,
  fetchMenuarry,
  logout,
} from '../redux/authSlice'; // import your redux actions
import * as Animatable from 'react-native-animatable';

const MainScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {
    user,
    profile,
    timetable = [],
    menuarry,
    loading,
    error,
  } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchTimetable());
    dispatch(fetchMenuarry());

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );

    return () => backHandler.remove();
  }, [dispatch]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            try {
              dispatch(logout());
              console.log('dispatch', dispatch);
              navigation.navigate('SignInScreen');
            } catch (error) {
              console.error('Error clearing async storage:', error);
            }
          },
        },
      ],
      {cancelable: false},
    );
  };

  const handlePress = item => {
    console.log('Item pressed:', item);
    // Handle item press action here
  };

  const renderItem = ({item}) => (
    <Animatable.View animation="fadeInUp" duration={1500} delay={500}>
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={getIcon(item.modulename)} style={styles.icon} />
        <Text style={styles.label}>{item.modulename}</Text>
      </TouchableOpacity>
    </Animatable.View>
  );

  const getIcon = modulename => {
    switch (modulename) {
      case 'Message':
        return require('../../../assets/Box-Images/notification-bell.png');
      case 'Attendance':
        return require('../../../assets/Box-Images/attendance.png');
      case 'Portfolio':
        return require('../../../assets/Box-Images/portfolio.png');
      case 'Homework':
        return require('../../../assets/Box-Images/homework.png');
      case 'Fees Payment':
        return require('../../../assets/Box-Images/fees.png');
      case 'Notes':
        return require('../../../assets/Box-Images/notes.png');
      case 'Diary / Events':
        return require('../../../assets/Box-Images/diary.png');
      case 'Time Table':
        return require('../../../assets/Box-Images/timetable.png');
      case 'Exam Marks':
        return require('../../../assets/Box-Images/exammarks.png');
      case 'Calendar Events':
        return require('../../../assets/Box-Images/calendar.png');
      case 'Meal Menu':
        return require('../../../assets/Box-Images/mealmenu.png');
      case 'Documents':
        return require('../../../assets/Box-Images/documents.png');
      case 'Chat':
        return require('../../../assets/Box-Images/live-chat.png');
      case 'Transport':
        return require('../../../assets/Box-Images/transportation.png');
      case 'Health Card':
        return require('../../../assets/Box-Images/healthcard.png');
      case 'My Learning':
        return require('../../../assets/Box-Images/learning.png');
      case 'Photo And Videos':
        return require('../../../assets/Box-Images/photo&video.png');
      case 'Leave Module':
        return require('../../../assets/Box-Images/syllabus.png');
      default:
        return require('../../../assets/Box-Images/photo&video.png');
    }
  };

  const getCurrentDate = () => {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();
    const month = date.toLocaleString('default', {month: 'long'});
    const year = date.getFullYear();

    const currentDate = `${dayOfMonth} ${month} ${year}`;

    return {currentDate, dayOfWeek};
  };

  const {currentDate, dayOfWeek} = getCurrentDate();
  const todayTimetable =
    timetable && timetable.length > 0
      ? timetable.filter(item => item.day_of_week === dayOfWeek)
      : [];

  const onRefresh = async () => {
    setRefreshing(true);
    dispatch(fetchProfile());
    dispatch(fetchTimetable());
    dispatch(fetchMenuarry());
    setRefreshing(false);
  };

  if (loading || !profile) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const classDetail = profile.classDetail;

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#00004F'} />
      <View style={styles.container}>
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
          <Image
            style={styles.profileImage}
            source={{uri: profile.user.photo}}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.userName}>{profile.user.firstname}</Text>
            <View style={styles.classContainer}>
              <Text style={styles.classText}>
                {classDetail && classDetail.semester && classDetail.division
                  ? `${classDetail.semester} - ${classDetail.division}`
                  : ''}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.classPeriodsContainer}>
        <View style={styles.totalbox}>
          <View style={styles.textbox1}>
            <Text style={styles.text1}>Today Class Period</Text>
            <Text style={styles.text2}>({currentDate})</Text>
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
            {todayTimetable.map((item, index) => (
              <ClassPeriod
                key={index}
                periodName={item.subject}
                time={`${item.from_time} to ${item.to_time}`}
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
            data={menuarry}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            columnWrapperStyle={styles.row}
            scrollEnabled={false}
            style={styles.box}
          />
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
        transparent={false}
        onRequestClose={toggleModal}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalContainer}
          onPress={toggleModal}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Icon name="close" size={30} color="#000" />
            </TouchableOpacity>
            <View style={styles.profileSection}>
              <View>
                <Image
                  style={styles.modalProfileImage}
                  source={{uri: profile.user.photo}}
                />
              </View>
              <View>
                <Text style={styles.profileName}>{profile.user.firstname}</Text>
                <TouchableOpacity>
                  <Text style={styles.viewProfile}>View Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.line}></Text>
            <FlatList
              data={menuarry}
              renderItem={({item, index}) => (
                <TouchableOpacity>
                  <View key={index} style={styles.menuItem}>
                    <Image
                      source={getIcon(item.modulename)}
                      style={styles.menuItemIcon}
                    />
                    <Text style={styles.menuItemText}>{item.modulename}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              style={styles.modalItemsContainer}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
              <View style={styles.iconContainer}>
                <Text style={styles.buttonText}>LOGOUT</Text>
                <Icon name="log-out-outline" size={24} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 181,
    backgroundColor: '#00004F',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    top: 10,
  },
  menuIcon: {
    marginLeft: 8,
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
    alignItems: 'center',
    // marginBottom: 70,
    left: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 20,
    bottom: 10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
    bottom: 14,
    right: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    bottom: 14,
    right: 10,
  },
  classContainer: {
    backgroundColor: '#F1C40F',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
    width: 80,
    bottom: 14,
    right: 10,
  },
  totalbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbox1: {
    flexDirection: 'row',
    marginLeft: 18,
  },
  textbox2: {
    marginRight: 10,
  },
  text1: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    color: 'gray',
  },
  classText: {
    color: '#000',
    fontSize: 16,
  },
  classPeriodsContainer: {
    height: 90,
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
  dashboardContainer: {
    marginTop: 10,
    backgroundColor: '#CCE6FF',
    flex: 1,
    paddingHorizontal: 15,
    // borderWidth: 5,
  },
  box: {
    // borderWidth: 5,
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
  modalContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    bottom: 10,
    left: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalProfileImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#344968',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    // top: -18,
    color: '#344968',
  },
  viewProfile: {
    color: 'black',
    // top: 10,
    // right: 85,
    fontSize: 15,
    fontWeight: 'bold',
  },
  line: {
    width: '95%',
    color: 'gray',
    height: 3,
    top: 0,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  modalItemsContainer: {
    marginTop: 20,
    maxHeight: '80%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  menuItemIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  menuItemText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#344968',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 105,
    height: 100,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 2,
    borderBottomWidth: 7,
    borderLeftWidth: 7,
    // borderCurve: 5,
    borderColor: '#1e3d59',
    top: 7,
    left: -5,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  label: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#344968',
    height: 30,
    width: '38%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
    bottom: -10,
    // Android shadow
    elevation: 5,
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default MainScreen;
