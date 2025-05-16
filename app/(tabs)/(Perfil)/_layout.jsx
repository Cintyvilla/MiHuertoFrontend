import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Perfil", headerTitleAlign: "center" }} />
      <Stack.Screen name="Notificaciones" options={{ headerTitle: "Notificaciones", headerTitleAlign: "center" }} />    
      </Stack>
  );
}
