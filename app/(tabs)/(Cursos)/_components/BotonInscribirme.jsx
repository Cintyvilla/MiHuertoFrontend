import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

function BotonInscribirme({ TextoBtn, evento }) {

    const [texto, setTexto] = useState("Default"); //Lo que esta dentro de los parentesis es el valor por defecto 

    useEffect(function () {
        if (TextoBtn) {
            setTexto(TextoBtn);
        }
    });


    return (
        <View>
            <Pressable onPress={evento}>
                <Text>{texto}</Text>
            </Pressable>
        </View>
    )
}

export default BotonInscribirme;

/* <BotonInscribirme TextoBtn={"Aceptar"}></BotonInscribirme>  el text que va a aparecer es el que esta en comillas */