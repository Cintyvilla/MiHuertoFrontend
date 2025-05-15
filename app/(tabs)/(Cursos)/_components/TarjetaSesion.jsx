import imagenDefault from "@/assets/images/Default.png";
import general from "@/styles/StyleSheet";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

function TarjetaSesion({ textoNom, textoDur, textoMod, TextoFec, imagen }) {
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
            <Pressable style={general.contenedorHorizontalT}>
                <Image source={imagenMostrada} style={general.imagenT} />
                <View style={general.textosTem}>
                    <Text style={general.nombreTarjetaT}>{texto}</Text>
                    <Text style={general.textosTem}>{texto2}</Text>
                    <Text style={general.textosTem}>{texto3}</Text>
                    <Text style={general.textosTem}>{texto4} </Text>
                </View>

            </Pressable>
        </View>


    )

}

export default TarjetaSesion;