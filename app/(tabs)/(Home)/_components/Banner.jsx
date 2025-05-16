import general from "@/styles/Login";
import { Image, Text, View } from "react-native";

 function Banner({ texto,Imagen }) {
  return ( 
    
    <View style={general.banner}>
        <Text style={general.bannerText}>{texto}</Text>

        <Image style={general.bannerImage} source={Imagen}/>

    </View>
  );
}

export default Banner;