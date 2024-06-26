import React from 'react'; // Importa la libreria React
import { Button, StyleSheet, View } from 'react-native'; // Importa los componentes necesarios de React Native

// Define el componente ButtonComponent
const ButtonComponent = ({ title, onPress, color }) => {
  return (
    // Contenedor para el boton
    <View style={styles.buttonContainer}>
      {/* Componente de boton con las propiedades pasadas como parametros */}
      <Button title={title} onPress={onPress} color={color} />
    </View>
  );
};

// Estilos para el contenedor del boton
const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    borderRadius: 4,
    overflow: 'hidden',
  },
});

export default ButtonComponent; // Exporta el componente ButtonComponent como predeterminado
