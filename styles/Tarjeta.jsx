import { StyleSheet } from "react-native";

const general = StyleSheet.create({

//------tarjeta--------

 itemTarjeta:{
  display: "flex",
  flexDirection: "row",
  alignItems:"center",
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
    width: 350 ,
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

  infoTarjeta:{
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
    marginRight: 6,
  },

  flecha: {
    width: 30,
    height: 30,
    marginLeft: 10,
    alignSelf: "flex-end",
  },

//-----ventana emergente

  ventana:{
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 32,
    width: 290 ,
    borderWidth: 1,
    borderColor: "#8DA52B",
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    rowGap:12,
    overflow: "visible",
    justifyContent: "center",
    height: "auto",
  },

VentanaTitulo:{
  fontWeight: "bold",
  fontSize: 24,
  textAlign: "center",
  marginBottom: 15,
},

VentanaSubtitulo:{
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
  width: 350 ,
  alignItems: "center",
  justifyContent: 'space-between',
},

textouno:{
  color: "#616161", 
  fontSize: 16,
},

iconoselector:{
  width: 16,
  height: 16,
  marginRight: 6,
},

//------- filtro horario

  container: {
    padding: 16,
    alignItems: "flex-start",
    width: 380 
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap', // por si no cabe en una sola línea
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
    borderColor: '#8DA52B',
    marginRight: 12,
    borderRadius: 4,
  },

//----banner

  banner: {
    width: 350,
    height: 200,
    backgroundColor: "#072620",
    borderRadius: 12,
    padding: 16,
    justifyContent: 'flex-start',
    position: 'relative',
  },
  bannerText: {
    width: 280,
    fontSize: 24,
    fontWeight: 'bold',
    color: "#FFFFFF",
  },
  bannerImage: {
    width: 150,
    height: 150,
    position: 'absolute',
    bottom: 0, // 
    right: 0,  
    borderBottomRightRadius: 12,
  },

//------boton slider

  containerdos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    width: 350,
    paddingVertical: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#8DA52B",
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    marginTop: 20,
  },

  fondoboton:{
    height:56,
    width: 150,
    backgroundColor: '#8DA52B',
    borderRadius: 16,
    alignItems: 'center',   // centra horizontalmente
    justifyContent: 'center', // centra verticalmente
  },

  fondobotondos :{
    height:56,
    width: 150,
    alignItems: "center",   
    justifyContent: 'center', 
  },

  textoboton:{
    fontSize: 16,
    color: "#FFFFFF",
  },

    textobotonuno:{
    fontSize: 16,
  }


});





export default general;