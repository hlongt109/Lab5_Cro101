import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Ph30891_Lab52 = () => {
    return (
        <View>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground
                source={require('../assets/image/cr7image.jpg')}
                style={st.imgBg} >
                <View style={st.containerContent}>
                    <Text style={st.title}>Discover  world with us</Text>
                    <Text style={st.introl}>Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team</Text>
                    <TouchableOpacity style={st.btn}>
                        <Pressable>
                            <Text style={st.nameBtn}>Get Started</Text>
                        </Pressable>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>
    )
}

export default Ph30891_Lab52

const st = StyleSheet.create({
    imgBg: {
        height: '100%', width: '100%',
        justifyContent: 'center',
    },
    containerContent: {
        paddingHorizontal: 30
    },
    title: {
        fontSize: 40, color: 'white', fontWeight: 'bold'
    },
    introl: {
        fontSize: 16, color: 'white'
    },
    btn: {
        backgroundColor: 'rgba(236,135,14,0.5)',
         width: 120, height: 50, borderRadius: 15,
          justifyContent: 'center', alignItems: 'center',
           borderWidth: 3, borderColor: 'white', marginTop: 20
    },
    nameBtn:{
        color: 'white', fontSize: 18, fontWeight: '600' 
    }
})