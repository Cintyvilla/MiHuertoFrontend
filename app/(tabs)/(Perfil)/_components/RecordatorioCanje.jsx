import Planta from "@/assets/images/planta2.png";
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const RecordatorioCanje = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Recuerda que{"\n"}con 500 puntos{"\n"}puedes canjear{"\n"}una planta.
      </Text>
      <Image
        source={Planta} 
        style={styles.imagen}
        resizeMode="contain"
       
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#002F1E',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },

  texto: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    flex: 1,
  },
  
  imagen: {
    width: 98,
    height: 98,
    marginLeft: 20,
  },
});

export default RecordatorioCanje;
