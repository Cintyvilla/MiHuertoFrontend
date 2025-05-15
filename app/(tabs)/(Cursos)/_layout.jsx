import { Stack } from "expo-router";

function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerTitle:"Cursos", headerTitleAlign:"center"}}/>
      <Stack.Screen name="cursoActual"options={{headerTitle:"Curso Actual", headerTitleAlign:"center"}}/>
      <Stack.Screen name="cursoDisponible"options={{headerTitle:"Curso Disponible", headerTitleAlign:"center"}}/>
    </Stack>
  )
}

export default RootLayout;