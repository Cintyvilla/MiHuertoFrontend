import BannerIntercambio from "@/assets/images/bannerintercambio.png";
import general from "@/styles/Tarjeta";
import { Image, Text, View } from "react-native";

 function Banner() {
  return ( 
    
    <View style={general.banner}>
        <Text style={general.bannerText}>Intercambia plantas y conecta con personas que comparten tus intereses</Text>
        <Image style={general.bannerImage} source={BannerIntercambio}/>

    </View>
  );
}

export default Banner;