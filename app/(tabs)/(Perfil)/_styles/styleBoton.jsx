import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  contenedor: {
    alignItems: "center", // centra horizontalmente
    marginTop: 24,        // separación superior
  },
  boton: {
    backgroundColor: "#F22F1D",
    width: 216,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  botonPresionado: {
    backgroundColor: "#FF6051",
  },
  texto: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "'Lato', sans-serif",
  },
});

export default estilos;
