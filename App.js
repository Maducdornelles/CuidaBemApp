import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './src/pages/SignUpScreen'; // Atualize o caminho conforme necessário

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{ headerShown: false }} // Remove a barra superior
        />
        {/* Adicione mais telas aqui se necessário */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
