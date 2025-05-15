import React from 'react';
import { Text, View } from 'react-native';

export default function Lugar({ nombre, precio }) {
  return (
    <View style={{
      borderWidth: 1,
      borderColor: '#c8e6c9',
      padding: 12,
      borderRadius: 10,
      marginBottom: 10
    }}>
      <Text style={{ fontWeight: 'bold' }}>{nombre}</Text>
      <Text>{precio}</Text>
    </View>
  );
}
