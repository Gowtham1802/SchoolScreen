import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';

const CustomDrawerContent = ({navigation, onClose}) => {
  const slideAnim = useRef(new Animated.Value(-300)).current; // Initial position of the drawer

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      useNativeDriver: true,
    }).start();
  }, []);

  const handleClose = () => {
    Animated.timing(slideAnim, {
      toValue: -300,
      duration: 300,
      easing: Easing.in(Easing.poly(4)),
      useNativeDriver: true,
    }).start(() => onClose());
  };

  return (
    <Modal transparent={true} visible={true} onRequestClose={handleClose}>
      <TouchableWithoutFeedback onPress={handleClose}>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.drawerContent,
                {transform: [{translateX: slideAnim}]},
              ]}>
              <View style={styles.header}>
                <Image
                  source={require('../../../assets/Gowtham.jpeg')}
                  style={styles.profilePic}
                />
                <View>
                  <Text style={styles.name}>GOWTHAM T</Text>
                  <TouchableOpacity>
                    <Text style={styles.viewProfile}>View Profile</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  onPress={handleClose}
                  style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>X</Text>
                </TouchableOpacity>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                <DrawerItem
                  label="Dashboard"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <Icon
                      name="view-dashboard"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Home');
                    handleClose();
                  }}
                />
                {/* Add other DrawerItems here */}
                <DrawerItem
                  label="Message"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <Icon
                      name="bell-ring"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Attendance"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <Icon
                      name="account-check"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Portfolio"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <FontAwesome5
                      name="address-card"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="HomeWork"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <Icon
                      name="home-edit"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Fees payment"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <Icon
                      name="credit-card"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Notes"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <Icon
                      name="note-multiple"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Diary / Events"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <Icon
                      name="calendar-text"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Time Table"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <Icon
                      name="timetable"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Exam Marks"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <Icon
                      name="clipboard-text"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Calendar Events"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <Icon
                      name="calendar-month"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Meal Menu"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <Icon
                      name="food"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Documents"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <Icon
                      name="text-box-multiple-outline"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Chat"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <Icon
                      name="wechat"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Transport"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <FontAwesome5
                      name="bus"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Health Card"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <FontAwesome5
                      name="hospital-user"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="My Learning"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <FontAwesome5
                      name="graduation-cap"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Syllabus"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <Icon
                      name="note-edit"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Photos and Videos"
                  labelStyle={styles.labelStyle}
                  icon={({color, size}) => (
                    <Icon
                      name="file-video"
                      color={styles.iconStyle.color}
                      size={styles.iconStyle.size}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
              </ScrollView>
              <TouchableOpacity style={styles.button}>
                <View style={styles.iconContainer}>
                  <Text style={styles.buttonText}>LOGOUT</Text>
                  <Icon name="logout" size={24} color="#fff" />
                </View>
              </TouchableOpacity>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawerContent: {
    width: 300,
    backgroundColor: '#fff',
    paddingVertical: 20,
    // borderTopRightRadius: 10,
    // borderBottomRightRadius: 10,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
  header: {
    flexDirection: 'row',
    gap: 10,
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    position: 'relative',
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 10,
    // marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewProfile: {
    color: '#344968',
  },
  closeButton: {
    position: 'absolute',
    top: -20,
    right: 8,
  },
  closeButtonText: {
    fontSize: 25,
    color: '#344968',
  },
  labelStyle: {
    color: '#344968',
    fontSize: 16,
  },
  iconStyle: {
    color: '#344968',
    size: 24,
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
    marginLeft: 20,
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

export default CustomDrawerContent;
