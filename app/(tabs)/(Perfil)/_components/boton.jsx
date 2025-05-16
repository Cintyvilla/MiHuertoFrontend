import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import estilos from "../_styles/styleBoton";

const Boton = () => {
  const [presionado, setPresionado] = useState(false);

  return (
    <View style={estilos.contenedor}>
      <Pressable
        onPressIn={() => setPresionado(true)}
        onPressOut={() => setPresionado(false)}
        style={[
          estilos.boton,
          presionado && estilos.botonPresionado
        ]}
      >
        <Text style={estilos.texto}>Inscribirme</Text>
      </Pressable>
    </View>
  );
};

export default Boton;
