import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postAdded} from './postsSlice';
import {selectAllUsers} from '../users/usersSlice';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const users = useSelector(selectAllUsers);

  const onTitleChanged = text => setTitle(text);
  const onContentChanged = text => setContent(text);
  const onAuthorChanged = value => setUserId(value);

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const onSavePostClicked = () => {
    if (canSave) {
      dispatch(postAdded(title, content, userId));
      setTitle('');
      setContent('');
      setUserId('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a New Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Post Title"
        value={title}
        onChangeText={onTitleChanged}
      />
      <Text style={styles.subHeader}>Author</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={userId}
          style={styles.picker}
          onValueChange={onAuthorChanged}>
          <Picker.Item label="Select author" value="" />
          {users.map(user => (
            <Picker.Item key={user.id} label={user.name} value={user.id} />
          ))}
        </Picker>
      </View>
      <TextInput
        style={styles.textArea}
        placeholder="Post Content"
        value={content}
        onChangeText={onContentChanged}
        multiline
      />
      <Button
        title="Save Post"
        onPress={onSavePostClicked}
        disabled={!canSave}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 4,
  },
  pickerContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 18,
    justifyContent: 'center',
  },
  picker: {
    height: 40,
    width: '100%',
  },
  textArea: {
    height: 70,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 4,
    textAlignVertical: 'top',
  },
});

export default AddPostForm;
