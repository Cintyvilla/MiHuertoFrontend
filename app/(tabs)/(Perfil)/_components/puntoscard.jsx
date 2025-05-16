import { FontAwesome6 } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import estilos from '../_styles/estiloPuntoscard';

const PuntosCard = ({ puntos = 350 }) => {
  return (
    <View style={estilos.fondo}>
      <View style={estilos.card}>
        <FontAwesome6
          name="gem"
          size={24}
          style={estilos.icono}
        />
        <Text style={estilos.texto}>{puntos} puntos</Text>
      </View>
    </View>
  );
};

export default PuntosCard;


