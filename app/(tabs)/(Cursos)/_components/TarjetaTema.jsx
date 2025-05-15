import imagenDefault from "@/assets/images/Default.png";
import general from "@/styles/StyleSheet";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

function TarjetaTema({ textoNom, textoDur, textoMod, TextoFec, imagen, evento }) {
    const [texto, setTexto] = useState("Default")
    const [texto2, setTexto2] = useState("Default")
    const [texto3, setTexto3] = useState("Default")
    const [texto4, setTexto4] = useState("Default")
    const imagenMostrada = imagen || imagenDefault;


    useEffect(function () {
        if (textoNom) {
            setTexto(textoNom)
        }
        if (textoDur) {
            setTexto2(textoDur)
        }
        if (textoMod) {
            setTexto3(textoMod)
        }
        if (TextoFec) {
            setTexto4(TextoFec)
        }



    });

    return (
        <View style={general.tarjetaT}>
            <Pressable style={general.contenedorHorizontalT} onPress={evento}>
                <Image source={imagenMostrada} style={general.imagenT} />
                <View style={general.textosTem}>
                    <Text style={general.nombreTarjetaT}>{texto}</Text>
                    <Text style={general.textosTem}><Text style={{fontWeight: "bold"}}>Descripcion: </Text>{texto2}</Text>
                    <Text style={general.textosTem}><Text style={{fontWeight: "bold"}}>Duracion: </Text>{texto3}</Text>
                    <Text style={general.textosTem}><Text style={{fontWeight: "bold"}}>Fecha: </Text>{texto4} </Text>
                </View>

            </Pressable>
        </View>


    )

}

export default TarjetaTema;