import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Participa", headerTitleAlign: "center" }} />
    </Stack>
  );
}
