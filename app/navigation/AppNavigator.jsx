import DetallePlanta from '@/app/(tabs)/(Cuidados)/DetallePlanta';
import PantallaFiltros from '@/app/(tabs)/(Cuidados)/PantallaFiltros';
import PantallaResultados from '@/app/(tabs)/(Cuidados)/PantallaResultados';
import CuidadosInicio from '@/app/(tabs)/(Cuidados)/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={CuidadosInicio} />
      <Stack.Screen name="Filtros" component={PantallaFiltros} />
      <Stack.Screen name="Resultados" component={PantallaResultados} />
      <Stack.Screen name="Detalle" component={DetallePlanta} />
    </Stack.Navigator>
  );
}
