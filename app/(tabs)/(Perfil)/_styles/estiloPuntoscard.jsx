import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // para Android
  },
  icono: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  texto: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C3B3F', // tono oscuro como en la imagen
  },
});

export default estilos;
