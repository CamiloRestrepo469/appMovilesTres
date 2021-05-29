// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../src/screens/Login/LoginScreen'
import ListUsersScreen from '../../src/user/lista-Usuario/ListUsersScreen'
import RegistroScreen from '../src/screens/Registro/RegistroScreen'
import GaleriaScreen from '../src/screens/Galeria/GaleriaScreen'
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';

const Stack = createStackNavigator();


const navegar = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
          <Stack.Screen name="ListUsers" component={ListUsersScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default navegar;

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