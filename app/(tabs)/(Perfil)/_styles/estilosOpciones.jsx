import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  contenedor: {
    padding: 20,
    alignItems: 'center',
     backgroundColor: '#fff', // ← esto asegura fondo blanco
     padding: 20,
  },
  filaOpciones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  boton: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#7ea03c',
    borderRadius: 10,
    padding: 10,
    width: 90,
  },
  icono: {
    width: 30,
    height: 30,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  textoBoton: {
    fontWeight: '600',
  },
  descripcion: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
});

export default estilos;
