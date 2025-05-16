import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  contenedor: {
    flexDirection: "column",
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  etiqueta: {
    marginBottom: 6,
    fontWeight: "bold",
    color: "#1a1a1a",
    fontSize: 16,
    fontFamily: "Lato",
  },
  campoConIcono: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#ffffff",
    marginBottom: 12,
  },

  
  icono: {
    width: 12,
    height: 12,
    marginRight: 8,
    borderRadius: 2,
    resizeMode: "cover",
  },
  entrada: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Lato",
    color: "#000",
  },
});

export default estilos;
