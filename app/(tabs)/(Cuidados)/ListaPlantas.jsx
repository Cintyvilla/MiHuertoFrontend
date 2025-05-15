import styles from "@/styles/StyleSheet";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";

export default function ListaPlantas() {
  const [plantas, setPlantas] = useState([]);
  const [menuVisible, setMenuVisible] = useState(null);
  const router = useRouter();

  useEffect(() => {
    obtenerPlantas().then(res => {
      setPlantas(res)
    })
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagenes[0]?.path }} style={styles.image} />
      <View style={styles.nameRow}>
        <Text style={styles.name}>{item.nombre}</Text>
        <Pressable onPress={() => setMenuVisible(menuVisible === item._id ? null : item._id)}>
          <Text style={styles.dots}>...</Text>
        </Pressable>
      </View>
      {menuVisible === item._id && (
        <View style={styles.menu}>
          <Pressable
            onPress={() => {
              setMenuVisible(null);
              router.push({
                pathname: "/(tabs)/(Cuidados)/DetallePlanta",
                params: { planta: JSON.stringify(item) },
              });
            }}
          >
            <Text style={styles.menuItem}>Ver detalles</Text>
          </Pressable>
          <View style={styles.separator} />
          <Pressable onPress={() => setMenuVisible(null)}>
            <Text style={styles.menuItem}>Quitar de favoritos</Text>
          </Pressable>
        </View>
      )}
    </View>
  );

  return (
    <FlatList
      data={plantas}
      keyExtractor={(item) => item._id}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      contentContainerStyle={{ padding: 10 }}
    />
  );
}
