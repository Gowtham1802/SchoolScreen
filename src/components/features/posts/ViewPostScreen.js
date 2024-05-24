// ViewPostScreen.js
import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet, Button} from 'react-native';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import {selectPostById} from './postsSlice';

const ViewPostScreen = ({route, navigation}) => {
  const {postId} = route.params;
  const post = useSelector(state => selectPostById(state, postId));

  if (!post) {
    return (
      <View style={styles.container}>
        <Text>Post not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>{post.content}</Text>
      <View style={styles.footer}>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </View>
      <ReactionButtons post={post} />
      <Button
        title="Edit Post"
        onPress={() => navigation.navigate('EditPostScreen', {postId: post.id})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});

export default ViewPostScreen;
