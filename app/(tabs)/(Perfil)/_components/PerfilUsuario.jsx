import Senora from '@/assets/images/señora.jpg';
import { FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import estilos from '../_styles/estilosPerfil';

const PerfilUsuario = () => {

  function redirectNotificacion() {
    router.push('/(tabs)/(Perfil)/Notificaciones');
  }

  return (
    <View style={estilos.contenedor}>
      {/* Encabezado con imágenes como íconos */}
      <View style={estilos.encabezado}>
        <TouchableOpacity style={estilos.botonDerecha}>
          <FontAwesome6
            size={24}
            name="bell"
            style={estilos.iconoImagen} // cambia tamaño aquí también
            color="white"
            onPress={redirectNotificacion}
          />
        </TouchableOpacity>
      </View>

      {/* Imagen de perfil */}
      <View style={estilos.circuloImagen}>
        <Image
          source={Senora}
          style={estilos.imagenPerfil}
        />
      </View>

      <Text style={estilos.nombre}>Jasmín Flórez</Text>
      <Text style={estilos.rol}>Usuario</Text>
    </View>
  );
};

export default PerfilUsuario;
