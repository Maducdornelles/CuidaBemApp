import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../style/stylesingup'; 

const ButtonComponent = ({ onPress, title, buttonStyle }) => {
  return (
    <TouchableOpacity 
      style={[styles.defaultButton, buttonStyle]} 
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text> 
    </TouchableOpacity>
  );
};

export default ButtonComponent;