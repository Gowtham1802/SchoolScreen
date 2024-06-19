import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <WebView source={{uri: 'http://192.168.1.45:82/'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DashboardScreen;
