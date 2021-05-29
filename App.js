import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/Login/LoginScreen'
import RegistroScreen from './src/screens/Registro/RegistroScreen'
import GaleriaScreen from './src/screens/Galeria/GaleriaScreen'
import MyDrawer from './MyDrawer'
// import navegar from './src/navi/index'




const App = () => {
  return (
    <MyDrawer/>
    // <navegar/>
   
   
  )


}


export default App;
