import { StyleSheet } from "react-native";

const general = StyleSheet.create({
  errorText: {
    color: "#FF0000",
    fontSize: 14,
    marginBottom: 15,
    textAlign: "center",
  },
  //------tarjeta--------

  itemTarjeta: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  tarjeta: {
    marginTop: 20,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#8DA52B",
    borderRadius: 16,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    width: 350,
  },

  contenedorTarjeta: {
    flexDirection: "row",
    alignItems: "center",
  },

  imagenTarjeta: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 16,
  },

  infoTarjeta: {
    flex: 1,
    flexDirection: "column",
  },

  itemTarjeta: {
    flexDirection: "row",
    alignItems: "center",
  },

  titulo: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },

  subtitulo: {
    fontWeight: "medium",
    fontSize: 16,
    marginBottom: 8,
  },

  icono: {
    width: 16,
    height: 16,
    marginRight: 6,
  },

  flecha: {
    width: 30,
    height: 30,
    marginLeft: 10,
    alignSelf: "flex-end",
  },

  //-----ventana emergente

  ventana: {
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 32,
    width: 290,
    borderWidth: 1,
    borderColor: "#8DA52B",
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: 12,
    overflow: "visible",
    justifyContent: "center",
    height: "auto",
  },

  VentanaTitulo: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 15,
  },

  VentanaSubtitulo: {
    textAlign: "center",
    marginTop: 10,
  },

  imagenVentana: {
    maxWidth: 180,
    maxHeight: 180,
    resizeMode: "contain",
    marginBottom: 10,
  },

  //------- filtro
  selector: {
    marginTop: 20,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#989898",
    borderRadius: 8,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    width: 350,
    alignItems: "center",
    justifyContent: "space-between",
  },

  textouno: {
    color: "#616161",
    fontSize: 16,
  },

  iconoselector: {
    width: 16,
    height: 16,
    marginRight: 6,
  },

  //------- filtro horario

  container: {
    padding: 16,
    alignItems: "flex-start",
    width: 380,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap", // por si no cabe en una sola línea
  },

  label: {
    fontSize: 16,
    marginRight: 4,
    fontWeight: "bold",
  },

  labeldos: {
    fontSize: 16,
    marginRight: 4,
  },

  box: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#8DA52B",
    marginRight: 12,
    borderRadius: 4,
  },

  //----banner

  banner: {
    width: 350,
    height: 200,
    backgroundColor: "#072620",
    borderRadius: 16,
    overflow: "hidden", // Asegura que nada se salga del borde
    position: "relative",
    padding: 0,
  },
  bannerText: {
    width: 280,
    fontSize: 22,
    fontWeight: "medium",
    color: "#FFFFFF",
    padding: 16,
  },

  bannerImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
    resizeMode: "contain",
  },
  //------boton slider

  containerdos: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    width: 350,
    paddingVertical: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#8DA52B",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    marginTop: 20,
  },

  fondoboton: {
    height: 56,
    width: 150,
    backgroundColor: "#8DA52B",
    borderRadius: 16,
    alignItems: "center", // centra horizontalmente
    justifyContent: "center", // centra verticalmente
  },

  fondobotondos: {
    height: 56,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },

  textoboton: {
    fontSize: 16,
    color: "#FFFFFF",
  },

  textobotonuno: {
    fontSize: 16,
  },

  //-------generalidades

  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    margin: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: 350,
  },

  sectionRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginHorizontal: 10,
    marginBottom: 14,
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
    marginTop: 3,
    resizeMode: "contain",
  },

  sectionText: {
    flex: 1,
    flexDirection: "column",
  },

  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 2,
  },

  sectionContent: {
    fontSize: 16,
    color: "#333",
  },

  questionMarkText: {
    backgroundColor: "#8DA52B",
    color: "#FFFFFF",
    borderRadius: 10,
    overflow: "hidden",
    paddingHorizontal: 4,
    marginLeft: 5,
    fontSize: 12,
    fontWeight: "bold",
  },

  link: {
    color: "#d35400",
    textDecorationLine: "underline",
  },

  dudasContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    flexWrap: "wrap",
  },

  dudasIcon: {
    backgroundColor: "#cddc39", // verde oliva claro
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  dudasIconText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },

  dudasText: {
    fontSize: 14,
    color: "#333",
  },

  dudasLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#000",
  },

  dudasContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    flexWrap: "wrap",
  },

  dudasIcon: {
    backgroundColor: "#cddc39", // verde oliva claro
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  dudasIconText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },

  dudasText: {
    fontSize: 14,
    color: "#333",
  },

  dudasLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#000",
  },

  //-----tarjeta home

  card1: {
    flexDirection: "row",
    alignItems: "center",
    elevation: 4,
    marginVertical: 8,
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 1, // grosor del borde
    borderColor: "#8DA52B",
    padding: 10,
    width: 350,
    height: 140,
  },
  icono2: {
    width: 32,
    height: 32,
    marginRight: 10,
    resizeMode: "contain",
    color: "#8DA52B",
  },
  textContainer1: {
    flex: 1,
  },
  titulo3: {
    fontWeight: "bold",
    fontSize: 19,
    color: "#222",
  },
  subtitulo3: {
    fontSize: 19,
    color: "#555",
  },
  flecha1: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },

  titulohome: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
    textAlign: "left",
    width: 350,
    marginBlock: 10,
  },

  //---bienvenida

  containerhome: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 19,
    width: 350,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  saludo: {
    fontSize: 14,
    color: "#555",
  },

  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },

  notificacion: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },

  // bienvenida login

  containerbienvenida: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 10,
  },
  titlebienvenida: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "mediun",
    marginBottom: 80,
  },
  createButton: {
    backgroundColor: "#8CA641", // verde oliva
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 8,
    marginBottom: 20,
  },
  createButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginButton: {
    borderColor: "#8CA641",
    borderWidth: 2,
    paddingVertical: 13,
    paddingHorizontal: 60,
    borderRadius: 8,
  },
  loginButtonText: {
    color: "#8CA641",
    fontSize: 16,
    fontWeight: "bold",
  },

  //-----login

  topImage: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    marginBottom: 60,
  },

  titlelogin: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitlelogin: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 60,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    width: 300,
  },

  inputContainerError: { 
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#FF0000",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    width: 300,
  },

  input: {
    flex: 1,
    height: 40,
    color: "#000",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderWidth: 0,
    borderRadius: 8,
  },

  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
    width: 300,
    marginBottom: 60,
  },

  checkboxGroup: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkboxSquare: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: "#8CA641",
    borderRadius: 4,
    marginRight: 8,
  },

  checkboxLabel: {
    fontSize: 14,
    color: "#333",
  },

  forgotPassword: {
    fontSize: 14,
    color: "#000",
    textDecorationLine: "underline",
    fontWeight: "mediun",
  },

  loginButton: {
    backgroundColor: "#8CA641",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
    width: "80%", // ancho relativo al contenedor
    alignSelf: "center", // centra el botón horizontalmente
    marginBottom: 30,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  or: {
    textAlign: "center",
    color: "#999",
    marginBottom: 20,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 30,
  },

  socialIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  socialButton1: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  signupText: {
    textAlign: "center",
    fontSize: 13,
    color: "#666",
    marginBottom: 20,
  },
  signupLink: {
    color: "#4E7329",
    fontWeight: "bold",
  },

  containerlogin: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default general;
