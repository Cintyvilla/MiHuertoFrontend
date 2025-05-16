import Banner from "@/app/(tabs)/(Participa)/_components/Banner";
import Horario from "@/app/(tabs)/(Participa)/_components/Horario";
import TabButtons from "@/app/(tabs)/(Participa)/_components/TabButtons";
import TarjetaParticipar from "@/app/(tabs)/(Participa)/_components/TarjetaParticipar";
import general from "@/styles/StyleSheet";
import { SafeAreaView, ScrollView } from "react-native";

function Index() {

  //aca van variables, if, validaciones

  return ( //devuelve info desde está función, los elementos que queremos que se impriman
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#8DA52B' }} />
      <ScrollView style={general.container}>

        <TabButtons> </TabButtons>
        <Banner> </Banner>
        <Horario> </Horario>
        <TarjetaParticipar> </TarjetaParticipar>
        <TarjetaParticipar> </TarjetaParticipar>
        <TarjetaParticipar> </TarjetaParticipar>
        <TarjetaParticipar> </TarjetaParticipar>


      </ScrollView>
    </>
  );
}

export default Index;
