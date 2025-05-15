import MyButton from '@/app/_components/MyButton';
import styles from '@/styles/StyleSheet';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';

export default function PantallaFiltros() {
  const router = useRouter();
  const [clima, setClima] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [tipoPlanta, setTipoPlanta] = useState('');

  const climaOptions = [
    {
      "label": "Cálido",
      "value": "calido"
    },
    {
      "label": "Templado",
      "value": "templado"
    },
    {
      "label": "Frío",
      "value": "frio"
    }
  ];

  const ubicacionOptions = [
    {
      "label": "Exterior",
      "value": "exterior"
    },
    {
      "label": "Interior",
      "value": "interior"
    }
  ];

  const tipoPlantaOptions = [
    {
      "label": "Hortalizas",
      "value": "hortalizas"
    },
    {
      "label": "Aromáticas",
      "value": "aromaticas"
    },
    {
      "label": "Medicinales",
      "value": "medicinales"
    },
    {
      "label": "Decorativas",
      "value": "decorativas"
    }
  ];

  const setFilter = (setter, oldValue, newValue) => {
    if (newValue == oldValue) {
      setter(null)
    } else {
      setter(newValue)
    }
  }

  const filtrarPlantas = () => {
    let filtros = {
      clima,
      ubicacion,
      tipo: tipoPlanta,
    }

    for (let key in filtros) {
      if (filtros[key] === '') {
        delete filtros[key];
      }
    }
    router.push({
      pathname: '/(tabs)/(Cuidados)/PantallaResultados',
      params: {
        filtros: JSON.stringify(filtros),
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleCuidados}>Dinos cómo es tu espacio</Text>
      <Text style={styles.subtitle}>
        Así te recomendamos las plantas que mejor se adaptan a ti
      </Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressDot, { backgroundColor: '#D9D9D9' }]} />
        <View style={[styles.progressDot, { backgroundColor: '#F3BE22' }]} />
        <View style={[styles.progressDot, { backgroundColor: '#D9D9D9' }]} />
      </View>
      {/* Clima */}
      <View style={styles.filtroContainer}>
        <Text style={styles.filtroTitulo}>Clima</Text>
        <View style={styles.filtrosFila}>
          {climaOptions.map((item) => (
            <Text
              key={item.value}
              style={[
                styles.filtroItem,
                clima === item.value && styles.filtroItemActivo
              ]}
              onPress={() => {
                setFilter(setClima, clima, item.value)
              }}
            >
              {item.label}
            </Text>
          ))}
        </View>
      </View>

      {/* Ubicación */}
      <View style={styles.filtroContainer}>
        <Text style={styles.filtroTitulo}>Ubicación</Text>
        <View style={styles.filtrosFila}>
          {ubicacionOptions.map((item) => (
            <Text
              key={item.value}
              style={[
                styles.filtroItem,
                ubicacion === item.value && styles.filtroItemActivo
              ]}
              onPress={() => setFilter(setUbicacion, ubicacion, item.value)}
            >
              {item.label}
            </Text>
          ))}
        </View>
      </View>

      {/* Tipo de planta */}
      <View style={styles.filtroContainer}>
        <Text style={styles.filtroTitulo}>Tipo de planta</Text>
        <View style={styles.filtrosFila}>
          {tipoPlantaOptions.map((item) => (
            <Text
              key={item.value}
              style={[
                styles.filtroItem,
                tipoPlanta === item.value && styles.filtroItemActivo
              ]}
              onPress={() => setFilter(setTipoPlanta, tipoPlanta, item.value)}
            >
              {item.label}
            </Text>
          ))}
        </View>
      </View>

      {/* Botón para buscar */}
      <MyButton onPress={filtrarPlantas}>
        Buscar
      </MyButton>
    </View>
  );
}
