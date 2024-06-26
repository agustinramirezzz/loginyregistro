import React from 'react';
// Importa los componentes necesarios de React Native Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa las pantallas de Login y Registro
import LoginScreen from './login';
import RegisterScreen from './register';

// Crea un stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Contenedor de navegacion que se utiliza para envolver toda la aplicacion
    <NavigationContainer>
      {/* Define el stack navigator y establece la pantalla inicial */}
      <Stack.Navigator initialRouteName="Login">
        {/* Define la pantalla de login con su componente correspondiente y opciones */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        {/* Define la pantalla de registro con su componente correspondiente y opciones */}
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//lalalalla

