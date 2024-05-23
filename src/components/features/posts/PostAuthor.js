import React from 'react';
import {useSelector} from 'react-redux';
import {selectAllUsers} from '../users/usersSlice';
import {View, Text, StyleSheet} from 'react-native';

const PostAuthor = ({userId}) => {
  const users = useSelector(selectAllUsers);

  const author = users.find(user => user.id === userId);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        By {author ? author.name : 'Unknown Author'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default PostAuthor;
