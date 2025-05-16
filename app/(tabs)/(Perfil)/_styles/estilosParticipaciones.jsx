import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#99B23B",
    borderRadius: 10,
    padding: 16,
    backgroundColor: "#fff",
    margin: 16,
  },
  contenido: {
    alignItems: "flex-start", // Alinea todo a la izquierda solo en este componente
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  descripcion: {
    fontSize: 14,
    marginBottom: 12,
    color: "#333",
  },
  boton: {
    backgroundColor: "#99B23B",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  textoBoton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default styles;

