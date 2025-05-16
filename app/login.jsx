import AppleLogo from "@/assets/images/apple-logo.png";
import GoogleLogo from "@/assets/images/google-logo.png";
import LoginImage from "@/assets/images/loginimagen.jpg";
import MicrosoftLogo from "@/assets/images/microsoft-logo.png";
import { useSession } from "@/providers/session.provider";
import { login } from "@/services/login.service";
import general from "@/styles/Login";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
      
 function Login() {

  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [errorLogin, setErrorLogin] = useState(false)
  const { signIn } = useSession()

  function handleLogin() {
    if (mail === "" || password === "") {
      setErrorLogin(true)
      return
    }
    setErrorLogin(false)
    login({
      "email": mail,
      "password": password
    }).then((response) => {
      signIn()
      router.push("/(tabs)/(Home)")
    }).catch((error) => {
      setErrorLogin(true)
    })
  }

  return ( //devuelve info desde está función, los elementos que queremos que se impriman

    <View
     style={general.body}>

      <Image
        source={LoginImage} 
        style={general.topImage}
          
      />

        <View style={general.containerlogin}>
      {/* Imagen decorativa superior (puede ser SVG o PNG) */}


      <Text style={general.titlelogin}>¡Bienvenido!</Text>
      <Text style={general.subtitlelogin}>Inicie sesión con su cuenta</Text>

      <View style={errorLogin ? general.inputContainerError : general.inputContainer}>
        <Icon name="email" size={20} color="#999" style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#999"
          style={general.input}
          underlineColorAndroid="transparent"
          value={mail}
          onChangeText={(text) => setMail(text)}
        />
      </View>

    <View style={errorLogin ? general.inputContainerError : general.inputContainer}>
      <Icon name="lock" size={20} color="#999" style={{ marginRight: 8 }} />
      <TextInput
        placeholder="Ingresa tu contraseña"
        secureTextEntry
        placeholderTextColor="#999"
        style={general.input}
        underlineColorAndroid="transparent"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
    </View>

    {/* Checkbox y "Olvidé mi contraseña" */}


    <View style={general.optionsContainer}>
      <View style={general.checkboxGroup}>
        <View style={general.checkboxContainer}>
          <View style={general.checkboxSquare} />
          <Text style={general.checkboxLabel}>Recuérdame</Text>
        </View>
      </View>

      <TouchableOpacity>
        <Text style={general.forgotPassword}>¿Olvidé mi contraseña?</Text>
      </TouchableOpacity>
    </View>

    {errorLogin && (
      <Text style={general.errorText}>
        El correo electrónico o la contraseña son incorrectos
      </Text>
    )}

      <TouchableOpacity style={general.loginButton} onPress={handleLogin}>
        <Text style={general.loginButtonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <Text style={general.or}>ó seguir con</Text>

      <View style={general.socialContainer}>
        <TouchableOpacity style={general.socialButton1}>
        <Image source={MicrosoftLogo} style={general.socialIcon}  />
        </TouchableOpacity>
      
        <TouchableOpacity style={general.socialButton1}> 
        <Image source={GoogleLogo} style={general.socialIcon}  />
        </TouchableOpacity>

        <TouchableOpacity style={general.socialButton1}>
        <Image source={AppleLogo} style={general.socialIcon} />
      </TouchableOpacity>
      </View>

      <Text style={general.signupText}>
        ¿No tienes cuenta?{' '}
        <Text style={general.signupLink}>Crear cuenta</Text>
      </Text>
    </View>



    </View>
  );
}

export default Login;
