import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../_styles/estilosParticipaciones";

const Participaciones = () => {
  return (
    <View style={styles.card}>
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Participaciones</Text>
        <Text style={styles.descripcion}>
          Consulta los eventos de intercambio a los que te inscribiste y en los que ya participaste.
        </Text>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textoBoton}>Ver eventos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Participaciones;

