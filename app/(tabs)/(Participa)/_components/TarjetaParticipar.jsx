import IwokaQuinza from "@/assets/images/IwokaQuinza.jpg";
import general from "@/styles/Tarjeta";
import FontAwesome from '@expo/vector-icons/FontAwesome6';
import { Image, Pressable, Text, View } from "react-native";

 function TarjetaParticipar() {

  return ( 
    <View style={general.tarjeta}>
    <Pressable style={general.contenedorTarjeta}>
      
        <Image style={general.imagenTarjeta} source={IwokaQuinza}/>

        <View style={general.infoTarjeta}>
          <Text style={general.titulo}>Iwoka Quinza</Text>
        
        
        <View style={general.itemTarjeta}>
          <FontAwesome style={general.icono} name="calendar" size={18} />
          <Text style={general.subtitulo}>Jueves 13 de junio</Text> 
        </View>

        <View style={general.itemTarjeta}>
          <FontAwesome style={general.icono} name="clock" size={18} />
          <Text style={general.subtitulo}>9:00am</Text>
        </View>

       <View style={general.itemTarjeta}>
          <FontAwesome style={general.icono} name="user" size={18} />
          <Text style={general.subtitulo}> 3 cupos</Text>
        </View>
        </View>   
        <FontAwesome style={general.icono} name="circle-arrow-right" size={30} />
    </Pressable>
    </View>
  );
}

export default TarjetaParticipar;

//<Pressable> elemento cliCkable
