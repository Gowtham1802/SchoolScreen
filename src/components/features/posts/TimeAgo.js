import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { parseISO, formatDistanceToNow } from 'date-fns';

const TimeAgo = ({ timestamp }) => {
  let timeAgo = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return <Text>{timeAgo}</Text>;
};



const styles = StyleSheet.create({
  timeAgo: {
    fontSize: 14,
    color: '#666',
  },
  italic: {
    fontStyle: 'italic',
  },
});

export default TimeAgo;
