import imagenDefault from "@/assets/images/Default.png";
import general from "@/styles/StyleSheet";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

function TarjetaBanner({ textoNom, textoDur, textoMod, TextoFec, imagen }) {
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
        <View style={general.tarjetaB}>
            <Pressable style={general.contenedorHorizontalB}>
                <View style={general.textosBan}>
                    <Text style={general.nombreTarjetaB}>{textoNom}</Text>
                    <Text style={general.textosBan}><Text style={{fontWeight: "bold"}}>Duracion:</Text> {textoDur}</Text>
                    <Text style={general.textosBan}><Text style={{fontWeight: "bold"}}>Modalidad:</Text> {textoMod}</Text>
                    <Text style={general.textosBan}><Text style={{fontWeight: "bold"}}>Inicia el:</Text> {TextoFec} </Text>
                </View>
                <Image source={imagenMostrada} style={general.imagenB} />
            </Pressable>
        </View>


    )

}



export default TarjetaBanner;