import imagenDefault from "@/assets/images/Default.png";
import general from "@/styles/StyleSheet";
import { Image, Pressable, Text, View } from "react-native";

function TarjetaCurso({ textoNom, textoDur, textoMod, TextoFec, imagen, evento }) {
    const imagenMostrada = imagen || imagenDefault;

    return (
        <View style={general.tarjeta}>
            <Pressable style={general.contenedorHorizontal} onPress={evento}>
                <View style={general.textos}>
                    <Text style={general.nombreTarjeta}>{textoNom}</Text>
                    <Text><Text style={{fontWeight: "bold"}}>Duracion:</Text> {textoDur}</Text>
                    <Text><Text style={{fontWeight: "bold"}}>Modalidad:</Text> {textoMod}</Text>
                    <Text><Text style={{fontWeight: "bold"}}>Inicia el:</Text> {TextoFec} </Text>
                </View>
                <Image source={imagenMostrada} style={general.imagen} />
            </Pressable>
        </View>


    )

}

export default TarjetaCurso;