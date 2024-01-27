import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Ph30891_Lab53 = () => {
    return (
        <View style={st.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <View style={st.header}>
                <ImageBackground style={{ height: '100%' }} source={require('../assets/image/hoian.jpg')}>
                    <View style={st.viewHeader}>
                        <View style={st.rowHeader}>
                            <Ionicon name="arrow-back" size={24} color='white' />
                            <Ionicon name="ellipsis-vertical" size={24} color='white' />
                        </View>

                        <View style={st.rowHeader}>
                            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>PHỐ CỔ HỘI AN</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicon name='star' size={20} color={'orange'} />
                                <Text style={{ color: 'white', paddingLeft: 5 }}>5.0</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

            </View>

            <View style={st.body}>
                <View style={st.heart}>
                    <Icon name='heart' size={25} color="red" />
                </View>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                        <Icon name='map-marker-outline' size={24} color="#00008B" />
                        <Text style={{ fontSize: 20, color: "#00008B", marginLeft: 7, fontWeight: 'bold' }}>Quảng Nam</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 20, color: "black", fontWeight: 'bold', marginBottom: 10 }}>Thông tin chuyến đi</Text>
                    <Text style={{ fontSize: 16, color: "gray", textAlign: 'justify' }}>Hội An is a city on Vietnam’s central coast known for its well-preserved Ancient Town, cut through with canals. The former port city’s melting-pot history is reflected in its architecture, a mix of eras and styles from wooden Chinese shophouses and temples to colorful French colonial buildings, ornate Vietnamese tube houses and the iconic Japanese Covered Bridge with its pagoda</Text>
                </View>
            </View>

            <View style={st.footer}>
                <View style={st.containerPrice}>
                    <Text style={st.txtPrice}>$100 </Text>
                    <Text style={st.txtNgay}>/ ngày</Text>
                </View>
                <View>
                    <TouchableOpacity style={st.btn}>
                        <Pressable>
                            <Text style={st.txtBtn}>Đặt ngay</Text>
                        </Pressable>
                    </TouchableOpacity>
                </View>
            </View>
        </View>


    )
}

export default Ph30891_Lab53

const st = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 7,
    },
    body: {
        flex: 3,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
        paddingHorizontal: 10,
        paddingVertical: 30
    },
    footer: {
        height: 60,
        backgroundColor: '#184785',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    containerPrice: {
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'white',
        height: '100%',
        paddingHorizontal: 20,
        borderRadius: 15,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtBtn: {
        color: '#184785',
        fontWeight: 'bold',
        fontSize: 16
    },
    txtPrice: {
        color: 'white',
        fontSize: 18
    },
    txtNgay: {
        color: 'white',
        fontSize: 14
    },
    viewHeader: {
        paddingHorizontal: 20,
        paddingVertical: 40,
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
    },
    rowHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heart: {
        padding: 10,
        backgroundColor: 'white',
        alignItems: 'center', justifyContent: 'center',
        width: 50, height: 50, borderRadius: 25,
        position: 'absolute',
        top: -25, right: 20,
        shadowColor:'black',
        shadowOffset:{width: 0,height:2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3
    }
})