import React, { useState } from 'react';
// Importa los componentes necesarios de React Native
import { View, Text, StyleSheet, Button } from 'react-native';
// Importa componentes personalizados para entrada de usuario y botones
import InputComponent from './inputcomponent';
import ButtonComponent from './buttoncomponent';

// Define el componente de pantalla de Login
export default function LoginScreen({ navigation }) {
  // Define los estados para el nombre de usuario y la contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función que maneja el evento de login
  const handleLogin = () => {
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    // Vista principal del contenedor
    <View style={styles.container}>
      {/* Vista del cuadro de login */}
      <View style={styles.loginBox}>
        <Text style={styles.login}>LOGIN</Text>
        {/* Componente de entrada de usuario para el nombre de usuario */}
        <InputComponent
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
        />
        {/* Componente de entrada de usuario para la contraseña */}
        <InputComponent
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {/* Componente de botón personalizado */}
        <ButtonComponent title="Aceptar" onPress={handleLogin} color="#007BFF" />
        {/* Botón que navega a la pantalla de registro */}
        <Button
          title="No tienes cuenta? Regístrate"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
}

// Estilos para los componentes de la pantalla de login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#663399',
  },
  loginBox: {
    width: '80%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  login: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 20,
  },
});
