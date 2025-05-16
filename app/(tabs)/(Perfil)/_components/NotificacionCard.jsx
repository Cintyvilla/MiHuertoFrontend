import { FontAwesome6 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import estilos from '../_styles/estiloNotificacionCard';

const NotificacionCard = () => {
  const [desplegado, setDesplegado] = useState(false);

  const toggleDesplegado = () => {
    setDesplegado(!desplegado);
  };

  return (
    <View style={estilos.card}>
      <View style={estilos.header}>
        <FontAwesome6 size={24} name="seedling" style={estilos.imagen} />
        <View style={estilos.textos}>
          <Text style={estilos.titulo}>¡Tu planta necesita agua!</Text>
          <Text style={estilos.subtitulo}>Hace 3 días no la riegas.</Text>
        </View>
        <TouchableOpacity onPress={toggleDesplegado}>
          <FontAwesome6
            name={
              desplegado
                ? "chevron-up"
                : "chevron-down"
            }
            size={24}
            style={estilos.flecha}
          />
        </TouchableOpacity>
      </View>

      {desplegado && (
        <View style={estilos.contenido}>
          <Text style={estilos.detalle}>
            Recuerda regar tu planta con agua fresca y mantenerla en luz indirecta.
          </Text>
        </View>
      )}
    </View>
  );
};

export default NotificacionCard;
