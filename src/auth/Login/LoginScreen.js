import React, {useState} from 'react';
import { View, Text, StatusBar, Image, TextInput, TextBase, Button, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginStyles from './LoginStyles';
import { FacebookSocialButton } from "react-native-social-buttons";
import { GoogleSocialButton } from "react-native-social-buttons";



const [email, setEmail] = useState("");
const validateEmail = () => {
    if(email === ""){
        Alert.alert('Debe llenar todos los campos');
    }
}
const LoginScreen = () => {
    return <View style={LoginStyles.container}>
        <StatusBar backgroundColor="#00c4b3"></StatusBar>
        <LinearGradient colors={['#00c4b3', '#a8acb1']} style={LoginStyles.logoContainer}>
            <Image source={require('./img/icons8-user-locked-48.png')} style={LoginStyles.logo}></Image>
            <Text style={LoginStyles.title}>Login</Text>
        </LinearGradient>
        <View style={LoginStyles.inputDataContainer}>
            <TextInput placeholder="Email" style={LoginStyles.inputData} onChangeText={(text)=>setEmail(text)}></TextInput>
            <Text>{email}</Text>
            <TextInput placeholder="Password" secureTextEntry={true} keyboardType="numeric" style={LoginStyles.inputData}></TextInput>
            <TouchableOpacity onPress={()=>validateEmail()} >
                <LinearGradient colors={['#00c4b3', '#a8acb1']} style={LoginScreen.loginButton}>
                <Text style={LoginStyles.textButton} >Login</Text>
            </LinearGradient>
            </TouchableOpacity>
            

            <Text style={LoginStyles.titleSubtitulo}>Bienvenido</Text>
            <TextInput placeholder="Ingresar" style={LoginStyles.inputDataingresar}>Ingresar</TextInput>

            <GoogleSocialButton onPress={() => {}} buttonViewStyle={LoginStyles.googleStyle} logoStyle={LoginStyles.imageIconStyleGoogle} textStyle={LoginStyles.textStyleGoogle} />
            <FacebookSocialButton onPress={() => {}} buttonViewStyle={LoginStyles.facebookStyle} logoStyle={LoginStyles.imageIconStyle} textStyle={LoginStyles.textStyle} />
            

            
            
           
        </View>
    </View>
}

export default LoginScreen;