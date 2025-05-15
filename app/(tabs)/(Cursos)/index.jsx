import TarjetaBanner from "@/app/(tabs)/(Cursos)/_components/TarjetaBanner";
import TarjetaCurso from "@/app/(tabs)/(Cursos)/_components/TarjetaCurso";
import TarjetaTema from "@/app/(tabs)/(Cursos)/_components/TarjetaTema";
import COrganica from "@/assets/images/COrganica.png";
import Gastro from "@/assets/images/gastro.png";
import Urbana from "@/assets/images/urbana.png";
import { obtenerCursos } from "@/services/cursos.service";
import general from "@/styles/StyleSheet";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";


function Index() {


  const [cursosDisponibles, setCursosDisponibles] = useState([])

  useEffect(() => {
    const filter = {
      "fechaInicio_gte": new Date(Date.now()).toLocaleDateString("fr-CA")
    }
    obtenerCursos(filter).then((res) => {
      setCursosDisponibles(res)
    })
  }, [])

  console.log(cursosDisponibles)

  function irCursoActual() {

    router.push("./cursoActual");

  }

  function irCursoDisponible(curso) {
    router.push({
      pathname: './cursoDisponible',
      params: {
        curso: JSON.stringify(curso)
      },
    });

  }


  return (
    <ScrollView style={general.container}>
    
      <View>
        <TarjetaBanner
          textoNom={"Curso de agricultura urbana distrital "}
          textoDur={"Duración: 10H"}
          textoMod={"Virtual"}
          TextoFec={"Próximamente"}
          imagen={Urbana}></TarjetaBanner>
      </View>

      <View style={general.contenedorOpciones}>
        <Pressable style={general.misCursos}>
          <Text>Mis cursos</Text>
        </Pressable>

        <Pressable style={general.verTodo}>
          <Text>Ver todo</Text>
        </Pressable>
      </View>

      <View>
        <TarjetaTema
          textoNom={"Gastrobotánica"}
          textoDur={"Duración: 2H restantes"}
          textoMod={"Virtual"}
          TextoFec={"Quedan 2 sesiones"}
          imagen={Gastro}
          evento={irCursoActual} ></TarjetaTema>
      </View>
      <View style={general.contenedorOpciones}>
        <Pressable style={general.todosCursos}>
          <Text>Todos los cursos</Text>
        </Pressable>

        <Pressable style={general.recientes}>
          <Text>Recientes</Text>
        </Pressable>
      </View>
      {cursosDisponibles.map(curso => (
        <TarjetaCurso
          textoNom={curso.nombre}
          textoDur={curso.duracion}
          textoMod={curso.modalidad}
          TextoFec={new Date(curso.fechaInicio).toLocaleString("es-ES", {
            month: 'long',
            day: 'numeric'
          })}
          imagen={COrganica}
          evento={() => {
            irCursoDisponible(curso)
          }}></TarjetaCurso >
      ))}


      
    </ScrollView>
  );
}


export default Index;