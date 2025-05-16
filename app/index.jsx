import Logotipo from "@/assets/images/logotipo.png";
import general from "@/styles/Login";
import base from "@/styles/StyleSheet";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";


 function Bienvenida() {

  return ( 
    
    <View
     style={base.container}>

      <View style={general.containerbienvenida}>
        <Image
        source={Logotipo} 
        style={general.logo}
        resizeMode="contain"
      />
      <Text style={general.titlebienvenida}>¡Bienvenido a{"\n"}Mi huerta!</Text>

      <TouchableOpacity style={general.loginButton}>
        <Text style={general.createButtonText}>Crear cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={general.loginButton} onPress={() => {
        router.push("/login");
      }}>
        <Text style={general.createButtonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
}

export default Bienvenida;