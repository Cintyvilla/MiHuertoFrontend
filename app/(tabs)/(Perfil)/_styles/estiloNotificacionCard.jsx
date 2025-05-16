import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imagen: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textos: {
    flex: 1,
    marginLeft: 12,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitulo: {
    fontSize: 14,
    color: '#666',
  },
  flecha: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  contenido: {
    marginTop: 12,
  },
  detalle: {
    fontSize: 14,
    color: '#444',
  },
});

export default estilos;
