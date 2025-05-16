import general from "@/styles/Tarjeta";
import { Text, TouchableOpacity, View } from "react-native";

function Horario (){

    return(
    <View style={general.container}>
      <View style={general.row}>
        <Text style={general.label}>Horario: </Text>
        <TouchableOpacity style={general.box} />

        <Text style={general.labeldos}>Mañana</Text>
        <TouchableOpacity style={general.box} />

        <Text style={general.labeldos}>Tarde</Text>
      </View>
    </View>

  );
}

export default Horario;