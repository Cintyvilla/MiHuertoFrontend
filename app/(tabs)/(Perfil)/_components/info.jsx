import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Linking, Text, View } from "react-native";
import estilos from "../_styles/styleinfo";

const Info = () => {
  return (
    <View style={estilos.card}>

      {/* Ubicación */}
      <View style={estilos.fila}>
        <FontAwesome6 size={24} name="location-dot" style={estilos.icono} />
        <Text style={estilos.titulo}>Ubicación</Text>
      </View>
      <Text style={estilos.texto}>Calle 29 sur # 37-23</Text>
      <Text style={estilos.enlace} onPress={() => Linking.openURL("https://www.google.com/maps")}>
        Ver en Google Map
      </Text>

      {/* Fechas y horarios */}
      <View style={estilos.fila}>
        <FontAwesome6 size={24} name="calendar" style={estilos.icono} />
        <Text style={estilos.titulo}>Fechas y horarios</Text>
      </View>
      <Text style={estilos.texto}>Todos los martes de 9:00am a 1:00pm</Text>
      <Text style={estilos.texto}>No se necesita experiencia previa.</Text>

      {/* Actividades a realizar */}
      <View style={estilos.fila}>
        <FontAwesome6 size={24} name="gem" style={estilos.icono} />
        <Text style={estilos.titulo}>Actividades a realizar</Text>
      </View>


      <View style={estilos.filaActividad}>
        <MaterialCommunityIcons size={24} name="watering-can" style={estilos.icono} />
        <Text style={estilos.lista}>Riego</Text>
      </View>

      <View style={estilos.filaActividad}>
        <MaterialCommunityIcons size={24} name="rake" style={estilos.icono} />
        <Text style={estilos.lista}>Limpieza del huerto</Text>
      </View>

      <View style={estilos.filaActividad}>
        <MaterialCommunityIcons size={24} name="leaf-circle" style={estilos.icono} />
        <Text style={estilos.lista}>Preparación de compost</Text>
      </View>





      {/* Qué debo llevar */}
      <View style={estilos.fila}>
        <MaterialCommunityIcons size={24} name="weight" style={estilos.icono} />
        <Text style={estilos.titulo}>Qué debo llevar</Text>
      </View>
      <Text style={estilos.texto}>
        Ropa cómoda, zapatos cerrados o botas, y guantes (si tienes)
      </Text>

      {/* Encargada */}
      <Text style={estilos.etiqueta}>Encargada: Cecilia Villa</Text>
    </View>
  );
};

export default Info;
