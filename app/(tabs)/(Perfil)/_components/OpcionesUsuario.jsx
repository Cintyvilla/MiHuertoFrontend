import { FontAwesome6 } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import estilos from '../_styles/estilosOpciones'; // los estilos van aparte

const OpcionesUsuario = () => {
  return (
    <View style={estilos.contenedor}>
      {/* Botones de opciones */}
      <View style={estilos.filaOpciones}>
        <TouchableOpacity style={estilos.boton}>
          <FontAwesome6
            size={24}
            name="heart" // icono de corazón
            style={estilos.icono}
          />
          <Text style={estilos.textoBoton}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.boton}>
          <FontAwesome6
            size={24}
            name="seedling" // icono de planta
            style={estilos.icono}
          />
          <Text style={estilos.textoBoton}>Puntos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.boton}>
          <FontAwesome6
            size={24}
            name="gear"
            style={estilos.icono}
          />
          <Text style={estilos.textoBoton}>Ajustes</Text>
        </TouchableOpacity>
      </View>

      {/* Descripción */}
      <Text style={estilos.descripcion}>
        Tengo experiencia en jardinería y me gusta colaborar en tareas físicas
        como el trasplante de plantas y el acondicionamiento del terreno.
      </Text>
    </View>
  );
};

export default OpcionesUsuario;
