import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ListaUsuarios from './src/views/ListaUsuarios'
import FormUsuarios from './src/views/FormUsuarios'


const Stack = createStackNavigator()

export default function App(props) {

     return (
         <NavigationContainer>
             <Stack.Navigator initialRouteName="ListaUsuarios">
                 <Stack.Screen name="ListaUsuarios" component={ListaUsuarios} />
                 <Stack.Screen name="FormUsuarios" component={FormUsuarios} />
             </Stack.Navigator>
         </NavigationContainer>
     )
}
