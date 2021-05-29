import React, { useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    // Alert,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RegistroStyles from './RegistroStyles';
// import { FacebookSocialButton } from "react-native-social-buttons";
// import { GoogleSocialButton } from "react-native-social-buttons";

// const { conectarBD } = require('../../../connect/database/conexion')

const RegistroScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendUser = async () => {
        // try {
        const response = await fetch('http://192.168.1.73:80/api/usuarios/registro', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        let resJson = await response.json();
        console.log(resJson);
        // const responseJson = await response.json()
        // console.log(responseJson);
        // Alert.alert("Registro guardado correctamente");

        // } catch (error) {
        //     // this.setState({ error });
        //     console.log(error)
        // }
    }

    return <View style={RegistroStyles.container}>
        <StatusBar backgroundColor="#00c4b3"></StatusBar>
        <LinearGradient colors={['#00c4b3', '#a8acb1']} style={RegistroStyles.logoContainer}>

            <Image source={require('./img/icons8-registration-64.png')} style={RegistroStyles.logo}></Image>

        </LinearGradient>
        <View style={RegistroStyles.inputDataContainer}>
            <TextInput placeholder="Email" keyboardType='email-address' style={RegistroStyles.inputData} onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput placeholder="Password" secureTextEntry={true} keyboardType="number-pad" style={RegistroStyles.inputData} onChangeText={(text) => setPassword(text)}></TextInput>
            <TextInput placeholder="Confirm Password" secureTextEntry={true} keyboardType="number-pad" style={RegistroStyles.inputData}></TextInput>

            <TouchableOpacity onPress={() => sendUser()}>
                <LinearGradient colors={['#00c4b3', '#a8acb1']} style={RegistroStyles.loginButton} >
                    <Text style={RegistroStyles.textButton}>New registration</Text>
                </LinearGradient>
            </TouchableOpacity>
            <Text style={RegistroStyles.titleSubtitulo}>Desliza tu dedo hacia la derecha</Text>

        </View>


    </View>
}

export default RegistroScreen;

//  {/* <TouchableOpacity onPress={()=>menu} style={RegistroStyles.titleSubtitulodos}>
//             <Text style={RegistroStyles.titleSubtitulodos}><Image source={require('./img/icons8-left-50.png')} style={RegistroStyles.logoFlecha}></Image>Login</Text>
//         </TouchableOpacity> */}
            // {/* <Text>{email}</Text> */}
            // {/* <Text style={RegistroStyles.title}>Registrar</Text> */}

    // const [confirPassword, setPasswordconfirmacion] = useState("");

