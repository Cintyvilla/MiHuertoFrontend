import Exitoso from "@/assets/images/exitoso.png";
import general from "@/styles/Tarjeta";
import { Image, Text, View } from "react-native";

function VentanaEmergente() {

    return ( 
      <View style={general.ventana}>

       <Text style={general.VentanaTitulo}>¡Te has unido al intercambio!</Text>

       <Image style={general.imagenVentana} source={Exitoso}/>

       <Text style={general.VentanaSubtitulo}>Tu cuenta ha sido creada correctamente. Te redirigiremos al inicio en unos segundos...</Text>

      </View>
    );
  }
  

  export default VentanaEmergente;
  

