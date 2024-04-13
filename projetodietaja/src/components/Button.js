import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default Button;
