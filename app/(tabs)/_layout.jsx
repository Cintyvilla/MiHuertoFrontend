import FontAwesome from '@expo/vector-icons/FontAwesome6';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#8DA52B',
        tabBarLabelStyle: { fontFamily: 'Lato_700Bold' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="house" color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="(Participa)"
        options={{
          title: 'Participar',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-group" color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="(Cuidados)"
        options={{
          title: 'Cuidados',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="seedling" color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="(Cursos)"
        options={{
          title: 'Cursos',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="book-bookmark" color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="(Perfil)"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={24} solid />
          ),
        }}
      />

    </Tabs>
  );
}
