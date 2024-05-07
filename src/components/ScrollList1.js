import * as React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import Box1 from '../../src/components/Box1';

const ScrollList1 = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  // console.log(navigation);

  const data = [
    {
      id: '1',
      title: 'Message',
      imageSource: require('../../assets/Box-Images/notification-bell.png'),
    },
    {
      id: '2',
      title: 'Attendance',
      imageSource: require('../../assets/Box-Images/attendance.png'),
    },
    {
      id: '3',
      title: 'Portfolio',
      imageSource: require('../../assets/Box-Images/portfolio.png'),
    },
    {
      id: '4',
      title: 'Homework',
      imageSource: require('../../assets/Box-Images/homework.png'),
    },
    {
      id: '5',
      title: 'Fees Payment',
      imageSource: require('../../assets/Box-Images/fees.png'),
    },
    {
      id: '6',
      title: 'Notes',
      imageSource: require('../../assets/Box-Images/notes.png'),
    },
    {
      id: '7',
      title: 'Diary / Events',
      imageSource: require('../../assets/Box-Images/diary.png'),
    },
    {
      id: '8',
      title: 'Time Table',
      imageSource: require('../../assets/Box-Images/timetable.png'),
    },
    {
      id: '9',
      title: 'Exam Marks',
      imageSource: require('../../assets/Box-Images/exammarks.png'),
    },
    {
      id: '10',
      title: 'Calendar Events',
      imageSource: require('../../assets/Box-Images/calendar.png'),
    },
    {
      id: '11',
      title: 'Meal Menu',
      imageSource: require('../../assets/Box-Images/mealmenu.png'),
    },
    {
      id: '12',
      title: 'Documents',
      imageSource: require('../../assets/Box-Images/documents.png'),
    },
    {
      id: '13',
      title: 'Chat',
      imageSource: require('../../assets/Box-Images/live-chat.png'),
    },
    {
      id: '14',
      title: 'Transport',
      imageSource: require('../../assets/Box-Images/transportation.png'),
    },
    {
      id: '15',
      title: 'Health Card',
      imageSource: require('../../assets/Box-Images/healthcard.png'),
    },
    {
      id: '16',
      title: 'My Learning',
      imageSource: require('../../assets/Box-Images/learning.png'),
    },
    {
      id: '17',
      title: 'Syllabus',
      imageSource: require('../../assets/Box-Images/syllabus.png'),
    },
    {
      id: '18',
      title: 'Photo and Videos',
      imageSource: require('../../assets/Box-Images/photo&video.png'),
    },
  ];

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Box1
            title={item.title}
            imageSource={item.imageSource}
            navigation={navigation}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <View style={styles.box}>
        <View>
          <Text style={styles.title}>Start Online Class</Text>
          <TouchableOpacity
            // Navigate to ScreenA
            style={styles.button}>
            <Text style={styles.text}>Continue</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/onlineclass.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCE6FF',
  },
  box: {
    width: '90%',
    height: 100,
    backgroundColor: 'white',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    color: '#00004F',
  },
  button: {
    width: 90,
    backgroundColor: '#516f9c',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
  image: {
    width: 120,
    height: 100,
  },
});

export default ScrollList1;
