import React, { useState } from 'react';
// Importa los componentes necesarios de React Native
import { View, Text, StyleSheet, Button } from 'react-native';
// Importa componentes personalizados para entrada de usuario y botones
import InputComponent from './inputcomponent';
import ButtonComponent from './buttoncomponent';

// Define el componente de pantalla de Register
export default function RegisterScreen({ navigation }) {
  // Define los estados para el nombre de usuario, contraseña y correo electrónico
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // Funcion que maneja el evento de registro
  const handleRegister = () => {
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
    console.log('Correo electrónico:', email);
  };

  return (
    // Vista principal del contenedor
    <View style={styles.container}>
      {/* Vista del cuadro de registro */}
      <View style={styles.registerBox}>
        <Text style={styles.register}>REGISTER</Text>
        {/* Componente de entrada de usuario para el nombre de usuario */}
        <InputComponent
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
        />
        {/* Componente de entrada de usuario para el correo electronico */}
        <InputComponent
          placeholder="Correo electronico"
          value={email}
          onChangeText={setEmail}
        />
        {/* Componente de entrada de usuario para la contraseña */}
        <InputComponent
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {/* Componente de boton personalizado */}
        <ButtonComponent title="Registrarse" onPress={handleRegister} color="#007BFF" />
        {/* Boton que navega a la pantalla de login */}
        <Button
          title="¿Ya tienes cuenta? Inicia sesion"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
}

// Estilos para los componentes de la pantalla de registro
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#663399',
  },
  registerBox: {
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
  register: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 20,
  },
});
