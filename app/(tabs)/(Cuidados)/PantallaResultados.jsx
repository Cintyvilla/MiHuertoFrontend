import PlantCard from '@/app/(tabs)/(Cuidados)/_components/PlantCard';
import { obtenerPlantas } from '@/services/plantas.service';
import styles from '@/styles/StyleSheet';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';


export default function PantallaResultados() {
  const { filtros } = useLocalSearchParams();
  const [plantas, setplantas] = useState([])

  useEffect(() => {
    const filtrosParsed = JSON.parse(filtros);
    console.log(filtrosParsed)
    obtenerPlantas(filtrosParsed).then((response) => {
      setplantas(response);
    })
  }, [filtros]);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
      <Text style={styles.title}>Resultados para tu huerto</Text>
      {plantas.length > 0 ? (
        <FlatList
          data={plantas}
          keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
          renderItem={({ item }) => (
            <PlantCard
              planta={item}
              onPress={() =>
              router.push({
              pathname: "/(tabs)/(Cuidados)/DetallePlanta",
              params: { planta: JSON.stringify(item) },
            })
          }
        />
          )}
        />
      ) : (
        <Text style={{ marginTop: 20 }}>No encontramos plantas con esos filtros.</Text>
      )}
    </View>
  );
}
