import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#a0b74f',
    borderRadius: 12,
    padding: 15,
    margin: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imagenContainer: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagenProgreso: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  descripcion: {
    fontSize: 14,
    marginBottom: 10,
    color: '#333',
  },
  boton: {
    backgroundColor: '#95ad2c',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default estilos;
