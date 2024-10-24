import React, { useState } from 'react';
import { View, Image, Switch, Text } from 'react-native';
import InputComponent from '../components/InputComponent'; // Caminho ajustado
import ButtonComponent from '../components/ButtonComponent'; // Caminho ajustado
import styles from '../style/stylesingup'; // Caminho correto para o arquivo de estilos

const SignUpScreen = () => {
  const [isChecked, setChecked] = useState(false);

  const toggleSwitch = () => setChecked(previousState => !previousState);

  const handleCreateAccount = () => {
    // Lógica para criar a conta
    console.log('Criar conta pressionado');
  };

  const handleLogin = () => {
    // Lógica para navegar para a tela de login
    console.log('Já tenho uma conta pressionado');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/icons/icon.png')} 
        style={styles.icon} // Ajuste no caminho do ícone 
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
        onPress={handleCreateAccount} // Adicionando a função de criação de conta
      />
      <ButtonComponent 
        title="Já tenho uma conta" 
        buttonStyle={styles.loginButton} 
        onPress={handleLogin} // Adicionando a função de login
      />
    </View>
  );
};

export default SignUpScreen;
