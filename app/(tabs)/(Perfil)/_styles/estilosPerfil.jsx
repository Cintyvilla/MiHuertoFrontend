import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  encabezado: {
    backgroundColor: '#002d26',
    width: '100%',
    height: 180,
    borderBottomLeftRadius: 180,
    borderBottomRightRadius: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botonDerecha: {
    position: 'absolute',
    top: "20%",     // Igual que la flecha para alineación vertical
    right: "5%",
  },

  icono: {
    color: 'white',
    fontSize: 55,
  },
  circuloImagen: {
    marginTop: -60,
    backgroundColor: '#fff',
    borderRadius: 100,
    padding: 5,
  },
  imagenPerfil: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
  nombre: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  rol: {
    fontSize: 14,
    color: '#555',
  },

  iconoImagen: {
    width: 32,   // más grande y claro
    height: 32,
    resizeMode: 'contain',
  },
}
);

export default estilos;
