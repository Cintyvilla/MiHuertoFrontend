import general from "@/styles/Tarjeta";
import { Text, TouchableOpacity, View } from "react-native";


function TabButtons() {
  return (
    <View style={general.containerdos}>
      <TouchableOpacity style={general.fondoboton}>
        <Text style={general.textoboton}>Intercambio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={general.fondobotondos} >
        <Text style={general.textobotonuno}>Voluntariado</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TabButtons;
