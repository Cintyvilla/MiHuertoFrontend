import styles from '@/styles/StyleSheet';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Badge from './_components/Badge';
import InfoItem from './_components/InfoItem';
import Lugar from './_components/Lugar';


export default function DetallePlanta() {
  const { planta } = useLocalSearchParams();
  const plantaObj = JSON.parse(planta);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: plantaObj.imagenes[0]?.path }} style={styles.image} />

      <Text style={styles.name}>{plantaObj.nombre}</Text>

      {/* Características */}
      <View style={styles.badgesContainer}>
        <Badge icon="leaf" label="Sombra" />
        <Badge icon="water-outline" label="Riego ocasional" />
        <Badge icon="resize" label="Pequeña" />
      </View>

      <Text style={styles.description}>{plantaObj.descripcion}</Text>

      <Text style={styles.subtitle}>Ideal para:</Text>
      <Text style={styles.listItem}>• Espacios con poca luz</Text>
      <Text style={styles.listItem}>• Personas ocupadas</Text>
      <Text style={styles.listItem}>• Estilo moderno</Text>

      <View style={styles.infoBox}>
        <InfoItem label="Temporada de siembra" value="Primavera" />
        <InfoItem label="Espacio entre plantas" value="30 cm" />
        <InfoItem label="Propagación" value="4 - 8 semanas" />
      </View>

      <Text style={styles.subtitle}>Disponible en:</Text>
      <Lugar nombre="Huerta Comunitaria los Sauces Floreciendo" precio="$8.000" />
      <Lugar nombre="El Tunjo" precio="$22.000" />
    </ScrollView>
  );
}
