import React, { useState } from 'react';
import { View, Image, Switch, Text } from 'react-native';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent'; 
import styles from '../style/stylesingup'; 

const SignUpScreen = () => {
  const [isChecked, setChecked] = useState(false);

  const toggleSwitch = () => setChecked(previousState => !previousState);

  const handleCreateAccount = () => {
    // Lógica para criar a conta
    console.log('Criar conta pressionado');
  };

  const handleLogin = () => {
   
    console.log('Já tenho uma conta pressionado');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/icons/icon.png')} 
        style={styles.icon} 
      />
      
      <InputComponent placeholder="Nome de Usuário" />
      <InputComponent placeholder="Telefone" keyboardType="phone-pad" />
      <InputComponent placeholder="E-mail" keyboardType="email-address" />
      <InputComponent placeholder="Senha" secureTextEntry={true} />
      <InputComponent placeholder="Confirme a senha" secureTextEntry={true} />
      
      <View style={styles.checkboxContainer}>
        <Switch 
          value={isChecked} 
          onValueChange={toggleSwitch} 
          style={styles.checkbox} 
        />
        <Text style={styles.label}>Eu aceito os termos de uso</Text>
      </View>
      
      <ButtonComponent 
        title="Criar conta" 
        buttonStyle={styles.createButton} 
        onPress={handleCreateAccount} 
      />
      <ButtonComponent 
        title="Já tenho uma conta" 
        buttonStyle={styles.loginButton} 
        onPress={handleLogin} 
      />
    </View>
  );
};

export default SignUpScreen;