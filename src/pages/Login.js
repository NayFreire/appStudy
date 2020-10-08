import React from 'react'
import {TextInput, Text, TouchableOpacity, View, StyleSheet} from 'react-native'

export default function Login({navigation}){
    return(
        <View style={stylesLogin.container}>
            <View style={stylesLogin.formView}>
                <Text style={stylesLogin.title}>Bem-vindo novamente</Text>
                <Text style={stylesLogin.text}>Continue seus estudos agora mesmo</Text>

                <View style={stylesLogin.form}>
                    <Text style={stylesLogin.lable}>Email</Text>
                    <TextInput style={stylesLogin.input}/>

                    <Text style={stylesLogin.lable}>Senha</Text>
                    <TextInput style={stylesLogin.input}
                    secureTextEntry/>
                </View>

                <View style={stylesLogin.touchs}>
                    <TouchableOpacity
                    style={stylesLogin.createAccount}
                    onPress={() => navigation.navigate('Home')}>
                        <Text style={stylesLogin.txtCreateAccount}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const stylesLogin = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor: '#2d85ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formView:{
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 20
    },
    title:{
        textAlign: 'center',
        fontSize: 36
    },
    text:{
        margin: 10,
        textAlign: 'center',
        fontSize: 22,
        color: 'rgba(0,0,0,0.6)'
    },
    form:{
        paddingHorizontal: 20
    },
    lable:{
        margin: 10,
        fontSize: 20
    },
    input:{
        height: 45,
        padding: 5,
        fontSize: 18,
        borderRadius: 5,
        backgroundColor: '#E0F0FF'
    },
    touchs:{
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    createAccount:{
        margin: 10,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        backgroundColor: '#3CA2D6',
        borderRadius: 10
        
    },
    txtCreateAccount:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    }
  });