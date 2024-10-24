import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../style/stylesingup'; // Ajuste o caminho para o arquivo de estilo correto

const ButtonComponent = ({ onPress, title, buttonStyle }) => {
  return (
    <TouchableOpacity 
      style={[styles.defaultButton, buttonStyle]} 
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text> {/* O título está sendo renderizado dentro de <Text> */}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
