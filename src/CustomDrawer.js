import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawer = ({navigation}) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.header}>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.profilePic}
        />
        <Text style={styles.name}>PRAVEEN K</Text>
        <TouchableOpacity>
          <Text style={styles.viewProfile}>View Profile</Text>
        </TouchableOpacity>
      </View>
      <DrawerItem
        label="Dashboard"
        icon={({color, size}) => (
          <Icon name="view-dashboard" color={color} size={size} />
        )}
        onPress={() => navigation.navigate('Dashboard')}
      />
      <DrawerItem
        label="Messages"
        icon={({color, size}) => (
          <Icon name="message" color={color} size={size} />
        )}
        onPress={() => navigation.navigate('Messages')}
      />
      <DrawerItem
        label="Settings"
        icon={({color, size}) => <Icon name="cog" color={color} size={size} />}
        onPress={() => navigation.navigate('Settings')}
      />
      <DrawerItem
        label="Logout"
        icon={({color, size}) => (
          <Icon name="logout" color={color} size={size} />
        )}
        onPress={() => navigation.navigate('Logout')}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewProfile: {
    color: '#007BFF',
  },
});

export default CustomDrawer;
