import { Stack } from 'expo-router';

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Cuidados", headerTitleAlign: "center" }} />
      <Stack.Screen name="DetallePlanta" options={{ headerTitle: "Cuidados", headerTitleAlign: "center" }} />
      <Stack.Screen name="ListaPlantas" options={{ headerTitle: "Cuidados", headerTitleAlign: "center" }} />
      <Stack.Screen name="PantallaFiltros" options={{ headerTitle: "Cuidados", headerTitleAlign: "center" }} />
      <Stack.Screen name="PantallaResultados" options={{ headerTitle: "Cuidados", headerTitleAlign: "center" }} />
    </Stack>
  );
}
