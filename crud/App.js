import React from 'react'
import { StyleSheet, View, Text} from 'react-native'



export default function App() {
  
    return (
        
            <View style={estilos.container}>
               <Text>React Native!</Text>
            </View>
        
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
})
