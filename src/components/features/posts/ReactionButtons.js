import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {reactionAdded} from './postsSlice';

const reactionEmoji = {
  thumbsUp: '👍🏻',
  wow: '😯',
  heart: '❤️',
  rocket: '🚀',
  super: '👏🏻',
};

const ReactionButtons = ({post}) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <TouchableOpacity
      key={name}
      style={styles.button}
      onPress={() =>
        dispatch(reactionAdded({postId: post.id, reaction: name}))
      }>
      <Text>
        {emoji} {post.reactions[name]}
      </Text>
    </TouchableOpacity>
  ));

  return <View style={styles.reactionContainer}>{reactionButtons}</View>;
};

const styles = StyleSheet.create({
  reactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  button: {
    padding: 4,
  },
});

export default ReactionButtons;
