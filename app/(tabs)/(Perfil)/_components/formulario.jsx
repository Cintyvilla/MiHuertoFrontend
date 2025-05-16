import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, View } from "react-native";
import estilos from "../_styles/styleheetS";

const Formulario = () => {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.etiqueta}>Nombre completo</Text>
      <View style={estilos.campoConIcono}>
        <FontAwesome6
          name="user"
          size={24}
          style={estilos.icono}
        />
        <TextInput
          placeholder="Nombre y apellido"
          style={estilos.entrada}
          placeholderTextColor="#888"
        />

      </View>


      <Text style={estilos.etiqueta}>Edad</Text>
      <View style={estilos.campoConIcono}>
        <TextInput
          style={estilos.entrada}
          placeholder="Ingresa tu edad"
          placeholderTextColor="#999"
          keyboardType="numeric"
        />
      </View>

      {/* Documento de identidad */}
      <Text style={estilos.etiqueta}>Documento de identidad</Text>
      <View style={estilos.campoConIcono}>
        <TextInput
          style={estilos.entrada}
          placeholder="Número de documento de identidad"
          placeholderTextColor="#999"
          keyboardType="default"
        />
      </View>

      {/* Número de teléfono */}
      <Text style={estilos.etiqueta}>Número de teléfono</Text>
      <View style={estilos.campoConIcono}>
        <FontAwesome6 name="phone" size={24} style={estilos.icono} />
        <TextInput
          style={estilos.entrada}
          placeholder="Ingresa tu número de teléfono"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />
      </View>

      {/* Contacto de emergencia - Nombre */}
      <Text style={estilos.etiqueta}>Contacto de emergencia</Text>
      <View style={estilos.campoConIcono}>
        <FontAwesome6
          name="user"
          size={24}
          style={estilos.icono}
        />
        <TextInput
          style={estilos.entrada}
          placeholder="Nombre"
          placeholderTextColor="#999"
        />
      </View>

      {/* Contacto de emergencia - Teléfono */}
      <View style={estilos.campoConIcono}>
        <FontAwesome6 name="phone" size={24} style={estilos.icono} />
        <TextInput
          style={estilos.entrada}
          placeholder="Teléfono"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />
      </View>




    </View>


  );
};

export default Formulario;


