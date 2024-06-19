import React from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {postDeleted} from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsExcerpts = ({post}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleView = () => {
    navigation.navigate('ViewPostScreen', {postId: post.id});
  };

  const handleEdit = () => {
    navigation.navigate('EditPostScreen', {postId: post.id});
  };

  const handleDelete = () => {
    dispatch(postDeleted({postId: post.id}));
    Alert.alert('Post Deleted', 'The post has been successfully deleted.');
  };

  return (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postContent}>
        {post.content && post.content.length > 100
          ? `${post.content.substring(0, 100)}...`
          : post.content}
      </Text>
      <View style={styles.postFooter}>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </View>
      <ReactionButtons post={post} />
      <View style={styles.buttonFooter}>
        <Button title="View" onPress={handleView} />
        {/* <Button title="Edit" onPress={handleEdit} /> */}
        <Button title="Delete" onPress={handleDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  postContent: {
    fontSize: 14,
    marginBottom: 8,
  },
  postFooter: {
    gap: 10,
  },
  buttonFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 10,
    // gap: 10,
  },
});

export default PostsExcerpts;
