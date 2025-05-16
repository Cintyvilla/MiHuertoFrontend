import { obtenerPlantasEnHuertos } from '@/services/plantas.service';
import styles from '@/styles/StyleSheet';
import { useLocalSearchParams } from 'expo-router';
import { React, useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Badge from './_components/Badge';
import InfoItem from './_components/InfoItem';
import Lugar from './_components/Lugar';


export default function DetallePlanta() {
  const { planta } = useLocalSearchParams();
  const plantaObj = JSON.parse(planta);
  const [huertos, setHuertos] = useState([])

  useEffect(() => {
    obtenerPlantasEnHuertos({ plant: plantaObj._id }).then((res) => {
      setHuertos(res)
    })
  }, [])


  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: plantaObj.imagenes[0]?.path }} style={styles.image} />

      <Text style={styles.name}>{plantaObj.nombre}</Text>

      {/* Características */}
      <View style={styles.badgesContainer}>
        <Badge icon="cloud" label={plantaObj.clima} />
        <Badge icon="water-outline" label={plantaObj.riego} />
        <Badge icon="resize" label={plantaObj.tamaño} />
      </View>

      <Text style={styles.description}>{plantaObj.descripcion}</Text>

      <Text style={styles.subtitle}>Ideal para:</Text>
      {
        plantaObj.idealPara.map((item, index) => (
          <Text key={index} style={styles.listItem}>• {item}</Text>
        ))
      }

      <View style={styles.infoBox}>
        <InfoItem label="Temporada de siembra" value={plantaObj.temporada} />
        <InfoItem label="Espacio entre plantas" value={plantaObj.espacio} />
        <InfoItem label="Propagación" value={plantaObj.propagacion} />
      </View>

      <Text style={styles.subtitle}>Disponible en:</Text>
      {huertos.length > 0 &&
        huertos.map((huerto, index) => (
          <Lugar key={index} huerto={huerto.huerto} precio={"$" + huerto.precio} />
        ))
      }
      {huertos.length == 0 &&
        <View style={{
          borderWidth: 1,
          borderColor: '#c8e6c9',
          padding: 12,
          borderRadius: 10,
          marginBottom: 10,
        }}>
          <Text style={styles.listItem}>No hay huertos disponibles</Text>
        </View>
      }

    </ScrollView>
  );
}
