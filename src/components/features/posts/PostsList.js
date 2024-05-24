import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import {
  fetchPosts,
  selectAllPosts,
  getPostsStatus,
  getPostsError,
} from './postsSlice';
import PostsExcerpts from './PostsExcerpts';

const PostsList = ({navigation}) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === 'loading') {
    content = <Text>Loading...</Text>;
  } else if (postStatus === 'succeeded') {
    content =
      posts.length > 0 ? (
        <FlatList
          data={posts}
          keyExtractor={post => post.id.toString()}
          renderItem={({item}) => <PostsExcerpts post={item} />}
        />
      ) : (
        <Text>No posts found</Text>
      );
  } else if (postStatus === 'failed') {
    content = <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      {content}
      {/* <Button
        title="Add Post"
        onPress={() => navigation.navigate('AddPostForm')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default PostsList;
