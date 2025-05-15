import TarjetaBanner from "@/app/(tabs)/(Cursos)/_components/TarjetaBanner";
import TarjetaTema from "@/app/(tabs)/(Cursos)/_components/TarjetaTema";
import Gastro from "@/assets/images/gastro.png";
import general from "@/styles/StyleSheet";
import { Text, View } from "react-native";

function cursoActual() {
    return (
        <View style={general.body}>

            <View>
                <TarjetaBanner textoNom={"Gastrobotánica "} textoDur={"Quedan 2 sesiones Duración: 2H restantes"} textoMod={"Impartido por:Jazmín Florez"} TextoFec={"Inició el 2 de abril "} imagen={Gastro}></TarjetaBanner>
            </View>

            <View style={general.sobreCursoCont}>
                <Text style={general.textTitle}>Sobre el curso</Text>
                <Text>La gastrobotánica es una disciplina que fusiona dos campos del conocimiento humano, gastronomía y botánica para unirlos en un concepto cuyo resultado beneficia a ambos.</Text>
                <Text style={general.textSub}>Duración: 8 Horas</Text>
                <Text style={general.textSub}>Modalidad: Virtual</Text>
                <Text style={general.textTitle}>Temas del curso </Text>
            </View>

            <View>
                <TarjetaTema textoNom={"Introducción a la gastrobotánica"} textoDur={"Enlace de conexión: *********"} textoMod={"Presentación"} TextoFec={"Video de la sesión"} imagen={Gastro}></TarjetaTema>
            </View>

            <View>
                <TarjetaTema textoNom={"Introducción a la gastrobotánica"} textoDur={"Enlace de conexión: *********"} textoMod={"Presentación"} TextoFec={"Video de la sesión"} imagen={Gastro}></TarjetaTema>
            </View>

            <View>
                <TarjetaTema textoNom={"Introducción a la gastrobotánica"} textoDur={"Enlace de conexión: *********"} textoMod={"Presentación"} TextoFec={"Video de la sesión"} imagen={Gastro}></TarjetaTema>
            </View>

        </View>

    );
}
export default cursoActual;