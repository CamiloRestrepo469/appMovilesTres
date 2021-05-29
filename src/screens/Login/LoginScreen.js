import React, { useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    Alert,
    TouchableOpacity,
    setState
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginStyles from './LoginStyles';
import { FacebookSocialButton } from "react-native-social-buttons";
import { GoogleSocialButton } from "react-native-social-buttons";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';



const LoginScreen = ({ navigation }) => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const validateFacebook = () => {

        Alert.alert("Puede ingresar por el facebook");

    }
    const validateGoogle = () => {

        Alert.alert("Pude ingresar por el Google");

    }
    const sendUser = async () => {
        try {
            if (email == "" || password == "") {
                Alert.alert("Debe llenar todos los campos");
            } else {
                const response = await fetch('https://reqres.in/api/login', {
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
                const responseJson = await response.json();
                console.log(responseJson);
                Alert.alert("bienvenido ");
            }
        } catch (error) {
            this.setState({ error });
        }


    }
    const getUser = async () => {
        const response = await fetch('https://reqres.in/api/users/2')
        const responseJson = await response.json();
        console.log(responseJson);
        navigation.navigate("ListUsers");
    }
    return <View style={LoginStyles.container}>
        <StatusBar backgroundColor="#00c4b3"></StatusBar>
        <LinearGradient colors={['#00c4b3', '#a8acb1']} style={LoginStyles.logoContainer}>


            <Image source={require('./img/icons8-user-locked-48.png')} style={LoginStyles.logo}></Image>
            <Text style={LoginStyles.title}>Login</Text>
        </LinearGradient>
        <View style={LoginStyles.inputDataContainer}>
            <TextInput placeholder="Email" keyboardType='email-address' style={LoginStyles.inputData} onChangeText={(text) => setemail(text)}></TextInput>
            <Text></Text>
            <TextInput placeholder="Password" secureTextEntry={true} style={LoginStyles.inputData} onChangeText={(text) => setpassword(text)}></TextInput>
            <TouchableOpacity onPress={() => sendUser()}>
                <LinearGradient colors={['#00c4b3', '#a8acb1']} style={LoginStyles.loginButton} >
                    <Text style={LoginStyles.textButton}>Login</Text>
                </LinearGradient>
            </TouchableOpacity>

            <Text style={LoginStyles.titleSubtitulo}>Desliza tu dedo hacia la derecha</Text>




        </View>
    </View>
}

export default LoginScreen;