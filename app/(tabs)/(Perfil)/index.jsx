import OpcionesUsuario from "@/app/(tabs)/(Perfil)/_components/OpcionesUsuario";
import Participaciones from "@/app/(tabs)/(Perfil)/_components/participaciones";
import PerfilUsuario from "@/app/(tabs)/(Perfil)/_components/PerfilUsuario";
import PuntosCard from "@/app/(tabs)/(Perfil)/_components/puntoscard";
import TarjetaPuntos from "@/app/(tabs)/(Perfil)/_components/TarjetaPuntos";
import { View } from "react-native";

 function Index() {
  return (
    <View>
      <PerfilUsuario> </PerfilUsuario>
      <OpcionesUsuario></OpcionesUsuario>
      <TarjetaPuntos></TarjetaPuntos>
      <PuntosCard></PuntosCard>
      <Participaciones></Participaciones>
    </View>
  );
}
export default Index; 