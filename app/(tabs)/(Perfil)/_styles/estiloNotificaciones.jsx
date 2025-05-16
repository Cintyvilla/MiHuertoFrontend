import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  flechaVolver: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default estilos;
