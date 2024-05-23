import {useSelector} from 'react-redux';
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {selectAllPosts} from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post => (
    <View key={post.id} style={styles.postContainer}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postContent}>
        {post.content.length > 100
          ? `${post.content.substring(0, 100)}...`
          : post.content}
      </Text>
      <View style={styles.postFooter}>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </View>
      <ReactionButtons post={post} />
    </View>
  ));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Posts</Text>
      {renderedPosts}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
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

export default PostsList;
