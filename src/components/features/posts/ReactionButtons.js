import {useDispatch} from 'react-redux';
import {reactionAdded} from './postsSlice';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const reactionEmoji = {
  thumbsUp: '👍🏻',
  wow: '😯',
  heart: '❤️',
  super: '👏🏻',
  thumbsDown: '👎🏻',
};

const ReactionButtons = ({post}) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <TouchableOpacity
        key={name}
        style={styles.reactionButton}
        onPress={() =>
          dispatch(reactionAdded({postId: post.id, reaction: name}))
        }>
        <Text style={styles.emoji}>
          {emoji} {post.reactions[name]}
        </Text>
      </TouchableOpacity>
    );
  });

  return <View style={styles.container}>{reactionButtons}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-evenly',
    gap: 5,
  },
  reactionButton: {
    marginRight: 5,
    padding: 2,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#DDE3EC',
  },
  emoji: {
    fontSize: 16,
  },
});

export default ReactionButtons;
