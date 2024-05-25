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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
                  source={require('../assets/Gowtham.jpeg')}
                  style={styles.profilePic}
                />
                <View>
                  <Text style={styles.name}>PRAVEEN K</Text>
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
              <ScrollView>
                <DrawerItem
                  label="Dashboard"
                  icon={({color, size}) => (
                    <Icon name="view-dashboard" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Dashboard');
                    handleClose();
                  }}
                />
                {/* Add other DrawerItems here */}
                <DrawerItem
                  label="Message"
                  icon={({color, size}) => (
                    <Icon name="message" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Attendance"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Portfolio"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="HomeWork"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Fees payment"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Notes"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Diary / Events"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Time Table"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Exam Marks"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Calendar Events"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Meal Menu"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Documents"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Chat"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Transport"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Health Card"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="My Learning"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Syllabus"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Photos and Videos"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
                <DrawerItem
                  label="Logout"
                  icon={({color, size}) => (
                    <Icon name="logout" color={color} size={size} />
                  )}
                  onPress={() => {
                    navigation.navigate('Logout');
                    handleClose();
                  }}
                />
              </ScrollView>
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
    color: '#007BFF',
  },
  closeButton: {
    position: 'absolute',
    top: -20,
    right: 8,
  },
  closeButtonText: {
    fontSize: 25,
    color: '#007BFF',
  },
});

export default CustomDrawerContent;
