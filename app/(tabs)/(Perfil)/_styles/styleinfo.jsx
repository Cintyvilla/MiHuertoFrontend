import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    margin: 16,
    shadowColor: "#ccc", // sombra gris clara
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4, // para Android
  },
  fila: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  icono: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  texto: {
    fontSize: 14,
    color: "#333",
    marginBottom: 6,
  },
  enlace: {
    color: "#d00",
    textDecorationLine: "underline",
    marginBottom: 8,
  },
  lista: {
    fontSize: 14,
    color: "#000",
  },
  filaActividad: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 28, // para alinear con el texto
    marginBottom: 6,
  },
  etiqueta: {
    marginTop: 12,
    fontWeight: "bold",
    fontSize: 14,
    color: "#444",
  },
});

export default estilos;
