// Importa el módulo StyleSheet de React Native para definir estilos
import { StyleSheet } from "react-native";

// Crea un objeto de estilos reutilizables
const styles = StyleSheet.create({

  // Estilo para el contenedor principal
  container: {
    flexGrow: 1, // Permite que el contenido crezca si es necesario
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    padding: 20, // Espaciado interno
    paddingBottom: 60, // Espaciado inferior adicional
  },

  // Estilo para un encabezado con elementos distribuidos
  header: {
    flexDirection: 'row', // Elementos en fila
    justifyContent: 'space-between', // Espaciado entre los elementos
    alignItems: 'center', // Alineación vertical centrada
  },

  // Estilo para una fila de íconos
  icons: {
    flexDirection: 'row',
  },

  // Espacio entre íconos
  icon: {
    marginRight: 10,
  },

  // Título general en blanco
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },

  // Título especial para sección de cuidados (en negro)
  titleCuidados: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },

  // Texto en negrita
  bold: {
    fontWeight: 'bold',
  },

  // Subtítulo debajo del título
  subtitle: {
    fontSize: 14,
    color: '#072620',
    textAlign: 'center',
    marginBottom: 15,
  },

  // Texto asociado al progreso
  progressText: {
    color: '#fff',
    marginTop: 20,
  },

  // Barra de progreso compuesta por puntos
  progressBar: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
  },

  // Punto individual de la barra de progreso
  progressDot: {
    width: 30,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 5,
  },

  // Imagen de hoja o decorativa
  hoja: {
    width: '100%',
    height: 500,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 20,
  },

  // Estilo base para un botón
  button: {
    backgroundColor: '#F22F1D',
    height: 48,
    width: 216,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  // Texto dentro del botón
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Contenedor para scroll views
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },

  // Fondo general seguro (SafeAreaView)
  safe: {
    flex: 1,
    backgroundColor: '#8DA52B',
  },

  // Contenedor individual de filtros
  filtroContainer: {
    marginVertical: 10,
  },

  // Título de cada grupo de filtros
  filtroTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  // Fila que contiene los filtros como botones
  filtrosFila: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10, // Espacio entre ítems
  },

  // Estilo de cada ítem (opción) de filtro
  filtroItem: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',

    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 2,
  },

  // Estilo activo (seleccionado) de filtro
  filtroItemActivo: {
    backgroundColor: '#8DA52B',
    borderColor: '#a0b24c',
    color: '#fff',
  },

  // Estilo para una tarjeta de planta u objeto
  card: {
    width: "48%", // Ocupa casi la mitad horizontal
    aspectRatio: 1, // Altura igual al ancho
    backgroundColor: "white",
    marginRight: '2%',
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#8BC34A",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    position: "relative",
  },

  // Imagen que aparece dentro de una tarjeta
  image: {
    width: "100%",
    height: 130,
    borderRadius: 10,
    resizeMode: "cover",
  },

  // Texto del nombre de la planta u objeto
  name: {
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 14,
    color: "#333",
  },

  // Icono de puntos suspensivos (menú)
  dots: {
    fontSize: 20,
    color: "#C54916",
    paddingHorizontal: 5,
  },

  // Menú emergente que aparece al presionar el icono de puntos
  menu: {
    position: "absolute",
    right: 10,
    top: 35,
    backgroundColor: "white",
    borderRadius: 6,
    paddingVertical: 5,
    width: 140,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: "#ccc",
    borderWidth: 0.5,
  },

  // Cada opción dentro del menú emergente
  menuItem: {
    padding: 8,
    fontSize: 13,
    textAlign: "center",
    color: "#333",
  },

  // Separador visual entre ítems del menú
  separator: {
    height: 1,
    backgroundColor: "#eee",
    marginHorizontal: 5,
  },

  // Fila que contiene el nombre de la planta y el menú
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cddc39",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 13,
    color: "#555",
  },
  container: {
    padding: 20,

    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 6,
  },
  listItem: {
    fontSize: 14,
    marginBottom: 4,
  },

  tarjetaB: {
    backgroundColor: "#072620",
  },

  tarjeta: {
    backgroundColor: "#D9D9D9",
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    marginTop: "10px",
    borderColor: '#8DA52B',
    width: "100%",
    height: "auto",

  },
  nombreTarjeta: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contenedorHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  textos: {
    flex: 1,
    marginRight: 10,
    fontSize: 12,



  },

  imagen: {
    height: "100px",
    width: "100px",
    borderRadius: 8,
  },

  tarjetaT: {
    width: "100%",
    height: "auto",
    marginTop: "10px",
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#8DA52B',

  },
  contenedorHorizontalT: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,

  },
  nombreTarjetaT: {
    fontSize: 12,
    fontWeight: 700,
    marginLeft: "10px",

  },
  textosTem: {
    flex: 1,
    fontSize: 12,
    marginLeft: "10px",
  },

  imagenT: {
    width: 70,
    height: 70,
    borderRadius: 8,
    paddingLeft: 10,


  },

  tarjetaB: {
    width: "100%",
    height: 250,
    backgroundColor: "#072620",
    borderRadius: 20,

  },
  contenedorHorizontalB: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  nombreTarjetaB: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 10,
    color: "#FFFFFF",
    padding: 10,
  },
  textosBan: {
    flex: 1,
    marginRight: 10,
    fontSize: 16,
    color: "#FFFFFF",
    paddingLeft: 10,
    paddingBottom: 3,

  },

  imagenB: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },

  contenedorOpciones: {
    width: 450,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 250,


  },

  //CURSO ACTUAL ESTILOS 

  //Sobre el curso 
  sobreCursoCont: {
    width: "100%",

  },
  textTitle: {
    fontSize: 24,
    fontWeight: 700,
    paddingTop: 20,

  },
  textSub: {
    fontSize: 16,
    fontWeight: 450,
    paddingTop: 5,
  },
  //DetallePlanta:
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  badgesContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
  },
  badge: {
    flexDirection: "row",
    backgroundColor: "#8BC34A",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    marginLeft: 6,
    fontWeight: "500",
  },
  description: {
    fontSize: 14,
    color: "#444",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 14,
    marginLeft: 12,
    color: "#333",
  },
  infoBox: {
    backgroundColor: "#F1F8E9",
    borderRadius: 8,
    padding: 12,
    marginVertical: 16,
  },
  infoItem: {
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: "500",
    color: "#666",
  },
  infoValue: {
    fontSize: 14,
    color: "#333",
  },
  lugar: {
    borderWidth: 1,
    borderColor: "#AED581",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  lugarNombre: {
    fontWeight: "500",
    fontSize: 14,
  },
  lugarPrecio: {
    fontWeight: "600",
    fontSize: 14,
    color: "#2E7D32",
  },


  detalleHuertoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  detalleHuertoSubTitulo: {
    fontWeight: 'bold'
  },
  detalleHuertoTexto: {
    marginBottom: 10,
  },
});

// Exporta los estilos para ser usados en los componentes
export default styles;
