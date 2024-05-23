import React from 'react';
import { useSelector } from 'react-redux';
import { Text, StyleSheet } from 'react-native';
import { selectAllUsers } from '../users/usersSlice';

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find(user => user.id === userId);

  return <Text>By {author ? author.name : 'Unknown Author'}</Text>;
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
