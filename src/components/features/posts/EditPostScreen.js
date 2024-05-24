import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {postUpdated, selectPostById} from './postsSlice';
import {selectAllUsers} from '../users/usersSlice';
import {Picker} from '@react-native-picker/picker';

const EditPostScreen = ({route, navigation}) => {
  const {postId} = route.params;
  const post = useSelector(state => selectPostById(state, postId));
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [userId, setUserId] = useState(post.userId);

  const onSavePostClicked = () => {
    if (title && content && userId) {
      dispatch(postUpdated({id: postId, title, content, userId}));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        style={styles.input}
      />
      <Picker
        selectedValue={userId}
        style={styles.picker}
        onValueChange={setUserId}>
        <Picker.Item label="Select author" value="" />
        {users.map(user => (
          <Picker.Item key={user.id} label={user.name} value={user.id} />
        ))}
      </Picker>
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="Content"
        style={styles.input}
        multiline
      />
      <Button title="Save Post" onPress={onSavePostClicked} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  picker: {
    height: 40,
    width: '100%',
    marginBottom: 16,
  },
});

export default EditPostScreen;
