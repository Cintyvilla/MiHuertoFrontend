import Banner from "@/app/(tabs)/(Home)/_components/Banner";
import TarjetaHome from "@/app/(tabs)/(Home)/_components/TarjetaHome";
import Perfil from "@/assets/images/perfil.png";
import general from "@/styles/Login";
import base from "@/styles/StyleSheet";
import { FontAwesome6 } from "@expo/vector-icons";
import { Image, ScrollView, Text, View } from "react-native";

 function Index() {

  //aca van variables, if, validaciones

  return ( //devuelve info desde está función, los elementos que queremos que se impriman
    
    <ScrollView
     style={base.container}>

    <View style={general.containerhome}>
      
      <View style={general.userInfo}>
        <Image
          source={Perfil} // cambia por tu ruta
          style={general.avatar}
        />
        <View>
          <Text style={general.saludo}>Hola,</Text>
          <Text style={general.nombre}>Jasmín Flórez</Text>
        </View>
      </View>
        <FontAwesome6 name="bell" size={24} color="#999" />
    </View>

      <Banner
      Imagen={Index} 
      texto="Los huertos urbano son espacios al aire libre o de interior destinados al cultivo de plantas"
      />

      <Text style={general.titulohome}>¿Qué puedes hacer aquí?</Text>
      <TarjetaHome 
      Imagenuno ="seedling"
      Imagendos ="circle-arrow-right" 
      textouno="Aprende a cuidar tus plantas"
      textodos="Encuentra recomendaciones para todo tipo de plantas"
      href="/(tabs)/(Cuidados)"
      
      />

      <TarjetaHome 
      textouno="Únete a cursos"
      textodos="Desde compostaje hasta plantas medicinales."
      Imagenuno ="book-bookmark" 
      Imagendos ="circle-arrow-right"
      href="/(tabs)/(Cursos)"
      />

      <TarjetaHome 
      textouno="Explorar intercambios y Voluntariado"
      textodos="Conoce eventos y participa en los cuidados de huertos"
      Imagenuno ="user-group"
      Imagendos ="circle-arrow-right"
      href="/(tabs)/(Participa)"
      />


    </ScrollView>
  );
}

export default Index;