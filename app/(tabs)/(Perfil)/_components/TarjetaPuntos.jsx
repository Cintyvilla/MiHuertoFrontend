import Puntos from "@/assets/images/puntos.png";
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import estilos from '../_styles/estilosPuntos';

const TarjetaPuntos = () => {
  return (
    <View style={estilos.tarjeta}>
      {/* Parte izquierda: Imagen del círculo */}
      <View style={estilos.imagenContainer}>
        <Image
          source={Puntos}
          style={estilos.imagenProgreso}
        />
      </View>

      {/* Parte derecha: texto y botón */}
      <View style={estilos.infoContainer}>
        <Text style={estilos.titulo}>Tus Puntos</Text>
        <Text style={estilos.descripcion}>
          Cuando completes 500 puntos podrás canjearlos por una planta en el huerto más cercano.
        </Text>
        <TouchableOpacity style={estilos.boton}>
          <Text style={estilos.textoBoton}>Historial de Puntos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TarjetaPuntos;
