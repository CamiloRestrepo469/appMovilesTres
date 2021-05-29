// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../src/screens/Login/LoginScreen'
import RegistroScreen from '../src/screens/Registro/RegistroScreen'
import GaleriaScreen from '../src/screens/Galeria/GaleriaScreen'
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Login" component={LoginScreen} onPress={(props) => { props.navigation.navigate('Login') }} />
                <Drawer.Screen name="Registrarse" component={RegistroScreen} onPress={(props) => { props.navigation.navigate('Registrarse') }} />
                <Drawer.Screen name="Galeria" component={GaleriaScreen} onPress={(props) => { props.navigation.navigate('Galeria') }} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}

export default MyDrawer;




// function HomeScreen() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text style={{ fontSize: 50 }}>Home Screen</Text>
//             {/* <MyButton props={props} /> */}
            
//         </View>
//     );
// }
// function PerfilScreen() {
//     return (

//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <LinearGradient colors={['#00c4b3', '#a8acb1']}>

//                 <Text style={{ fontSize: 20 }}>


//                     Perfil Screen</Text>

//             </LinearGradient>

//         </View>
//     );
// }

// const Stack = createStackNavigator();

// function MyDrawer() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Perfil" component={PerfilScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }