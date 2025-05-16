import general from '@/styles/StyleSheet';
import { FontAwesome6 } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import React from 'react';
import { Platform, Text, View } from 'react-native';

export default function Lugar({ huerto, precio }) {

  function openGoogleMaps() {
    const url = `https://www.google.com/maps/search/?api=1&query=${huerto.latitud},${huerto.longitud}`;
    if (Platform.OS == 'web'){
      window.open(url, '_blank');
      return;
    }else{
      Linking.openURL(url, { target: '_blank' });
    }

  }

  return (
    <View style={{
      borderWidth: 1,
      borderColor: '#c8e6c9',
      padding: 12,
      borderRadius: 10,
      marginBottom: 10,
    }}>
      <Text style={general.detalleHuertoTitulo}>{huerto.nombre}</Text>
      <Text style={general.detalleHuertoTexto}><Text style={general.detalleHuertoSubTitulo}>Precio: </Text>{precio}</Text>
      <View style={{ flexDirection: 'row', marginBottom: 5 }}>
        <FontAwesome6 name="location-dot" size={16} />
        <Text style={{ fontWeight: 'bold', marginLeft: 5 }} >Ubicacion: </Text>
      </View>
      <Text style={{ marginLeft: 16, marginBottom: 10 }}>{huerto.direccion}</Text>
      <Text style={{ marginLeft: 16, marginBottom: 10, color: "#F22F1D" }} onPress={openGoogleMaps}>Ver en Google Maps</Text>


      <View style={{ flexDirection: 'row', marginBottom: 5 }}>
        <FontAwesome6 name="calendar" size={16} />
        <Text style={{ fontWeight: 'bold', marginLeft: 5 }} >Fechas y Horarios: </Text>
      </View>
      <Text style={{ marginLeft: 16 }}>{huerto.horario}</Text>

    </View>
  );
}
