import React, { useState } from 'react';
// Importa los componentes necesarios de React Native
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// Importa el icono de FontAwesome
import Icon from 'react-native-vector-icons/FontAwesome';

// Define el componente de entrada de usuario
const InputComponent = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  // Define el estado para controlar la visibilidad del texto seguro
  const [secureText, setSecureText] = useState(secureTextEntry);

  // Funcion para alternar la visibilidad del texto seguro
  const toggleSecureText = () => {
    setSecureText(!secureText);
  };

  return (
    // Contenedor de entrada
    <View style={styles.inputContainer}>
      {/* Componente de entrada de texto */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureText}
      />
      {/* Si secureTextEntry es verdadero, muestra un icono para alternar la visibilidad */}
      {secureTextEntry && (
        <TouchableOpacity style={styles.iconContainer} onPress={toggleSecureText}>
          <Icon name={secureText ? 'eye-slash' : 'eye'} size={20} color="#333" />
        </TouchableOpacity>
      )}
    </View>
  );
};

// Estilos para los componentes de la entrada de usuario
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 5,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
  },
});

export default InputComponent;
