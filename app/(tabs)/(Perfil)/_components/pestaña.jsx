import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PestañasPuntos = ({ onTabChange }) => {
  const [tabActiva, setTabActiva] = useState('acumulados');

  const cambiarTab = (tab) => {
    setTabActiva(tab);
    onTabChange(tab); // Llama al padre para mostrar el contenido correspondiente
  };

  return (
    <View style={styles.contenedor}>
      <TouchableOpacity
        style={[
          styles.boton,
          tabActiva === 'acumulados' && styles.botonActivo,
        ]}
        onPress={() => cambiarTab('acumulados')}
      >
        <Text
          style={[
            styles.texto,
            tabActiva === 'acumulados' && styles.textoActivo,
          ]}
        >
          Acumulados
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.boton,
          tabActiva === 'utilizados' && styles.botonActivo,
        ]}
        onPress={() => cambiarTab('utilizados')}
      >
        <Text
          style={[
            styles.texto,
            tabActiva === 'utilizados' && styles.textoActivo,
          ]}
        >
          Utilizados
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  boton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#8ba830', // verde oliva
  },
  texto: {
    color: '#666',
    fontWeight: '600',
  },
  textoActivo: {
    color: 'white',
  },
});

export default PestañasPuntos;
