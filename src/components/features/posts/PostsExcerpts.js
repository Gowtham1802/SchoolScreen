import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsExcerpts = ({post}) => {
  const postContent = post.content ? post.content : '';

  return (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postContent}>
        {postContent.length > 100
          ? `${postContent.substring(0, 100)}...`
          : postContent}
      </Text>
      <View style={styles.postFooter}>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </View>
      <ReactionButtons post={post} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default PostsExcerpts;
