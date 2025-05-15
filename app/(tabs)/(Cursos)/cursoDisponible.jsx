import TarjetaBanner from "@/app/(tabs)/(Cursos)/_components/TarjetaBanner";
import TarjetaTema from "@/app/(tabs)/(Cursos)/_components/TarjetaTema";
import ImageDefault from "@/assets/images/Default.png";
import Urbana from "@/assets/images/urbana.png";
import { obtenerTemas } from "@/services/cursos.service";
import general from "@/styles/StyleSheet";
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";


function cursoDisponible() {


    const { curso } = useLocalSearchParams();
    const cursoParsed = JSON.parse(curso)
    const [temas, setTemas] = useState([])

    useEffect(() => {
        obtenerTemas(cursoParsed._id).then((res) => {
            setTemas(res)
        })
    }, [])

    console.log(curso)

    return (
        <ScrollView style={general.container}>
        

            <View>
                <TarjetaBanner
                    textoNom={cursoParsed.nombre}
                    textoDur={cursoParsed.duracion}
                    textoMod={cursoParsed.modalidad}
                    TextoFec={new Date(cursoParsed.fechaInicio).toLocaleString("es-ES", {
                        month: 'long',
                        day: 'numeric'
                    })}
                    imagen={Urbana}></TarjetaBanner>
            </View>

            <View style={general.sobreCursoCont}>
                <Text style={general.textTitle}>Sobre el curso</Text>
                <Text>{cursoParsed.descripcion}</Text>
                <Text style={general.textTitle}>Temas del curso </Text>
            </View>

            <View>
                {temas.map((tema) => (
                    <TarjetaTema
                        textoNom={tema.nobmre}
                        textoDur={tema.duracion}
                        textoMod={tema.descripcion}
                        TextoFec={
                            new Date(tema.fecha).toLocaleString("es-ES", {
                                month: 'long',
                                day: 'numeric'
                            })
                        }
                        imagen={ImageDefault}
                    />
                ))}

            </View>

            <View style={general.sobreCursoCont}>
                <Text style={general.textTitle}>Fechas de las sesiones</Text>

            </View>

       
</ScrollView>
    );
}
export default cursoDisponible;