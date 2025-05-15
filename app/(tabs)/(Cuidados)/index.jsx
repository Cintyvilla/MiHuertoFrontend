import hoja from "@/assets/images/hoja.jpg";
import styles from '@/styles/StyleSheet';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function CuidadosInicio() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#8DA52B' }}>
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor: '#8DA52B', flexGrow: 1 }]}
    >

        <View style={styles.header}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <View style={styles.icons}></View>
        </View>

        <Text style={styles.title}>
          <Text style={styles.bold}>Tu huerto ideal</Text>
        </Text>

        <Text style={styles.subtitle}>
          Descubré qué plantas se adaptan a tu espacio y aprendé cómo cuidarlas
        </Text>

        <Text style={styles.progressText}>Comienza seleccionando tu espacio</Text>

        <View style={styles.progressBar}>
          <View style={[styles.progressDot, { backgroundColor: '#F3BE22' }]} /> 
          <View style={[styles.progressDot, { backgroundColor: '#D9D9D9' }]} />
          <View style={[styles.progressDot, { backgroundColor: '#D9D9D9' }]} />
        </View>

        <Image
          source={hoja} 
          style={styles.hoja}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/(tabs)/(Cuidados)/PantallaFiltros')}
        >
          <Text style={styles.buttonText}>Comenzar</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}
