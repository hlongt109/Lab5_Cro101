import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ph30891_Lab51 = () => {
    return (
        <SafeAreaView>
            <View style={st.container}> 
            <Text style={st.title}>Faded</Text>
            <Text style={st.fonts}>You were the shadow to my life
                Did you feel us
                Another start
                You fade away
                Afraid our aim is out of sight
                Wanna see us
                Alive
                Where are you now
                Where are you now
                Where are you now
                Was it all in my fantasy
                Where are you now
                Were you only imaginary
                Where are you now</Text>
            </View>
        </SafeAreaView>
    )
}

export default ph30891_Lab51

const st = StyleSheet.create({
    container:{
        backgroundColor: "#ffffff",
        justifyContent:'center',
        alignItems:'center',
        padding: 15,
    },
    fonts: {
        fontFamily: 'Gruppo-Regular',
        fontSize: 16,
        padding: 10,
        color: 'black',
        fontWeight: 'bold',
        lineHeight: 24 ,
        textAlign: 'justify'
       },
    title: {
        fontFamily: 'SingleDay-Regular',
        fontSize: 24,
        fontWeight: '600',
        paddingVertical: 10
    }
})