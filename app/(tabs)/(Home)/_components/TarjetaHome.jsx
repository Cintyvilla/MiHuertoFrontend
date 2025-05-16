import general from "@/styles/Login";
import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";


function TarjetaHome ({ textouno, Imagendos,textodos,Imagenuno, href }) {

    return(
    <TouchableOpacity style={general.card1} onPress={() => {
      router.push(href);
    }}>
      <FontAwesome6 name={Imagenuno} style={general.icono2} size={32} />

      <View style={general.textContainer1}>
        <Text style={general.titulo3}>{textouno}</Text>
        <Text style={general.subtitulo3}>{textodos}</Text>
      </View>

      <FontAwesome6 style={general.flecha1} name={Imagendos} size={30} color="#8DA52B" />
    </TouchableOpacity>
  );
}

export default TarjetaHome;