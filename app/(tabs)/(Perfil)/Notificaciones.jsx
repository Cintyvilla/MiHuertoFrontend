
import NotificacionCard from '@/app/(tabs)/(Perfil)/_components/NotificacionCard';
import PestañasPuntos from '@/app/(tabs)/(Perfil)/_components/pestaña';
import RecordatorioCanje from '@/app/(tabs)/(Perfil)/_components/RecordatorioCanje';
import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';

const HistorialPuntos = () => {
  const [tabSeleccionada, setTabSeleccionada] = useState('acumulados');

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      {/* Banner verde arriba */}
      <RecordatorioCanje />

      {/* Pestañas */}
      <PestañasPuntos onTabChange={setTabSeleccionada} />

      {/* Texto según la pestaña */}
      {tabSeleccionada === 'acumulados' ? (
        <Text style={{ marginTop: 20 }}>Aquí van los puntos acumulados</Text>
      ) : (
        <Text style={{ marginTop: 20 }}>Aquí van los puntos utilizados</Text>
      )}

      {/* Tarjeta de notificación */}
      <NotificacionCard />
      <NotificacionCard />
      <NotificacionCard />
      <NotificacionCard />
    </ScrollView>
  );
};

export default HistorialPuntos;
