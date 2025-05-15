import { AntDesign } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function PlantCard({ planta, onPress }) {
  let image = planta.imagenes && planta.imagenes.length > 0 ? planta.imagenes[0].path : null;
  if (!image) {
    image = require("@/assets/images/hoja.jpg");
  }

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{planta.nombre}</Text>
          <AntDesign name="hearto" size={20} color="#c62828" />
        </View>
        <Text style={styles.description}>{planta.descripcion}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cddc39",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 13,
    color: "#555",
  },
});
